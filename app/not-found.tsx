import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="content"
      className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-32 sm:px-8"
    >
      <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--faint)] uppercase">
        404
      </p>
      <h1 className="mt-4 font-serif text-5xl tracking-tight text-[var(--fg)]">
        This page does not exist.
      </h1>
      <Link
        href="/"
        className="mt-8 text-sm text-[var(--muted)] underline-offset-4 hover:text-[var(--fg)] hover:underline"
      >
        Back to home
      </Link>
    </main>
  );
}
