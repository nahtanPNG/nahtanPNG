import { GithubLogoIcon, DiscordLogoIcon } from "@phosphor-icons/react";

export default function ProjectContactCard() {
  return (
    <div className="col-span-1 md:col-span-2 bg-card rounded-2xl p-6 flex flex-col justify-between shadow-lg border border-gray-200 dark:border-zinc-700">
      <h2 className="font-bold text-lg mb-2 text-primary">
        Tem um projeto interessante em mente? 👋
      </h2>
      <p className="text-sm text-foreground opacity-80 mb-4">
        Se você tem um projeto que quer tirar do papel, precisa de ajuda ou só
        quer bater um papo, entre em contato!
      </p>
      <div className="flex gap-3 items-center">
        <a
          href="mailto:nathan.ferreiira.dev@gmail.com"
          className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/80 transition"
        >
          Contato
        </a>
        <a
          href="https://github.com/nahtanpng"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-foreground hover:text-primary"
        >
          <GithubLogoIcon size={28} />
        </a>
        <a
          href="https://discord.com/users/457725135940616202"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-foreground hover:text-primary"
        >
          <DiscordLogoIcon size={28} />
        </a>
      </div>
    </div>
  );
}
