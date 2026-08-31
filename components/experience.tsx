import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { education, experience, projects } from "@/lib/content";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 / Experience"
      title="Where the work happened"
    >
      <Reveal>
        <article className="grid gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--faint)] uppercase">
              {experience.period}
            </p>
            <h3 className="mt-3 text-xl tracking-tight text-[var(--fg)]">
              {experience.title}
            </h3>
            <p className="mt-1 text-[var(--muted)]">{experience.company}</p>
            <p className="mt-1 text-sm text-[var(--faint)]">
              {experience.location}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--faint)]">
              {experience.earlier.note}
            </p>
          </div>

          <div>
            <p className="max-w-2xl text-[15px] leading-relaxed text-[var(--muted)]">
              {experience.summary}
            </p>
            <ul className="mt-8 space-y-3">
              {projects.map((project) => (
                <li
                  key={project.slug}
                  className="flex gap-4 border-l border-[var(--line)] pl-4"
                >
                  <span className="mt-0.5 font-mono text-[10px] text-[var(--faint)]">
                    {project.number}
                  </span>
                  <div>
                    <p className="text-sm text-[var(--fg)]">{project.title}</p>
                    <p className="text-sm text-[var(--faint)]">
                      {project.sector}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>

      <div className="mt-16 grid gap-8 border-t border-[var(--line)] pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {education.map((item) => (
          <article key={item.credential}>
            <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--faint)] uppercase">
              {item.period}
            </p>
            <h3 className="mt-2 text-base text-[var(--fg)]">
              {item.credential}
            </h3>
            <p className="mt-1 text-sm text-[var(--muted)]">{item.school}</p>
            {item.detail ? (
              <p className="mt-1 font-mono text-[12px] text-[var(--faint)]">
                {item.detail}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
