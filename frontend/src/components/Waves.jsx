import { useParallax } from "../hooks/useParallax";
import { usePointerParallax } from "../hooks/usePointerParallax";

const W = 1440;
const H = 160;

/**
 * Seamless wave path from a sine with a whole number of periods across the
 * viewBox width: height AND slope match at x=0 and x=W, so tiled copies join
 * with no step or kink and the drift loops perfectly.
 */
function buildWave(periods, amplitude, baseline, phase = 0) {
  let d = `M0,${(baseline - amplitude * Math.sin(phase)).toFixed(2)}`;
  for (let x = 0; x <= W; x += 8) {
    const y = baseline - amplitude * Math.sin((2 * Math.PI * periods * x) / W + phase);
    d += ` L${x},${y.toFixed(2)}`;
  }
  d += ` L${W},${H} L0,${H} Z`;
  return d;
}

// Back → front (increasing baseline = lower crest).
// - mx: pointer shift (px) at full deflection. ALL negative, so every layer
//   moves opposite to the pointer; magnitude GROWS toward the front, so the
//   closest wave moves most and the farthest least — pure depth, no layer ever
//   moving "with" the pointer.
// - scroll: extra upward travel per scrolled px. GROWS toward the front, so as
//   the ocean rises the near waves climb faster than the far ones.
// - The frontmost layer is filled ink-950 (the next section's colour) so the
//   ocean fuses into the content with no visible edge.
const LAYERS = [
  { periods: 2, amp: 26, base: 58, phase: 0.0, fill: "fill-brand-600", opacity: 0.22, anim: "animate-wave-1", mx: -10, scroll: 0.03 },
  { periods: 3, amp: 22, base: 74, phase: 1.1, fill: "fill-brand-600", opacity: 0.32, anim: "animate-wave-2", mx: -26, scroll: 0.08 },
  { periods: 2, amp: 20, base: 90, phase: 2.3, fill: "fill-brand-500", opacity: 0.5, anim: "animate-wave-3", mx: -46, scroll: 0.15 },
  { periods: 4, amp: 18, base: 104, phase: 0.6, fill: "fill-brand-500", opacity: 0.72, anim: "animate-wave-4", mx: -68, scroll: 0.22 },
  { periods: 3, amp: 16, base: 120, phase: 3.0, fill: "fill-ink-950", opacity: 1, anim: "animate-wave-5", mx: -92, scroll: 0.3, tail: true },
];

function Layer({ periods, amp, base, phase, fill, opacity, anim, mx, scroll, tail }) {
  const d = buildWave(periods, amp, base, phase);

  // Three separate elements so the three transforms never overwrite each other:
  // outer = scroll depth (translateY), middle = pointer depth (translateX),
  // inner = automatic horizontal drift.
  const scrollRef = useParallax((el, y) => {
    el.style.transform = `translate3d(0, ${-scroll * y}px, 0)`;
  });
  const pointerRef = usePointerParallax((el, nx) => {
    el.style.transform = `translate3d(${nx * mx}px, 0, 0)`;
  });

  return (
    <div ref={scrollRef} className="absolute inset-0 will-change-transform">
      <div ref={pointerRef} className="absolute inset-0 will-change-transform">
        {/* Three tiled copies, offset one copy to the LEFT (-left-full) so a
            full copy of overhang sits on each side of the viewport. However far
            the drift or pointer shifts them, the viewport is always covered. */}
        <div className={`absolute -left-full bottom-0 flex h-full w-[300%] ${anim}`} style={{ opacity }}>
          <svg className={`h-full w-1/3 ${fill}`} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
            <path d={d} />
          </svg>
          <svg className={`h-full w-1/3 ${fill}`} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
            <path d={d} />
          </svg>
          <svg className={`h-full w-1/3 ${fill}`} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
            <path d={d} />
          </svg>
        </div>
        {/* Solid ocean body under the front crest. It starts high enough to
            overlap the wave fill (top-[86%], below the lowest crest point) and
            runs far down behind the next section (same colour), and is extra
            wide so pointer shifts never expose an edge. Result: everything
            below the front wave is one seamless ink surface — no line, no gap. */}
        {tail && <div className="absolute -left-full top-[86%] h-[400vh] w-[300%] bg-ink-950" />}
      </div>
    </div>
  );
}

/**
 * The ocean surface — five layered, seamlessly drifting waves that form the
 * top edge of the rising reveal panel. Motion is primarily pointer-driven (all
 * layers move opposite the pointer, nearer ones more) over a slow automatic
 * drift; on scroll the near layers climb faster than the far ones. No vertical
 * overflow clipping, so the crests can rise up over the hero.
 */
export default function Waves({ className = "" }) {
  return (
    <div className={`pointer-events-none relative w-full ${className}`}>
      {LAYERS.map((l, i) => (
        <Layer key={i} {...l} />
      ))}
    </div>
  );
}
