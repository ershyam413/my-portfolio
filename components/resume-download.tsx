import { site } from "@/lib/content";

type Variant = "primary" | "outline" | "ghost" | "nav";

const variants: Record<Variant, string> = {
  primary:
    "btn-lift inline-flex h-11 items-center gap-2 rounded-full bg-[var(--accent)] px-5 text-[13px] font-medium text-[var(--accent-fg)]",
  outline:
    "btn-lift inline-flex h-11 items-center gap-2 rounded-full border border-[var(--line-strong)] px-5 text-[13px] text-[var(--fg)] hover:bg-[var(--fg)]/5",
  ghost:
    "inline-flex items-center gap-1.5 text-[13px] text-[var(--muted)] underline-offset-4 transition-colors hover:text-[var(--fg)] hover:underline",
  nav: "btn-lift inline-flex h-9 items-center gap-1.5 rounded-full border border-[var(--line-strong)] px-3.5 text-[13px] text-[var(--fg)] hover:bg-[var(--fg)]/5",
};

function DownloadIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M12 4v11" />
      <path d="m7.5 11.5 4.5 4.5 4.5-4.5" />
      <path d="M5 19h14" />
    </svg>
  );
}

export function ResumeDownload({
  variant = "outline",
  label = "Download resume",
  className = "",
}: {
  variant?: Variant;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={site.resumeHref}
      download={site.resumeFileName}
      className={`${variants[variant]} ${className}`}
    >
      <DownloadIcon />
      {label}
    </a>
  );
}
