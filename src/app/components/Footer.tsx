"use client";

import {
  DiscordLogoIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  HeartIcon,
  MapPinIcon,
  MailboxIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-800 mt-16">
      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-2">
              <div>
                <h3 className="text-lg font-bold text-white pixel-font">
                  Nathan Ferreira
                </h3>
                <p className="text-sm text-muted-foreground">
                  Desenvolvedor Full Stack
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm mb-4 text-muted-foreground">
              <MapPinIcon size={16} className="text-[#66538d]" />
              <span>São Paulo, SP - Brasil</span>
            </div>
          </div>

          <div className="mb-4 ">
            <h4 className="text-white font-semibold mb-4 pixel-font">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-[#66538d] transition-colors text-sm"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-[#66538d] transition-colors text-sm"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/tech"
                  className="text-muted-foreground hover:text-[#66538d] transition-colors text-sm"
                >
                  Tecnologias
                </Link>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="text-muted-foreground hover:text-[#66538d] transition-colors text-sm"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-muted-foreground hover:text-[#66538d] transition-colors text-sm"
                >
                  Contatos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 pixel-font">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="mailto:nathan.ferreiira.dev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#66538d] transition-all duration-300 group"
                  aria-label="Email"
                  title="nathan.ferreiira.dev@gmail.com"
                >
                  <MailboxIcon
                    size={22}
                    className="text-muted-foreground group-hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="https://github.com/nahtanpng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#66538d] transition-all duration-300 group"
                  aria-label="GitHub"
                  title="nahtanPNG"
                >
                  <GithubLogoIcon
                    size={22}
                    className="text-muted-foreground group-hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/nathanferreiradev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#66538d] transition-all duration-300 group"
                  aria-label="LinkedIn"
                  title="nathanferreiradev"
                >
                  <LinkedinLogoIcon
                    size={22}
                    className="text-muted-foreground group-hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="https://discord.com/users/457725135940616202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#66538d] transition-all duration-300 group"
                  aria-label="Discord"
                  title="nahtanpng"
                >
                  <DiscordLogoIcon
                    size={22}
                    className="text-muted-foreground group-hover:text-white transition-colors"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Nathan Ferreira. Feito com</span>
              <HeartIcon size={16} className="text-[#66538d] animate-pulse" />
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1 bg-[#1a1a1a] rounded-full border border-zinc-700">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-muted-foreground">
                  Disponível para novos projetos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
