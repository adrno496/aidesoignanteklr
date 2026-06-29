// Tuteur IA optionnel (désactivé par défaut). L'utilisateur fournit sa propre clé API (BYO key).
// Fournisseur par défaut : Mistral (https://console.mistral.ai). Anthropic reste disponible en option.
import { Storage } from "./storage.js";

export function isAiEnabled() {
  const s = Storage.getSettings();
  return !!(s.aiEnabled && s.aiKey && s.aiKey.length > 10);
}

const SYSTEM = `Tu es un tuteur pédagogique expert pour une élève aide-soignant·e française (DEAS, arrêté du 10 juin 2021 : 5 blocs de compétences, 11 compétences, 10 modules de formation).
Tu maîtrises tout le programme : accompagnement dans la vie quotidienne et les 14 besoins, prévention des risques (chutes, escarres, fausses routes, dénutrition), évaluation de l'état clinique et constantes, soins d'hygiène et de confort, mobilité et manutention, relation et communication, bionettoyage et hygiène, transmissions, travail en équipe et qualité.
On peut te fournir des EXTRAITS DE FICHES de l'application : si présents et pertinents, base ta réponse dessus en priorité.
Tu expliques de façon claire, structurée et fiable, en français, adaptée au niveau élève aide-soignant·e (avec moyens mnémotechniques quand utile).
Tu restes STRICTEMENT dans le champ de compétences de l'aide-soignant·e (soins d'hygiène, confort, mobilisation, mesure des constantes, observation, transmissions, en collaboration avec l'IDE) et tu rappelles ce qui relève de l'infirmier·ère. Tes réponses ne remplacent pas les cours ni les protocoles officiels ; tu n'inventes jamais de posologie.`;

// ---- Mistral (La Plateforme) ----
async function askMistral(s, userPrompt, maxTokens) {
  const res = await fetch("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": "Bearer " + s.aiKey },
    body: JSON.stringify({
      model: s.aiModel || "mistral-small-latest",
      max_tokens: maxTokens,
      temperature: 0.4,
      messages: [{ role: "system", content: SYSTEM }, { role: "user", content: userPrompt }],
    }),
  });
  if (!res.ok) {
    let detail = ""; try { detail = (await res.json())?.message || (await res.text?.()) || ""; } catch {}
    throw new Error(`Erreur Mistral (${res.status}). ${detail}`);
  }
  const data = await res.json();
  return (data.choices?.[0]?.message?.content || "").trim() || "(réponse vide)";
}

// ---- Anthropic (Claude) ----
async function askAnthropic(s, userPrompt, maxTokens) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": s.aiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: s.aiModel || "claude-haiku-4-5-20251001",
      max_tokens: maxTokens,
      system: SYSTEM,
      messages: [{ role: "user", content: userPrompt }],
    }),
  });
  if (!res.ok) {
    let detail = ""; try { detail = (await res.json())?.error?.message || ""; } catch {}
    throw new Error(`Erreur API (${res.status}). ${detail}`);
  }
  const data = await res.json();
  return (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n").trim() || "(réponse vide)";
}

export async function ask(userPrompt, { maxTokens = 900 } = {}) {
  const s = Storage.getSettings();
  if (!isAiEnabled()) throw new Error("Le tuteur IA est désactivé. Active-le dans Réglages et ajoute ta clé API.");
  return s.aiProvider === "anthropic" ? askAnthropic(s, userPrompt, maxTokens) : askMistral(s, userPrompt, maxTokens);
}

export const Prompts = {
  explain: (sujet) => `Explique simplement et en quelques points, pour une élève aide-soignant·e, le sujet suivant, avec un moyen mnémotechnique si possible : "${sujet}". Reste dans le champ de l'aide-soignant·e.`,
  quizMe: (sujet) => `Pose-moi 3 questions de type QCM (avec la bonne réponse et une courte justification), niveau aide-soignant·e, sur : "${sujet}".`,
  case: (mod) => `Génère une courte situation professionnelle réaliste d'aide-soignant·e pour le module "${mod}", avec 3 questions et leur corrigé (conduite à tenir dans le champ AS).`,
};
