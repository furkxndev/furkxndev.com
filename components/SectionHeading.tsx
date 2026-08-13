import Reveal from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ index, eyebrow, title, description }: Props) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <span className="text-accent">{index}</span>
          <span className="h-px w-8 bg-line" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
