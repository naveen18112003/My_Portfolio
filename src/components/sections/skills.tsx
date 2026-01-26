"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Brain, Code2, Database, Terminal, Cpu, Network, Layers, Bot, GitBranch, Cloud } from "lucide-react";

interface BentoItemProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    skills: string[];
    className?: string;
    delay?: number;
}

const BentoItem = ({ title, description, icon, skills, className, delay = 0 }: BentoItemProps) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={cn(
            "group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md transition-all hover:border-primary/50",
            className
        )}
    >
        {/* Holographic Scanline */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
        </div>

        <div className="relative z-10 p-6 h-full flex flex-col">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all duration-500" />

            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/5 p-3 text-primary group-hover:scale-110 transition-transform duration-300 border border-white/10">
                {icon}
            </div>

            <h3 className="mb-2 text-xl font-bold font-space-grotesk text-foreground">{title}</h3>
            <p className="mb-4 text-sm text-muted-foreground flex-1">{description}</p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {skills.map(skill => (
                    <Badge key={skill} variant="outline" className="bg-black/40 border-white/10 hover:border-primary/50 hover:text-primary transition-colors">
                        {skill}
                    </Badge>
                ))}
            </div>
        </div>
    </motion.div>
);

const FloatingIcon = ({ icon, delay, x, y }: { icon: React.ReactNode, delay: number, x: string, y: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            x: ["0%", "10%", "-10%", "0%"],
            y: ["0%", "-10%", "10%", "0%"],
        }}
        transition={{
            duration: 10,
            repeat: Infinity,
            delay,
        }}
        className="absolute text-primary/20 pointer-events-none"
        style={{ left: x, top: y }}
    >
        {icon}
    </motion.div>
);

export function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background Animations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <FloatingIcon icon={<Brain className="w-12 h-12" />} delay={0} x="10%" y="20%" />
                <FloatingIcon icon={<Database className="w-8 h-8" />} delay={2} x="85%" y="15%" />
                <FloatingIcon icon={<Terminal className="w-10 h-10" />} delay={4} x="75%" y="70%" />
                <FloatingIcon icon={<Cpu className="w-14 h-14" />} delay={1} x="15%" y="75%" />
                <FloatingIcon icon={<Network className="w-9 h-9" />} delay={3} x="50%" y="10%" />
                <FloatingIcon icon={<Bot className="w-11 h-11" />} delay={5} x="90%" y="45%" />
                <FloatingIcon icon={<GitBranch className="w-7 h-7" />} delay={2.5} x="5%" y="50%" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-4">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Ecosystem</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Expertise in building Autonomous Systems and Intelligence-driven architectures.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(0,1fr)]">
                    {/* Large Item: AI & ML */}
                    <BentoItem
                        title="AI / ML & Agentic Systems"
                        description="Specializing in multi-agent orchestration, advanced retrieval (RAG), and neural architectures."
                        icon={<Brain className="w-8 h-8" />}
                        skills={["RAG Pipelines", "Agentic AI", "LLM-based Systems", "TensorFlow", "FastAPI", "Keras", "Scikit-Learn"]}
                        className="md:col-span-2 md:row-span-1 border-primary/20 bg-primary/5 shadow-[0_0_50px_-12px_rgba(168,85,247,0.2)]"
                        delay={0.1}
                    />

                    {/* Languages */}
                    <BentoItem
                        title="Core Languages"
                        description="Crafting high-performance logic with C++ and Python."
                        icon={<Code2 className="w-8 h-8" />}
                        skills={["Python", "C++", "C", "SQL"]}
                        delay={0.2}
                    />

                    {/* Backend */}
                    <BentoItem
                        title="Backend & Infrastructure"
                        description="Developing resilient APIs and scalable database schemas."
                        icon={<Terminal className="w-8 h-8" />}
                        skills={["FastAPI", "MongoDB", "Node.js (Basics)", "RESTful APIs", "Firebase"]}
                        delay={0.3}
                    />

                    {/* Tools */}
                    <BentoItem
                        title="Ops & Tooling"
                        description="Streamlining development with modern DevOps and AI tools."
                        icon={<Cpu className="w-8 h-8" />}
                        skills={["Docker", "Git/GitHub", "Jupyter", "VS Code", "Google Colab", "Linux"]}
                        className="md:col-span-2"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
}
