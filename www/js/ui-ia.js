// Panneau « Demander à l'IA » : mini-chat avec le tuteur IA (optionnel, clé API dans Réglages).
// L'IA reçoit en contexte les fiches les plus pertinentes de l'app (récupération par mots-clés).
import { el, toast, navigate } from "./app.js";
import { isAiEnabled, ask } from "./ai-client.js";
import { allFiches } from "./content/index.js";

let _history = []; // { role: "user" | "ai", text }

const STOP = new Set("le la les un une des de du au aux et ou en dans pour par sur sous avec sans que qui quoi est sont quel quelle quels quelles comment pourquoi explique expliquer donne donner moi mon ma mes ton ta tes cette ces son ses leur plus tres entre quand chez vers".split(" "));
function deburr(s) { return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
function keywords(q) { return [...new Set(deburr(q).split(/[^a-z0-9]+/).filter((w) => w.length >= 4 && !STOP.has(w)))]; }
function stripHtml(h) { return String(h || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(); }

// Récupère jusqu'à 3 fiches pertinentes et construit le contexte à transmettre à l'IA.
function retrieve(question) {
  const kws = keywords(question);
  if (!kws.length) return "";
  const scored = allFiches().map((f) => {
    const hay = deburr(f.titre + " " + (f.tags || []).join(" ") + " " + (f.resume || ""));
    let s = 0; for (const k of kws) if (hay.includes(k)) s += 2;
    const body = deburr(stripHtml(f.html)); for (const k of kws) if (body.includes(k)) s += 1;
    return { f, s };
  }).filter((x) => x.s > 0).sort((a, b) => b.s - a.s).slice(0, 3);
  if (!scored.length) return "";
  return scored.map(({ f }) => "### " + f.titre + "\n" + stripHtml(f.html).slice(0, 700)).join("\n\n");
}

function buildPrompt(question) {
  const ctx = retrieve(question);
  return (ctx ? "Extraits de fiches de l'application (utilise-les en priorité s'ils sont pertinents, sinon réponds avec tes connaissances) :\n\n" + ctx + "\n\n---\n" : "") + "Question de l'étudiant·e : " + question;
}

export function renderIa(root) {
  root.appendChild(el("div", { class: "panel-head flex-between" }, [
    el("div", {}, [el("h1", {}, ["🤖 Demander à l'IA"]), el("div", { class: "sub" }, ["Pose une question, demande une explication ou un QCM."])]),
    _history.length ? el("button", { class: "btn btn-ghost btn-sm", onclick: () => { _history = []; navigate("ia"); } }, ["Effacer"]) : null,
  ]));

  if (!isAiEnabled()) {
    root.appendChild(el("div", { class: "card" }, [
      el("div", { class: "center", style: { padding: "6px 0 4px" } }, [el("div", { style: { fontSize: "2.4rem" } }, ["🤖"])]),
      el("p", { class: "small muted" }, ["Le tuteur IA est désactivé. Active-le et ajoute ta clé API (Mistral par défaut, ou Anthropic) dans les Réglages pour poser tes questions."]),
      el("button", { class: "btn btn-block mt", onclick: () => navigate("settings") }, ["⚙️ Aller aux Réglages"]),
    ]));
    return;
  }

  const logEl = el("div", { class: "list", style: { marginBottom: "12px" } });
  root.appendChild(logEl);
  renderLog();

  root.appendChild(el("div", { class: "chips mb" }, [
    ["💡 Explique-moi…", "Explique-moi simplement "],
    ["🎯 Génère un QCM…", "Pose-moi 3 QCM (avec corrigé) sur "],
    ["📝 Résume…", "Résume en points clés "],
    ["🧠 Moyen mnémo…", "Donne-moi un moyen mnémotechnique pour "],
  ].map(([lbl, prefix]) => el("button", { class: "chip", onclick: () => { input.value = prefix; input.focus(); } }, [lbl]))));

  const input = el("textarea", { placeholder: "Ta question…  (Ctrl/⌘ + Entrée pour envoyer)", style: { minHeight: "72px" } });
  const send = el("button", { class: "btn btn-block mt", onclick: doAsk }, ["Envoyer"]);
  root.appendChild(el("div", { class: "field" }, [input]));
  root.appendChild(send);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) doAsk(); });

  root.appendChild(el("p", { class: "disclaimer" }, ["L'IA peut se tromper — vérifie les informations importantes avec tes cours et les protocoles officiels."]));

  function renderLog() {
    logEl.innerHTML = "";
    if (!_history.length) { logEl.appendChild(el("div", { class: "empty small" }, ["Pose ta première question ci-dessous 👇"])); return; }
    _history.forEach((m) => logEl.appendChild(el("div", { class: "card", style: m.role === "user" ? { background: "var(--accent-soft)" } : {} }, [
      el("div", { class: "small", style: { fontWeight: "700", color: m.role === "user" ? "var(--accent-strong)" : "var(--text-secondary)", marginBottom: "4px" } }, [m.role === "user" ? "Toi" : "🤖 Tuteur IA"]),
      el("div", { class: "fiche", style: { whiteSpace: "pre-wrap" } }, [m.text]),
    ])));
  }

  async function doAsk() {
    const q = input.value.trim();
    if (!q) return toast("Écris ta question.", "info");
    _history.push({ role: "user", text: q });
    input.value = ""; renderLog();
    send.setAttribute("disabled", ""); send.textContent = "L'IA réfléchit…";
    const loading = el("div", { class: "card" }, [el("div", { class: "spinner" })]);
    logEl.appendChild(loading);
    try { loading.scrollIntoView && loading.scrollIntoView({ behavior: "smooth", block: "nearest" }); } catch {}
    try {
      const out = await ask(buildPrompt(q));
      _history.push({ role: "ai", text: out });
    } catch (e) { _history.push({ role: "ai", text: "⚠️ " + e.message }); }
    finally { send.removeAttribute("disabled"); send.textContent = "Envoyer"; renderLog(); }
  }
}
