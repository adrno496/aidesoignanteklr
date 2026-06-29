// Bannière de mise à jour du service worker.
import { el } from "./app.js";

export function installUpdateBanner() {
  window.addEventListener("sw-update-available", (e) => {
    if (document.querySelector(".update-banner")) return;
    const banner = el("div", { class: "update-banner" }, [
      el("span", {}, ["Une nouvelle version est disponible."]),
      el("button", {
        class: "btn btn-sm",
        style: { background: "#fff", color: "var(--accent-strong)" },
        onclick: () => {
          try { e.detail?.sw?.postMessage?.("skipWaiting"); } catch {}
          window.location.reload();
        },
      }, ["Mettre à jour"]),
    ]);
    document.body.appendChild(banner);
  });
}
