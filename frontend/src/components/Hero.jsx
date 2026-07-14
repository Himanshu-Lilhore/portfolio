import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { usePointerParallax } from "../hooks/usePointerParallax";
import { scrollToId } from "../lib/scroll";

function RotatingRole({ roles }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="relative inline-grid">
      {roles.map((role, idx) => (
        <span
          key={role}
          className={`col-start-1 row-start-1 transition-all duration-500 ${
            idx === i ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
          }`}
          aria-hidden={idx !== i}
        >
          {role}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
  };

  // Pointer parallax — every layer reacts to the mouse at a different depth.
  // Content stays fully opaque and pinned; the rising ocean sweeps over it.
  const blobA = usePointerParallax((el, nx, ny) => {
    el.style.transform = `translate3d(${nx * 40}px, ${ny * 30}px, 0)`;
  });
  const blobB = usePointerParallax((el, nx, ny) => {
    el.style.transform = `translate3d(${nx * -34}px, ${ny * -24}px, 0)`;
  });

  return (
    <section
      id="home"
      className="sticky top-0 z-0 flex h-[100svh] items-center overflow-hidden"
    >
      {/* soft aurora blobs */}
      <div ref={blobA} className="pointer-events-none absolute -top-24 right-[-8%] h-[26rem] w-[26rem] rounded-full bg-brand/20 blur-3xl will-change-transform" />
      <div ref={blobB} className="pointer-events-none absolute bottom-10 left-[-8%] h-80 w-80 rounded-full bg-coral/15 blur-3xl will-change-transform" />

      <div className="container-p relative z-10 -mt-10">
        <p className="animate-fade-up font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand">
          Hi there 👋 — I&apos;m
        </p>

        <h1 className="animate-fade-up mt-4 font-display text-5xl font-bold leading-[1.05] text-white sm:text-7xl md:text-8xl" style={{ animationDelay: "80ms" }}>
          <span className="text-gradient bg-[length:200%_auto] animate-gradient-pan">
            {profile.name}
          </span>
        </h1>

        <div className="animate-fade-up mt-5 flex items-center gap-3 text-xl font-medium text-slate-300 sm:text-2xl" style={{ animationDelay: "160ms" }}>
          <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-coral" />
          <RotatingRole roles={profile.roles} />
        </div>

        <p className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg" style={{ animationDelay: "240ms" }}>
          {profile.tagline}
        </p>

        <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "320ms" }}>
          <a href="#projects" onClick={scrollTo("projects")} className="btn-primary">
            View my work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <a href={profile.resume} download={profile.resumeFileName} className="btn-ghost">
            Download résumé
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>
          </a>
          <a href="#contact" onClick={scrollTo("contact")} className="btn-ghost">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
