"use client";

import { useRef } from "react";
import SettingsCard from "./SettingsCard";
import { handleMouseMove } from "../utils/handle-mouse-move";
import Image from "next/image";
import { CodeIcon, UserIcon, PhoneIcon, TrayIcon } from "@phosphor-icons/react";

export function Navbar() {
  const navRef = useRef<HTMLDivElement>(null!);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none px-6 md:px-0">
      <div
        onMouseMove={(e) => handleMouseMove(e, navRef)}
        className="nav-glass mt-4 w-full max-w-4xl mx-auto rounded-full px-6 py-3 flex items-center justify-between backdrop-blur-xs shadow-lg border border-border  pointer-events-auto"
      >
        <span className="text-2xl" role="img" aria-label="Shaka">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="object-cover"
          />
        </span>
        <ul className="flex gap-8 text-muted-foreground font-medium">
          <li className="hidden sm:block">
            <a
              href="#sobre"
              className="navbar-link hover:text-primary transition-colors"
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
              href="#tecnologias"
              className="navbar-link hover:text-primary transition-colors"
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
              href="#sobre"
              className="navbar-link hover:text-primary transition-colors"
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
              href="#tecnologias"
              className="navbar-link hover:text-primary transition-colors"
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
