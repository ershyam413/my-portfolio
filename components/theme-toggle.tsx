"use client";

function setTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Toggle color theme"
      title="Toggle color theme"
      onClick={() => {
        const next = document.documentElement.classList.contains("light")
          ? "dark"
          : "light";
        setTheme(next);
      }}
    >
      <svg
        className="icon-sun"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3.6" />
        <path d="M12 3v1.6M12 19.4V21M4.6 4.6l1.1 1.1M18.3 18.3l1.1 1.1M3 12h1.6M19.4 12H21M4.6 19.4l1.1-1.1M18.3 5.7l1.1-1.1" />
      </svg>
      <svg
        className="icon-moon"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <path d="M17.5 14.2A7.2 7.2 0 0 1 9.8 6.5 7.3 7.3 0 1 0 17.5 14.2Z" />
      </svg>
    </button>
  );
}
