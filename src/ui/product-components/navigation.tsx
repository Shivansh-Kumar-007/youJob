import Link from "next/link";
import { Logo } from "@/ui/product-components/logo";

export function Navigation() {
  return (
    <nav className="border-b border-(--color-surface-variant) bg-(--color-surface)">
      <div className="page-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
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
            href="/login"
            className="text-sm font-medium text-(--color-on-surface-variant) hover:text-(--color-on-surface)"
          >
            Login
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
