import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { site } from "@/lib/content";

export function About() {
  return (
    <Section id="about" eyebrow="05 / About" title="How I work">
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div className="max-w-2xl space-y-5 text-[15px] leading-relaxed text-[var(--muted)]">
            <p>
              I grew up around Kathmandu, completed a B.Tech and an M.Tech in
              Computer Science & Engineering in Punjab (M.Tech CGPA 8.63), and
              have spent over 5 years in frontend development at Altruist
              shipping products that real people and crawlers both have to use.
            </p>
            <p>
              Most of my work is frontend for real products, not marketing
              pages. I have designed and shipped several portals — media, a
              Nepal news CMS, fleet logistics, travel booking, trip planning,
              and workforce tracking.
              That means{" "}
              <span className="text-[var(--fg)]">
                dashboards, graphs, pie charts, tables, maps, and RBAC-scoped
                views
              </span>
              , plus the visual system around them. I currently own both the
              implementation and a large part of the design: layout, dashboard
              composition, chart treatments, and how an operator should read
              the screen in three seconds.
            </p>
            <p>
              Under the hood that is Next.js, React, TypeScript, Redux, and
              Vite — SSR/SSG and Core Web Vitals on public properties,
              Next.js backend with Prisma and Supabase when I own the CMS,
              component-driven UI and microfrontends on admin surfaces. I am
              looking for a Senior Full Stack seat on a product team where
              design, APIs, data visualisation, and performance are treated as
              engineering, not decoration. In parallel I am learning Core Java,
              Advanced Java, and Spring Boot so I can own backend services the
              market now expects, plus applied AI courses (LLMs, RAG, product
              UX).
            </p>
          </div>
          <aside className="h-fit rounded-lg border border-[var(--line)] p-6">
            <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--faint)] uppercase">
              Currently
            </p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <li className="flex justify-between gap-4 border-b border-[var(--line)] pb-3">
                <span>Based</span>
                <span className="text-[var(--fg)]">{site.location}</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-[var(--line)] pb-3">
                <span>Experience</span>
                <span className="text-right text-[var(--fg)]">
                  5+ years frontend
                </span>
              </li>
              <li className="flex justify-between gap-4 border-b border-[var(--line)] pb-3">
                <span>Role</span>
                <span className="text-[var(--fg)]">Software Engineer</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-[var(--line)] pb-3">
                <span>Now</span>
                <span className="text-right text-[var(--fg)]">
                  Frontend + portal UI design
                </span>
              </li>
              <li className="flex justify-between gap-4 border-b border-[var(--line)] pb-3">
                <span>Learning</span>
                <span className="text-right text-[var(--fg)]">
                  Java, Spring Boot, AI
                </span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Target</span>
                <span className="text-right text-[var(--fg)]">
                  Senior Full Stack
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </Reveal>
    </Section>
  );
}
