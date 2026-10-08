"use client";

import { useEffect, useRef, useState } from "react";

function parseMetric(value: string) {
  const match = value.match(/^(\+)?(\d+(?:\.\d+)?)(M\+|K\+|[MK]|\+|%)?$/i);
  if (!match) return null;
  return {
    prefix: match[1] ?? "",
    number: Number(match[2]),
    suffix: match[3] ?? "",
  };
}

export function MetricValue({ value }: { value: string }) {
  const parsed = parseMetric(value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [text, setText] = useState(() =>
    parsed ? `${parsed.prefix}0${parsed.suffix}` : value,
  );

  useEffect(() => {
    const data = parseMetric(value);
    if (!data) {
      setText(value);
      return;
    }

    const { prefix, number, suffix } = data;
    const node = ref.current;
    if (!node) return;

    let frame = 0;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting) || started.current) {
          return;
        }
        started.current = true;
        observer.disconnect();

        const start = performance.now();
        const duration = 900;

        function tick(now: number) {
          const t = Math.min(1, (now - start) / duration);
          if (t >= 1) {
            setText(value);
            return;
          }
          const eased = 1 - (1 - t) ** 3;
          setText(`${prefix}${Math.round(number * eased)}${suffix}`);
          frame = requestAnimationFrame(tick);
        }

        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  if (!parsed) return <>{value}</>;

  return <span ref={ref}>{text}</span>;
}
