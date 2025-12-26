import type { Exercise } from "@le/core";

export const deExercises: Exercise[] = [
  {
    id: "de-cloze-001",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich gehe mit dem Freund.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["den", "der", "des"]
    },
    ruleIds: ["de.prep.mit.dative"],
    difficulty: 0.25,
    vocabulary: ["gehen", "Freund"],
    supports: {
      translation: "I go with the friend."
    },
    tags: ["daily_life"]
  },
  {
    id: "de-cloze-002",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das Geschenk ist fuer den Bruder.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "der", "des"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    difficulty: 0.28,
    vocabulary: ["Geschenk", "Bruder"],
    supports: {
      translation: "The gift is for the brother."
    },
    tags: ["daily_life"]
  },
  {
    id: "de-cloze-003",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Projekt.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["den", "der", "des"]
    },
    ruleIds: ["de.prep.von.dative"],
    difficulty: 0.32,
    vocabulary: ["sprechen", "Projekt"],
    supports: {
      translation: "We are talking about the project."
    },
    tags: ["work_basic"]
  }
];
