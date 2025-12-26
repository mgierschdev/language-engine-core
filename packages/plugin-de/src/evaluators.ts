import type { RuleEvaluator, RuleEvaluatorRegistry } from "@le/core";
import { deRules } from "./rules";

const makeExactMatchEvaluator = (ruleId: string): RuleEvaluator => {
  return {
    ruleId,
    evaluate: (context, userAnswer) => {
      const isCorrect = userAnswer.trim() === context.correctAnswer.trim();
      return {
        isCorrect,
        failedRuleIds: isCorrect ? [] : [ruleId],
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
