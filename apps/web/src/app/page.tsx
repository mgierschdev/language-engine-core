"use client";

import { useEffect, useMemo, useState } from "react";
import type { AttemptEvent, ExerciseSelection, UserRuleState } from "@le/core";
import { createAppEngine } from "@/lib/appEngine";

const profile = {
  userId: "local-user",
  level: "A1",
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
  const { engine, userState } = useMemo(() => createAppEngine(profile), []);
  const [selection, setSelection] = useState<ExerciseSelection | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<AttemptEvent | null>(null);
  const [startedAt, setStartedAt] = useState(Date.now());
  const [weakestRules, setWeakestRules] = useState<UserRuleState[]>([]);

  const options = buildOptions(selection);

  const loadNext = () => {
    const next = engine.selectNextExercise(profile);
    setSelection(next);
    setSelectedAnswer(null);
    setFeedback(null);
    setStartedAt(Date.now());
  };

  const refreshWeakestRules = () => {
    const states = userState.getAllRuleStates();
    const weakest = [...states]
      .sort((a, b) => a.mastery - b.mastery)
      .slice(0, 4);
    setWeakestRules(weakest);
  };

  useEffect(() => {
    loadNext();
    refreshWeakestRules();
  }, []);

  const handlePrimary = () => {
    if (!selection) {
      return;
    }
    if (feedback) {
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
          <span className="pill">Level {profile.level}</span>
          <span className="pill">A1-C1 masteries</span>
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
                  disabled={Boolean(feedback)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="action-row">
              <button
                className="primary-btn"
                onClick={handlePrimary}
                disabled={!selection || (!selectedAnswer && !feedback)}
              >
                {feedback ? "Next" : "Submit"}
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
