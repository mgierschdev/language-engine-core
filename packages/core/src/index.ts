export type RuleId = string;

export type ExerciseType = "cloze_text";

export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type ErrorCategory = 
  | "case"
  | "preposition"
  | "verb_form"
  | "word_order"
  | "adjective_declension"
  | "idiom"
  | "vocabulary"
  | "other";

export type ThemeTag = 
  | "daily_life"
  | "travel"
  | "work"
  | "education"
  | "health"
  | "leisure"
  | "general";

export interface RuleDefinition {
  ruleId: RuleId;
  baseImportance: number;
  errorCategory?: ErrorCategory;
  cefrLevel?: CEFRLevel;
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
  level: string;
  difficulty: number;
  vocabulary?: string[];
  supports?: {
    explanation?: string;
    translation?: string;
    examples?: string[];
    audioText?: string;
  };
  tags?: string[];
  theme?: ThemeTag;
  isDiagnostic?: boolean;
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
  selectedLevels?: string[];
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
  getAll?: (userId: string) => AttemptEvent[];
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

// Error Analytics Types
export interface ErrorTrend {
  category: ErrorCategory;
  errorCount: number;
  totalAttempts: number;
  errorRate: number;
  recentErrors: number;
  improvementRate: number;
}

export interface DrillPack {
  category: ErrorCategory;
  exercises: Exercise[];
  targetMastery: number;
  estimatedMinutes: number;
}

// Streak Tracking Types
export interface StreakData {
  userId: string;
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string;
  totalActiveDays: number;
}

// Progress Statistics Types
export interface ProgressStats {
  userId: string;
  totalAttempts: number;
  correctAttempts: number;
  accuracyRate: number;
  masteredRules: RuleId[];
  weakRules: RuleId[];
  estimatedCEFRLevel: CEFRLevel;
  errorTrends: ErrorTrend[];
}

// Diagnostic/Placement Test Types
export interface DiagnosticTest {
  exercises: Exercise[];
  coverageByLevel: Record<CEFRLevel, number>;
  coverageByCategory: Record<ErrorCategory, number>;
}

export interface PlacementResult {
  estimatedLevel: CEFRLevel;
  confidence: number;
  strengthsByCategory: Record<ErrorCategory, number>;
  recommendedStartLevel: CEFRLevel;
}

export { createEngine } from "./engine";
export { defaultMasteryUpdate, defaultPriority } from "./strategies";
export {
  computeErrorTrends,
  estimateCEFRLevel,
  computeProgressStats,
  analyzeDiagnosticResults,
} from "./analytics";
export { computeStreakData, shouldSendStreakReminder } from "./streak";
