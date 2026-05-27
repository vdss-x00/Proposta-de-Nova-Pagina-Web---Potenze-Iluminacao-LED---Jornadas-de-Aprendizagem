import { useState, useEffect } from "react";

export default function ThemeDropdown() {
  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setOpen(false);
  };

  return (
    <div className="relative flex items-center gap-3 text-lg">
      <span className="text-zinc-900 dark:text-white">Tema:</span>

      <button
        className="rounded-xl border border-current px-2.5 py-1.5 text-zinc-900 dark:text-white cursor-pointer"
        aria-label="Alternar tema"
        onClick={() => setOpen(!open)}
      >
        {theme === "light" ? (
          /* Ícone Sol */
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2.3M12 19.7V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.3M19.7 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
          </svg>
        ) : (
          /* Ícone Lua */
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>
        )}
      </button>

      {/* Setinha visual */}
      <span className="mt-1 inline-block h-0 w-0 border-l-[6px] border-r-[6px] border-t-8 border-l-transparent border-r-transparent border-t-current text-zinc-900 dark:text-white" />

      {open && (
        <ul className="absolute top-full mt-2 w-32 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-zinc-800 z-50">
          <li>
            <button
              onClick={() => handleThemeChange("light")}
              className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm text-zinc-900 hover:bg-gray-100 dark:text-white dark:hover:bg-zinc-700"
            >
              Claro
            </button>
          </li>
          <li>
            <button
              onClick={() => handleThemeChange("dark")}
              className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm text-zinc-900 hover:bg-gray-100 dark:text-white dark:hover:bg-zinc-700"
            >
              Escuro
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}