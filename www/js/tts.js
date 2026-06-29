// Synthèse vocale (lecture des fiches à voix haute). Utilise l'API Web Speech.
let _voice = null;

function pickVoice() {
  if (_voice) return _voice;
  if (typeof speechSynthesis === "undefined") return null;
  const voices = speechSynthesis.getVoices();
  _voice = voices.find((v) => /fr[-_]FR/i.test(v.lang)) || voices.find((v) => /^fr/i.test(v.lang)) || null;
  return _voice;
}

if (typeof speechSynthesis !== "undefined") {
  try { speechSynthesis.onvoiceschanged = () => { _voice = null; pickVoice(); }; } catch {}
}

export function isTtsAvailable() {
  return typeof speechSynthesis !== "undefined" && typeof SpeechSynthesisUtterance !== "undefined";
}

export function speak(text, rate = 1.0) {
  if (!isTtsAvailable() || !text) return;
  stopSpeech();
  // Découpe en phrases pour une lecture plus fluide et interruptible.
  const chunks = String(text).replace(/\s+/g, " ").match(/[^.!?]+[.!?]*/g) || [text];
  for (const c of chunks) {
    const u = new SpeechSynthesisUtterance(c.trim());
    u.lang = "fr-FR";
    u.rate = rate;
    const v = pickVoice();
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  }
}

export function stopSpeech() {
  if (isTtsAvailable()) { try { speechSynthesis.cancel(); } catch {} }
}

export function isSpeaking() {
  return isTtsAvailable() && speechSynthesis.speaking;
}
