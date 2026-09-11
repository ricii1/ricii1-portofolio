import Image from "next/image";
import { skills } from "@/data/skills";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <Reveal className="mx-auto max-w-5xl px-6 pb-24">
      <section>
        <p className="mb-6 font-mono text-xs text-muted">// skills</p>
        <div className="grid grid-cols-3 border border-panel sm:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center gap-3 border-b border-r border-panel p-6 [&:nth-child(3n)]:border-r-0 sm:[&:nth-child(3n)]:border-r sm:[&:nth-child(5n)]:border-r-0"
              style={{ perspective: "600px" }}
            >
              <div className="relative h-16 w-16 shrink-0">
                <div className="absolute inset-x-2 -bottom-2 h-3 rounded-full bg-black/40 blur-sm transition-all duration-500 ease-out group-hover:inset-x-4 group-hover:opacity-60" />
                <div className="relative h-16 w-16 transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:-translate-y-2 group-hover:[transform:rotateY(180deg)]">
                  <div
                    className="absolute inset-0 flex items-center justify-center rounded-full border border-panel bg-[radial-gradient(circle_at_30%_28%,#ffffff,#e4e7ec_65%,#c7cbd3_100%)] shadow-[inset_0_-6px_10px_rgba(0,0,0,0.25),0_6px_10px_rgba(0,0,0,0.35)] [backface-visibility:hidden]"
                  >
                    <div className="relative h-9 w-9">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        sizes="36px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 flex items-center justify-center rounded-full border border-signal bg-[radial-gradient(circle_at_30%_28%,rgba(255,107,53,0.25),rgba(255,107,53,0)_45%),var(--panel)] shadow-[inset_0_2px_4px_rgba(255,255,255,0.08),inset_0_-6px_10px_rgba(0,0,0,0.45),0_6px_10px_rgba(0,0,0,0.35)] [backface-visibility:hidden] [transform:rotateY(180deg)]"
                  >
                    <span className="px-1 text-center font-mono text-[10px] leading-tight text-signal">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </div>
              <span className="font-mono text-[11px] text-muted transition-colors duration-300 group-hover:text-signal">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
