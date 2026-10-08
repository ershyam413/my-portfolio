import { MetricValue } from "@/components/metric-value";
import { ResumeDownload } from "@/components/resume-download";
import { StackMarquee } from "@/components/stack-marquee";
import { metrics, practices, site } from "@/lib/content";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-6 pb-16 sm:px-8 sm:pt-8 sm:pb-20">
      <p className="reveal eyebrow flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase">
        <span className="accent-rule" aria-hidden />
        {site.role} · {site.tagline}
      </p>
      <p className="reveal mt-2 flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-[var(--muted)]">
        <span className="live-dot" aria-hidden />
        {site.availability}
      </p>

      <h1 className="display-name reveal reveal-delay-1 mt-3 max-w-4xl font-serif text-[clamp(2.6rem,7.5vw,5.4rem)] leading-[0.94] tracking-tight">
        {site.name}
      </h1>

      <p className="reveal reveal-delay-2 mt-5 max-w-2xl text-lg leading-relaxed text-[var(--fg)] sm:text-xl">
        {site.headline}
      </p>

      <p className="reveal reveal-delay-2 mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--muted)]">
        {site.briefing}
      </p>

      <ul className="mt-6 flex max-w-3xl flex-wrap gap-2">
        {practices.map((item, index) => (
          <li
            key={item}
            className="chip chip-in rounded-full border border-[var(--line)] px-3 py-1 text-[12px] text-[var(--muted)]"
            style={{ animationDelay: `${0.28 + index * 0.05}s` }}
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="reveal reveal-delay-3 mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#hire"
          className="btn-lift inline-flex h-11 items-center rounded-full bg-[var(--accent)] px-5 text-[13px] font-medium text-[var(--accent-fg)]"
        >
          What I take on
        </a>
        <ResumeDownload variant="outline" />
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent(site.mailSubject)}`}
          className="btn-lift inline-flex h-11 items-center rounded-full border border-[var(--line-strong)] px-5 text-[13px] text-[var(--fg)] hover:bg-[var(--fg)]/5"
        >
          Start a project
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
            <dd className="mt-2 font-serif text-2xl tracking-tight text-[var(--accent)] sm:text-[1.65rem]">
              <MetricValue value={metric.value} />
            </dd>
          </div>
        ))}
      </dl>
      <StackMarquee />
    </section>
  );
}
