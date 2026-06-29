# AideSo — notes pour Claude Code

App PWA de révision DEAS (élèves aides-soignant·e·s). **Vanilla JS, ES modules, AUCUN build.** Dérivée de l'app "Infi" (même moteur).

## Règles
- Pas de framework, pas de bundler. Tout sert directement depuis `www/`.
- Lancer `npm run check` après toute modif JS (doit rester valide en ESM).
- DOM via le helper `el(tag, attrs, children)` de `js/app.js`.
- Persistance via `js/storage.js` (namespace `aideso_`).
- Tout le texte visible est en **français**.
- **Champ AS** : ne pas inclure de contenu hors rôle aide-soignant (injections, calcul de doses, actes IDE). Rappeler la collaboration avec l'IDE.

## Contenu
- `www/js/content/packs/*.js` (un pack par module : `mod_1`…`mod_10`, plus `transversal` et `situations`).
- Format : `export const fiches = [...]; export const qcm = [...]; export const flashcards = [...]; export const cas = [...];`
- Champ d'appartenance : `mod` (id de module "1".."10"). Manifeste dans `js/content/index.js` (`PACK_FILES`).
- QCM : `{ mod, q, options:[...], correct:<index 0-based>, explication, ref, diff }`.
- Référence officielle : arrêté du 10 juin 2021 (5 blocs, 11 compétences, 10 modules).

## Tests
- `npm run check` → `node --check` + `test.mjs` (SM-2, Storage).
- `node test-render.mjs` → rend chaque panneau via un shim DOM.

## Déploiement
- Vercel statique (`vercel.json`, `outputDirectory: www`). URL : aidesoignanteklr.vercel.app.
- Capacitor (`appId: app.aideso.revision`) pour un build Android ultérieur.
