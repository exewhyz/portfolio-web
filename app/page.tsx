import Hero from "@/components/hero";
import InfoTabs from "@/components/tabs/info-tabs";
export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-6 p-4 md:p-6 overflow-auto">
      {/* Hero Section */}
      <Hero />
      {/* Main Content Tabs */}
      <InfoTabs />
    </main>
  );
}
