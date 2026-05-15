import Link from "next/link";

export function Navigation() {
  return (
    <nav className="border-b border-(--color-surface-variant) bg-(--color-surface)">
      <div className="page-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold text-(--color-primary)">
            youJob
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/jobs"
            className="text-sm font-medium text-(--color-on-surface-variant) hover:text-(--color-on-surface)"
          >
            Jobs
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-(--color-on-surface-variant) hover:text-(--color-on-surface)"
          >
            Dashboard
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-(--color-on-surface-variant) hover:text-(--color-on-surface)"
          >
            Pricing
          </Link>
        </div>
      </div>
    </nav>
  );
}
