"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import {
  SunIcon,
  MoonIcon,
  DesktopIcon,
  CaretDownIcon,
} from "@phosphor-icons/react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    right: 0,
  });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setIsAnimating(true);
  };

  const handleClose = () => {
    setIsAnimating(false);
    // Aguarda a animação terminar antes de remover o dropdown
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  if (!mounted) {
    return <div className="w-24 h-8 rounded-3xl theme-toggle animate-pulse" />;
  }

  const themes = [
    { value: "light", icon: SunIcon, label: "Claro" },
    { value: "dark", icon: MoonIcon, label: "Escuro" },
    { value: "system", icon: DesktopIcon, label: "Sistema" },
  ];

  const currentTheme = themes.find((t) => t.value === theme) || themes[0];
  const CurrentIcon = currentTheme.icon;

  const DropdownPortal = () => {
    if (!isOpen || !mounted) return null;

    return createPortal(
      <div
        className={`fixed w-auto z-[9999] rounded-xl bg-card shadow-lg border border-border overflow-hidden transform transition-all duration-200 ease-out ${
          isAnimating
            ? "opacity-100 visible translate-y-0 scale-100"
            : "opacity-0 invisible -translate-y-2 scale-95"
        }`}
        style={{
          top: `${dropdownPosition.top}px`,
          right: `${dropdownPosition.right}px`,
          transformOrigin: "top right",
        }}
      >
        <div className="relative">
          {themes.map(({ value, icon: Icon, label }, index) => (
            <button
              key={value}
              onClick={() => {
                setTheme(value);
                handleClose();
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-150 ease-out transform ${
                theme === value
                  ? "bg-purple-primary/10 text-purple-primary scale-[0.98]"
                  : "text-muted-foreground hover:bg-gray-100 dark:hover:bg-zinc-700/50 hover:text-foreground hover:scale-[0.98]"
              } ${index === 0 ? "rounded-t-xl" : ""} ${
                index === themes.length - 1 ? "rounded-b-xl" : ""
              }`}
              style={{
                animationDelay: isAnimating ? `${index * 50}ms` : "0ms",
              }}
              type="button"
            >
              <Icon
                size={18}
                className={`transition-all duration-150 ${
                  theme === value ? "scale-110" : ""
                }`}
              />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
      <div className="hidden sm:flex theme-toggle p-1.5 rounded-3xl shadow items-center gap-1 border border-gray-200/50 dark:border-zinc-700/50">
        {themes.map(({ value, icon: Icon, label }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            aria-label={`Tema ${label}`}
            className={`p-1.5 rounded-2xl transition-all duration-200 cursor-pointer transform hover:scale-105 ${
              theme === value
                ? "bg-purple-primary text-white shadow-sm scale-105"
                : "text-gray-600 dark:text-muted-foreground hover:text-gray-800 dark:hover:text-foreground hover:bg-gray-100 dark:hover:bg-purple-primary/20"
            }`}
            type="button"
          >
            <Icon size={16} />
          </button>
        ))}
      </div>

      <div className="relative sm:hidden">
        <button
          ref={buttonRef}
          onClick={(e) => {
            e.stopPropagation();
            if (isOpen) {
              handleClose();
            } else {
              handleOpen();
            }
          }}
          className={`theme-toggle p-2 rounded-2xl shadow border border-gray-200/50 dark:border-zinc-700/50 flex items-center gap-1 transition-all duration-200 transform hover:scale-105 hover:bg-gray-100 dark:hover:bg-purple-primary/20 ${
            isOpen ? "scale-105 bg-gray-100 dark:bg-purple-primary/20" : ""
          }`}
          aria-label="Alternar tema"
          type="button"
        >
          <CurrentIcon
            size={16}
            className={`text-gray-600 dark:text-muted-foreground transition-transform duration-200 ${
              isOpen ? "scale-110" : ""
            }`}
          />
          <CaretDownIcon
            size={12}
            className={`text-gray-600 dark:text-muted-foreground transition-transform duration-300 ease-out ${
              isOpen ? "rotate-180 scale-110" : ""
            }`}
          />
        </button>

        <DropdownPortal />
      </div>
    </>
  );
}
