// Tests rapides (Node) : algorithme SRS (SM-2) et couche Storage (repli mémoire).
import { newCard, review, isDue, previewIntervals, dueLabel } from "./www/js/srs.js";
import { Storage, computeStreak, levelFromXp, todayStr } from "./www/js/storage.js";

let pass = 0, fail = 0;
function assert(cond, msg) { if (cond) { pass++; } else { fail++; console.error("  ✗", msg); } }

// ---- SRS / SM-2 ----
let c = newCard();
assert(c.ef === 2.5 && c.reps === 0, "carte neuve : EF=2.5, reps=0");
c = review(c, "good");
assert(c.reps === 1 && c.interval === 1, "1ʳᵉ bonne réponse → interval 1 j");
c = review(c, "good");
assert(c.interval === 6, "2ᵉ bonne réponse → interval 6 j");
c = review(c, "good");
assert(c.interval === Math.round(6 * c.ef), "3ᵉ → interval = 6 × EF (arrondi)");
let d = review(newCard(), "again");
assert(d.reps === 0 && d.lapses === 1, "again : reps=0 et lapse +1");
assert(d.ef >= 1.3, "EF jamais < 1.3");
assert(review(newCard(), "easy").interval >= 1, "easy : interval >= 1");
const prev = previewIntervals(newCard());
assert(prev.again && prev.good, "aperçu des intervalles disponible");
assert(isDue({ due: 0 }) === true, "carte due si due<=now");
assert(typeof dueLabel(newCard()) === "string", "dueLabel renvoie une chaîne");

// ---- Streak ----
assert(computeStreak(null, "2026-06-29", 0) === 1, "streak initial = 1");
assert(computeStreak("2026-06-28", "2026-06-29", 3) === 4, "jour consécutif → +1");
assert(computeStreak("2026-06-29", "2026-06-29", 3) === 3, "même jour → inchangé");
assert(computeStreak("2026-06-20", "2026-06-29", 5) === 1, "trou → reset à 1");

// ---- Niveaux ----
assert(levelFromXp(0).index === 0, "0 XP → premier niveau");
assert(levelFromXp(800).index >= 3, "800 XP → niveau 3ᵉ année ou +");
assert(levelFromXp(99999).isMax === true, "XP très élevé → niveau max");

// ---- Storage (repli mémoire en Node) ----
Storage.saveSettings({ theme: "sombre" });
assert(Storage.getSettings().theme === "sombre", "réglages persistés");
Storage.saveProfile({ prenom: "Test" });
assert(Storage.getProfile().prenom === "Test", "profil persisté");
const xpBefore = Storage.getProfile().totalXp;
Storage.addXp(50);
assert(Storage.getProfile().totalXp === xpBefore + 50, "addXp incrémente l'XP");
Storage.recordQcm("3", true);
assert(Storage.ueMastery("3") === 100, "maîtrise module = 100% après 1 bonne réponse");
Storage.saveCard("x1", review(newCard(), "good"));
assert(Storage.getCard("x1") !== null, "carte SRS sauvegardée");
assert(typeof todayStr() === "string" && todayStr().length === 10, "todayStr format AAAA-MM-JJ");
const dump = Storage.exportAll();
assert(dump._app === "aideso", "export valide");

console.log(`\n${pass} tests réussis, ${fail} échec(s).`);
if (fail) process.exit(1);
