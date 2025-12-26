import type { RuleEvaluator, RuleEvaluatorRegistry } from "@le/core";
import { deRules } from "./rules";

const normalizeAnswer = (value: string): string => {
  return value
    .trim()
    .replace(/\s+/g, " ");
};

const makeExactMatchEvaluator = (ruleId: string): RuleEvaluator => {
  return {
    ruleId,
    evaluate: (context, userAnswer) => {
      const normalizedUser = normalizeAnswer(userAnswer);
      const normalizedCorrect = normalizeAnswer(context.correctAnswer);
      const isCorrect = normalizedUser === normalizedCorrect;
      return {
        isCorrect,
        failedRuleIds: isCorrect ? [] : [ruleId],
        failures: isCorrect
          ? undefined
          : [{ ruleId, reason: "Answer does not match expected form" }],
      };
    },
  };
};

const evaluators = deRules.map((rule) => makeExactMatchEvaluator(rule.ruleId));
const evaluatorMap = new Map(evaluators.map((evaluator) => [evaluator.ruleId, evaluator]));

export const deRuleEvaluators = evaluators;

export const createDeRuleEvaluatorRegistry = (): RuleEvaluatorRegistry => ({
  getEvaluators: (ruleIds) => ruleIds
    .map((ruleId) => evaluatorMap.get(ruleId))
    .filter((evaluator): evaluator is RuleEvaluator => Boolean(evaluator)),
});
