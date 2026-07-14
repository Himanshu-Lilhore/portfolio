// Shared pointer-parallax engine. ONE pointermove listener updates a target
// position; a self-stopping rAF loop eases the current position toward it and
// calls every registered element's callback with normalised coords in -1..1
// (0,0 = viewport centre). The easing gives motion a smooth, trailing,
// depth-like feel. Fully inert under prefers-reduced-motion.

const items = new Set();

let targetX = 0;
let targetY = 0;
let curX = 0;
let curY = 0;
let running = false;
let attached = false;

const reduced =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function loop() {
  curX += (targetX - curX) * 0.07;
  curY += (targetY - curY) * 0.07;

  items.forEach((item) => item.fn(item.el, curX, curY));

  if (Math.abs(targetX - curX) > 0.0005 || Math.abs(targetY - curY) > 0.0005) {
    requestAnimationFrame(loop);
  } else {
    running = false;
  }
}

function kick() {
  if (!running) {
    running = true;
    requestAnimationFrame(loop);
  }
}

// Below this width (Tailwind's md) we treat it as "mobile" and don't move
// anything with the pointer — matches where the mobile menu kicks in and
// avoids touch-drag nudging the waves.
const MIN_WIDTH = 768;

function onMove(e) {
  if (window.innerWidth < MIN_WIDTH) {
    // ease everything back to rest instead of tracking touch
    targetX = 0;
    targetY = 0;
    kick();
    return;
  }
  targetX = (e.clientX / window.innerWidth) * 2 - 1;
  targetY = (e.clientY / window.innerHeight) * 2 - 1;
  kick();
}

function ensureListeners() {
  if (attached || typeof window === "undefined") return;
  window.addEventListener("pointermove", onMove, { passive: true });
  attached = true;
}

export function registerPointer(item) {
  if (reduced || typeof window === "undefined") return () => {};
  ensureListeners();
  items.add(item);
  item.fn(item.el, curX, curY);
  return () => items.delete(item);
}

export const pointerReducedMotion = reduced;
