// Accueil au premier lancement : prénom.
import { el, openModal, closeModal } from "./app.js";
import { Storage } from "./storage.js";

export function shouldShowOnboarding() {
  return !Storage.getSettings().onboarded;
}

export function showOnboarding(opts = {}) {
  const prof = Storage.getProfile();
  let prenom = prof.prenom || "";

  const body = el("div", {}, [
    el("div", { class: "center", style: { marginBottom: "8px" } }, [
      el("div", { style: { fontSize: "3rem" } }, ["💗"]),
      el("h3", {}, ["Bienvenue sur AideSo"]),
      el("p", { class: "muted small" }, [
        "Ton compagnon pour le DEAS : fiches par module, QCM, flashcards, situations professionnelles, gestes, préparation à la certification — et un module dédié si tu prépares le diplôme par la VAE.",
      ]),
    ]),
    el("div", { class: "field" }, [
      el("label", {}, ["Ton prénom (facultatif)"]),
      el("input", { type: "text", id: "ob-prenom", value: prenom, placeholder: "Ton prénom…", oninput: (e) => (prenom = e.target.value) }),
    ]),
    el("button", {
      class: "btn btn-block btn-lg mt",
      onclick: () => {
        Storage.saveProfile({ prenom: prenom.trim() });
        Storage.saveSettings({ onboarded: true });
        closeModal();
        if (opts.onComplete) opts.onComplete();
      },
    }, ["C'est parti →"]),
    el("p", { class: "disclaimer" }, [
      "AideSo est une aide à la révision et ne remplace pas tes cours ni les protocoles officiels en vigueur.",
    ]),
  ]);

  openModal(body, { dismissable: false });
}
