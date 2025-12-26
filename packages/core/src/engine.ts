import type {
  AttemptEvent,
  Engine,
  EngineConfig,
  EngineDependencies,
  Exercise,
  ExerciseSelection,
  RuleDefinition,
  RuleEvaluator,
  RuleEvaluationResult,
  RuleId,
  UserProfile,
  UserRuleState,
} from "./index";

const buildRuleMap = (rules: RuleDefinition[]): Map<RuleId, RuleDefinition> => {
  return new Map(rules.map((rule) => [rule.ruleId, rule]));
};

const getDefaultState = (ruleId: RuleId, config: EngineConfig): UserRuleState => {
  return {
    ruleId,
    mastery: config.mastery.initialMastery,
    lastSeen: null,
    decayHalfLifeDays: config.mastery.decayHalfLifeDays,
    volatility: config.mastery.defaultVolatility,
  };
};

const getRuleStates = (
  ruleIds: RuleId[],
  profile: UserProfile,
  deps: EngineDependencies,
  config: EngineConfig
): Record<RuleId, UserRuleState> => {
  const states: Record<RuleId, UserRuleState> = {};
  for (const ruleId of ruleIds) {
    states[ruleId] = deps.userState.getRuleState(profile.userId, ruleId) ??
      getDefaultState(ruleId, config);
  }
  return states;
};

const getEvaluators = (
  ruleIds: RuleId[],
  deps: EngineDependencies
): Map<RuleId, RuleEvaluator> => {
  const evaluators = deps.evaluators.getEvaluators(ruleIds);
  return new Map(evaluators.map((evaluator) => [evaluator.ruleId, evaluator]));
};

const evaluateRules = (
  evaluators: Map<RuleId, RuleEvaluator>,
  exercise: Exercise,
  userAnswer: string
): RuleEvaluationResult[] => {
  return exercise.ruleIds.map((ruleId) => {
    const evaluator = evaluators.get(ruleId);
    if (!evaluator) {
      throw new Error(`Missing evaluator for rule: ${ruleId}`);
    }
    return evaluator.evaluate(
      {
        exerciseId: exercise.id,
        ruleIds: exercise.ruleIds,
        promptText: exercise.promptText,
        correctAnswer: exercise.cloze.answer,
      },
      userAnswer
    );
  });
};

const buildAttemptEvent = (
  profile: UserProfile,
  exercise: Exercise,
  userAnswer: string,
  responseTimeMs: number,
  isCorrect: boolean,
  failedRuleIds: RuleId[],
  now: number
): AttemptEvent => {
  return {
    userId: profile.userId,
    exerciseId: exercise.id,
    timestamp: now,
    language: exercise.language,
    ruleIds: exercise.ruleIds,
    failedRuleIds,
    difficulty: exercise.difficulty,
    promptText: exercise.promptText,
    correctAnswer: exercise.cloze.answer,
    userAnswer,
    isCorrect,
    responseTimeMs,
  };
};

export const createEngine = (
  deps: EngineDependencies,
  config: EngineConfig
): Engine => {
  const ruleMap = buildRuleMap(deps.rules.getAll());

  const selectNextExercise = (profile: UserProfile): ExerciseSelection | null => {
    const now = config.scheduler.now();
    const exercises = deps.exercises.getAll();
    const filtered = config.exerciseFilter
      ? exercises.filter((exercise) => config.exerciseFilter!(exercise, profile))
      : exercises;

    if (filtered.length === 0) {
      return null;
    }

    let best: ExerciseSelection | null = null;

    for (const exercise of filtered) {
      const ruleDefinitions = exercise.ruleIds
        .map((ruleId) => ruleMap.get(ruleId))
        .filter((rule): rule is RuleDefinition => Boolean(rule));
      const ruleStates = getRuleStates(exercise.ruleIds, profile, deps, config);
      const priorityScore = config.computePriority({
        exercise,
        ruleDefinitions,
        ruleStates,
        scheduler: config.scheduler,
        now,
      });

      if (!best || priorityScore > best.priorityScore) {
        best = { exercise, priorityScore };
      } else if (best && priorityScore === best.priorityScore) {
        if (exercise.id < best.exercise.id) {
          best = { exercise, priorityScore };
        }
      }
    }

    return best;
  };

  const submitAttempt = (
    profile: UserProfile,
    exercise: Exercise,
    userAnswer: string,
    responseTimeMs: number
  ): AttemptEvent => {
    const now = config.scheduler.now();
    const evaluators = getEvaluators(exercise.ruleIds, deps);
    const results = evaluateRules(evaluators, exercise, userAnswer);
    const failedRuleIds = results.flatMap((result) => result.failedRuleIds);
    const isCorrect = failedRuleIds.length === 0;
    const event = buildAttemptEvent(
      profile,
      exercise,
      userAnswer,
      responseTimeMs,
      isCorrect,
      failedRuleIds,
      now
    );

    deps.attempts.append(event);

    for (const ruleId of exercise.ruleIds) {
      const state = deps.userState.getRuleState(profile.userId, ruleId) ??
        getDefaultState(ruleId, config);
      const updated = config.updateMastery({
        state,
        isCorrect: !failedRuleIds.includes(ruleId),
        now,
        mastery: config.mastery,
      });
      deps.userState.upsertRuleState(profile.userId, updated);
    }

    return event;
  };

  return { selectNextExercise, submitAttempt };
};
