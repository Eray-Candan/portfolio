import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="px-6 md:px-8">
        <Hero />
        <Projects />
      </main>
    </div>
  );
}
