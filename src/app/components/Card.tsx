import { ReactNode, useRef } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: string;
}

export default function Card({
  children,
  className = "",
  variant = "black",
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--x", `${x}%`);
    card.style.setProperty("--y", `${y}%`);
  }

  return (
    <div
      ref={cardRef}
      className={`rounded-2xl shadow-lg border ${variant === "purple" ? "dark:border-[#66538D]" : "dark:border-zinc-700"} relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <div className="card-glow" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
