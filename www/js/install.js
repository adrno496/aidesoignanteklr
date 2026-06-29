// Installation PWA (ajout à l'écran d'accueil). Capte l'événement beforeinstallprompt et expose l'API.
let _deferred = null;

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    _deferred = e;
    window.dispatchEvent(new CustomEvent("install-available"));
  });
  window.addEventListener("appinstalled", () => { _deferred = null; });
}

export function isStandalone() {
  if (typeof window === "undefined") return false;
  try { return window.matchMedia && window.matchMedia("(display-mode: standalone)").matches; } catch {}
  return window.navigator && window.navigator.standalone === true;
}

export function isIOS() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  return /iphone|ipad|ipod/i.test(ua) || (/(macintosh)/i.test(ua) && "ontouchend" in (typeof document !== "undefined" ? document : {}));
}

export function canPromptInstall() { return !!_deferred; }

export async function promptInstall() {
  if (!_deferred) return false;
  _deferred.prompt();
  let outcome = "dismissed";
  try { outcome = (await _deferred.userChoice)?.outcome || "dismissed"; } catch {}
  _deferred = null;
  return outcome === "accepted";
}
