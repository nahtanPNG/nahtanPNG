"use client";

import { useFadeInOnScroll } from "@/app/utils/useFadeInOnScroll";
import {
  BrainIcon,
  CloudIcon,
  CodeIcon,
  DatabaseIcon,
  DeviceMobileIcon,
  DiscordLogoIcon,
  GameControllerIcon,
  GitBranchIcon,
} from "@phosphor-icons/react";

export default function InterestsSection() {
  const highlightRef = useFadeInOnScroll();

  return (
    <section className="fade-in-section pt-12" ref={highlightRef}>
      <h2 className="text-3xl font-bold mb-4 pixel-font">Interesses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          {
            icon: <DiscordLogoIcon size={20} />,
            title: "Bots para Discord",
          },
          {
            icon: <CodeIcon size={20} />,
            title: "Desenvolvimento Web",
          },
          {
            icon: <DatabaseIcon size={20} />,
            title: "Banco de Dados",
          },
          {
            icon: <DeviceMobileIcon size={20} />,
            title: "Apps Mobile",
          },
          {
            icon: <CloudIcon size={20} />,
            title: "Computação em Nuvem",
          },
          {
            icon: <GitBranchIcon size={20} />,
            title: "Open Source",
          },
          {
            icon: <GameControllerIcon size={20} />,
            title: "Desenvolvimento de Jogos",
          },
          {
            icon: <BrainIcon size={20} />,
            title: "Inteligência Artificial",
          },
        ].map((interest, idx) => (
          <div
            key={idx}
            className="card border dark:border-zinc-700 hover:scale-105 cursor-pointer flex items-center gap-3 rounded-xl p-3 text-accent-foreground transition-all duration-75 focus:outline-hidden focus-visible:outline focus-visible:outline-ring relative overflow-hidden"
          >
            <div className="p-2 flex items-center justify-center rounded-lg relative overflow-hidden">
              <span
                className="absolute inset-0 flex items-center justify-center blur-lg opacity-100 z-0"
                style={{ fontSize: 44, color: "#a690c4" }}
              >
                {interest.icon}
              </span>
              <span
                className="z-10 relative flex items-center justify-center"
                style={{ width: 24, height: 24, color: "#66538d" }}
              >
                {interest.icon}
              </span>
            </div>
            <span className="text-xs md:text-sm">{interest.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
