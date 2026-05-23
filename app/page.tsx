import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Building } from "@/components/building";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Building />
    </main>
  );
}
