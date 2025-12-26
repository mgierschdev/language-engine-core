import type { RuleDefinition } from "@le/core";

export const deRules: RuleDefinition[] = [
  { ruleId: "de.prep.mit.dative", baseImportance: 1 },
  { ruleId: "de.prep.fuer.akkusativ", baseImportance: 1 },
  { ruleId: "de.prep.von.dative", baseImportance: 1 },
  { ruleId: "de.case.akkusativ.object", baseImportance: 1 },
  { ruleId: "de.case.dativ.object", baseImportance: 1 },
  { ruleId: "de.adj.definite.nom.masc", baseImportance: 0.8 },
  { ruleId: "de.adj.definite.akk.masc", baseImportance: 0.8 },
  { ruleId: "de.adj.definite.dat.masc", baseImportance: 0.8 },
  { ruleId: "de.perfekt.sein", baseImportance: 0.9 },
  { ruleId: "de.perfekt.haben", baseImportance: 0.9 },
  { ruleId: "de.verb.separable.praesens", baseImportance: 0.7 }
];
