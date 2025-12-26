"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  analyzeDiagnosticResults,
  type AttemptEvent,
  type Exercise,
  type PlacementResult,
} from "@le/core";
import { createAppEngine } from "@/lib/appEngine";

const userId = "local-user";

const buildOptions = (exercise: Exercise): string[] => {
  const { answer, distractors } = exercise.cloze;
  const options = [answer, ...(distractors ?? [])];
  return Array.from(new Set(options)).sort((a, b) => a.localeCompare(b));
};

export default function DiagnosticTest() {
  const router = useRouter();
  const { engine, rules } = useMemo(
    () => createAppEngine({ userId, level: "A1" }),
    []
  );

  const [diagnosticExercises, setDiagnosticExercises] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [diagnosticAttempts, setDiagnosticAttempts] = useState<AttemptEvent[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [result, setResult] = useState<PlacementResult | null>(null);
  const [startedAt, setStartedAt] = useState(Date.now());

  useEffect(() => {
    // Select diagnostic exercises: 2-3 from each level (A1, A2, B1, B2)
    // For demonstration, we'll create a simple diagnostic by selecting exercises
    // In production, you'd want pre-selected diagnostic exercises
    const exercises: Exercise[] = [];
    const levels = ["A1", "A2", "B1", "B2"];
    
    levels.forEach((level) => {
      const levelProfile = { userId, level, selectedLevels: [level] };
      for (let i = 0; i < 3; i++) {
        const selection = engine.selectNextExercise(levelProfile);
        if (selection) {
          exercises.push({ ...selection.exercise, isDiagnostic: true });
        }
      }
    });

    setDiagnosticExercises(exercises.slice(0, 12)); // 12 total diagnostic exercises
  }, [engine]);

  const currentExercise = diagnosticExercises[currentIndex];
  const options = currentExercise ? buildOptions(currentExercise) : [];
  const progress = diagnosticExercises.length > 0 
    ? ((currentIndex + 1) / diagnosticExercises.length) * 100 
    : 0;

  const handleNext = useCallback(() => {
    if (!currentExercise || !selectedAnswer) return;

    // Submit attempt
    const event = engine.submitAttempt(
      { userId, level: currentExercise.level },
      currentExercise,
      selectedAnswer,
      Date.now() - startedAt
    );

    setDiagnosticAttempts([...diagnosticAttempts, event]);
    setSelectedAnswer(null);
    setStartedAt(Date.now());

    // Check if we're done
    if (currentIndex >= diagnosticExercises.length - 1) {
      // Analyze results
      const allAttempts = [...diagnosticAttempts, event];
      const allRules = rules.getAll();
      const placementResult = analyzeDiagnosticResults(allAttempts, allRules);
      setResult(placementResult);
      setIsComplete(true);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentExercise, selectedAnswer, diagnosticAttempts, currentIndex, diagnosticExercises.length, engine, startedAt, rules]);

  const handleSkipDiagnostic = () => {
    router.push("/");
  };

  const handleStartPractice = () => {
    router.push("/");
  };

  if (isComplete && result) {
    return (
      <main className="app-shell">
        <header className="app-header">
          <div className="brand">
            <div className="brand-mark">LE</div>
            <div>
              <div className="brand-title">Language Engine</div>
              <div className="brand-sub">diagnostic results</div>
            </div>
          </div>
        </header>

        <section className="card">
          <div className="card-header">
            <span>Your German Proficiency Assessment</span>
          </div>
          <div style={{ padding: "24px" }}>
            <div style={{ marginBottom: "24px", textAlign: "center" }}>
              <div style={{ fontSize: "0.9rem", color: "#888", marginBottom: "8px" }}>
                Estimated CEFR Level
              </div>
              <div style={{ fontSize: "3rem", fontWeight: "bold", color: "#10b981" }}>
                {result.estimatedLevel}
              </div>
              <div style={{ fontSize: "0.9rem", color: "#888", marginTop: "8px" }}>
                Confidence: {(result.confidence * 100).toFixed(0)}%
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontWeight: "600", marginBottom: "12px" }}>
                Recommended Starting Level: {result.recommendedStartLevel}
              </div>
              <p style={{ color: "#666", fontSize: "0.9rem" }}>
                We recommend starting at {result.recommendedStartLevel} level to build a strong foundation
                and gradually progress to more advanced topics.
              </p>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontWeight: "600", marginBottom: "12px" }}>
                Strengths by Category
              </div>
              <div className="meta-grid">
                {Object.entries(result.strengthsByCategory).map(([category, strength]) => (
                  <div key={category} className="meta-card">
                    <div style={{ textTransform: "capitalize", marginBottom: "8px" }}>
                      {category.replace(/_/g, " ")}
                    </div>
                    <strong style={{ fontSize: "1.5rem" }}>
                      {(strength * 100).toFixed(0)}%
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="action-row">
              <button
                className="primary-btn"
                onClick={handleStartPractice}
              >
                Start Learning
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (diagnosticExercises.length === 0) {
    return (
      <main className="app-shell">
        <header className="app-header">
          <div className="brand">
            <div className="brand-mark">LE</div>
            <div>
              <div className="brand-title">Language Engine</div>
              <div className="brand-sub">diagnostic test</div>
            </div>
          </div>
        </header>
        <section className="card">
          <div style={{ padding: "24px", textAlign: "center" }}>
            <p>Loading diagnostic test...</p>
          </div>
        </section>
      </main>
    );
  }

  const promptText = currentExercise?.promptText ?? "";
  const cloze = currentExercise?.cloze;
  const prefix = cloze ? promptText.slice(0, cloze.start) : "";
  const suffix = cloze ? promptText.slice(cloze.end) : "";

  return (
    <main className="app-shell">
      <header className="app-header">
        <div className="brand">
          <div className="brand-mark">LE</div>
          <div>
            <div className="brand-title">Language Engine</div>
            <div className="brand-sub">diagnostic test</div>
          </div>
        </div>
        <div className="pill-row">
          <span className="pill">
            Question {currentIndex + 1} of {diagnosticExercises.length}
          </span>
          <button
            className="pill"
            onClick={handleSkipDiagnostic}
            style={{ cursor: "pointer" }}
          >
            Skip Diagnostic
          </button>
        </div>
      </header>

      <section className="card">
        <div className="card-header">
          <span>Placement Test</span>
          <span>{currentExercise?.level} - {currentExercise?.difficulty.toFixed(2)}</span>
        </div>
        
        <div style={{ padding: "16px", background: "#f3f4f6", borderRadius: "4px", margin: "16px" }}>
          <div style={{ background: "#10b981", height: "8px", borderRadius: "4px", width: `${progress}%`, transition: "width 0.3s" }} />
          <div style={{ fontSize: "0.85rem", color: "#888", marginTop: "4px", textAlign: "center" }}>
            {progress.toFixed(0)}% Complete
          </div>
        </div>

        <p className="prompt">
          {prefix}
          <span className="cloze-slot">
            {selectedAnswer ?? "____"}
          </span>
          {suffix}
        </p>

        <div className="options">
          {options.map((option) => (
            <button
              key={option}
              className={`option-btn${selectedAnswer === option ? " selected" : ""}`}
              onClick={() => setSelectedAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="action-row">
          <button
            className="primary-btn"
            onClick={handleNext}
            disabled={!selectedAnswer}
          >
            {currentIndex >= diagnosticExercises.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </section>

      <section className="card">
        <div style={{ padding: "16px" }}>
          <p style={{ fontSize: "0.9rem", color: "#666" }}>
            This diagnostic test helps us understand your current German proficiency level.
            Answer as accurately as you can - there&apos;s no penalty for incorrect answers.
          </p>
        </div>
      </section>
    </main>
  );
}
