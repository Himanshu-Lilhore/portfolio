// Smooth-scroll to a section so its top sits just under the fixed navbar.
// Using a manual scroll (rather than scrollIntoView) is reliable even with the
// sticky hero in play, which otherwise throws off the landing position.
const NAV_OFFSET = 72;

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}
