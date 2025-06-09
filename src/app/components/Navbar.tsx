"use client";

import { useRef } from "react";
import SettingsCard from "./SettingsCard";
import { handleMouseMove } from "../utils/handle-mouse-move";
import Image from "next/image";

export function Navbar() {
  const navRef = useRef<HTMLDivElement>(null!);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <div
        onMouseMove={(e) => handleMouseMove(e, navRef)}
        className="card-glass mt-4 w-full max-w-4xl mx-auto rounded-full px-6 py-3 flex items-center justify-between shadow-lg border border-border  pointer-events-auto"
      >
        <span className="text-2xl" role="img" aria-label="Shaka">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className=" object-cover"
          />
        </span>
        <ul className="flex gap-8 text-muted-foreground font-medium">
          <li>
            <a href="#sobre" className="hover:text-primary transition-colors">
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#projetos"
              className="hover:text-primary transition-colors"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#tecnologias"
              className="hover:text-primary transition-colors"
            >
              Tecnologias
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:text-primary transition-colors">
              Contato
            </a>
          </li>
        </ul>
        <SettingsCard onOpen={() => {}} />
      </div>
    </nav>
  );
}
