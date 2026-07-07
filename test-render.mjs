// Test de rendu : shim DOM minimal pour exécuter réellement les fonctions render* des panneaux (hors navigateur).
// Objectif : détecter les erreurs runtime à l'initialisation de chaque écran.

class El {
  constructor(tag) { this.tag = tag; this.children = []; this.attributes = {}; this.style = {}; this._cls = new Set(); this.listeners = {}; this._html = ""; this.value = ""; this.dataset = {}; this.parent = null; this._text = ""; }
  set className(v) { this._cls = new Set(String(v).split(/\s+/).filter(Boolean)); }
  get className() { return [...this._cls].join(" "); }
  set innerHTML(v) { this._html = v; if (v === "") this.children = []; }
  get innerHTML() { return this._html; }
  get firstChild() { return this.children[0] || null; }
  appendChild(c) { this.children.push(c); if (c) c.parent = this; return c; }
  removeChild(c) { const i = this.children.indexOf(c); if (i >= 0) this.children.splice(i, 1); return c; }
  remove() { if (this.parent) this.parent.removeChild(this); }
  setAttribute(k, v) { this.attributes[k] = String(v); if (k.startsWith("data-")) this.dataset[k.slice(5)] = String(v); }
  getAttribute(k) { return k in this.attributes ? this.attributes[k] : null; }
  removeAttribute(k) { delete this.attributes[k]; }
  addEventListener(t, fn) { (this.listeners[t] = this.listeners[t] || []).push(fn); }
  get classList() { const s = this._cls; return {
    add: (...c) => c.forEach((x) => s.add(x)),
    remove: (...c) => c.forEach((x) => s.delete(x)),
    toggle: (c, f) => { if (f === undefined) { s.has(c) ? s.delete(c) : s.add(c); } else { f ? s.add(c) : s.delete(c); } return s.has(c); },
    contains: (c) => s.has(c),
  }; }
  querySelector() { return null; }
  querySelectorAll() { return []; }
  scrollIntoView() {}
  focus() {}
  get offsetWidth() { return 0; }
  set textContent(v) { this._text = String(v); this.children = []; }
  get textContent() { return this._text; }
  contains() { return false; }
}

const registry = {};
function reg(id) { const e = new El("div"); e.setAttribute("id", id); registry[id] = e; return e; }
reg("panel-root"); reg("bottom-nav"); reg("toast-root"); reg("modal-root");

globalThis.document = {
  createElement: (t) => new El(t),
  createTextNode: (t) => ({ nodeType: 3, text: String(t) }),
  createDocumentFragment: () => new El("#frag"),
  getElementById: (id) => registry[id] || null,
  body: new El("body"),
  documentElement: new El("html"),
  querySelector: () => null,
  querySelectorAll: () => [],
  addEventListener: () => {},
};
globalThis.window = { addEventListener: () => {}, scrollTo: () => {}, dispatchEvent: () => {}, location: { href: "http://localhost/" } };
globalThis.requestAnimationFrame = () => 0;
globalThis.performance = globalThis.performance || { now: () => 0 };

let pass = 0, fail = 0;
function run(name, fn) {
  const root = registry["panel-root"]; root.children = []; root._html = "";
  try { fn(root); pass++; console.log("  ✓", name); }
  catch (e) { fail++; console.error("  ✗", name, "→", e && e.message); if (process.env.VERBOSE) console.error(e); }
}

const { loadContent } = await import("./www/js/content/index.js");
await loadContent();

const dash = await import("./www/js/ui-dashboard.js");
const cours = await import("./www/js/ui-cours.js");
const ent = await import("./www/js/ui-entrainement.js");
const deas = await import("./www/js/ui-deas.js");
const vae = await import("./www/js/ui-vae.js");
const outils = await import("./www/js/ui-outils.js");
const prof = await import("./www/js/ui-profile.js");
const settings = await import("./www/js/ui-settings.js");
const planner = await import("./www/js/ui-planner.js");
const ia = await import("./www/js/ui-ia.js");

console.log("\nRendu des panneaux :");
run("Dashboard", (r) => dash.renderDashboard(r));
run("Planning", (r) => planner.renderPlanner(r));
run("Demander à l'IA", (r) => ia.renderIa(r));
run("Cours (accueil)", (r) => cours.renderCours(r));
run("Cours (Module 3)", (r) => cours.renderCours(r, { mod: "3" }));
run("Cours (fiche)", (r) => cours.renderCours(r, { ficheId: "f_henderson" }));
run("Entraînement (hub)", (r) => ent.renderEntrainement(r));
run("Entraînement (QCM express)", (r) => ent.renderEntrainement(r, { mode: "qcmRandom" }));
run("Entraînement (flashcards)", (r) => ent.renderEntrainement(r, { mode: "review" }));
run("Entraînement (situations)", (r) => ent.renderEntrainement(r, { mode: "situations" }));
run("DEAS (overview)", (r) => deas.renderDeas(r));
run("VAE (overview)", (r) => vae.renderVae(r));
run("VAE (étape situations)", (r) => vae.renderVae(r, { stepId: "situations" }));
run("VAE (étape oral)", (r) => vae.renderVae(r, { stepId: "oral" }));
run("Outils (hub)", (r) => outils.renderOutils(r));
run("Outils (scores)", (r) => outils.renderOutils(r, { tool: "scores" }));
run("Outils (mobilisation)", (r) => outils.renderOutils(r, { tool: "mobilisation" }));
run("Outils (bionettoyage)", (r) => outils.renderOutils(r, { tool: "bionettoyage" }));
run("Outils (DAR)", (r) => outils.renderOutils(r, { tool: "dar" }));
run("Outils (glossaire)", (r) => outils.renderOutils(r, { tool: "glossaire" }));
run("Profil", (r) => prof.renderProfile(r));
run("Réglages", (r) => settings.renderSettings(r));

console.log(`\n${pass} panneaux rendus, ${fail} échec(s).`);
process.exit(fail ? 1 : 0);
