import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { Hero } from "@/components/sections/hero";
import dynamic from "next/dynamic";

const Skills = dynamic(() => import("@/components/sections/skills").then(mod => mod.Skills), { ssr: true });
const Projects = dynamic(() => import("@/components/sections/projects").then(mod => mod.Projects), { ssr: true });
const Experience = dynamic(() => import("@/components/sections/experience").then(mod => mod.Experience), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/contact").then(mod => mod.Contact), { ssr: true });

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
