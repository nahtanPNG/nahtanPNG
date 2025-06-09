import { Gear } from "@phosphor-icons/react";

export default function SettingsCard({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      aria-label="Abrir configurações"
      className="bg-[#1a1a1ab3] p-2 rounded-lg shadow transition cursor-pointer animate-fade-in hover:bg-[#66538d55] hover:text-primary text-muted-foreground"
      onClick={onOpen}
      type="button"
    >
      <Gear size={22} />
    </button>
  );
}
