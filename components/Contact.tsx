import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MailIcon, XIcon } from "./icons";

export default function Contact({ index }: { index: string }) {
  const channels = [
    {
      label: "GitHub",
      value: `@${profile.handle}`,
      href: profile.socials.github,
      icon: <GithubIcon className="size-5" />,
    },
    {
      label: "X",
      value: `@${profile.handle}`,
      href: profile.socials.x,
      icon: <XIcon className="size-[18px]" />,
    },
    profile.socials.linkedin
      ? {
          label: "LinkedIn",
          value: profile.name,
          href: profile.socials.linkedin,
          icon: <LinkedinIcon className="size-5" />,
        }
      : null,
    profile.email
      ? {
          label: "E-posta",
          value: profile.email,
          href: `mailto:${profile.email}`,
          icon: <MailIcon className="size-5" />,
        }
      : null,
  ].filter((channel): channel is NonNullable<typeof channel> => channel !== null);

  return (
    <section id="iletisim" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-ink-900/60 px-6 py-14 text-center backdrop-blur sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-accent/20 blur-[90px]" />

            <div className="relative">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {index} — İletişim
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                Birlikte bir şey <span className="text-gradient">inşa edelim</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Yeni bir ürün fikri, freelance bir iş ya da tam zamanlı bir pozisyon — hepsine
                açığım. En hızlı yanıtı aşağıdaki kanallardan alırsın.
              </p>

              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-fg px-6 py-3.5 text-sm font-medium text-ink-950 transition-transform hover:-translate-y-0.5"
                >
                  <MailIcon className="size-4" />
                  {profile.email}
                </a>
              )}

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {channels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer noopener"
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-ink-800/50 px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-accent/40"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-ink-900 text-muted transition-colors group-hover:text-fg">
                      {channel.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-xs uppercase tracking-wider text-muted">
                        {channel.label}
                      </span>
                      <span className="block truncate text-sm text-fg">{channel.value}</span>
                    </span>
                    <ArrowUpRightIcon className="ml-auto size-4 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
