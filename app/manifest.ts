import type { MetadataRoute } from "next";
import { profile } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.title}`,
    short_name: profile.handle,
    description: profile.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#06070a",
    theme_color: "#06070a",
    lang: "tr",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        // Next, üretilen ikonu uzantısız bu route'ta servis eder.
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
