"use client";

import {
  DiscordLogoIcon,
  PaperPlaneTiltIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-2">
          Hey, I&apos;m <span className="text-purple-400">Nathan</span>!
        </h1>
        <p className="text-gray-400 text-xl mb-1">Software Developer</p>
        <p className="text-gray-400 text-sm mb-6">In progress...</p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="mailto:nathan.ferreiira.dev@gmail.com"
            target="blank"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <PaperPlaneTiltIcon size={20} />
          </a>
          <a
            href="https://github.com/nahtanpng"
            target="blank"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <GithubLogoIcon size={20} />
          </a>
          <a
            href="https://discord.com/users/457725135940616202"
            target="blank"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <DiscordLogoIcon size={20} />
          </a>
        </div>
      </div>
    </main>
  );
}
