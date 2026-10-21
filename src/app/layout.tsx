import type { Metadata } from "next";
import { Manrope, Newsreader, Space_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Aurora } from "@/components/ui/Aurora";
import { Preloader } from "@/components/ui/Preloader";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { profile } from "@/content/profile";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.fullName} · AI Products & Automation`,
    template: `%s · ${profile.fullName}`,
  },
  description:
    "AI products, automation and data intelligence that remove repetitive work and deliver measurable outcomes. Explore the work.",
  keywords: [
    "AI Engineer",
    "LLM Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Agentic AI",
    "RAG",
    "Pune",
    "Shabbir Ezzuddin Malegaonwala",
  ],
  authors: [{ name: profile.fullName, url: profile.siteUrl }],
  creator: profile.fullName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: profile.siteUrl,
    siteName: profile.fullName,
    title: `${profile.fullName} · AI Products & Automation`,
    description:
      "AI products, automation and data intelligence, built to run in the real world.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} · AI Products & Automation`,
    description:
      "AI products, automation and data intelligence, built to run in the real world.",
  },
  robots: { index: true, follow: true },
};

/** Applies the stored theme before first paint so there is no flash. */
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})()`;

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  url: profile.siteUrl,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressCountry: "IN",
  },
  sameAs: [profile.github, profile.linkedin, profile.instagram],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "MIT World Peace University" },
    { "@type": "CollegeOrUniversity", name: "Tilak Maharashtra Vidyapeeth" },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Large Language Models",
    "Agentic AI",
    "Machine Learning",
    "Data Engineering",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${newsreader.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
        {/* Without JS nothing can reveal itself, so show everything. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col">
        <Preloader />
        <SmoothScroll />
        <Aurora />
        <div className="grain" aria-hidden />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus: focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:text-canvas"
        >
          Skip to content
        </a>

        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
