import { YJLoader } from "@/ui/product-components/yj-loader";

export default function DashboardLoading() {
  return (
    <main className="min-h-screen bg-page-gradient">
      <YJLoader
        title="Opening your dashboard"
        subtitle="Loading your profile, latest search run, and job board."
      />
    </main>
  );
}
