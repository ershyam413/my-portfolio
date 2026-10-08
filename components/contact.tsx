"use client";

import { useState } from "react";
import { ResumeDownload } from "@/components/resume-download";
import { Section } from "@/components/section";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/lib/content";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Section id="contact" eyebrow="07 / Contact" title="Start a project">
      <div className="max-w-3xl">
        <p className="text-lg leading-relaxed text-[var(--muted)]">
          Web app, portal, dashboard, booking, SaaS, admin, API, or a public
          site that has to rank — send the brief. I have already shipped at
          4 million monthly impressions and on enterprise ops in the UAE, US,
          UK, and Sweden.
        </p>

        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent(site.mailSubject)}`}
          className="mt-8 block font-serif text-2xl tracking-tight text-[var(--fg)] underline-offset-4 transition-colors hover:underline sm:text-4xl"
        >
          {site.email}
        </a>

        <SocialLinks variant="cards" className="mt-8" />

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ResumeDownload variant="outline" />
          <button
            type="button"
            onClick={copyEmail}
            className="font-mono text-[12px] tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
          >
            {copied ? "Email copied" : "Copy email"}
          </button>
        </div>
      </div>
    </Section>
  );
}
