"use client";

import { YJCelebration } from "@/ui/product-components/yj-celebration";

type DashboardEffectsProps = {
  celebrateLogin?: boolean;
  celebrateSearch?: boolean;
};

export function DashboardEffects({
  celebrateLogin = false,
  celebrateSearch = false,
}: DashboardEffectsProps) {
  return (
    <>
      <YJCelebration active={celebrateLogin} label="IN" />
      <YJCelebration active={celebrateSearch} label="YJ" />
    </>
  );
}
