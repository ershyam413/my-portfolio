import { practices } from "@/lib/content";

const items = [
  ...practices,
  "Next.js",
  "React Native",
  "Java",
  "Python",
  "Flutter",
  "TypeScript",
];

export function StackMarquee() {
  const loop = [...items, ...items];

  return (
    <div className="marquee reveal reveal-delay-3 mt-10" aria-hidden>
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
