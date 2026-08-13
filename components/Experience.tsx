import { certificates, education, experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon } from "./icons";

export const hasExperienceSection =
  experience.length > 0 || education.length > 0 || certificates.length > 0;

export default function Experience({ index }: { index: string }) {
  if (!hasExperienceSection) return null;

  return (
    <section id="deneyim" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index={index}
          eyebrow="Deneyim"
          title="İş ve eğitim geçmişi"
          description="Çalıştığım yerler, aldığım eğitim ve tamamladığım programlar."
        />

        <div className="mt-12 space-y-10">
          {experience.length > 0 && (
            <Group label="İş Deneyimi">
              {experience.map((item, i) => (
                <Row
                  key={`${item.company}-${item.role}`}
                  delay={i * 70}
                  monogram={item.company}
                  title={item.role}
                  subtitle={item.company}
                  meta={item.type}
                  location={item.location}
                  period={item.period}
                  current={item.current}
                  description={item.description}
                  bullets={item.bullets}
                  tags={item.stack}
                />
              ))}
            </Group>
          )}

          {education.length > 0 && (
            <Group label="Eğitim">
              {education.map((item, i) => (
                <Row
                  key={item.school + item.program}
                  delay={i * 70}
                  monogram={item.school}
                  title={item.school}
                  subtitle={item.program}
                  period={item.period}
                  description={item.detail}
                />
              ))}
            </Group>
          )}

          {certificates.length > 0 && (
            <Group label="Sertifikalar">
              {certificates.map((item, i) => (
                <Row
                  key={item.title}
                  delay={i * 70}
                  monogram={item.issuer}
                  title={item.title}
                  subtitle={item.issuer}
                  period={item.year}
                  href={item.url}
                />
              ))}
            </Group>
          )}
        </div>
      </div>
    </section>
  );
}

/** Etiketli satır bloğu — satırlar tek bir çerçeve içinde ince çizgilerle ayrılır. */
function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Reveal>
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{label}</h3>
      </Reveal>
      <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-ink-900/40 backdrop-blur">
        <div className="divide-y divide-line/70">{children}</div>
      </div>
    </div>
  );
}

type RowProps = {
  delay: number;
  monogram: string;
  title: string;
  subtitle: string;
  meta?: string;
  location?: string;
  period?: string;
  current?: boolean;
  description?: string;
  bullets?: string[];
  tags?: string[];
  href?: string;
};

function Row({
  delay,
  monogram,
  title,
  subtitle,
  meta,
  location,
  period,
  current,
  description,
  bullets,
  tags,
  href,
}: RowProps) {
  const hasDetail = Boolean(description || bullets?.length || tags?.length);

  const body = (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex min-w-0 flex-1 items-center gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-ink-800 font-mono text-base text-accent transition-colors group-hover:border-accent/40">
            {monogram.charAt(0).toUpperCase()}
          </span>

          <div className="min-w-0">
            <h4 className="text-base font-semibold leading-snug tracking-tight sm:text-lg">
              {title}
            </h4>
            <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm text-accent">
              {subtitle}
              {meta && (
                <>
                  <span className="text-line">·</span>
                  <span className="text-muted">{meta}</span>
                </>
              )}
              {location && (
                <>
                  <span className="text-line">·</span>
                  <span className="text-muted">{location}</span>
                </>
              )}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3 pl-15 sm:pl-0">
          {period && <span className="font-mono text-xs text-muted">{period}</span>}
          {current && (
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-2/30 bg-accent-2/10 px-2.5 py-0.5 font-mono text-[11px] whitespace-nowrap text-accent-2">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-2/70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-accent-2" />
              </span>
              Devam ediyor
            </span>
          )}
          {href && (
            <ArrowUpRightIcon className="size-4 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          )}
        </div>
      </div>

      {hasDetail && (
        <div className="mt-4 space-y-4 pl-15">
          {description && (
            <p className="text-sm leading-relaxed text-fg/70">{description}</p>
          )}

          {bullets && bullets.length > 0 && (
            <ul className="space-y-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-2" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-line/80 bg-ink-800/70 px-2.5 py-1 font-mono text-xs text-fg/65"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );

  const className = "group block p-5 transition-colors hover:bg-ink-900/70 sm:p-6";

  return (
    <Reveal delay={delay}>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
          {body}
        </a>
      ) : (
        <div className={className}>{body}</div>
      )}
    </Reveal>
  );
}
