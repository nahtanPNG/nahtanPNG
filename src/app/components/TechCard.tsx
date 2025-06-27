"use client";
import React, { ReactElement, useRef } from "react";
import { handleMouseMove } from "../utils/handle-mouse-move";

interface TechCardProps {
  name: string;
  logo: ReactElement;
  color: string;
}

export const TechCard: React.FC<TechCardProps> = ({ name, logo, color }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className="card-glass cursor-pointer border dark:border-zinc-700 flex items-center gap-3 rounded-xl p-3 hover:bg-accent/70 text-accent-foreground transition-colors focus:outline-hidden focus-visible:outline focus-visible:outline-ring relative overflow-hidden"
      onMouseMove={(e) =>
        handleMouseMove(e, cardRef as React.RefObject<HTMLDivElement>)
      }
    >
      <div
        className="card-glow"
        style={{
          background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), ${color}44 0%, transparent 60%)`,
        }}
      />
      <div className="p-2 flex items-center justify-center rounded-lg relative overflow-hidden">
        <span
          className="absolute inset-0 flex items-center justify-center blur-lg opacity-70 z-0"
          style={{ fontSize: 44, color }}
        >
          {logo}
        </span>
        <span
          className="z-10 relative flex items-center justify-center"
          style={{ width: 24, height: 24, color }}
        >
          {logo}
        </span>
      </div>
      <span className="text-xs md:text-sm">{name}</span>
    </div>
  );
};
