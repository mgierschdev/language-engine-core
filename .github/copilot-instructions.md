# Copilot instructions (language-engine-core)

## Big picture
- This is a TypeScript npm-workspaces monorepo: engine core in `packages/core`, German plugin in `packages/plugin-de`, static content in `packages/content`, and a minimal Next.js UI in `apps/web`.
- Keep the core **language-agnostic**: `packages/core` must never contain German grammar logic. Language-specific evaluation belongs in plugin packages.

## Local workflows
- Install from repo root: `npm install`
- Run UI (and engine via workspace deps): `npm run dev`
- Build UI: `npm run build`
- Lint: `npm run lint`
- Tests: none configured (no `test` script).

## Core engine contract (do not break)
- Engine API is `createEngine()` in `packages/core/src/engine.ts` with:
  - `selectNextExercise(profile)` → `{ exercise, priorityScore } | null`
  - `submitAttempt(profile, exercise, userAnswer, responseTimeMs)` → `AttemptEvent`
- The engine only operates on `ruleId`, pass/fail, timestamps, and numeric mastery. It does **not** branch on `exerciseType`.
- Attempt telemetry schema is `AttemptEvent` in `packages/core/src/index.ts` and is persisted by the app adapter.

## Scheduling + mastery (current implementation)
- Priority is deterministic and auditable: see `defaultPriority` in `packages/core/src/strategies.ts`.
  - Implements min spacing via `scheduler.minSpacingMs`.
  - Uses `(1 - mastery) * baseImportance * recency` per rule and takes the max for an exercise.
- Regression sampling (optional review of high-mastery rules) is implemented in `packages/core/src/engine.ts` and controlled by `scheduler.regressionSampleRate`.
- Mastery update is deterministic with time decay: `defaultMasteryUpdate` in `packages/core/src/strategies.ts`.

## German plugin pattern
- Rule IDs are namespaced strings like `de.prep.mit.dative`; the list is in `packages/plugin-de/src/rules.ts`.
- Evaluators are registered via `createDeRuleEvaluatorRegistry()` in `packages/plugin-de/src/evaluators.ts`.
  - Today evaluators are exact-match against `context.correctAnswer` (deterministic stub).
  - If you improve evaluators, keep them deterministic and return `failedRuleIds` precisely.

## Content + vocab gating
- Exercises live in `packages/content/src/de/exercises.ts`. A deterministic `vocabulary: string[]` list is attached per exercise based on `packages/content/src/de/vocab.ts`.
- Vocabulary list is `packages/content/src/de/vocab.ts`.
- The UI adapter applies level + vocab filtering in `apps/web/src/lib/appEngine.ts` (`exerciseFilter`).
  - Vocab gating only applies when an exercise includes `exercise.vocabulary: string[]`.

## Web app integration + persistence
- UI entry is `apps/web/src/app/page.tsx` (single adaptive feed).
- Engine wiring + persistence is `apps/web/src/lib/appEngine.ts`.
  - localStorage keys: `le.user.<userId>.rules` and `le.user.<userId>.attempts`.
  - “Weakest rules” is computed from `userState.getAllRuleStates()`.

## When changing behavior
- Prefer updating strategies/config in `apps/web/src/lib/appEngine.ts` rather than embedding behavior in UI.
- Avoid adding runtime network dependencies; keep behavior reproducible from stored attempts/rule state.
