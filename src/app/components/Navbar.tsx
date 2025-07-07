"use client";

import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";
import { handleMouseMove } from "../utils/handle-mouse-move";
import Image from "next/image";
import { CodeIcon, UserIcon, PhoneIcon, TrayIcon } from "@phosphor-icons/react";
import Link from "next/link";

export function Navbar() {
  const navRef = useRef<HTMLDivElement>(null!);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determina as páginas ativas diretamente sem estado
  const isTechPage = pathname === "/tech";
  const isAboutPage = pathname === "/about";
  const isContactPage = pathname === "/contact";
  const isProjectsPage = pathname === "/projects";

  const getLinkClassName = (isActive: boolean) => {
    return `navbar-link hover:text-primary transition-colors${
      isActive ? " text-primary active-link" : ""
    }`;
  };

  const getLinkStyle = (isActive: boolean) => {
    return isActive ? { fontWeight: "bold" } : {};
  };

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none px-6 md:px-0">
        <div className="nav-glass mt-4 w-full max-w-4xl mx-auto rounded-full px-6 py-3 flex items-center justify-between backdrop-blur-xs shadow-lg border border-border pointer-events-auto">
          <div className="w-8 h-8 bg-muted animate-pulse rounded" />
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none px-6 md:px-0">
      <div
        onMouseMove={(e) => handleMouseMove(e, navRef)}
        className="nav-glass mt-4 w-full max-w-4xl mx-auto rounded-full px-6 py-3 flex items-center justify-between backdrop-blur-xs shadow-lg border border-border pointer-events-auto"
      >
        <Link href="/" role="img" aria-label="Logo" className="relative">
          {resolvedTheme === "dark" ? (
            <Image
              src="/logo.svg"
              alt="Logo Dark"
              width={32}
              height={32}
              className="object-cover"
            />
          ) : (
            <Image
              src="/logo-black.svg"
              alt="Logo Light"
              width={32}
              height={32}
              className="object-cover"
            />
          )}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-8 text-muted-foreground font-medium">
          <li>
            <Link
              href="/about"
              className={getLinkClassName(isAboutPage)}
              style={getLinkStyle(isAboutPage)}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={getLinkClassName(isProjectsPage)}
              style={getLinkStyle(isProjectsPage)}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              href="/tech"
              className={getLinkClassName(isTechPage)}
              style={getLinkStyle(isTechPage)}
            >
              Tecnologias
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={getLinkClassName(isContactPage)}
              style={getLinkStyle(isContactPage)}
            >
              Contato
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <ul className="flex sm:hidden gap-8 text-muted-foreground font-medium">
          <li>
            <Link
              href="/about"
              className={getLinkClassName(isAboutPage)}
              style={getLinkStyle(isAboutPage)}
            >
              <UserIcon size={20} />
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={getLinkClassName(isProjectsPage)}
              style={getLinkStyle(isProjectsPage)}
            >
              <TrayIcon size={20} />
            </Link>
          </li>
          <li>
            <Link
              href="/tech"
              className={getLinkClassName(isTechPage)}
              style={getLinkStyle(isTechPage)}
            >
              <CodeIcon size={20} />
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={getLinkClassName(isContactPage)}
              style={getLinkStyle(isContactPage)}
            >
              <PhoneIcon size={20} />
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
