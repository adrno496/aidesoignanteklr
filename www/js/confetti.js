// Petite explosion de confettis (réussite, montée de niveau). Pas de dépendance.
const COLORS = ["#0f766e", "#14b8a6", "#2563eb", "#d97706", "#7c3aed", "#15803d"];

export function confettiBurst(count = 80) {
  if (typeof document === "undefined") return;
  if (document.documentElement.getAttribute("data-motion") === "reduce") return;
  const frag = document.createDocumentFragment();
  const pieces = [];
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "confetti-piece";
    const left = Math.random() * 100;
    const color = COLORS[(Math.random() * COLORS.length) | 0];
    p.style.left = left + "vw";
    p.style.background = color;
    p.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    frag.appendChild(p);
    pieces.push({ el: p, x: left, y: -2, vx: (Math.random() - 0.5) * 0.6, vy: 0.4 + Math.random() * 0.8, rot: Math.random() * 360, vr: (Math.random() - 0.5) * 24 });
  }
  document.body.appendChild(frag);
  const start = performance.now();
  function tick(t) {
    const dt = Math.min(40, t - (tick._last || t)); tick._last = t;
    let alive = false;
    for (const p of pieces) {
      p.y += p.vy * dt * 0.06; p.x += p.vx * dt * 0.06; p.rot += p.vr * dt * 0.02;
      p.el.style.transform = `translate(${p.x - parseFloat(p.el.style.left)}vw, ${p.y}vh) rotate(${p.rot}deg)`;
      if (p.y < 110) alive = true;
    }
    if (alive && t - start < 4000) requestAnimationFrame(tick);
    else pieces.forEach((p) => p.el.remove());
  }
  requestAnimationFrame(tick);
}
