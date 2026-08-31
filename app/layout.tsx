import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/content";
import { themeInitScript } from "@/lib/theme-script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shyammahato.dev"),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.summary,
  keywords: [
    "Shyam Mahato",
    "Software Engineer",
    "Senior Full Stack Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Core Web Vitals",
    "News18",
    "CNBC TV18",
  ],
  authors: [{ name: site.name, url: site.linkedin }],
  creator: site.name,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.headline,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.headline,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Panchkula",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  url: "https://shyammahato.dev",
  sameAs: [site.linkedin, site.github],
  worksFor: {
    "@type": "Organization",
    name: "Altruist Technologies Pvt. Ltd.",
  },
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Core Web Vitals",
    "Microfrontends",
    "SEO",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased dark`}
    >
      <body className="page-bg min-h-full flex flex-col font-sans">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
