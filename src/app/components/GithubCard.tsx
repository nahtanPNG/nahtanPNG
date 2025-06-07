import { GithubLogoIcon } from "@phosphor-icons/react";

export default function MusicCard() {
  return (
    <div className="bg-[#66538D] rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg border border-[#66538D] cursor-pointer">
      <a
        href="https://github.com/nahtanpng"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <GithubLogoIcon size={64} />
      </a>
    </div>
  );
}
