import type { Project } from "@/lib/content";

export function LiveLinks({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const links = [
    project.liveUrl
      ? { href: project.liveUrl, label: project.liveLabel ?? project.liveUrl }
      : null,
    ...(project.extraLinks ?? []),
  ].filter((link): link is { href: string; label: string } => Boolean(link));

  if (links.length === 0) return null;

  return (
    <ul className={`flex flex-wrap gap-x-4 gap-y-1 ${className}`}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] text-[var(--fg)] underline-offset-4 hover:underline"
          >
            {link.label} ↗
          </a>
        </li>
      ))}
    </ul>
  );
}
