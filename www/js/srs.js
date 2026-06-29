// Répétition espacée — variante SM-2 (SuperMemo 2). Fonctions pures, testables hors navigateur.
// 4 niveaux de notation : "again" (à revoir), "hard", "good", "easy".

const DAY = 86400000;
const Q = { again: 1, hard: 3, good: 4, easy: 5 };

export function newCard() {
  return { ef: 2.5, interval: 0, reps: 0, due: 0, lapses: 0, seen: 0 };
}

// Calcule le prochain état d'une carte après une réponse.
export function review(card, grade, now = Date.now()) {
  card = { ...newCard(), ...(card || {}) };
  const q = Q[grade] ?? 4;
  card.seen += 1;

  if (q < 3) {
    // Échec : on réapprend dans la session (revient ~1 min plus tard).
    card.reps = 0;
    card.lapses += 1;
    card.interval = 0;
    card.due = now + 60 * 1000;
  } else {
    if (card.reps === 0) card.interval = 1;
    else if (card.reps === 1) card.interval = 6;
    else card.interval = Math.round(card.interval * card.ef);
    if (grade === "hard") card.interval = Math.max(1, Math.round(card.interval * 0.7));
    else if (grade === "easy") card.interval = Math.round(card.interval * 1.3);
    card.reps += 1;
    card.due = now + card.interval * DAY;
  }

  // Mise à jour du facteur de facilité.
  let ef = card.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  card.ef = Math.round(Math.max(1.3, ef) * 1000) / 1000;
  return card;
}

export function isDue(card, now = Date.now()) {
  return !card || (card.due || 0) <= now;
}

// Intervalle suivant (en jours) pour chaque note, sans muter — pour l'aperçu sur les boutons.
export function previewIntervals(card, now = Date.now()) {
  const out = {};
  for (const g of ["again", "hard", "good", "easy"]) {
    const next = review(card, g, now);
    out[g] = next.interval === 0 ? "<1 j" : labelDays(next.interval);
  }
  return out;
}

export function labelDays(d) {
  if (d <= 0) return "<1 j";
  if (d < 30) return `${d} j`;
  if (d < 365) return `${Math.round(d / 30)} mois`;
  return `${(d / 365).toFixed(1)} an`;
}

// Statut lisible de la prochaine échéance d'une carte.
export function dueLabel(card, now = Date.now()) {
  if (!card || !card.due) return "Nouvelle";
  const diff = card.due - now;
  if (diff <= 0) return "À réviser";
  const days = Math.ceil(diff / DAY);
  return `Dans ${labelDays(days)}`;
}
