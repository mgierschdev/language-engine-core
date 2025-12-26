"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  computeStreakData,
  type AttemptEvent,
  type ExerciseSelection,
  type UserRuleState,
  type StreakData,
} from "@le/core";
import { createAppEngine } from "@/lib/appEngine";

const userId = "local-user";
const levels = ["A1", "A2", "B1", "B2", "C1"];

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
    default:
      return 0;
  }
};

const highestLevel = (selected: string[]): string => {
  if (selected.length === 0) {
    return "A1";
  }
  return selected.reduce((best, current) => (
    levelRank(current) > levelRank(best) ? current : best
  ), selected[0]);
};

const buildOptions = (selection: ExerciseSelection | null): string[] => {
  if (!selection) {
    return [];
  }
  const { answer, distractors } = selection.exercise.cloze;
  const options = [answer, ...(distractors ?? [])];
  return Array.from(new Set(options)).sort((a, b) => a.localeCompare(b));
};

export default function Home() {
  const router = useRouter();
  const [selectedLevels, setSelectedLevels] = useState<string[]>(["A1"]);
  const effectiveLevel = useMemo(
    () => highestLevel(selectedLevels),
    [selectedLevels]
  );
  const profile = useMemo(
    () => ({ userId, level: effectiveLevel, selectedLevels }),
    [effectiveLevel, selectedLevels]
  );
  const { engine, userState, attempts } = useMemo(
    () => createAppEngine({ userId, level: "A1" }),
    []
  );
  const [selection, setSelection] = useState<ExerciseSelection | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<AttemptEvent | null>(null);
  const [startedAt, setStartedAt] = useState(Date.now());
  const [weakestRules, setWeakestRules] = useState<UserRuleState[]>([]);
  const [streak, setStreak] = useState<StreakData | null>(null);

  const options = buildOptions(selection);

  const loadNext = useCallback(() => {
    const next = engine.selectNextExercise(profile);
    setSelection(next);
    setSelectedAnswer(null);
    setFeedback(null);
    setStartedAt(Date.now());
  }, [engine, profile]);

  const refreshWeakestRules = useCallback(() => {
    const states = userState.getAllRuleStates();
    const weakest = [...states]
      .sort((a, b) => a.mastery - b.mastery)
      .slice(0, 4);
    setWeakestRules(weakest);

    // Update streak
    const attemptEvents = attempts.getAll?.(userId) ?? [];
    const activityDates = Array.from(
      new Set(
        attemptEvents.map((attempt) =>
          new Date(attempt.timestamp).toISOString().split("T")[0]
        )
      )
    );
    const streakData = computeStreakData(userId, activityDates);
    setStreak(streakData);
  }, [userState, attempts]);

  useEffect(() => {
    loadNext();
    refreshWeakestRules();
  }, [loadNext, refreshWeakestRules, attempts]);

  const toggleLevel = (value: string) => {
    setSelectedLevels((prev) => {
      if (prev.includes(value)) {
        if (prev.length === 1) {
          return prev;
        }
        return prev.filter((level) => level !== value);
      }
      return [...prev, value].sort((a, b) => levelRank(a) - levelRank(b));
    });
  };

  const handlePrimary = () => {
    if (!selection) {
      return;
    }
    if (feedback?.isCorrect) {
      loadNext();
      return;
    }
    if (!selectedAnswer) {
      return;
    }
    const event = engine.submitAttempt(
      profile,
      selection.exercise,
      selectedAnswer,
      Date.now() - startedAt
    );
    setFeedback(event);
    refreshWeakestRules();
  };

  const promptText = selection?.exercise.promptText ?? "";
  const cloze = selection?.exercise.cloze;
  const prefix = cloze ? promptText.slice(0, cloze.start) : "";
  const suffix = cloze ? promptText.slice(cloze.end) : "";

  return (
    <main className="app-shell">
      <header className="app-header">
        <div className="brand">
          <div className="brand-mark">LE</div>
          <div>
            <div className="brand-title">Language Engine</div>
            <div className="brand-sub">adaptive feed</div>
          </div>
        </div>
        <div className="pill-row">
          <span className="pill">German</span>
          <span className="pill">Levels {selectedLevels.join(", ")}</span>
          {streak && streak.currentStreak > 0 && (
            <span className="pill" style={{ background: "#10b98133", border: "1px solid #10b981" }}>
              🔥 {streak.currentStreak} day streak
            </span>
          )}
          <button
            className="pill"
            onClick={() => router.push("/diagnostic")}
            style={{ cursor: "pointer" }}
          >
            🎯 Take Diagnostic
          </button>
          <button
            className="pill"
            onClick={() => router.push("/dashboard")}
            style={{ cursor: "pointer" }}
          >
            📊 Dashboard
          </button>
        </div>
        <div className="level-selector">
          <span className="level-label">Exercise level</span>
          <div className="level-buttons">
            {levels.map((value) => (
              <button
                key={value}
                className={`level-btn${selectedLevels.includes(value) ? " active" : ""}`}
                onClick={() => toggleLevel(value)}
                type="button"
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="card">
        <div className="card-header">
          <span>cloze_text</span>
          <span>
            {selection
              ? `difficulty ${selection.exercise.difficulty.toFixed(2)}`
              : "no exercise"}
          </span>
        </div>
        {selection ? (
          <>
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
                  className={`option-btn${
                    selectedAnswer === option ? " selected" : ""
                  }`}
                  onClick={() => setSelectedAnswer(option)}
                  disabled={Boolean(feedback?.isCorrect)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="action-row">
              <button
                className="primary-btn"
                onClick={handlePrimary}
                disabled={!selection || !selectedAnswer}
              >
                {feedback?.isCorrect ? "Next" : "Submit"}
              </button>
              <button
                className="secondary-btn"
                onClick={loadNext}
                disabled={!selection}
              >
                Skip
              </button>
            </div>
          </>
        ) : (
          <p>No exercises available for this level.</p>
        )}
      </section>

      {feedback && selection && (
        <section className="feedback">
          <div className="feedback-title">
            {feedback.isCorrect ? "Correct" : "Needs another pass"}
          </div>
          <div className="feedback-body">
            {feedback.isCorrect
              ? "Nice work. Keep the rhythm and move on."
              : `Rules to revisit: ${feedback.failedRuleIds.join(", ")}`}
          </div>
          {!feedback.isCorrect && (
            <div className="feedback-body" style={{ marginTop: "10px" }}>
              Hint: {selection.exercise.supports?.explanation
                ? selection.exercise.supports.explanation
                : "Focus on the rule label above and compare the distractors carefully."}
            </div>
          )}
          {selection.exercise.supports?.translation && (
            <div className="feedback-body" style={{ marginTop: "10px" }}>
              Translation: {selection.exercise.supports.translation}
            </div>
          )}
        </section>
      )}

      <section className="meta-grid">
        <div className="meta-card">
          Weakest rules
          <strong>
            {weakestRules.length > 0
              ? weakestRules.map((rule) => rule.ruleId).join(", ")
              : "No data yet"}
          </strong>
        </div>
        <div className="meta-card">
          Priority score
          <strong>
            {selection ? selection.priorityScore.toFixed(2) : "--"}
          </strong>
        </div>
        <div className="meta-card">
          Response time
          <strong>
            {feedback ? `${feedback.responseTimeMs} ms` : "--"}
          </strong>
        </div>
      </section>
    </main>
  );
}
