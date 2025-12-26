import type { ExercisePriorityFn, MasteryUpdateFn } from "./index";

const clamp01 = (value: number): number => Math.min(1, Math.max(0, value));

const msToDays = (ms: number): number => ms / (1000 * 60 * 60 * 24);

export const defaultPriority: ExercisePriorityFn = ({
  exercise,
  ruleDefinitions,
  ruleStates,
  scheduler,
  now,
}) => {
  const ruleMap = new Map(ruleDefinitions.map((rule) => [rule.ruleId, rule]));

  const priorities = exercise.ruleIds.map((ruleId) => {
    const definition = ruleMap.get(ruleId);
    const state = ruleStates[ruleId];
    if (!definition || !state) {
      return 0;
    }

    if (state.lastSeen === null) {
      return (1 - state.mastery) * definition.baseImportance;
    }

    const timeSince = now - state.lastSeen;
    if (timeSince < scheduler.minSpacingMs) {
      return 0;
    }

    const recency = Math.min(1, timeSince / scheduler.minSpacingMs);
    return (1 - state.mastery) * definition.baseImportance * recency;
  });

  return priorities.length > 0 ? Math.max(...priorities) : 0;
};

export const defaultMasteryUpdate: MasteryUpdateFn = ({
  state,
  isCorrect,
  now,
  mastery,
}) => {
  const lastSeen = state.lastSeen ?? now;
  const elapsedDays = msToDays(now - lastSeen);
  const decayFactor = Math.pow(0.5, elapsedDays / mastery.decayHalfLifeDays);
  const decayed = clamp01(state.mastery * decayFactor);
  const delta = isCorrect
    ? mastery.correctIncrement * state.volatility
    : -mastery.incorrectDecrement * state.volatility;

  return {
    ...state,
    mastery: clamp01(decayed + delta),
    lastSeen: now,
  };
};
