import { profile, stats } from "@/lib/data";
import Reveal from "./Reveal";
import RoleTicker from "./RoleTicker";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PinIcon,
  XIcon,
} from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-10 sm:pt-40 sm:pb-14">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-900/70 px-3.5 py-1.5 font-mono text-xs text-muted backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-2/70" />
                <span className="relative inline-flex size-2 rounded-full bg-accent-2" />
              </span>
              {profile.availability}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-[clamp(2.6rem,7vw,4.6rem)] font-semibold leading-[1.05] tracking-tight">
              <span className="text-gradient">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-4 font-mono text-sm text-muted sm:text-base">
              {profile.title} · {profile.location}
            </p>
          </Reveal>

          <Reveal delay={200}>
            {/* Animasyonlu ifade satır sonunda: silinip yazılırken çevresindeki
                metni itmiyor, sayfa boyu sabit kalıyor. */}
            <p className="mt-6 text-lg text-fg/90 sm:text-xl">
              Uçtan uca geliştiriyorum: <RoleTicker />
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Tasarımdan veritabanına, API&apos;dan dağıtıma kadar işin tamamını
              üstleniyorum.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projeler"
                className="group inline-flex items-center gap-2 rounded-xl bg-fg px-5 py-3 text-sm font-medium text-ink-950 transition-transform hover:-translate-y-0.5"
              >
                Projelerimi incele
                <ArrowDownIcon className="size-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="#iletisim"
                className="group inline-flex items-center gap-2 rounded-xl border border-line bg-ink-900/60 px-5 py-3 text-sm font-medium text-fg backdrop-blur transition-colors hover:border-accent/50"
              >
                İletişime geç
                <ArrowUpRightIcon className="size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex items-center gap-3">
              <SocialLink href={profile.socials.github} label="GitHub">
                <GithubIcon className="size-[18px]" />
              </SocialLink>
              <SocialLink href={profile.socials.x} label="X">
                <XIcon className="size-4" />
              </SocialLink>
              {profile.socials.linkedin && (
                <SocialLink href={profile.socials.linkedin} label="LinkedIn">
                  <LinkedinIcon className="size-[18px]" />
                </SocialLink>
              )}
              {profile.email && (
                <SocialLink href={`mailto:${profile.email}`} label="E-posta" external={false}>
                  <MailIcon className="size-[18px]" />
                </SocialLink>
              )}
              <span className="ml-1 inline-flex items-center gap-1.5 font-mono text-xs text-muted">
                <PinIcon className="size-3.5" />
                {profile.location}
              </span>
            </div>
          </Reveal>
        </div>

        {/* min-w-0: kod kartındaki <pre> grid sütununu genişletmesin, kendi içinde kaysın */}
        <Reveal delay={220} className="min-w-0 lg:justify-self-end lg:w-full">
          <CodeCard />
        </Reveal>
      </div>

      <Reveal delay={380}>
        <div className="mx-auto mt-16 max-w-6xl px-5 sm:px-8">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-ink-900/70 px-5 py-6 backdrop-blur">
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                  {stat.label}
                </dt>
                <dd className="mt-1.5 text-3xl font-semibold tracking-tight text-fg">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
  external = true,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="grid size-10 place-items-center rounded-xl border border-line bg-ink-900/60 text-muted backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-fg"
    >
      {children}
    </a>
  );
}

/** Hero'nun sağındaki kod kartı — profil bilgilerini geliştirici diliyle özetler. */
function CodeCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/40 via-transparent to-accent-2/30 opacity-60 blur-[1px]" />
      <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-900/85 shadow-2xl shadow-black/50 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-xs text-muted">developer.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
          <code>
            <span className="text-violet-400">const</span>{" "}
            <span className="text-sky-300">furkan</span>{" "}
            <span className="text-muted">=</span> {"{"}
            {"\n"}
            {"  "}
            <span className="text-accent-2">rol</span>
            <span className="text-muted">:</span>{" "}
            <span className="text-amber-300">&quot;Bilgisayar Mühendisi&quot;</span>
            <span className="text-muted">,</span>
            {"\n"}
            {"  "}
            <span className="text-accent-2">odak</span>
            <span className="text-muted">:</span> [
            <span className="text-amber-300">&quot;mobil&quot;</span>
            <span className="text-muted">,</span>{" "}
            <span className="text-amber-300">&quot;backend&quot;</span>
            <span className="text-muted">,</span>{" "}
            <span className="text-amber-300">&quot;oyun&quot;</span>]
            <span className="text-muted">,</span>
            {"\n"}
            {"  "}
            <span className="text-accent-2">diller</span>
            <span className="text-muted">:</span> [
            <span className="text-amber-300">&quot;TypeScript&quot;</span>
            <span className="text-muted">,</span>{" "}
            <span className="text-amber-300">&quot;Java&quot;</span>
            <span className="text-muted">,</span>{" "}
            <span className="text-amber-300">&quot;C#&quot;</span>
            <span className="text-muted">,</span>{" "}
            <span className="text-amber-300">&quot;Python&quot;</span>]
            <span className="text-muted">,</span>
            {"\n"}
            {"  "}
            <span className="text-accent-2">seviyor</span>
            <span className="text-muted">:</span>{" "}
            <span className="text-amber-300">&quot;bitmiş iş&quot;</span>
            <span className="text-muted">,</span>
            {"\n"}
            {"  "}
            <span className="text-accent-2">musait</span>
            <span className="text-muted">:</span>{" "}
            <span className="text-emerald-400">true</span>
            <span className="text-muted">,</span>
            {"\n"}
            {"}"}
            <span className="text-muted">;</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
