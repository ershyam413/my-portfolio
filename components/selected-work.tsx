import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { LiveLinks } from "@/components/live-links";
import { Section } from "@/components/section";
import { projects, shippedSites } from "@/lib/content";

export function SelectedWork() {
  return (
    <Section id="work" eyebrow="01 / Selected work" title="Case studies">
      <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <Reveal delay={index * 70}>
              <div className="work-row grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-3 py-7 sm:grid-cols-[3.5rem_1fr_auto] sm:items-baseline sm:py-8">
                <span className="font-mono text-[11px] text-[var(--faint)]">
                  {project.number}
                </span>
                <div>
                  <h3 className="text-[1.15rem] tracking-tight text-[var(--fg)] sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
                    {project.oneLiner}
                  </p>
                  <LiveLinks project={project} className="mt-3" />
                </div>
                <div className="col-start-2 flex flex-wrap items-center gap-x-5 gap-y-2 sm:col-start-auto sm:flex-col sm:items-end sm:gap-2">
                  <span className="hidden font-mono text-[11px] tracking-wider text-[var(--faint)] uppercase sm:block">
                    {project.sector}
                  </span>
                  <Link
                    href={`/work/${project.slug}`}
                    className="font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)]"
                  >
                    Case study →
                  </Link>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <div id="sites" className="scroll-mt-24 mt-20">
        <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--faint)] uppercase">
          Additional websites
        </p>
        <h3 className="mt-2 font-serif text-2xl tracking-tight text-[var(--fg)] sm:text-3xl">
          Company and independent
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
          Public sites I built as well — some at Altruist, some independently.
          The domain opens the live site. Case study is optional.
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {shippedSites.map((item, index) => (
            <li key={item.slug}>
              <Reveal delay={index * 70} className="h-full">
                <article className="flex h-full flex-col rounded-lg border border-[var(--line)] p-5 transition-colors hover:border-[var(--line-strong)] hover:bg-[var(--bg-elevated)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-[var(--faint)] uppercase">
                      {item.origin === "Independent"
                        ? "Independent"
                        : "Altruist · company"}
                    </span>
                  </div>
                  <h4 className="mt-4 text-lg tracking-tight text-[var(--fg)]">
                    {item.title}
                  </h4>
                  <LiveLinks project={item} className="mt-2" />
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                    {item.oneLiner}
                  </p>
                  <Link
                    href={`/work/${item.slug}`}
                    className="mt-4 font-mono text-[11px] text-[var(--faint)] hover:text-[var(--fg)]"
                  >
                    Case study →
                  </Link>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
