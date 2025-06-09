"use client";

import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import SettingsCard from "./SettingsCard";
import { handleMouseMove } from "../utils/handle-mouse-move";
import Image from "next/image";
import { CodeIcon, UserIcon, PhoneIcon, TrayIcon } from "@phosphor-icons/react";
import Link from "next/link";

export function Navbar() {
  const navRef = useRef<HTMLDivElement>(null!);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Função para checar se está na página de tecnologias
  const isTechPage = mounted && pathname === "/tech";

  const isAboutPage = mounted && pathname === "/about";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none px-6 md:px-0">
      <div
        onMouseMove={(e) => handleMouseMove(e, navRef)}
        className="nav-glass mt-4 w-full max-w-4xl mx-auto rounded-full px-6 py-3 flex items-center justify-between backdrop-blur-xs shadow-lg border border-border  pointer-events-auto"
      >
        <Link href="/" role="img" aria-label="Shaka">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="object-cover"
          />
        </Link>
        <ul className="flex gap-8 text-muted-foreground font-medium">
          <li className="hidden sm:block">
            <a
              href="about"
              className={`navbar-link hover:text-primary transition-colors${
                isAboutPage ? " text-primary active-link" : ""
              }`}
              style={isAboutPage ? { fontWeight: "bold" } : {}}
            >
              Sobre
            </a>
          </li>
          <li className="hidden sm:block">
            <a
              href="#projetos"
              className="navbar-link hover:text-primary transition-colors"
            >
              Projetos
            </a>
          </li>
          <li className="hidden sm:block">
            <a
              href="tech"
              className={`navbar-link hover:text-primary transition-colors${
                isTechPage ? " text-primary active-link" : ""
              }`}
              style={isTechPage ? { fontWeight: "bold" } : {}}
            >
              Tecnologias
            </a>
          </li>
          <li className="hidden sm:block">
            <a
              href="#contato"
              className="navbar-link hover:text-primary transition-colors"
            >
              Contato
            </a>
          </li>

          {/* mobile */}
          <li className="block sm:hidden">
            <a
              href="tech"
              className={`navbar-link hover:text-primary transition-colors${
                isAboutPage ? " text-primary active-link" : ""
              }`}
              style={isAboutPage ? { fontWeight: "bold" } : {}}
            >
              <UserIcon size={20} />
            </a>
          </li>
          <li className="block sm:hidden">
            <a
              href="#projetos"
              className="navbar-link hover:text-primary transition-colors"
            >
              <TrayIcon size={20} />
            </a>
          </li>
          <li className="block sm:hidden">
            <a
              href="tech"
              className={`navbar-link hover:text-primary transition-colors${
                isTechPage ? " text-primary active-link" : ""
              }`}
              style={isTechPage ? { fontWeight: "bold" } : {}}
            >
              <CodeIcon size={20} />
            </a>
          </li>
          <li className="block sm:hidden">
            <a
              href="#contato"
              className="navbar-link hover:text-primary transition-colors"
            >
              <PhoneIcon size={20} />
            </a>
          </li>
        </ul>
        <SettingsCard onOpen={() => {}} />
      </div>
    </nav>
  );
}
