import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950/60">
      <div className="container-p flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="" className="h-7 w-7" />
          <span className="font-display font-semibold text-white">{profile.name}</span>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} · Built with React &amp; Tailwind
        </p>
      </div>
    </footer>
  );
}
