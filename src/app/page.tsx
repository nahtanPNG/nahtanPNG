"use client";

import {
  DiscordLogoIcon,
  PaperPlaneTiltIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="crt">
      <main className="min-h-screen bg-black flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-green-400 mb-2 glow">
            Hey, I&apos;m <span className="">Nathan</span>!
          </h1>
          <p className="text-green-300 text-lg mb-6 opacity-90">
            Software Developer
          </p>

          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse glow"></div>
            <span className="text-green-300 text-sm opacity-80">
              site in development
            </span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:nathan.ferreiira.dev@gmail.com"
              target="blank"
              className="text-green-300 hover:text-green-400 transition-colors hover:scale-110"
            >
              <PaperPlaneTiltIcon size={20} />
            </a>
            <a
              href="https://github.com/nahtanpng"
              target="blank"
              className="text-green-300 hover:text-green-400 transition-colors hover:scale-110"
            >
              <GithubLogoIcon size={20} />
            </a>
            <a
              href="https://discord.com/users/457725135940616202"
              target="blank"
              className="text-green-300 hover:text-green-400 transition-colors hover:scale-110"
            >
              <DiscordLogoIcon size={20} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
