"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/ui/shared-components/button";
import { refreshSearchAction } from "@/app/actions/search/refresh-search";
import { YJLoader } from "@/ui/product-components/yj-loader";
import { YJCelebration } from "@/ui/product-components/yj-celebration";

type SearchRefreshControlProps = {
  variant?: "primary" | "secondary";
  className?: string;
};

export function SearchRefreshControl({
  variant = "primary",
  className,
}: SearchRefreshControlProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [celebrate, setCelebrate] = useState(false);

  function runRefresh() {
    setError(null);

    startTransition(async () => {
      try {
        await refreshSearchAction();
        setCelebrate(true);
        router.refresh();
        setTimeout(() => setCelebrate(false), 2500);
      } catch (unknownError) {
        setError(
          unknownError instanceof Error
            ? unknownError.message
            : "Failed to refresh search"
        );
      }
    });
  }

  return (
    <>
      <YJLoader
        active={isPending}
        title="Refreshing your board"
        subtitle="Generating fresh Google Jobs queries and pulling source pages through TinyFish."
      />
      <YJCelebration active={celebrate} />
      <div className="space-y-3">
        <Button
          type="button"
          variant={variant}
          onClick={runRefresh}
          disabled={isPending}
          className={className}
        >
          {isPending ? "Refreshing..." : "Refresh Search"}
        </Button>
        {error ? <p className="text-sm text-(--color-error)">{error}</p> : null}
      </div>
    </>
  );
}
