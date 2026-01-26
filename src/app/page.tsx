import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-primary/30">
      <AnimatedBackground />

      <div className="flex flex-col gap-0">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
