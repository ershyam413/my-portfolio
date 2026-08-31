import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { learning } from "@/lib/content";

export function Learning() {
  return (
    <Section
      id="learning"
      eyebrow="04 / Learning"
      title="What I am adding next"
    >
      <p className="mb-10 max-w-2xl text-[15px] leading-relaxed text-[var(--muted)]">
        {learning.intro}
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        {learning.tracks.map((track, index) => (
          <Reveal key={track.title} delay={index * 80}>
            <article className="h-full rounded-lg border border-[var(--line)] p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg tracking-tight text-[var(--fg)]">
                  {track.title}
                </h3>
                <span className="font-mono text-[10px] tracking-[0.16em] text-[var(--faint)] uppercase">
                  {track.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {track.why}
              </p>
              <ul className="mt-6 space-y-5">
                {track.items.map((item) => (
                  <li
                    key={item.name}
                    className="border-l border-[var(--line-strong)] pl-4"
                  >
                    <p className="text-sm text-[var(--fg)]">{item.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--faint)]">
                      {item.detail}
                    </p>
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
