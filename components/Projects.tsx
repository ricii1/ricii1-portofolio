import Image from "next/image";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 pb-24">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight">Projects</h2>
      <div className="border-t border-panel">
        {projects.map((project, i) => (
          <Reveal key={project.index} delay={i * 0.08}>
          <article
            className="group grid gap-6 border-b border-panel py-8 transition-all duration-300 hover:border-l-2 hover:border-l-signal hover:bg-panel/20 hover:pl-4 md:grid-cols-[64px_200px_1fr]"
          >
            <span className="font-mono text-sm text-muted">
              {project.index}
            </span>
            <div className="relative aspect-video w-full overflow-hidden border border-panel md:w-[200px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="200px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium transition-colors group-hover:text-signal">
                {project.title}
              </h3>
              <p className="max-w-[60ch] text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-panel px-2 py-1 font-mono text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="flex flex-wrap gap-4 pt-1">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-foreground underline decoration-panel underline-offset-4 transition-colors hover:text-signal hover:decoration-signal"
                    >
                      {link.label}
                    </a>
                  </li>
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
