import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LiveLinks } from "@/components/live-links";
import { allWork, getProject } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  return allWork.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return { title: "Work" };
  }
  return {
    title: project.title,
    description: project.oneLiner,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main id="content" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <Link
        href="/#work"
        className="font-mono text-[11px] tracking-[0.18em] text-[var(--faint)] uppercase hover:text-[var(--fg)]"
      >
        ← All work
      </Link>

      <p className="reveal mt-10 font-mono text-[11px] tracking-[0.2em] text-[var(--faint)] uppercase">
        {project.number} · {project.sector} · {project.year}
        {project.origin ? ` · ${project.origin}` : ""}
      </p>
      <h1 className="reveal reveal-delay-1 mt-4 max-w-4xl font-serif text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.98] tracking-tight text-[var(--fg)]">
        {project.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
        {project.oneLiner}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-[12px] text-[var(--muted)]">
        <span>{project.brand}</span>
        <LiveLinks project={project} />
      </div>

      <dl
        className={`mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--line)] ${
          project.outcomes.length > 3 ? "sm:grid-cols-4" : "sm:grid-cols-3"
        }`}
      >
        {project.outcomes.map((outcome) => (
          <div key={outcome.label} className="metric-card bg-[var(--bg-elevated)] px-4 py-5">
            <dt className="font-mono text-[10px] leading-4 tracking-[0.12em] text-[var(--faint)] uppercase">
              {outcome.label}
            </dt>
            <dd className="mt-2 font-serif text-2xl tracking-tight text-[var(--fg)]">
              {outcome.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_280px] lg:gap-20">
        <div className="space-y-12">
          <section>
            <h2 className="font-mono text-[11px] tracking-[0.18em] text-[var(--faint)] uppercase">
              Role
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--muted)]">
              {project.role}
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[11px] tracking-[0.18em] text-[var(--faint)] uppercase">
              The problem
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--muted)]">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[11px] tracking-[0.18em] text-[var(--faint)] uppercase">
              What I did
            </h2>
            <ol className="mt-5 max-w-2xl space-y-4">
              {project.approach.map((item, index) => (
                <li key={item} className="flex gap-4 text-[15px] leading-relaxed text-[var(--muted)]">
                  <span className="mt-0.5 font-mono text-[11px] text-[var(--faint)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="font-mono text-[11px] tracking-[0.18em] text-[var(--faint)] uppercase">
              Why it matters in an interview
            </h2>
            <ul className="mt-5 max-w-2xl space-y-3">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="border-l border-[var(--line-strong)] pl-4 text-[15px] leading-relaxed text-[var(--muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="h-fit border-t border-[var(--line)] pt-8 lg:border-t-0 lg:pt-0">
          <h2 className="font-mono text-[11px] tracking-[0.18em] text-[var(--faint)] uppercase">
            Stack
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-[var(--line)] px-3 py-1 text-[12px] text-[var(--muted)] lg:w-fit"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <CaseStudyNav slug={project.slug} />
    </main>
  );
}

function CaseStudyNav({ slug }: { slug: string }) {
  const index = allWork.findIndex((item) => item.slug === slug);
  const prev = allWork[index - 1];
  const next = allWork[index + 1];

  return (
    <nav className="mt-24 flex items-center justify-between border-t border-[var(--line)] pt-8 text-sm">
      {prev ? (
        <Link
          href={`/work/${prev.slug}`}
          className="text-[var(--muted)] hover:text-[var(--fg)]"
        >
          ← {prev.title}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/work/${next.slug}`}
          className="ml-auto text-right text-[var(--muted)] hover:text-[var(--fg)]"
        >
          {next.title} →
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
