// A tiny shared parallax engine: ONE passive scroll listener, rAF-throttled,
// writing transforms straight to the DOM (no React re-render per frame).
// Every registered element's callback runs on each frame with the latest
// scrollY. Automatically inert when the user prefers reduced motion.

const items = new Set();
let ticking = false;
let attached = false;

const reduced =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function frame() {
  const y = window.scrollY || window.pageYOffset || 0;
  items.forEach((item) => item.fn(item.el, y));
  ticking = false;
}

function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(frame);
}

function ensureListeners() {
  if (attached || typeof window === "undefined") return;
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  attached = true;
}

export function register(item) {
  if (reduced || typeof window === "undefined") return () => {};
  ensureListeners();
  items.add(item);
  // position immediately so there's no first-scroll jump
  item.fn(item.el, window.scrollY || 0);
  return () => items.delete(item);
}

export const prefersReducedMotion = reduced;
