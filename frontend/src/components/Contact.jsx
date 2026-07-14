import Section from "./Section";
import { socials, email } from "../data/socials";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Say hello" title="Let's connect">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        {/* left — pitch + email CTA */}
        <div className="glass flex flex-col justify-between rounded-3xl p-8">
          <div>
            <p className="text-lg leading-relaxed text-slate-300">
              Got a project, a role, or just a good idea? My inbox is always
              open — I&apos;ll do my best to get back to you.
            </p>
          </div>
          <a
            href={`mailto:${email}`}
            className="btn-primary mt-8 w-full sm:w-auto"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
            {email}
          </a>
        </div>

        {/* right — socials grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex items-center gap-3 rounded-xl p-3.5 transition-all hover:-translate-y-0.5 hover:border-brand/40"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/90 p-2">
                <img src={`/ContactLogos/${s.name}.svg`} alt="" className="h-full w-full object-contain" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-white">{s.label}</span>
                <span className="block truncate text-xs text-slate-400">{s.handle}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
