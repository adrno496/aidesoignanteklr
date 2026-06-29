# AideSo — Révision Aide-Soignant·e 💗

**AideSo** est une application web (PWA) de révision pour les **élèves aides-soignant·e·s (DEAS)**. Elle regroupe les **10 modules** de la formation et tout ce qu'il faut pour réussir, jusqu'à la **certification**.

> Aide à la révision basée sur le référentiel de l'**arrêté du 10 juin 2021** (5 blocs de compétences, 11 compétences, 10 modules). Le contenu ne remplace pas les cours officiels ni les protocoles en vigueur.

## ✨ Fonctionnalités

- **Cours & fiches** organisés par Bloc de compétences → Module, avec recherche, favoris, lecture vocale et glossaire cliquable.
- **QCM corrigés** par module / bloc, avec explication et référence.
- **Flashcards à répétition espacée** (algorithme SM-2) — révision intelligente du jour.
- **Mode examen blanc** chronométré, avec correction détaillée.
- **Situations professionnelles** : mises en situation à analyser (conduite à tenir, transmissions).
- **Module DEAS** : blocs & compétences, stages (4 périodes), AFGSU 2, certification par blocs, champ de compétences AS vs IDE, passerelles, conseils.
- **Boîte à outils** : constantes par âge, manutention/mobilisation, hygiène & précautions, bionettoyage, 14 besoins de Henderson, scores (Norton…), démarche de soins, transmissions DAR, glossaire.
- **Progression & gamification** : XP, niveaux (Élève AS → AS référent·e), séries, succès, défis hebdomadaires, statistiques par module, heatmap.
- **100 % hors-ligne** (PWA installable), thèmes clair/sombre, accessibilité.
- **Tuteur IA optionnel** (désactivé par défaut, clé API personnelle — Mistral par défaut).
- **Mes données** restent sur l'appareil — export / import de sauvegarde.

## 🧱 Stack

Vanilla JS (ES modules, **sans build**) · PWA (service worker + manifest) · `localStorage` + `IndexedDB` · Capacitor (Android) · déploiement Vercel statique.

## 🚀 Démarrer

```bash
npm run serve        # sert www/ sur http://localhost:5173
```

## ✅ Tests

```bash
npm run check        # node --check sur tous les modules + tests SM-2/Storage
node test-render.mjs # rendu de tous les écrans (shim DOM, hors navigateur)
```

## 📁 Structure

```
www/js/
├── app.js · storage.js · srs.js · gamification.js · themes.js · tts.js · ...
├── ui-*.js                    # panneaux (accueil, cours, entraînement, DEAS, outils, profil, réglages)
└── content/
    ├── referentiel.js         # 5 blocs, 11 compétences, 10 modules, stages
    ├── outils.js · glossaire.js · deas.js
    └── packs/*.js             # contenu par module (fiches, QCM, flashcards, situations)
```

Ajouter du contenu = ajouter un fichier dans `content/packs/` et l'inscrire dans `content/index.js`.

---

*Bon courage pour le DEAS ! 💗*
