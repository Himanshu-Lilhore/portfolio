import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";
import { scrollToId } from "../lib/scroll";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = ["home", ...LINKS.map((l) => l.id)];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-ink-950/70 shadow-card backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container-p flex h-16 items-center justify-between">
        <a href="#home" onClick={go("home")} className="group flex items-center gap-2.5">
          <img src="/logo.svg" alt="" className="h-8 w-8 transition-transform group-hover:rotate-12" />
          <span className="font-display text-lg font-bold text-white">
            {profile.firstName}
            <span className="text-brand">.</span>
          </span>
        </a>

        {/* desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={go(l.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === l.id ? "text-brand" : "text-slate-300 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href={profile.resume} download={profile.resumeFileName} className="btn-primary ml-2 px-5 py-2 text-sm">
            Résumé
          </a>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 grid h-10 w-10 place-items-center rounded-full text-white md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`fixed inset-0 top-16 z-40 bg-ink-950/95 backdrop-blur-lg transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container-p flex flex-col gap-1 pt-6">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={go(l.id)}
                className={`rounded-xl px-4 py-4 text-lg font-medium transition-colors ${
                  active === l.id ? "bg-white/5 text-brand" : "text-slate-200 hover:bg-white/5"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.resume}
              download={profile.resumeFileName}
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 w-full"
            >
              Download résumé
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
