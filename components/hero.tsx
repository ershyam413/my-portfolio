import { ResumeDownload } from "@/components/resume-download";
import { metrics, practices, site } from "@/lib/content";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-6 pb-16 sm:px-8 sm:pt-8 sm:pb-20">
      <p className="reveal font-mono text-[11px] tracking-[0.22em] text-[var(--faint)] uppercase">
        {site.role} · {site.availability}
      </p>

      <h1 className="reveal reveal-delay-1 mt-3 max-w-4xl font-serif text-[clamp(2.6rem,7.5vw,5.4rem)] leading-[0.94] tracking-tight text-[var(--fg)]">
        {site.name}
      </h1>

      <p className="reveal reveal-delay-2 mt-5 max-w-2xl text-lg leading-relaxed text-[var(--fg)] sm:text-xl">
        {site.headline}
      </p>

      <p className="reveal reveal-delay-2 mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--muted)]">
        {site.briefing}
      </p>

      <ul className="reveal reveal-delay-3 mt-6 flex max-w-3xl flex-wrap gap-2">
        {practices.map((item) => (
          <li
            key={item}
            className="chip rounded-full border border-[var(--line)] px-3 py-1 text-[12px] text-[var(--muted)]"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="reveal reveal-delay-3 mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#work"
          className="btn-lift inline-flex h-11 items-center rounded-full bg-[var(--fg)] px-5 text-[13px] font-medium text-[var(--bg)]"
        >
          View selected work
        </a>
        <ResumeDownload variant="outline" />
        <a
          href={`mailto:${site.email}?subject=Hello%20Shyam%20—%20frontend%20role`}
          className="btn-lift inline-flex h-11 items-center rounded-full border border-[var(--line-strong)] px-5 text-[13px] text-[var(--fg)] hover:bg-[var(--fg)]/5"
        >
          Get in touch
        </a>
      </div>

      <dl className="reveal reveal-delay-4 mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--line)] sm:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="metric-card bg-[var(--bg-elevated)] px-4 py-5 sm:px-5 sm:py-6"
          >
            <dt className="font-mono text-[10px] leading-4 tracking-[0.14em] text-[var(--faint)] uppercase">
              {metric.label}
            </dt>
            <dd className="mt-2 font-serif text-2xl tracking-tight text-[var(--fg)] sm:text-[1.65rem]">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
