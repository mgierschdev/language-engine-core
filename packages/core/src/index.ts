export type RuleId = string;

export type ExerciseType = "cloze_text";

export interface RuleDefinition {
  ruleId: RuleId;
  baseImportance: number;
}

export interface RuleFailure {
  ruleId: RuleId;
  reason?: string;
}

export interface RuleEvaluatorContext {
  exerciseId: string;
  ruleIds: RuleId[];
  promptText: string;
  correctAnswer: string;
}

export interface RuleEvaluationResult {
  isCorrect: boolean;
  failedRuleIds: RuleId[];
  failures?: RuleFailure[];
}

export interface RuleEvaluator {
  ruleId: RuleId;
  evaluate: (context: RuleEvaluatorContext, userAnswer: string) => RuleEvaluationResult;
}

export interface Exercise {
  id: string;
  language: string;
  exerciseType: ExerciseType;
  promptText: string;
  cloze: {
    answer: string;
    start: number;
    end: number;
    distractors?: string[];
  };
  ruleIds: RuleId[];
  difficulty: number;
  vocabulary?: string[];
  supports?: {
    explanation?: string;
    translation?: string;
    examples?: string[];
    audioText?: string;
  };
  tags?: string[];
}

export interface ExerciseSelection {
  exercise: Exercise;
  priorityScore: number;
}

export interface AttemptEvent {
  userId: string;
  exerciseId: string;
  timestamp: number;
  language: string;
  ruleIds: RuleId[];
  failedRuleIds: RuleId[];
  difficulty: number;
  promptText: string;
  correctAnswer: string;
  userAnswer: string;
  isCorrect: boolean;
  responseTimeMs: number;
}

export interface UserRuleState {
  ruleId: RuleId;
  mastery: number;
  lastSeen: number | null;
  decayHalfLifeDays: number;
  volatility: number;
}

export interface VocabularyItem {
  lemma: string;
  pos: string;
  minimumLevel: string;
}

export interface UserProfile {
  userId: string;
  level: string;
}

export interface SchedulerConfig {
  minSpacingMs: number;
  regressionSampleRate: number;
  now: () => number;
}

export interface MasteryConfig {
  initialMastery: number;
  correctIncrement: number;
  incorrectDecrement: number;
  decayHalfLifeDays: number;
  defaultVolatility: number;
}

export interface ExercisePriorityInput {
  exercise: Exercise;
  ruleDefinitions: RuleDefinition[];
  ruleStates: Record<RuleId, UserRuleState>;
  scheduler: SchedulerConfig;
  now: number;
}

export interface MasteryUpdateInput {
  state: UserRuleState;
  isCorrect: boolean;
  now: number;
  mastery: MasteryConfig;
}

export type ExercisePriorityFn = (input: ExercisePriorityInput) => number;
export type MasteryUpdateFn = (input: MasteryUpdateInput) => UserRuleState;

export interface ExerciseRepository {
  getAll: () => Exercise[];
}

export interface RuleRepository {
  getAll: () => RuleDefinition[];
}

export interface RuleEvaluatorRegistry {
  getEvaluators: (ruleIds: RuleId[]) => RuleEvaluator[];
}

export interface UserStateRepository {
  getRuleState: (userId: string, ruleId: RuleId) => UserRuleState | null;
  upsertRuleState: (userId: string, state: UserRuleState) => void;
}

export interface AttemptLogRepository {
  append: (event: AttemptEvent) => void;
}

export interface EngineDependencies {
  exercises: ExerciseRepository;
  rules: RuleRepository;
  evaluators: RuleEvaluatorRegistry;
  userState: UserStateRepository;
  attempts: AttemptLogRepository;
}

export interface EngineConfig {
  scheduler: SchedulerConfig;
  mastery: MasteryConfig;
  exerciseFilter?: (exercise: Exercise, profile: UserProfile) => boolean;
  computePriority: ExercisePriorityFn;
  updateMastery: MasteryUpdateFn;
}

export interface Engine {
  selectNextExercise: (profile: UserProfile) => ExerciseSelection | null;
  submitAttempt: (
    profile: UserProfile,
    exercise: Exercise,
    userAnswer: string,
    responseTimeMs: number
  ) => AttemptEvent;
}

export { createEngine } from "./engine";
export { defaultMasteryUpdate, defaultPriority } from "./strategies";
