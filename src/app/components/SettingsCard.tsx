import { Gear } from "@phosphor-icons/react";

export default function SettingsCard({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      aria-label="Abrir configurações"
      className="mb-4 card-glass p-2 rounded-lg shadow transition cursor-pointer"
      onClick={onOpen}
      type="button"
    >
      <Gear size={22} />
    </button>
  );
}
