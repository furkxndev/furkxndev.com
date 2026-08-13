import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const description = `${profile.title}. ${profile.tagline} React Native, Spring Boot, Node.js ve Unity ile geliştirilmiş projeler.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Furkan Coşkun",
    "furkxndev",
    "bilgisayar mühendisi",
    "yazılım geliştirici",
    "React Native",
    "Spring Boot",
    "Node.js",
    "Unity",
    "portfolyo",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: profile.siteUrl,
    siteName: profile.name,
    title: `${profile.name} — ${profile.title}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description,
    creator: "@furkxndev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#06070a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.handle,
  jobTitle: profile.title,
  url: profile.siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Antalya",
    addressCountry: "TR",
  },
  sameAs: [profile.socials.github, profile.socials.x, profile.socials.linkedin].filter(
    Boolean,
  ),
  knowsAbout: [
    "React Native",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Node.js",
    "Unity",
    "C#",
    "Python",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
