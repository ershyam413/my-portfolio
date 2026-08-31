import { SocialLinks } from "@/components/social-links";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-[11px] tracking-wider text-[var(--faint)] uppercase">
          {site.name} · {site.location}
        </p>
        <SocialLinks />
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={site.resumeHref}
            download={site.resumeFileName}
            className="font-mono text-[11px] tracking-wider text-[var(--faint)] uppercase transition-colors hover:text-[var(--fg)]"
          >
            Download resume
          </a>
          <p className="font-mono text-[11px] tracking-wider text-[var(--faint)]">
            Shipped work — not a template.
          </p>
        </div>
      </div>
    </footer>
  );
}
