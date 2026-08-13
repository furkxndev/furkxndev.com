import { projects, type Project } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon, GithubIcon, LockIcon } from "./icons";

/** Kartın altındaki aksiyon linkleri: canlı site ve/veya kaynak kod. */
function ProjectLinks({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (!project.demo && !project.repo) return null;

  const base = `group/link inline-flex items-center gap-2 rounded-xl border transition-all hover:-translate-y-0.5 ${
    compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
  }`;

  return (
    <div className={`flex flex-wrap items-center gap-2 ${compact ? "mt-4" : "mt-6"}`}>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer noopener"
          className={`${base} border-accent/30 bg-accent/10 text-fg hover:border-accent/60`}
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-2/70" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent-2" />
          </span>
          Canlı site
          <ArrowUpRightIcon className="size-3.5 text-muted transition-all group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-accent" />
        </a>
      )}

      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer noopener"
          className={`${base} border-line bg-ink-800/60 text-muted hover:border-accent/40 hover:text-fg`}
        >
          <GithubIcon className={compact ? "size-3.5" : "size-4"} />
          Kaynak kod
          <ArrowUpRightIcon className="size-3.5 transition-all group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      )}
    </div>
  );
}

/** Özel repolar için link yerine gösterilen rozet. */
function PrivateBadge({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-ink-800/80 font-mono text-muted ${
        compact ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]"
      }`}
      title="Kaynak kodu özel bir repoda tutuluyor"
    >
      <LockIcon className={compact ? "size-3" : "size-3.5"} />
      Özel repo
    </span>
  );
}

export default function Projects({ index }: { index: string }) {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section id="projeler" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index={index}
          eyebrow="Projeler"
          title="Ürettiklerim"
          description="Restoran sipariş sisteminden yapay zekâ destekli seyahat platformuna, mobil uygulamadan Unity oyununa. Açık olanların kaynak kodu GitHub'da; müşteri projeleri özel repolarda duruyor."
        />

        <div className="mt-12 space-y-5">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 90}>
              <FeaturedCard project={project} index={i + 1} />
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {others.map((project, i) => (
            <Reveal key={project.slug} delay={i * 90}>
              <CompactCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <a
            href="https://github.com/furkxndev?tab=repositories"
            target="_blank"
            rel="noreferrer noopener"
            className="group mt-10 inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-fg"
          >
            <GithubIcon className="size-4" />
            GitHub&apos;daki tüm repolar
            <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  // Başlık öncelikle canlı siteye, yoksa kaynak koda gider.
  const primaryHref = project.demo ?? project.repo;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line bg-ink-900/50 backdrop-blur transition-all duration-300 hover:border-accent/40 hover:bg-ink-900/75">
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.accent} opacity-40 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1.35fr] lg:gap-12">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-muted">
            <span className="text-accent">{String(index).padStart(2, "0")}</span>
            <span className="h-px w-6 bg-line" />
            {project.category}
            <span className="text-line">·</span>
            {project.year}
            {project.private && <PrivateBadge />}
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            {primaryHref ? (
              <a
                href={primaryHref}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                {project.title}
                <ArrowUpRightIcon className="size-5 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
            ) : (
              project.title
            )}
          </h3>

          <p className="mt-4 text-base leading-relaxed text-fg/70">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-line/80 bg-ink-800/70 px-2.5 py-1 font-mono text-xs text-fg/65"
              >
                {tech}
              </span>
            ))}
          </div>

          <ProjectLinks project={project} />
        </div>

        <ul className="space-y-3 lg:border-l lg:border-line lg:pl-10">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span
                className={`mt-[7px] size-1.5 shrink-0 rounded-full bg-gradient-to-r ${project.accent}`}
              />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function CompactCard({ project }: { project: Project }) {
  const primaryHref = project.demo ?? project.repo;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-ink-900/50 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-ink-900/75">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 font-mono text-xs text-muted">
        <span>
          {project.category} <span className="text-line">·</span> {project.year}
        </span>
        {project.private && <PrivateBadge compact />}
      </div>

      <h3 className="mt-3 text-lg font-semibold tracking-tight">
        {primaryHref ? (
          <a
            href={primaryHref}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            {project.title}
            <ArrowUpRightIcon className="size-4 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          </a>
        ) : (
          project.title
        )}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-line/80 bg-ink-800/70 px-2 py-0.5 font-mono text-[11px] text-fg/60"
          >
            {tech}
          </span>
        ))}
      </div>

      <ProjectLinks project={project} compact />
    </article>
  );
}
