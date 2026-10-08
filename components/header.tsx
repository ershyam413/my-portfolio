"use client";

import Link from "next/link";
import { useState } from "react";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { nav } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-mono text-[13px] tracking-[0.14em] text-[var(--accent)]"
          onClick={() => setOpen(false)}
        >
          SM
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-[13px] text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              {item.label}
            </Link>
          ))}
          <div className="hidden xl:block">
            <SocialLinks />
          </div>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-[var(--fg)] transition-transform duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-[var(--fg)] transition-transform duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--line)] px-5 py-5 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-[var(--fg)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <SocialLinks className="pt-2" />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
