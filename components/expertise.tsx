import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { skills } from "@/lib/content";

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="03 / Expertise"
      title="What I actually use in production"
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <Reveal key={group.group} className="h-full" delay={index * 60}>
            <article className="skill-card h-full bg-[var(--bg)] p-6 sm:p-7">
              <h3 className="font-mono text-[11px] tracking-[0.18em] text-[var(--faint)] uppercase">
                {group.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="chip rounded-full border border-[var(--line)] px-2.5 py-1 text-[12px] text-[var(--muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
