import type { StreakData } from "./index";

/**
 * Compute streak data from activity dates
 */
export const computeStreakData = (
  userId: string,
  activityDates: string[]
): StreakData => {
  if (activityDates.length === 0) {
    return {
      userId,
      currentStreak: 0,
      longestStreak: 0,
      lastActivityDate: "",
      totalActiveDays: 0,
    };
  }

  // Sort dates in descending order
  const sorted = [...new Set(activityDates)].sort((a, b) => b.localeCompare(a));
  const lastActivityDate = sorted[0];
  const totalActiveDays = sorted.length;

  // Check if user was active today or yesterday
  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split("T")[0];

  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;
  let isCurrentStreakActive = false;

  // Start from most recent date
  for (let i = 0; i < sorted.length; i++) {
    const currentDate = sorted[i];

    if (i === 0) {
      // First date: check if it's today or yesterday to start current streak
      if (currentDate === today || currentDate === yesterday) {
        tempStreak = 1;
        currentStreak = 1;
        isCurrentStreakActive = true;
      } else {
        tempStreak = 1;
        isCurrentStreakActive = false;
      }
    } else {
      const prevDate = sorted[i - 1];
      const daysDiff = daysBetween(prevDate, currentDate);

      if (daysDiff === 1) {
        tempStreak += 1;
        if (isCurrentStreakActive) {
          currentStreak = tempStreak;
        }
      } else {
        // Streak broken
        longestStreak = Math.max(longestStreak, tempStreak);
        tempStreak = 1;
        isCurrentStreakActive = false;
      }
    }
  }

  longestStreak = Math.max(longestStreak, tempStreak);

  return {
    userId,
    currentStreak,
    longestStreak,
    lastActivityDate,
    totalActiveDays,
  };
};

/**
 * Calculate days between two ISO date strings (YYYY-MM-DD)
 */
const daysBetween = (date1: string, date2: string): number => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffTime = Math.abs(d1.getTime() - d2.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Check if streak needs reminder
 */
export const shouldSendStreakReminder = (streakData: StreakData): boolean => {
  if (streakData.currentStreak === 0) {
    return false;
  }

  const today = new Date().toISOString().split("T")[0];
  const lastActivity = streakData.lastActivityDate;

  // Send reminder if user hasn't been active today
  return lastActivity !== today;
};
