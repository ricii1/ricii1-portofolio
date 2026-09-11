import Image from "next/image";
import { experience } from "@/data/experience";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 pb-24">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight">
        Experience
      </h2>
      <div className="border-t border-panel">
        {experience.map((item, i) => (
          <Reveal key={item.index} delay={i * 0.08}>
            <article className="group grid gap-6 border-b border-panel py-8 transition-all duration-300 hover:border-l-2 hover:border-l-signal hover:bg-panel/20 hover:pl-4 md:grid-cols-[64px_200px_1fr]">
              <span className="font-mono text-sm text-muted">
                {item.index}
              </span>
              <div
                className="relative w-full overflow-hidden border border-panel md:w-[200px]"
                style={{ aspectRatio: item.imageAspect ?? "16/9" }}
              >
                <Image
                  src={item.image}
                  alt={item.role}
                  fill
                  sizes="200px"
                  className={`object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                    item.imagePosition === "top"
                      ? "object-top"
                      : item.imagePosition === "bottom"
                        ? "object-bottom"
                        : "object-center"
                  }`}
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium transition-colors group-hover:text-signal">
                  {item.role}
                </h3>
                <p className="font-mono text-[11px] text-muted">{item.org}</p>
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
