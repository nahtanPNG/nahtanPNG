"use client";

import {
  DiscordLogoIcon,
  PaperPlaneTiltIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center animate-fade-in">
        <h1 className="text-5xl font-bold text-zinc- mb-2 glow">
          Hey, I&apos;m <span className="">Nathan</span>!
        </h1>
        <p className=" text-lg mb-6 opacity-90">Software Developer</p>

        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-3 h-3 bg-[#66538D] rounded-full animate-pulse glow"></div>
          <span className=" text-sm opacity-80">site in development</span>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="mailto:nathan.ferreiira.dev@gmail.com"
            target="blank"
            className=" hover:text-[#66538D] transition-colors hover:scale-110"
          >
            <PaperPlaneTiltIcon size={24} />
          </a>
          <a
            href="https://github.com/nahtanpng"
            target="blank"
            className="hover:text-[#66538D] transition-colors hover:scale-110"
          >
            <GithubLogoIcon size={24} />
          </a>
          <a
            href="https://discord.com/users/457725135940616202"
            target="blank"
            className="hover:text-[#66538D] transition-colors hover:scale-110"
          >
            <DiscordLogoIcon size={24} />
          </a>
        </div>
      </div>
    </main>
  );
}
