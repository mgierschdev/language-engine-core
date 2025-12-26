import {
  createEngine,
  defaultMasteryUpdate,
  defaultPriority,
  type Engine,
  type EngineConfig,
  type Exercise,
  type RuleRepository,
  type ExerciseRepository,
  type AttemptLogRepository,
  type UserProfile,
  type UserRuleState
} from "@le/core";
import { deExercises, deVocabulary } from "@le/content";
import { createDeRuleEvaluatorRegistry, deRules } from "@le/plugin-de";

const levelRank = (level: string): number => {
  switch (level.toUpperCase()) {
    case "A1":
      return 1;
    case "A2":
      return 2;
    case "B1":
      return 3;
    case "B2":
      return 4;
    case "C1":
      return 5;
    case "C2":
      return 6;
    default:
      return 0;
  }
};

const highestLevel = (levels: string[]): string => {
  if (levels.length === 0) {
    return "A1";
  }
  return levels.reduce((best, current) => (
    levelRank(current) > levelRank(best) ? current : best
  ), levels[0]);
};

const vocabMinLevelMap = new Map(
  deVocabulary.map((item) => [item.lemma, item.minimumLevel])
);

const exerciseFilter = (exercise: Exercise, profile: UserProfile): boolean => {
  if (exercise.language !== "de") {
    return false;
  }
  const selectedLevels = profile.selectedLevels && profile.selectedLevels.length > 0
    ? profile.selectedLevels
    : [profile.level];
  if (!selectedLevels.includes(exercise.level)) {
    return false;
  }
  if (!exercise.vocabulary || exercise.vocabulary.length === 0) {
    return true;
  }
  const userRank = levelRank(highestLevel(selectedLevels));
  return exercise.vocabulary.every((lemma) => {
    const minLevel = vocabMinLevelMap.get(lemma);
    return minLevel ? levelRank(minLevel) <= userRank : true;
  });
};

export const createInMemoryExerciseRepository = (): ExerciseRepository => ({
  getAll: () => deExercises,
});

export const createInMemoryRuleRepository = (): RuleRepository => ({
  getAll: () => deRules,
});

export const createLocalStorageUserStateRepository = (userId: string) => {
  const storageKey = `le.user.${userId}.rules`;

  const load = (): Record<string, UserRuleState> => {
    if (typeof window === "undefined") {
      return {};
    }
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      return {};
    }
    try {
      return JSON.parse(raw) as Record<string, UserRuleState>;
    } catch {
      return {};
    }
  };

  const save = (data: Record<string, UserRuleState>) => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(storageKey, JSON.stringify(data));
  };

  const getRuleState = (_userId: string, ruleId: string): UserRuleState | null => {
    const data = load();
    return data[ruleId] ?? null;
  };

  const upsertRuleState = (_userId: string, state: UserRuleState) => {
    const data = load();
    data[state.ruleId] = state;
    save(data);
  };

  const getAllRuleStates = (): UserRuleState[] => {
    return Object.values(load());
  };

  return { getRuleState, upsertRuleState, getAllRuleStates };
};

export const createLocalStorageAttemptLogRepository = (userId: string): AttemptLogRepository => {
  const storageKey = `le.user.${userId}.attempts`;

  const load = (): unknown[] => {
    if (typeof window === "undefined") {
      return [];
    }
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      return [];
    }
    try {
      return JSON.parse(raw) as unknown[];
    } catch {
      return [];
    }
  };

  const save = (data: unknown[]) => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(storageKey, JSON.stringify(data));
  };

  return {
    append: (event) => {
      const data = load();
      data.push(event);
      save(data);
    },
  };
};

export const createAppEngine = (profile: UserProfile) => {
  const exercises = createInMemoryExerciseRepository();
  const rules = createInMemoryRuleRepository();
  const evaluators = createDeRuleEvaluatorRegistry();
  const userState = createLocalStorageUserStateRepository(profile.userId);
  const attempts = createLocalStorageAttemptLogRepository(profile.userId);

  const config: EngineConfig = {
    scheduler: {
      minSpacingMs: 1000 * 60 * 60,
      regressionSampleRate: 0,
      now: () => Date.now(),
    },
    mastery: {
      initialMastery: 0.2,
      correctIncrement: 0.08,
      incorrectDecrement: 0.12,
      decayHalfLifeDays: 14,
      defaultVolatility: 1,
    },
    exerciseFilter,
    computePriority: defaultPriority,
    updateMastery: defaultMasteryUpdate,
  };

  const engine: Engine = createEngine(
    { exercises, rules, evaluators, userState, attempts },
    config
  );

  return { engine, userState };
};
