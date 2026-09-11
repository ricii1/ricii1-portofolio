import { education } from "@/data/education";
import Reveal from "@/components/Reveal";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 pb-24">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight">
        Education
      </h2>
      <div className="border-t border-panel">
        {education.map((item, i) => (
          <Reveal key={item.index} delay={i * 0.08}>
            <article className="group grid gap-6 border-b border-panel py-8 transition-all duration-300 hover:border-l-2 hover:border-l-signal hover:bg-panel/20 hover:pl-4 md:grid-cols-[64px_1fr]">
              <span className="font-mono text-sm text-muted">
                {item.index}
              </span>
              <div className="space-y-3">
                <h3 className="text-sm font-medium transition-colors group-hover:text-signal">
                  {item.degree}
                </h3>
                <p className="font-mono text-[11px] text-muted">
                  {item.school}
                </p>
                <p className="font-mono text-[11px] text-muted">
                  {item.period}
                </p>
                <ul className="max-w-[60ch] list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
