import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import Spotlight from "@/components/Spotlight";

const specs = [
  { label: "Role", value: "Undergraduate Informatics Student, ITS" },
  { label: "Focus", value: "Web Development, DevOps & Robotics" },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-5xl items-start gap-10 px-6 pt-32 pb-20 md:grid-cols-[140px_1fr] md:pt-40"
    >
      <div className="animate-reveal order-1 md:order-none">
        <TiltCard className="relative aspect-square w-full max-w-[140px] overflow-hidden border border-panel transition-shadow duration-300 hover:shadow-[0_0_30px_-6px_rgba(255,107,53,0.55)]">
          <Image
            src="/img/richie.jpg"
            alt="Junathan Richie"
            fill
            sizes="140px"
            className="object-cover"
            priority
          />
        </TiltCard>
      </div>
      <div className="space-y-8">
        <div
          className="animate-reveal"
          style={{ animationDelay: "0.1s" }}
        >
          <p className="font-mono text-sm text-signal">Hi, I&apos;m</p>
          <h1 className="underline-sweep text-4xl font-semibold tracking-tight md:text-5xl">
            Junathan Richie
          </h1>
        </div>
        <p
          className="animate-reveal max-w-[60ch] text-sm leading-relaxed text-muted"
          style={{ animationDelay: "0.2s" }}
        >
          Last-year Informatics Engineering student at Institut Teknologi
          Sepuluh Nopember with a genuine passion for Web Development,
          DevOps, and Robotics. Known for quick learning and a strong sense
          of responsibility.
        </p>
        <Spotlight className="border border-panel p-5">
          <dl className="grid gap-4">
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className="group animate-reveal grid grid-cols-[90px_1fr] items-center gap-4 border-b border-panel pb-4 opacity-0 transition-all duration-300 hover:border-l-2 hover:border-l-signal hover:bg-panel/20 hover:pl-3 last:border-none last:pb-0"
                style={{ animationDelay: `${0.3 + i * 0.08}s` }}
              >
                <dt className="font-mono text-xs uppercase tracking-wide text-muted transition-colors group-hover:text-signal">
                  {spec.label}
                </dt>
                <dd className="text-sm text-foreground">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </Spotlight>
      </div>
    </section>
  );
}
