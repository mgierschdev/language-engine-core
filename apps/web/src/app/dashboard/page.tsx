"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  computeProgressStats,
  computeStreakData,
  type ProgressStats,
  type StreakData,
  type ErrorTrend,
} from "@le/core";
import { createAppEngine } from "@/lib/appEngine";

const userId = "local-user";

const ErrorTrendCard = ({ trend }: { trend: ErrorTrend }) => {
  const categoryLabels: Record<string, string> = {
    case: "Case System",
    preposition: "Prepositions",
    verb_form: "Verb Forms",
    word_order: "Word Order",
    adjective_declension: "Adjective Declension",
    idiom: "Idioms & Phrases",
    vocabulary: "Vocabulary",
    other: "Other",
  };

  return (
    <div className="meta-card">
      <div style={{ marginBottom: "8px", fontWeight: 600 }}>
        {categoryLabels[trend.category] || trend.category}
      </div>
      <div style={{ fontSize: "0.9rem", marginBottom: "4px" }}>
        Error Rate: <strong>{(trend.errorRate * 100).toFixed(1)}%</strong>
      </div>
      <div style={{ fontSize: "0.9rem", marginBottom: "4px" }}>
        Total Attempts: <strong>{trend.totalAttempts}</strong>
      </div>
      <div style={{ fontSize: "0.9rem" }}>
        {trend.improvementRate > 0 ? (
          <span style={{ color: "#10b981" }}>
            ↑ Improving ({(trend.improvementRate * 100).toFixed(1)}%)
          </span>
        ) : trend.improvementRate < 0 ? (
          <span style={{ color: "#ef4444" }}>
            ↓ Declining ({Math.abs(trend.improvementRate * 100).toFixed(1)}%)
          </span>
        ) : (
          <span>Stable</span>
        )}
      </div>
    </div>
  );
};

export default function Dashboard() {
  const router = useRouter();
  const { userState, attempts, rules } = useMemo(
    () => createAppEngine({ userId, level: "A1" }),
    []
  );

  const [stats, setStats] = useState<ProgressStats | null>(null);
  const [streak, setStreak] = useState<StreakData | null>(null);

  useEffect(() => {
    // Compute progress stats
    const attemptEvents = attempts.getAll?.(userId) ?? [];
    const ruleStates = userState.getAllRuleStates();
    const allRules = rules.getAll();

    const progressStats = computeProgressStats(
      userId,
      attemptEvents,
      ruleStates,
      allRules
    );
    setStats(progressStats);

    // Compute streak data
    const activityDates = Array.from(
      new Set(
        attemptEvents.map((attempt) =>
          new Date(attempt.timestamp).toISOString().split("T")[0]
        )
      )
    );
    const streakData = computeStreakData(userId, activityDates);
    setStreak(streakData);
  }, [userState, attempts, rules]);

  const topErrorTrends = stats?.errorTrends.slice(0, 4) ?? [];

  return (
    <main className="app-shell">
      <header className="app-header">
        <div className="brand">
          <div className="brand-mark">LE</div>
          <div>
            <div className="brand-title">Language Engine</div>
            <div className="brand-sub">progress dashboard</div>
          </div>
        </div>
        <div className="pill-row">
          <button
            className="pill"
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
          >
            ← Back to Practice
          </button>
        </div>
      </header>

      <section className="card">
        <div className="card-header">
          <span>Learning Overview</span>
        </div>
        <div className="meta-grid">
          <div className="meta-card">
            <div style={{ marginBottom: "8px" }}>Total Attempts</div>
            <strong style={{ fontSize: "2rem" }}>
              {stats?.totalAttempts ?? 0}
            </strong>
          </div>
          <div className="meta-card">
            <div style={{ marginBottom: "8px" }}>Accuracy Rate</div>
            <strong style={{ fontSize: "2rem" }}>
              {stats ? (stats.accuracyRate * 100).toFixed(1) : "0"}%
            </strong>
          </div>
          <div className="meta-card">
            <div style={{ marginBottom: "8px" }}>Estimated CEFR Level</div>
            <strong style={{ fontSize: "2rem" }}>
              {stats?.estimatedCEFRLevel ?? "A1"}
            </strong>
          </div>
          <div className="meta-card">
            <div style={{ marginBottom: "8px" }}>Current Streak</div>
            <strong style={{ fontSize: "2rem" }}>
              {streak?.currentStreak ?? 0} days
            </strong>
            <div style={{ fontSize: "0.85rem", marginTop: "4px" }}>
              Longest: {streak?.longestStreak ?? 0} days
            </div>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <span>Mastered Rules ({stats?.masteredRules.length ?? 0})</span>
        </div>
        <div style={{ padding: "16px" }}>
          {stats && stats.masteredRules.length > 0 ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                fontSize: "0.85rem",
              }}
            >
              {stats.masteredRules.slice(0, 10).map((ruleId) => (
                <span
                  key={ruleId}
                  style={{
                    padding: "4px 8px",
                    background: "#10b98133",
                    borderRadius: "4px",
                    border: "1px solid #10b981",
                  }}
                >
                  {ruleId}
                </span>
              ))}
              {stats.masteredRules.length > 10 && (
                <span style={{ padding: "4px 8px", color: "#888" }}>
                  +{stats.masteredRules.length - 10} more
                </span>
              )}
            </div>
          ) : (
            <p style={{ color: "#888" }}>
              Keep practicing to master your first rules!
            </p>
          )}
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <span>Areas to Improve ({stats?.weakRules.length ?? 0})</span>
        </div>
        <div style={{ padding: "16px" }}>
          {stats && stats.weakRules.length > 0 ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                fontSize: "0.85rem",
              }}
            >
              {stats.weakRules.slice(0, 10).map((ruleId) => (
                <span
                  key={ruleId}
                  style={{
                    padding: "4px 8px",
                    background: "#ef444433",
                    borderRadius: "4px",
                    border: "1px solid #ef4444",
                  }}
                >
                  {ruleId}
                </span>
              ))}
              {stats.weakRules.length > 10 && (
                <span style={{ padding: "4px 8px", color: "#888" }}>
                  +{stats.weakRules.length - 10} more
                </span>
              )}
            </div>
          ) : (
            <p style={{ color: "#888" }}>Great work! No weak areas detected.</p>
          )}
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <span>Error Trends by Category</span>
        </div>
        {topErrorTrends.length > 0 ? (
          <div className="meta-grid">
            {topErrorTrends.map((trend) => (
              <ErrorTrendCard key={trend.category} trend={trend} />
            ))}
          </div>
        ) : (
          <div style={{ padding: "16px" }}>
            <p style={{ color: "#888" }}>
              Start practicing to see error trends!
            </p>
          </div>
        )}
      </section>

      <section className="card">
        <div className="card-header">
          <span>Streak Calendar</span>
        </div>
        <div style={{ padding: "16px" }}>
          <div style={{ marginBottom: "12px" }}>
            <strong>Total Active Days:</strong> {streak?.totalActiveDays ?? 0}
          </div>
          <div style={{ marginBottom: "12px" }}>
            <strong>Last Activity:</strong>{" "}
            {streak?.lastActivityDate
              ? new Date(streak.lastActivityDate).toLocaleDateString()
              : "Never"}
          </div>
          {streak && streak.currentStreak > 0 && (
            <div
              style={{
                padding: "12px",
                background: "#10b98111",
                border: "1px solid #10b981",
                borderRadius: "8px",
              }}
            >
              🔥 You are on a {streak.currentStreak}-day streak! Keep it up!
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
