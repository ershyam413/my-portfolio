import { InteractiveCard } from "@/components/interactive-card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { services } from "@/lib/content";

export function Services() {
  return (
    <Section
      id="hire"
      eyebrow="01 / Hire"
      title="Software I can take on"
    >
      <p className="mb-10 max-w-2xl text-[15px] leading-relaxed text-[var(--muted)]">
        Freelance, contract, or a product team. Web, mobile, and backend —
        React / Next.js, Node, Java, Python, Spring Boot, React Native,
        Flutter, Android, and iOS. If the brief is a product, I can take it.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, index) => (
          <li key={item.title}>
            <Reveal delay={index * 60} className="h-full">
              <InteractiveCard className="h-full">
              <article className="surface h-full rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)]/40 p-5 transition-colors hover:border-[color-mix(in_srgb,var(--accent)_45%,transparent)] hover:bg-[var(--bg-elevated)] sm:p-6">
                <h3 className="text-[1.05rem] tracking-tight text-[var(--fg)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {item.body}
                </p>
              </article>
              </InteractiveCard>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
