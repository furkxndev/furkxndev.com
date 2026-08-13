"use client";

import { useEffect, useState } from "react";
import { certificates, education, experience, profile } from "@/lib/data";
import { GithubIcon } from "./icons";

const hasExperience =
  experience.length > 0 || education.length > 0 || certificates.length > 0;

const links = [
  { id: "hakkimda", label: "Hakkımda" },
  ...(hasExperience ? [{ id: "deneyim", label: "Deneyim" }] : []),
  { id: "yetenekler", label: "Yetenekler" },
  { id: "projeler", label: "Projeler" },
  { id: "yolculuk", label: "Yolculuk" },
  { id: "iletisim", label: "İletişim" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Görünür bölüme göre aktif bağlantıyı işaretle.
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-mono text-sm tracking-tight"
        >
          <span className="grid size-8 place-items-center rounded-lg border border-line bg-ink-800 text-accent transition-colors group-hover:border-accent/50">
            fc
          </span>
          <span className="hidden text-fg/90 sm:inline">
            {profile.handle}
            <span className="text-muted">.com</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                  active === link.id
                    ? "text-fg"
                    : "text-muted hover:text-fg"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-accent to-accent-2" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profili"
            className="grid size-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent/40 hover:text-fg"
          >
            <GithubIcon className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-lg border border-line text-fg lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-line bg-ink-950/95 backdrop-blur-xl transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        }`}
      >
        <ul className="space-y-1 px-5 py-4">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-base text-muted transition-colors hover:bg-ink-800 hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
