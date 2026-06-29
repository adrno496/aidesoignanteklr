// Application des préférences visuelles (thème, contraste, police, animations) sur <html>.
import { Storage } from "./storage.js";

export function applyAppearance(settings = Storage.getSettings()) {
  const root = document.documentElement;
  root.setAttribute("data-theme", settings.theme || "clair");
  root.setAttribute("data-contrast", settings.contrast || "normal");
  root.setAttribute("data-font", settings.font || "normal");
  root.setAttribute("data-motion", settings.motion === "reduce" ? "reduce" : "auto");
  // Couleur de la barre système
  const dark = settings.theme === "sombre" || settings.theme === "nuit";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", dark ? "#12201c" : "#0f766e");
}

export const THEMES = [
  { id: "clair",   label: "Clair",   swatch: "#0f766e" },
  { id: "sombre",  label: "Sombre",  swatch: "#2dd4bf" },
  { id: "menthe",  label: "Menthe",  swatch: "#059669" },
  { id: "lavande", label: "Lavande", swatch: "#7c3aed" },
  { id: "nuit",    label: "Nuit",    swatch: "#60a5fa" },
];
