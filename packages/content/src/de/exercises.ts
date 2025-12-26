import type { Exercise } from "@le/core";

export const deExercises: Exercise[] = [
  {
    id: "de-work-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Chef.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["work"]
  },
  {
    id: "de-work-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Chef.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["work"]
  },
  {
    id: "de-work-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Chef.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["work"]
  },
  {
    id: "de-work-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Chef gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["work"]
  },
  {
    id: "de-work-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Chef, wenn es um Arbeit geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["work"]
  },
  {
    id: "de-work-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Chef, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["work"]
  },
  {
    id: "de-work-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Chef heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["work"]
  },
  {
    id: "de-work-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Chef ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 9,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["work"]
  },
  {
    id: "de-work-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Chef, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["work"]
  },
  {
    id: "de-work-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Arbeit ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 43,
      end: 45,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["work"]
  },
  {
    id: "de-work-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Chef ueber Arbeit.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["work"]
  },
  {
    id: "de-work-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Chef, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["work"]
  },
  {
    id: "de-work-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Chef praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["work"]
  },
  {
    id: "de-work-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Chef gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["work"]
  },
  {
    id: "de-work-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Chef hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 9,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["work"]
  },
  {
    id: "de-work-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Chef, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["work"]
  },
  {
    id: "de-work-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Chef, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["work"]
  },
  {
    id: "de-work-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Chef, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["work"]
  },
  {
    id: "de-work-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Chef schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["work"]
  },
  {
    id: "de-work-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Chef, dessen Rolle im Bereich Arbeit oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["work"]
  },
  {
    id: "de-hobbies-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Verein.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Verein.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Verein.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Verein gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Verein, wenn es um Hobby geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Verein, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Verein heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Verein ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 11,
      end: 14,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Verein, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Hobby ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 42,
      end: 44,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Verein ueber Hobby.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Verein, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Verein praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Verein gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Verein hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 11,
      end: 14,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Verein, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Verein, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Verein, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Verein schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["hobbies"]
  },
  {
    id: "de-hobbies-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Verein, dessen Rolle im Bereich Hobby oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["hobbies"]
  },
  {
    id: "de-travel-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Flug.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["travel"]
  },
  {
    id: "de-travel-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Flug.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["travel"]
  },
  {
    id: "de-travel-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Flug.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["travel"]
  },
  {
    id: "de-travel-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Flug gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["travel"]
  },
  {
    id: "de-travel-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Flug, wenn es um Reise geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["travel"]
  },
  {
    id: "de-travel-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Flug, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["travel"]
  },
  {
    id: "de-travel-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Flug heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["travel"]
  },
  {
    id: "de-travel-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Flug ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 9,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["travel"]
  },
  {
    id: "de-travel-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Flug, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["travel"]
  },
  {
    id: "de-travel-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Reise ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 42,
      end: 44,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["travel"]
  },
  {
    id: "de-travel-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Flug ueber Reise.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["travel"]
  },
  {
    id: "de-travel-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Flug, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["travel"]
  },
  {
    id: "de-travel-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Flug praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["travel"]
  },
  {
    id: "de-travel-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Flug gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["travel"]
  },
  {
    id: "de-travel-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Flug hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 9,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["travel"]
  },
  {
    id: "de-travel-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Flug, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["travel"]
  },
  {
    id: "de-travel-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Flug, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["travel"]
  },
  {
    id: "de-travel-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Flug, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["travel"]
  },
  {
    id: "de-travel-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Flug schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["travel"]
  },
  {
    id: "de-travel-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Flug, dessen Rolle im Bereich Reise oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["travel"]
  },
  {
    id: "de-family-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Vater.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["family"]
  },
  {
    id: "de-family-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Vater.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["family"]
  },
  {
    id: "de-family-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Vater.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["family"]
  },
  {
    id: "de-family-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Vater gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["family"]
  },
  {
    id: "de-family-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Vater, wenn es um Familie geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["family"]
  },
  {
    id: "de-family-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Vater, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["family"]
  },
  {
    id: "de-family-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Vater heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["family"]
  },
  {
    id: "de-family-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Vater ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 10,
      end: 13,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["family"]
  },
  {
    id: "de-family-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Vater, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["family"]
  },
  {
    id: "de-family-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Familie ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 44,
      end: 46,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["family"]
  },
  {
    id: "de-family-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Vater ueber Familie.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["family"]
  },
  {
    id: "de-family-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Vater, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["family"]
  },
  {
    id: "de-family-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Vater praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["family"]
  },
  {
    id: "de-family-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Vater gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["family"]
  },
  {
    id: "de-family-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Vater hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 10,
      end: 13,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["family"]
  },
  {
    id: "de-family-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Vater, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["family"]
  },
  {
    id: "de-family-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Vater, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["family"]
  },
  {
    id: "de-family-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Vater, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["family"]
  },
  {
    id: "de-family-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Vater schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["family"]
  },
  {
    id: "de-family-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Vater, dessen Rolle im Bereich Familie oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["family"]
  },
  {
    id: "de-health-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Arzt.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["health"]
  },
  {
    id: "de-health-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Arzt.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["health"]
  },
  {
    id: "de-health-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Arzt.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["health"]
  },
  {
    id: "de-health-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Arzt gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["health"]
  },
  {
    id: "de-health-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Arzt, wenn es um Gesundheit geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["health"]
  },
  {
    id: "de-health-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Arzt, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["health"]
  },
  {
    id: "de-health-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Arzt heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["health"]
  },
  {
    id: "de-health-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Arzt ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 9,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["health"]
  },
  {
    id: "de-health-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Arzt, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["health"]
  },
  {
    id: "de-health-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Gesundheit ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 47,
      end: 49,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["health"]
  },
  {
    id: "de-health-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Arzt ueber Gesundheit.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["health"]
  },
  {
    id: "de-health-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Arzt, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["health"]
  },
  {
    id: "de-health-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Arzt praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["health"]
  },
  {
    id: "de-health-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Arzt gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["health"]
  },
  {
    id: "de-health-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Arzt hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 9,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["health"]
  },
  {
    id: "de-health-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Arzt, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["health"]
  },
  {
    id: "de-health-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Arzt, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["health"]
  },
  {
    id: "de-health-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Arzt, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["health"]
  },
  {
    id: "de-health-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Arzt schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["health"]
  },
  {
    id: "de-health-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Arzt, dessen Rolle im Bereich Gesundheit oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["health"]
  },
  {
    id: "de-education-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Kurs.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["education"]
  },
  {
    id: "de-education-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Kurs.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["education"]
  },
  {
    id: "de-education-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Kurs.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["education"]
  },
  {
    id: "de-education-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Kurs gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["education"]
  },
  {
    id: "de-education-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Kurs, wenn es um Bildung geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["education"]
  },
  {
    id: "de-education-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Kurs, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["education"]
  },
  {
    id: "de-education-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Kurs heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["education"]
  },
  {
    id: "de-education-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Kurs ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 9,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["education"]
  },
  {
    id: "de-education-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Kurs, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["education"]
  },
  {
    id: "de-education-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Bildung ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 44,
      end: 46,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["education"]
  },
  {
    id: "de-education-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Kurs ueber Bildung.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["education"]
  },
  {
    id: "de-education-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Kurs, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["education"]
  },
  {
    id: "de-education-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Kurs praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["education"]
  },
  {
    id: "de-education-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Kurs gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["education"]
  },
  {
    id: "de-education-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Kurs hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 9,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["education"]
  },
  {
    id: "de-education-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Kurs, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["education"]
  },
  {
    id: "de-education-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Kurs, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["education"]
  },
  {
    id: "de-education-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Kurs, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["education"]
  },
  {
    id: "de-education-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Kurs schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["education"]
  },
  {
    id: "de-education-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Kurs, dessen Rolle im Bereich Bildung oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["education"]
  },
  {
    id: "de-food-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Koch.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["food"]
  },
  {
    id: "de-food-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Koch.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["food"]
  },
  {
    id: "de-food-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Koch.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["food"]
  },
  {
    id: "de-food-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Koch gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["food"]
  },
  {
    id: "de-food-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Koch, wenn es um Essen geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["food"]
  },
  {
    id: "de-food-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Koch, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["food"]
  },
  {
    id: "de-food-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Koch heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["food"]
  },
  {
    id: "de-food-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Koch ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 9,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["food"]
  },
  {
    id: "de-food-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Koch, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["food"]
  },
  {
    id: "de-food-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Essen ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 42,
      end: 44,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["food"]
  },
  {
    id: "de-food-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Koch ueber Essen.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["food"]
  },
  {
    id: "de-food-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Koch, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["food"]
  },
  {
    id: "de-food-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Koch praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["food"]
  },
  {
    id: "de-food-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Koch gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["food"]
  },
  {
    id: "de-food-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Koch hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 9,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["food"]
  },
  {
    id: "de-food-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Koch, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["food"]
  },
  {
    id: "de-food-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Koch, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["food"]
  },
  {
    id: "de-food-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Koch, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["food"]
  },
  {
    id: "de-food-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Koch schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["food"]
  },
  {
    id: "de-food-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Koch, dessen Rolle im Bereich Essen oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["food"]
  },
  {
    id: "de-housing-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Vermieter.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["housing"]
  },
  {
    id: "de-housing-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Vermieter.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["housing"]
  },
  {
    id: "de-housing-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Vermieter.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["housing"]
  },
  {
    id: "de-housing-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Vermieter gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["housing"]
  },
  {
    id: "de-housing-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Vermieter, wenn es um Wohnen geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["housing"]
  },
  {
    id: "de-housing-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Vermieter, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["housing"]
  },
  {
    id: "de-housing-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Vermieter heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["housing"]
  },
  {
    id: "de-housing-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Vermieter ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 14,
      end: 17,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["housing"]
  },
  {
    id: "de-housing-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Vermieter, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["housing"]
  },
  {
    id: "de-housing-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Wohnen ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 43,
      end: 45,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["housing"]
  },
  {
    id: "de-housing-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Vermieter ueber Wohnen.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["housing"]
  },
  {
    id: "de-housing-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Vermieter, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["housing"]
  },
  {
    id: "de-housing-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Vermieter praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["housing"]
  },
  {
    id: "de-housing-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Vermieter gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["housing"]
  },
  {
    id: "de-housing-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Vermieter hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 14,
      end: 17,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["housing"]
  },
  {
    id: "de-housing-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Vermieter, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["housing"]
  },
  {
    id: "de-housing-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Vermieter, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["housing"]
  },
  {
    id: "de-housing-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Vermieter, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["housing"]
  },
  {
    id: "de-housing-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Vermieter schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["housing"]
  },
  {
    id: "de-housing-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Vermieter, dessen Rolle im Bereich Wohnen oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["housing"]
  },
  {
    id: "de-technology-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Computer.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["technology"]
  },
  {
    id: "de-technology-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Computer.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["technology"]
  },
  {
    id: "de-technology-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Computer.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["technology"]
  },
  {
    id: "de-technology-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Computer gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["technology"]
  },
  {
    id: "de-technology-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Computer, wenn es um Technik geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["technology"]
  },
  {
    id: "de-technology-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Computer, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["technology"]
  },
  {
    id: "de-technology-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Computer heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["technology"]
  },
  {
    id: "de-technology-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Computer ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 13,
      end: 16,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["technology"]
  },
  {
    id: "de-technology-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Computer, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["technology"]
  },
  {
    id: "de-technology-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Technik ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 44,
      end: 46,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["technology"]
  },
  {
    id: "de-technology-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Computer ueber Technik.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["technology"]
  },
  {
    id: "de-technology-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Computer, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["technology"]
  },
  {
    id: "de-technology-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Computer praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["technology"]
  },
  {
    id: "de-technology-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Computer gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["technology"]
  },
  {
    id: "de-technology-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Computer hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 13,
      end: 16,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["technology"]
  },
  {
    id: "de-technology-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Computer, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["technology"]
  },
  {
    id: "de-technology-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Computer, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["technology"]
  },
  {
    id: "de-technology-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Computer, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["technology"]
  },
  {
    id: "de-technology-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Computer schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["technology"]
  },
  {
    id: "de-technology-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Computer, dessen Rolle im Bereich Technik oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["technology"]
  },
  {
    id: "de-shopping-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Verkaeufer.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Verkaeufer.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Verkaeufer.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Verkaeufer gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Verkaeufer, wenn es um Einkauf geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Verkaeufer, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Verkaeufer heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Verkaeufer ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 15,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Verkaeufer, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Einkauf ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 44,
      end: 46,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Verkaeufer ueber Einkauf.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Verkaeufer, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Verkaeufer praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Verkaeufer gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Verkaeufer hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 15,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Verkaeufer, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Verkaeufer, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Verkaeufer, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Verkaeufer schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["shopping"]
  },
  {
    id: "de-shopping-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Verkaeufer, dessen Rolle im Bereich Einkauf oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["shopping"]
  },
  {
    id: "de-sports-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Trainer.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["sports"]
  },
  {
    id: "de-sports-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Trainer.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["sports"]
  },
  {
    id: "de-sports-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Trainer.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["sports"]
  },
  {
    id: "de-sports-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Trainer gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["sports"]
  },
  {
    id: "de-sports-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Trainer, wenn es um Sport geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["sports"]
  },
  {
    id: "de-sports-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Trainer, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["sports"]
  },
  {
    id: "de-sports-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Trainer heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["sports"]
  },
  {
    id: "de-sports-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Trainer ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 12,
      end: 15,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["sports"]
  },
  {
    id: "de-sports-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Trainer, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["sports"]
  },
  {
    id: "de-sports-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Sport ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 42,
      end: 44,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["sports"]
  },
  {
    id: "de-sports-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Trainer ueber Sport.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["sports"]
  },
  {
    id: "de-sports-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Trainer, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["sports"]
  },
  {
    id: "de-sports-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Trainer praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["sports"]
  },
  {
    id: "de-sports-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Trainer gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["sports"]
  },
  {
    id: "de-sports-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Trainer hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 12,
      end: 15,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["sports"]
  },
  {
    id: "de-sports-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Trainer, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["sports"]
  },
  {
    id: "de-sports-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Trainer, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["sports"]
  },
  {
    id: "de-sports-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Trainer, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["sports"]
  },
  {
    id: "de-sports-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Trainer schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["sports"]
  },
  {
    id: "de-sports-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Trainer, dessen Rolle im Bereich Sport oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["sports"]
  },
  {
    id: "de-culture-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Film.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["culture"]
  },
  {
    id: "de-culture-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Film.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["culture"]
  },
  {
    id: "de-culture-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Film.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["culture"]
  },
  {
    id: "de-culture-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Film gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["culture"]
  },
  {
    id: "de-culture-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Film, wenn es um Kultur geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["culture"]
  },
  {
    id: "de-culture-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Film, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["culture"]
  },
  {
    id: "de-culture-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Film heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["culture"]
  },
  {
    id: "de-culture-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Film ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 9,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["culture"]
  },
  {
    id: "de-culture-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Film, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["culture"]
  },
  {
    id: "de-culture-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Kultur ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 43,
      end: 45,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["culture"]
  },
  {
    id: "de-culture-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Film ueber Kultur.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["culture"]
  },
  {
    id: "de-culture-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Film, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["culture"]
  },
  {
    id: "de-culture-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Film praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["culture"]
  },
  {
    id: "de-culture-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Film gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["culture"]
  },
  {
    id: "de-culture-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Film hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 9,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["culture"]
  },
  {
    id: "de-culture-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Film, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["culture"]
  },
  {
    id: "de-culture-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Film, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["culture"]
  },
  {
    id: "de-culture-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Film, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["culture"]
  },
  {
    id: "de-culture-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Film schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["culture"]
  },
  {
    id: "de-culture-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Film, dessen Rolle im Bereich Kultur oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["culture"]
  },
  {
    id: "de-nature-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Wald.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["nature"]
  },
  {
    id: "de-nature-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Wald.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["nature"]
  },
  {
    id: "de-nature-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Wald.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["nature"]
  },
  {
    id: "de-nature-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Wald gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["nature"]
  },
  {
    id: "de-nature-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Wald, wenn es um Natur geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["nature"]
  },
  {
    id: "de-nature-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Wald, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["nature"]
  },
  {
    id: "de-nature-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Wald heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["nature"]
  },
  {
    id: "de-nature-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Wald ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 9,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["nature"]
  },
  {
    id: "de-nature-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Wald, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["nature"]
  },
  {
    id: "de-nature-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Natur ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 42,
      end: 44,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["nature"]
  },
  {
    id: "de-nature-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Wald ueber Natur.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["nature"]
  },
  {
    id: "de-nature-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Wald, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["nature"]
  },
  {
    id: "de-nature-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Wald praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["nature"]
  },
  {
    id: "de-nature-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Wald gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["nature"]
  },
  {
    id: "de-nature-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Wald hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 9,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["nature"]
  },
  {
    id: "de-nature-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Wald, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["nature"]
  },
  {
    id: "de-nature-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Wald, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["nature"]
  },
  {
    id: "de-nature-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Wald, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["nature"]
  },
  {
    id: "de-nature-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Wald schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["nature"]
  },
  {
    id: "de-nature-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Wald, dessen Rolle im Bereich Natur oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["nature"]
  },
  {
    id: "de-finance-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Berater.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["finance"]
  },
  {
    id: "de-finance-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Berater.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["finance"]
  },
  {
    id: "de-finance-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Berater.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["finance"]
  },
  {
    id: "de-finance-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Berater gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["finance"]
  },
  {
    id: "de-finance-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Berater, wenn es um Finanzen geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["finance"]
  },
  {
    id: "de-finance-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Berater, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["finance"]
  },
  {
    id: "de-finance-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Berater heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["finance"]
  },
  {
    id: "de-finance-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Berater ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 12,
      end: 15,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["finance"]
  },
  {
    id: "de-finance-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Berater, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["finance"]
  },
  {
    id: "de-finance-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Finanzen ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 14,
      end: 16,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["finance"]
  },
  {
    id: "de-finance-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Berater ueber Finanzen.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["finance"]
  },
  {
    id: "de-finance-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Berater, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["finance"]
  },
  {
    id: "de-finance-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Berater praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["finance"]
  },
  {
    id: "de-finance-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Berater gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["finance"]
  },
  {
    id: "de-finance-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Berater hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 12,
      end: 15,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["finance"]
  },
  {
    id: "de-finance-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Berater, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["finance"]
  },
  {
    id: "de-finance-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Berater, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["finance"]
  },
  {
    id: "de-finance-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Berater, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["finance"]
  },
  {
    id: "de-finance-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Berater schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["finance"]
  },
  {
    id: "de-finance-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Berater, dessen Rolle im Bereich Finanzen oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["finance"]
  },
  {
    id: "de-politics-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Minister.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["politics"]
  },
  {
    id: "de-politics-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Minister.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["politics"]
  },
  {
    id: "de-politics-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Minister.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["politics"]
  },
  {
    id: "de-politics-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Minister gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["politics"]
  },
  {
    id: "de-politics-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Minister, wenn es um Politik geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["politics"]
  },
  {
    id: "de-politics-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Minister, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["politics"]
  },
  {
    id: "de-politics-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Minister heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["politics"]
  },
  {
    id: "de-politics-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Minister ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 7,
      end: 10,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["politics"]
  },
  {
    id: "de-politics-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Minister, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["politics"]
  },
  {
    id: "de-politics-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Politik ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 44,
      end: 46,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["politics"]
  },
  {
    id: "de-politics-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Minister ueber Politik.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["politics"]
  },
  {
    id: "de-politics-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Minister, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["politics"]
  },
  {
    id: "de-politics-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Minister praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["politics"]
  },
  {
    id: "de-politics-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Minister gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["politics"]
  },
  {
    id: "de-politics-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Minister hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 13,
      end: 16,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["politics"]
  },
  {
    id: "de-politics-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Minister, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["politics"]
  },
  {
    id: "de-politics-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Minister, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["politics"]
  },
  {
    id: "de-politics-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Minister, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["politics"]
  },
  {
    id: "de-politics-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Minister schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["politics"]
  },
  {
    id: "de-politics-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Minister, dessen Rolle im Bereich Politik oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["politics"]
  },
  {
    id: "de-relationships-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Partner.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Partner.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Partner.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Partner gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Partner, wenn es um Beziehung geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Partner, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Partner heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Partner ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 12,
      end: 15,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Partner, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Beziehung ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 46,
      end: 48,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Partner ueber Beziehung.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Partner, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Partner praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Partner gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Partner hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 12,
      end: 15,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Partner, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Partner, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Partner, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Partner schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["relationships"]
  },
  {
    id: "de-relationships-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Partner, dessen Rolle im Bereich Beziehung oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["relationships"]
  },
  {
    id: "de-transport-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Zug.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["transport"]
  },
  {
    id: "de-transport-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Zug.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["transport"]
  },
  {
    id: "de-transport-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Zug.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["transport"]
  },
  {
    id: "de-transport-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Zug gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["transport"]
  },
  {
    id: "de-transport-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Zug, wenn es um Transport geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["transport"]
  },
  {
    id: "de-transport-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Zug, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["transport"]
  },
  {
    id: "de-transport-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Zug heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["transport"]
  },
  {
    id: "de-transport-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Zug ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 8,
      end: 11,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["transport"]
  },
  {
    id: "de-transport-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Zug, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["transport"]
  },
  {
    id: "de-transport-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Transport ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 13,
      end: 15,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["transport"]
  },
  {
    id: "de-transport-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Zug ueber Transport.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["transport"]
  },
  {
    id: "de-transport-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Zug, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["transport"]
  },
  {
    id: "de-transport-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Zug praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["transport"]
  },
  {
    id: "de-transport-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Zug gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["transport"]
  },
  {
    id: "de-transport-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Zug hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 8,
      end: 11,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["transport"]
  },
  {
    id: "de-transport-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Zug, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["transport"]
  },
  {
    id: "de-transport-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Zug, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["transport"]
  },
  {
    id: "de-transport-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Zug, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["transport"]
  },
  {
    id: "de-transport-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Zug schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["transport"]
  },
  {
    id: "de-transport-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Zug, dessen Rolle im Bereich Transport oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["transport"]
  },
  {
    id: "de-environment-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Abfall.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["environment"]
  },
  {
    id: "de-environment-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Abfall.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["environment"]
  },
  {
    id: "de-environment-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Abfall.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["environment"]
  },
  {
    id: "de-environment-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Abfall gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["environment"]
  },
  {
    id: "de-environment-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Abfall, wenn es um Umwelt geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["environment"]
  },
  {
    id: "de-environment-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Abfall, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["environment"]
  },
  {
    id: "de-environment-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Abfall heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["environment"]
  },
  {
    id: "de-environment-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Abfall ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 11,
      end: 14,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["environment"]
  },
  {
    id: "de-environment-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Abfall, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["environment"]
  },
  {
    id: "de-environment-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Umwelt ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 43,
      end: 45,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["environment"]
  },
  {
    id: "de-environment-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Abfall ueber Umwelt.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["environment"]
  },
  {
    id: "de-environment-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Abfall, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["environment"]
  },
  {
    id: "de-environment-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Abfall praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["environment"]
  },
  {
    id: "de-environment-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Abfall gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["environment"]
  },
  {
    id: "de-environment-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Abfall hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 11,
      end: 14,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["environment"]
  },
  {
    id: "de-environment-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Abfall, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["environment"]
  },
  {
    id: "de-environment-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Abfall, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["environment"]
  },
  {
    id: "de-environment-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Abfall, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["environment"]
  },
  {
    id: "de-environment-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Abfall schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["environment"]
  },
  {
    id: "de-environment-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Abfall, dessen Rolle im Bereich Umwelt oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["environment"]
  },
  {
    id: "de-media-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Artikel.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["media"]
  },
  {
    id: "de-media-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Artikel.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["media"]
  },
  {
    id: "de-media-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Artikel.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["media"]
  },
  {
    id: "de-media-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Artikel gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["media"]
  },
  {
    id: "de-media-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Artikel, wenn es um Medien geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["media"]
  },
  {
    id: "de-media-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Artikel, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["media"]
  },
  {
    id: "de-media-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Artikel heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["media"]
  },
  {
    id: "de-media-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Artikel ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 12,
      end: 15,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["media"]
  },
  {
    id: "de-media-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Artikel, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["media"]
  },
  {
    id: "de-media-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Medien ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 43,
      end: 45,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["media"]
  },
  {
    id: "de-media-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Artikel ueber Medien.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["media"]
  },
  {
    id: "de-media-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Artikel, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["media"]
  },
  {
    id: "de-media-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Artikel praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["media"]
  },
  {
    id: "de-media-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Artikel gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["media"]
  },
  {
    id: "de-media-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Artikel hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 12,
      end: 15,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["media"]
  },
  {
    id: "de-media-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Artikel, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["media"]
  },
  {
    id: "de-media-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Artikel, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["media"]
  },
  {
    id: "de-media-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Artikel, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["media"]
  },
  {
    id: "de-media-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Artikel schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["media"]
  },
  {
    id: "de-media-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Artikel, dessen Rolle im Bereich Medien oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["media"]
  },
  {
    id: "de-services-a1-01",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich spreche mit dem Mechaniker.",
    cloze: {
      answer: "dem",
      start: 16,
      end: 19,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "A1",
    difficulty: 0.2,
    tags: ["services"]
  },
  {
    id: "de-services-a1-02",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Das ist fuer den Mechaniker.",
    cloze: {
      answer: "den",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "A1",
    difficulty: 0.21,
    tags: ["services"]
  },
  {
    id: "de-services-a1-03",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den Mechaniker.",
    cloze: {
      answer: "den",
      start: 9,
      end: 12,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "A1",
    difficulty: 0.21,
    tags: ["services"]
  },
  {
    id: "de-services-a1-04",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er hat den Mechaniker gesehen.",
    cloze: {
      answer: "hat",
      start: 3,
      end: 6,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "A1",
    difficulty: 0.22,
    tags: ["services"]
  },
  {
    id: "de-services-a2-05",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Wir sprechen von dem Mechaniker, wenn es um Service geht.",
    cloze: {
      answer: "dem",
      start: 17,
      end: 20,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "A2",
    difficulty: 0.37,
    tags: ["services"]
  },
  {
    id: "de-services-a2-06",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich helfe dem Mechaniker, weil ich Zeit habe.",
    cloze: {
      answer: "dem",
      start: 10,
      end: 13,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "A2",
    difficulty: 0.38,
    tags: ["services"]
  },
  {
    id: "de-services-a2-07",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich sehe den neuen Mechaniker heute.",
    cloze: {
      answer: "neuen",
      start: 13,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "A2",
    difficulty: 0.38,
    tags: ["services"]
  },
  {
    id: "de-services-a2-08",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Mechaniker ist heute frueh angekommen.",
    cloze: {
      answer: "ist",
      start: 15,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "A2",
    difficulty: 0.39,
    tags: ["services"]
  },
  {
    id: "de-services-b1-09",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Ich arbeite mit dem neuen Mechaniker, weil das Thema wichtig ist.",
    cloze: {
      answer: "neuen",
      start: 20,
      end: 25,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "B1",
    difficulty: 0.54,
    tags: ["services"]
  },
  {
    id: "de-services-b1-10",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Im Bereich Service ruft er den Kunden spaet an.",
    cloze: {
      answer: "an",
      start: 44,
      end: 46,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.verb.separable.praesens"],
    level: "B1",
    difficulty: 0.55,
    tags: ["services"]
  },
  {
    id: "de-services-b1-11",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach dem Treffen spreche ich mit dem Mechaniker ueber Service.",
    cloze: {
      answer: "dem",
      start: 5,
      end: 8,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.mit.dative"],
    level: "B1",
    difficulty: 0.55,
    tags: ["services"]
  },
  {
    id: "de-services-b1-12",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie beobachtet den Mechaniker, der die Lage erklaert.",
    cloze: {
      answer: "den",
      start: 15,
      end: 18,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.akkusativ.object"],
    level: "B1",
    difficulty: 0.56,
    tags: ["services"]
  },
  {
    id: "de-services-b2-13",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der aktuelle Mechaniker praesentiert die Zahlen, obwohl der Druck hoch ist.",
    cloze: {
      answer: "aktuelle",
      start: 4,
      end: 12,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.nom.masc"],
    level: "B2",
    difficulty: 0.76,
    tags: ["services"]
  },
  {
    id: "de-services-b2-14",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Die Analyse ist fuer den Mechaniker gedacht, obwohl die Frist knapp ist.",
    cloze: {
      answer: "den",
      start: 21,
      end: 24,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.fuer.akkusativ"],
    level: "B2",
    difficulty: 0.76,
    tags: ["services"]
  },
  {
    id: "de-services-b2-15",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Mechaniker hat den Vertrag sorgfaeltig geprueft.",
    cloze: {
      answer: "hat",
      start: 15,
      end: 18,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.haben"],
    level: "B2",
    difficulty: 0.77,
    tags: ["services"]
  },
  {
    id: "de-services-b2-16",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie vertraut dem Mechaniker, weil seine Argumente klar sind.",
    cloze: {
      answer: "dem",
      start: 13,
      end: 16,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.case.dativ.object"],
    level: "B2",
    difficulty: 0.77,
    tags: ["services"]
  },
  {
    id: "de-services-c1-17",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Sie diskutieren den komplexen Mechaniker, der seit Jahren Einfluss hat.",
    cloze: {
      answer: "komplexen",
      start: 20,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.akk.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["services"]
  },
  {
    id: "de-services-c1-18",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Er arbeitet mit dem relevanten Mechaniker, um langfristige Ziele zu erreichen.",
    cloze: {
      answer: "relevanten",
      start: 20,
      end: 30,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.adj.definite.dat.masc"],
    level: "C1",
    difficulty: 0.93,
    tags: ["services"]
  },
  {
    id: "de-services-c1-19",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Nach langen Verhandlungen ist der Mechaniker schliesslich zur Sitzung gekommen.",
    cloze: {
      answer: "ist",
      start: 26,
      end: 29,
      distractors: ["das", "hat", "ist"]
    },
    ruleIds: ["de.perfekt.sein"],
    level: "C1",
    difficulty: 0.94,
    tags: ["services"]
  },
  {
    id: "de-services-c1-20",
    language: "de",
    exerciseType: "cloze_text",
    promptText: "Der Bericht handelt von dem Mechaniker, dessen Rolle im Bereich Service oft unterschaetzt wird.",
    cloze: {
      answer: "dem",
      start: 24,
      end: 27,
      distractors: ["dem", "den", "der"]
    },
    ruleIds: ["de.prep.von.dative"],
    level: "C1",
    difficulty: 0.94,
    tags: ["services"]
  },
];
