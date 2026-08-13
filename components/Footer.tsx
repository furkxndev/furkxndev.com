import { profile } from "@/lib/data";
import { GithubIcon, XIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name} — Next.js &amp; Tailwind ile yapıldı.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-fg"
          >
            <GithubIcon className="size-[18px]" />
          </a>
          <a
            href={profile.socials.x}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="X"
            className="text-muted transition-colors hover:text-fg"
          >
            <XIcon className="size-4" />
          </a>
          <a
            href="#top"
            className="font-mono text-xs text-muted transition-colors hover:text-fg"
          >
            ↑ Başa dön
          </a>
        </div>
      </div>
    </footer>
  );
}
