import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const marquee = [
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "NestJS",
  "Node.js",
  "Prisma",
  "TypeORM",
  "Socket.IO",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "MySQL",
  "Unity",
  "C#",
  "Python",
  "Playwright",
  "Docker",
  "GitHub Actions",
  "Gemini API",
];

export default function Skills({ index }: { index: string }) {
  return (
    <section id="yetenekler" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index={index}
          eyebrow="Yetenekler"
          title="Kullandığım teknolojiler"
          description="Her biri gerçek projelerde, üretim akışının içinde kullanıldı — listeye eklemek için değil."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <div className="group h-full overflow-hidden rounded-2xl border border-line bg-ink-900/50 p-6 backdrop-blur transition-all duration-300 hover:border-accent/40 hover:bg-ink-900/80">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-fg">{group.title}</h3>
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-line/80 bg-ink-800/70 px-2.5 py-1 font-mono text-xs text-fg/70 transition-colors group-hover:border-line group-hover:text-fg/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative mt-16 overflow-hidden border-y border-line bg-ink-900/30 py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
        <div className="flex w-max animate-marquee gap-10">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-10" aria-hidden={copy === 1}>
              {marquee.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-10 whitespace-nowrap font-mono text-sm text-muted"
                >
                  {item}
                  <span className="size-1 rounded-full bg-accent/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
