import TechBadge from "./TechBadge";

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-brand/60 hover:text-brand"
    >
      {children}
    </a>
  );
}

export default function ProjectCard({ project }) {
  const { title, img, github, link, tagline, tech, featured } = project;

  return (
    <article
      className={`glass group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card ${
        featured ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className="relative aspect-[16/10] transform-gpu overflow-hidden bg-ink-800 [clip-path:inset(0)]">
        <img
          src={encodeURI(img)}
          alt={`${title} screenshot`}
          loading="lazy"
          className="h-full w-full transform-gpu object-cover object-top transition-transform duration-500 will-change-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
        {featured && (
          <span className="absolute left-3 top-3 rounded-full bg-coral/90 px-2.5 py-1 text-xs font-semibold text-ink-950">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <TechBadge key={t} name={t} className="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-300" />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2 pt-1">
          {github && (
            <IconLink href={github} label={`${title} on GitHub`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" /></svg>
              Code
            </IconLink>
          )}
          {link && (
            <IconLink href={link} label={`${title} live demo`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6M10 14 21 3" /></svg>
              Live
            </IconLink>
          )}
        </div>
      </div>
    </article>
  );
}
