import {
  GithubLogoIcon,
  DiscordLogoIcon,
  PaperPlaneTiltIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import Card from "./Card";

export default function ProjectContactCard() {
  return (
    <Card className="card-glass col-span-1 md:col-span-1 p-6 flex flex-col justify-between">
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
          className="flex gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold transition"
        >
          <PaperPlaneTiltIcon size={20} /> Contate-me
        </a>
        <a
          href="https://github.com/nahtanpng"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-foreground hover:text-primary cursor-pointer"
        >
          <GithubLogoIcon size={28} />
        </a>
        <a
          href="https://discord.com/users/457725135940616202"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-foreground hover:text-primary cursor-pointer"
        >
          <DiscordLogoIcon size={28} />
        </a>
        <a
          href="https://linkedin.com/in/devnahtan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-foreground hover:text-primary cursor-pointer"
        >
          <LinkedinLogoIcon size={28} />
        </a>
      </div>
    </Card>
  );
}
