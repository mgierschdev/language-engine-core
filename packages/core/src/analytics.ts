import type {
  AttemptEvent,
  CEFRLevel,
  ErrorCategory,
  ErrorTrend,
  PlacementResult,
  ProgressStats,
  RuleDefinition,
  RuleId,
  UserRuleState,
} from "./index";

const cefrLevels: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

const levelRank = (level: CEFRLevel): number => {
  const index = cefrLevels.indexOf(level);
  return index === -1 ? 0 : index + 1;
};

/**
 * Compute error trends by category from attempt history
 */
export const computeErrorTrends = (
  attempts: AttemptEvent[],
  rules: RuleDefinition[]
): ErrorTrend[] => {
  const ruleMap = new Map(rules.map((r) => [r.ruleId, r]));
  const categoryStats = new Map<
    ErrorCategory,
    { errorCount: number; totalAttempts: number; recentErrors: number; recentTotal: number }
  >();

  const recentThreshold = Date.now() - 7 * 24 * 60 * 60 * 1000; // Last 7 days

  for (const attempt of attempts) {
    for (const ruleId of attempt.ruleIds) {
      const rule = ruleMap.get(ruleId);
      const category = rule?.errorCategory ?? "other";

      const stats = categoryStats.get(category) ?? {
        errorCount: 0,
        totalAttempts: 0,
        recentErrors: 0,
        recentTotal: 0,
      };

      stats.totalAttempts += 1;
      if (attempt.failedRuleIds.includes(ruleId)) {
        stats.errorCount += 1;
      }

      if (attempt.timestamp >= recentThreshold) {
        stats.recentTotal += 1;
        if (attempt.failedRuleIds.includes(ruleId)) {
          stats.recentErrors += 1;
        }
      }

      categoryStats.set(category, stats);
    }
  }

  const trends: ErrorTrend[] = [];
  for (const [category, stats] of categoryStats) {
    const errorRate = stats.totalAttempts > 0 ? stats.errorCount / stats.totalAttempts : 0;

    // Compare recent error rate vs overall error rate
    const recentErrorRate = stats.recentTotal > 0 ? stats.recentErrors / stats.recentTotal : 0;
    const improvementRate = errorRate - recentErrorRate; // Positive means improving

    trends.push({
      category,
      errorCount: stats.errorCount,
      totalAttempts: stats.totalAttempts,
      errorRate,
      recentErrors: stats.recentErrors,
      improvementRate,
    });
  }

  return trends.sort((a, b) => b.errorRate - a.errorRate);
};

/**
 * Estimate user's CEFR level based on mastery of rules at different levels
 */
export const estimateCEFRLevel = (
  ruleStates: UserRuleState[],
  rules: RuleDefinition[]
): CEFRLevel => {
  const ruleMap = new Map(rules.map((r) => [r.ruleId, r]));
  const masteryByLevel = new Map<CEFRLevel, { total: number; mastered: number }>();

  for (const state of ruleStates) {
    const rule = ruleMap.get(state.ruleId);
    const level = rule?.cefrLevel ?? "A1";

    const stats = masteryByLevel.get(level) ?? { total: 0, mastered: 0 };
    stats.total += 1;
    if (state.mastery >= 0.7) {
      stats.mastered += 1;
    }
    masteryByLevel.set(level, stats);
  }

  // Find highest level where user has mastered at least 60% of rules
  let estimatedLevel: CEFRLevel = "A1";
  for (const level of cefrLevels) {
    const stats = masteryByLevel.get(level);
    if (!stats || stats.total === 0) {
      continue;
    }
    const masteryRate = stats.mastered / stats.total;
    if (masteryRate >= 0.6) {
      estimatedLevel = level;
    }
  }

  return estimatedLevel;
};

/**
 * Compute comprehensive progress statistics
 */
export const computeProgressStats = (
  userId: string,
  attempts: AttemptEvent[],
  ruleStates: UserRuleState[],
  rules: RuleDefinition[]
): ProgressStats => {
  const totalAttempts = attempts.length;
  const correctAttempts = attempts.filter((a) => a.isCorrect).length;
  const accuracyRate = totalAttempts > 0 ? correctAttempts / totalAttempts : 0;

  const masteredRules: RuleId[] = [];
  const weakRules: RuleId[] = [];

  for (const state of ruleStates) {
    if (state.mastery >= 0.8) {
      masteredRules.push(state.ruleId);
    } else if (state.mastery < 0.4) {
      weakRules.push(state.ruleId);
    }
  }

  const errorTrends = computeErrorTrends(attempts, rules);
  const estimatedCEFRLevel = estimateCEFRLevel(ruleStates, rules);

  return {
    userId,
    totalAttempts,
    correctAttempts,
    accuracyRate,
    masteredRules,
    weakRules,
    estimatedCEFRLevel,
    errorTrends,
  };
};

/**
 * Analyze diagnostic test results to place user at appropriate level
 */
export const analyzeDiagnosticResults = (
  attempts: AttemptEvent[],
  rules: RuleDefinition[]
): PlacementResult => {
  const ruleMap = new Map(rules.map((r) => [r.ruleId, r]));
  const categoryScores = new Map<ErrorCategory, { correct: number; total: number }>();
  const levelScores = new Map<CEFRLevel, { correct: number; total: number }>();

  for (const attempt of attempts) {
    for (const ruleId of attempt.ruleIds) {
      const rule = ruleMap.get(ruleId);
      if (!rule) continue;

      const category = rule.errorCategory ?? "other";
      const level = rule.cefrLevel ?? "A1";

      const catStats = categoryScores.get(category) ?? { correct: 0, total: 0 };
      const levelStats = levelScores.get(level) ?? { correct: 0, total: 0 };

      catStats.total += 1;
      levelStats.total += 1;

      if (!attempt.failedRuleIds.includes(ruleId)) {
        catStats.correct += 1;
        levelStats.correct += 1;
      }

      categoryScores.set(category, catStats);
      levelScores.set(level, levelStats);
    }
  }

  // Compute strengths by category
  const strengthsByCategory: Record<ErrorCategory, number> = {} as Record<ErrorCategory, number>;
  for (const [category, stats] of categoryScores) {
    strengthsByCategory[category] = stats.total > 0 ? stats.correct / stats.total : 0;
  }

  // Estimate level based on highest level with >70% accuracy
  let estimatedLevel: CEFRLevel = "A1";
  let confidence = 0;

  for (const level of cefrLevels) {
    const stats = levelScores.get(level);
    if (!stats || stats.total === 0) {
      continue;
    }
    const accuracy = stats.correct / stats.total;
    if (accuracy >= 0.7) {
      estimatedLevel = level;
      confidence = Math.max(confidence, accuracy);
    }
  }

  // Recommend starting one level below estimated if not confident
  const recommendedStartLevel =
    confidence < 0.8 && levelRank(estimatedLevel) > 1
      ? cefrLevels[levelRank(estimatedLevel) - 2]
      : estimatedLevel;

  return {
    estimatedLevel,
    confidence,
    strengthsByCategory,
    recommendedStartLevel,
  };
};
