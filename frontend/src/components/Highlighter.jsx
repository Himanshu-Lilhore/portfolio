const HL = {
  sky: "decoration-sky-400/70",
  violet: "decoration-violet-400/70",
  lime: "decoration-lime-400/70",
  rose: "decoration-rose-400/70",
  teal: "decoration-teal-300/70",
  pink: "decoration-pink-400/70",
  indigo: "decoration-indigo-400/70",
  emerald: "decoration-emerald-400/70",
};

const GLOW = {
  sky: "bg-sky-400/25",
  violet: "bg-violet-400/25",
  lime: "bg-lime-400/25",
  rose: "bg-rose-400/25",
  teal: "bg-teal-300/25",
  pink: "bg-pink-400/25",
  indigo: "bg-indigo-400/25",
  emerald: "bg-emerald-400/25",
};

/**
 * Inline highlight — a marker underline plus a soft glow behind the word.
 * A refined take on the original portfolio's highlighter marks.
 */
export default function Highlighter({ color = "sky", children }) {
  return (
    <span className="relative mx-[0.1em] inline-block font-medium text-white">
      <span
        aria-hidden="true"
        className={`absolute inset-x-[-0.15em] top-1/2 h-[0.85em] -translate-y-1/2 rounded blur-[6px] ${GLOW[color] || GLOW.sky}`}
      />
      <span
        className={`relative underline decoration-2 underline-offset-4 ${HL[color] || HL.sky}`}
      >
        {children}
      </span>
    </span>
  );
}
