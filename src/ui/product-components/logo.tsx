import React from "react";

export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`relative ${className} group cursor-pointer transition-transform hover:scale-110 active:scale-95`}>
      <div className="absolute inset-0 bg-black translate-x-1 translate-y-1" />
      <div className="absolute inset-0 bg-[#facc15] border-2 border-black -rotate-3 transition-transform group-hover:rotate-0 flex items-center justify-center">
        <span className="text-black font-[1000] italic uppercase tracking-tighter text-xl select-none">
          YJ
        </span>
      </div>
    </div>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Logo className="w-10 h-10" />
      <span className="text-3xl font-[1000] uppercase italic tracking-[-0.08em] text-black">
        youJob
      </span>
    </div>
  );
}