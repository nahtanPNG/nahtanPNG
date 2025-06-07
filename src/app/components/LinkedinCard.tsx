import { LinkedinLogoIcon } from "@phosphor-icons/react";

export default function LinkedinCard() {
  return (
    <div className="bg-[#0077b5] rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg border border-[#0077b5]">
      <a
        href="https://linkedin.com/in/seulink"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <LinkedinLogoIcon size={64} />
      </a>
    </div>
  );
}
