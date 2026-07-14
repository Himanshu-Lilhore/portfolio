import { useReveal } from "../hooks/useReveal";

/**
 * Section wrapper with a consistent eyebrow/title header and a
 * reveal-on-scroll fade. Keeps every section visually aligned.
 */
export default function Section({ id, eyebrow, title, children, className = "" }) {
  const [ref, visible] = useReveal();

  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <div
        ref={ref}
        className={`container-p transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {(eyebrow || title) && (
          <header className="mb-12">
            {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
            {title && <h2 className="section-title">{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
