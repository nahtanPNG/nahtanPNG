import { ReactNode, useRef } from "react";
import { handleMouseMove } from "../utils/handle-mouse-move";

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
  const cardRef = useRef<HTMLDivElement>(null!);

  return (
    <div
      ref={cardRef}
      className={`rounded-2xl shadow-lg border ${variant === "purple" ? "dark:border-[#66538D]" : "dark:border-zinc-700"} relative overflow-hidden ${className}`}
      onMouseMove={(e) => handleMouseMove(e, cardRef)}
    >
      <div className="card-glow" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
