import Section from "./Section";
import TechBadge from "./TechBadge";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills & technologies">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((cat) => (
          <div
            key={cat.group}
            className="glass group rounded-2xl p-6 transition-colors hover:border-brand/40"
          >
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-brand">
              {cat.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <TechBadge
                  key={item}
                  name={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 transition-colors group-hover:border-white/20"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
