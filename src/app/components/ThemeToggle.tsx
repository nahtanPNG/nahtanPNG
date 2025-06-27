"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, DesktopIcon } from "@phosphor-icons/react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-24 h-8 rounded-3xl theme-toggle animate-pulse" />;
  }

  const themes = [
    { value: "light", icon: SunIcon, label: "Claro" },
    { value: "dark", icon: MoonIcon, label: "Escuro" },
    { value: "system", icon: DesktopIcon, label: "Sistema" },
  ];

  return (
    <div className="theme-toggle p-1.5 rounded-3xl shadow flex items-center gap-1 border border-gray-200/50 dark:border-zinc-700/50">
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          aria-label={`Tema ${label}`}
          className={`p-1.5 rounded-2xl transition-all duration-200 cursor-pointer ${
            theme === value
              ? "bg-[#66538d] text-white shadow-sm"
              : "text-gray-600 dark:text-muted-foreground hover:text-gray-800 dark:hover:text-foreground hover:bg-gray-100 dark:hover:bg-[#66538d22]"
          }`}
          type="button"
        >
          <Icon size={16} />
        </button>
      ))}
    </div>
  );
}
