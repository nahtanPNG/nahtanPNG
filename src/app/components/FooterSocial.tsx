import {
  DiscordLogoIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

export default function FooterSocial() {
  return (
    <footer className="mt-2 flex justify-end gap-3 animate-fade-in">
      <a
        href="https://github.com/nahtanpng"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1a1a1ab3] p-2 rounded-lg shadow transition cursor-pointer animate-fade-in hover:bg-[#66538d55]"
      >
        <GithubLogoIcon size={24} />
      </a>
      <a
        href="https://discord.com/users/457725135940616202"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1a1a1ab3] p-2 rounded-lg shadow transition cursor-pointer animate-fade-in hover:bg-[#66538d55]"
      >
        <DiscordLogoIcon size={24} />
      </a>
      <a
        href="https://linkedin.com/in/devnahtan"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1a1a1ab3] p-2 rounded-lg shadow transition cursor-pointer animate-fade-in hover:bg-[#66538d55]"
      >
        <LinkedinLogoIcon size={24} />
      </a>
    </footer>
  );
}
