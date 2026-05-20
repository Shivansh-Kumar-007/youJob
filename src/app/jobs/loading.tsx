import { YJLoader } from "@/ui/product-components/yj-loader";

export default function JobsLoading() {
  return (
    <main className="min-h-screen bg-page-gradient">
      <YJLoader
        title="Loading results"
        subtitle="Pulling your latest saved jobs and rendering the board."
      />
    </main>
  );
}
