import { timeline } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Timeline({ index }: { index: string }) {
  return (
    <section id="yolculuk" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index={index}
          eyebrow="Yolculuk"
          title="Nereden nereye"
          description="Masaüstü uygulamalarla başlayan yolculuk; mobil, backend, yapay zekâ ve oyun geliştirmeyle devam ediyor."
        />

        <ol className="relative mt-14 max-w-3xl border-l border-line pl-8 sm:pl-10">
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} as="li" className="relative pb-12 last:pb-0">
              <span className="absolute -left-[41px] top-1.5 grid size-[18px] place-items-center rounded-full border border-line bg-ink-950 sm:-left-[49px]">
                <span className="size-2 rounded-full bg-gradient-to-br from-accent to-accent-2" />
              </span>

              <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {item.period}
              </span>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2.5 text-base leading-relaxed text-muted">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-line/80 bg-ink-800/70 px-2.5 py-1 font-mono text-xs text-fg/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
