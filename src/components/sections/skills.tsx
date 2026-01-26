import { m } from "framer-motion";
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
    <m.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className={cn(
            "group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-md transition-all hover:border-primary/40 will-change-transform",
            className
        )}
    >
        <div className="relative z-10 p-6 h-full flex flex-col items-start gap-4">
            <div className="inline-flex items-center justify-center rounded-2xl bg-primary/5 p-3 text-primary group-hover:scale-110 transition-transform duration-500 border border-primary/10">
                {icon}
            </div>

            <div>
                <h3 className="mb-2 text-xl font-bold font-space-grotesk text-white">{title}</h3>
                <p className="mb-4 text-sm text-muted-foreground/80 leading-relaxed">{description}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
                {skills.map(skill => (
                    <Badge key={skill} variant="outline" className="text-[10px] bg-black/50 border-white/5 hover:border-primary/50 hover:text-primary transition-colors py-0.5">
                        {skill}
                    </Badge>
                ))}
            </div>
        </div>
    </m.div>
);

const FloatingIcon = ({ icon, delay, x, y }: { icon: React.ReactNode, delay: number, x: string, y: string }) => (
    <m.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: [0.1, 0.3, 0.1],
            y: ["0%", "15%", "0%"],
        }}
        transition={{
            duration: 8,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
        className="absolute text-primary/10 pointer-events-none hidden lg:block will-change-transform"
        style={{ left: x, top: y }}
    >
        {icon}
    </m.div>
);

export function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-black/20">
            {/* Background Decorations - Hidden on Mobile for Performance */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
                <FloatingIcon icon={<Brain className="w-12 h-12" />} delay={0} x="10%" y="20%" />
                <FloatingIcon icon={<Database className="w-8 h-8" />} delay={2} x="85%" y="15%" />
                <FloatingIcon icon={<Terminal className="w-10 h-10" />} delay={4} x="75%" y="70%" />
                <FloatingIcon icon={<Cpu className="w-14 h-14" />} delay={1} x="15%" y="75%" />
                <FloatingIcon icon={<Network className="w-9 h-9" />} delay={3} x="50%" y="10%" />
            </div>

            <div className="container-custom relative z-10">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 px-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-4 text-white">
                        Technical <span className="text-primary">Ecosystem</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
                        Specialized stack for high-performance AI orchestration and resilient infrastructure.
                    </p>
                </m.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Large Item: AI & ML */}
                    <BentoItem
                        title="AI / ML & Agentic Systems"
                        description="Specializing in multi-agent orchestration, advanced retrieval (RAG), and neural architectures."
                        icon={<Brain className="w-8 h-8" />}
                        skills={["RAG Pipelines", "Agentic AI", "LLM Orchestration", "TensorFlow", "FastAPI", "Keras"]}
                        className="lg:col-span-2 bg-primary/5 border-primary/10"
                        delay={0.1}
                    />

                    {/* Backend */}
                    <BentoItem
                        title="Backend Architectures"
                        description="Developing resilient APIs and scalable high-performance logic."
                        icon={<Terminal className="w-8 h-8" />}
                        skills={["FastAPI", "MongoDB", "Node.js", "RESTful APIs", "SQL"]}
                        delay={0.2}
                    />

                    {/* Languages */}
                    <BentoItem
                        title="Core Languages"
                        description="Crafting efficient systems with enterprise-grade speed."
                        icon={<Code2 className="w-8 h-8" />}
                        skills={["Python", "C++", "C"]}
                        delay={0.3}
                    />

                    {/* Tools */}
                    <BentoItem
                        title="Infrastructure & Ops"
                        description="Automating development with modern cloud and DevOps tooling."
                        icon={<Cpu className="w-8 h-8" />}
                        skills={["Docker", "Git/GitHub", "Linux", "Jupyter", "VS Code"]}
                        className="lg:col-span-2"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
}
