import Section from "./Section";
import Highlighter from "./Highlighter";
import { profile } from "../data/profile";

export default function About() {
  return (
    <Section id="about" eyebrow="Who am I" title="A developer who sweats the details">
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-slate-300 sm:text-xl">
          {profile.about.map((line, i) => (
            <p key={i}>
              {line.map((seg, j) =>
                seg.hl ? (
                  <Highlighter key={j} color={seg.hl}>
                    {seg.t}
                  </Highlighter>
                ) : (
                  <span key={j}>{seg.t}</span>
                )
              )}
            </p>
          ))}
        </div>

        <div className="lg:pl-4">
          <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
            {profile.stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5 text-center lg:text-left">
                <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
