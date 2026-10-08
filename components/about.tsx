import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { site } from "@/lib/content";

export function About() {
  return (
    <Section id="about" eyebrow="06 / About" title="How I work">
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div className="max-w-2xl space-y-5 text-[15px] leading-relaxed text-[var(--muted)]">
            <p>
              I grew up around Kathmandu, completed a B.Tech and an M.Tech in
              Computer Science & Engineering in Punjab (M.Tech CGPA 8.63), and
              have spent 5+ years as a software developer shipping products
              that real users, operators, and crawlers have to live with.
            </p>
            <p>
              I am a Senior Software Developer and Full-Stack Developer. That
              means I can own the UI, the API, the schema, and the release —
              web apps, SaaS, admin panels, booking flows, CRM/ERP-style
              portals, and public sites. Shipped surfaces include media,
              logistics, telecom, travel, health-tech, hospitality, and
              workforce tools.
              That means{" "}
              <span className="text-[var(--fg)]">
                dashboards, graphs, tables, maps, RBAC, payments, and
                SEO-critical pages
              </span>
              , plus the visual system around them. Clients get one engineer
              who can sit in a technical discussion and then actually ship.
            </p>
            <p>
              Hands-on production is Next.js, React, TypeScript, Node.js,
              PostgreSQL, Prisma, and REST. Java, Python, Spring Boot, React
              Native, Flutter, Android, and iOS ship with me as technical lead
              plus Dynoserve — so a client is not stuck in one language. I take
              freelance and contract software projects end to end.
            </p>
          </div>
          <aside className="surface h-fit rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)]/50 p-6">
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
                  5+ years full-stack
                </span>
              </li>
              <li className="flex justify-between gap-4 border-b border-[var(--line)] pb-3">
                <span>Role</span>
                <span className="text-right text-[var(--fg)]">
                  Senior Software Developer
                </span>
              </li>
              <li className="flex justify-between gap-4 border-b border-[var(--line)] pb-3">
                <span>Now</span>
                <span className="text-right text-[var(--fg)]">
                  Freelance + product delivery
                </span>
              </li>
              <li className="flex justify-between gap-4 border-b border-[var(--line)] pb-3">
                <span>Studio</span>
                <a
                  href={site.studio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-right text-[var(--fg)] hover:underline"
                >
                  dynoserve.com ↗
                </a>
              </li>
              <li className="flex justify-between gap-4">
                <span>Open for</span>
                <span className="text-right text-[var(--fg)]">
                  Software projects E2E
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </Reveal>
    </Section>
  );
}
