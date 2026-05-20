"use client";

import { Logo } from "@/ui/product-components/logo";

type YJLoaderProps = {
  active?: boolean;
  title?: string;
  subtitle?: string;
  fullscreen?: boolean;
};

export function YJLoader({
  active = true,
  title = "Hunting jobs",
  subtitle = "Scanning your profile, generating queries, and refreshing the board.",
  fullscreen = true,
}: YJLoaderProps) {
  if (!active) {
    return null;
  }

  return (
    <div
      className={
        fullscreen
          ? "fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-6 backdrop-blur-[2px]"
          : "flex items-center justify-center rounded-4xl border-2 border-black bg-[#fff7db] p-8"
      }
    >
      <div className="w-full max-w-lg rounded-[30px] border-[3px] border-black bg-white px-8 py-10 text-center shadow-[16px_16px_0_0_#000000]">
        <div className="mx-auto flex w-fit items-center justify-center">
          <div className="animate-[yj-pulse_1.2s_ease-in-out_infinite]">
            <Logo className="h-16 w-16" />
          </div>
        </div>
        <p className="mt-5 text-xs font-black tracking-[0.3em] text-black/45 uppercase">
          YJ Live Search
        </p>
        <h2 className="tracking-lighter mt-3 text-4xl font-[1000] text-black uppercase italic">
          {title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-black/65">{subtitle}</p>
        <div className="mt-6 overflow-hidden rounded-full border-2 border-black bg-[#fff0a8]">
          <div className="h-3 w-1/2 animate-[yj-load_1.3s_ease-in-out_infinite] bg-black" />
        </div>
      </div>
    </div>
  );
}
