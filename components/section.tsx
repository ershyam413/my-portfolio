import { Reveal } from "@/components/reveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-[var(--line)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 sm:mb-16">
          <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--faint)] uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl tracking-tight text-[var(--fg)] sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
