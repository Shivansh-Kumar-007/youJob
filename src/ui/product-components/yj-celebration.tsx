"use client";

import { useMemo } from "react";

type YJCelebrationProps = {
  active?: boolean;
  label?: string;
};

type Piece = {
  id: number;
  left: string;
  delay: string;
  duration: string;
  rotate: string;
  background: string;
  shape: string;
};

export function YJCelebration({
  active = false,
  label = "YJ",
}: YJCelebrationProps) {
  const pieces = useMemo<Piece[]>(
    () =>
      Array.from({ length: 22 }, (_, index) => ({
        id: index,
        left: `${4 + ((index * 93) % 88)}%`,
        delay: `${(index % 7) * 0.08}s`,
        duration: `${1.6 + (index % 5) * 0.18}s`,
        rotate: `${((index * 37) % 70) - 35}deg`,
        background: index % 3 === 0 ? "#facc15" : index % 3 === 1 ? "#111111" : "#fff0a8",
        shape: index % 4 === 0 ? "rounded-md" : "rounded-full",
      })),
    [],
  );

  if (!active) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute top-[-10%] animate-[yj-confetti_linear_forwards] text-[10px] font-black tracking-[0.2em] text-black uppercase"
          style={{
            left: piece.left,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
            transform: `rotate(${piece.rotate})`,
          }}
        >
          <div
            className={`flex h-8 w-8 items-center justify-center border-2 border-black ${piece.shape}`}
            style={{ backgroundColor: piece.background }}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
