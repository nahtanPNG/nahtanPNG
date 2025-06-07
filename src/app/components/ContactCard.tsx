import { PaperPlaneTiltIcon } from "@phosphor-icons/react";

export default function ContactCard() {
  return (
    <div className="bg-card rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg border border-gray-200 dark:border-zinc-700">
      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/80 transition">
        <PaperPlaneTiltIcon size={20} /> Contate-me
      </button>
    </div>
  );
}
