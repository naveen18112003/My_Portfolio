"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, FolderGit2, Layers, X, Info, Zap, Target, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import mermaid from "mermaid";

interface Project {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    image: string;
    featured?: boolean;
    architecture?: string;
    brief?: {
        challenge: string;
        solution: string;
        impact: string;
    };
}

const projects: Project[] = [
    {
        title: "Empire RAG & Agentic Search",
        description: "Enterprise-grade RAG system with multi-step reasoning, intent-aware pipelines, and custom in-memory vector store using cosine similarity.",
        tech: ["Python", "FastAPI", "LLMs", "Vector DB"],
        github: "https://github.com/naveen18112003/-ENTERPRISE-RAG-AGENTIC-SEARCH-PLATFORM",
        demo: "https://enterprise-rag-platform.vercel.app/",
        image: "/project-rag.png",
        featured: true,
        architecture: `
graph TD
    User([User Query]) --> Intent[Intent Analyzer]
    Intent --> Router{Router}
    Router -- General --> LLM[Base LLM]
    Router -- Document --> Retrieval[Vector Retrieval]
    Retrieval --> Rerank[Reranking Agent]
    Rerank --> Synthesis[Response Synthesis]
    Synthesis --> Output([Final Answer])
        `,
        brief: {
            challenge: "Managing token limits and context drift while maintaining high retrieval precision across 10,000+ enterprise documents.",
            solution: "Implemented an 'Intent-Aware Router' and a custom reranking agent using Cross-Encoders to filter noise before synthesis.",
            impact: "Achieved 95% accuracy in intent recognition and reduced LLM hallucination rate by 40%."
        }
    },
    {
        title: "Autonomous AI Revenue Intel",
        description: "AI-powered dashboard for CRM data analysis, deal risk scoring, and automated sales strategy generation.",
        tech: ["Python", "Streamlit", "LLMs", "Pandas"],
        github: "https://github.com/naveen18112003/Autonomous-AI-Revenue-Intelligence-Deal-Execution-Platform",
        demo: "https://naveen18112003-autonomous-ai-revenue-intelligence-de-app-m7t4re.streamlit.app/",
        image: "/project-analytics.png",
        featured: true,
        architecture: `
graph LR
    CRM[(CRM Data)] --> Parser[Data Parser]
    Parser --> Scorer[Risk Scorer Agent]
    Scorer --> Strategy[Sales Strategy Engine]
    Strategy --> Dashboard[Streamlit UI]
        `,
        brief: {
            challenge: "Converting messy, unstructured CRM logs into actionable deal-risk scores in near real-time.",
            solution: "Developed an autonomous parsing agent that uses few-shot prompting to extract hidden sentiment and commitment signals from sales transcripts.",
            impact: "Enabled sales teams to identify at-risk deals 2 weeks earlier than traditional manual auditing."
        }
    },
    {
        title: "AI Business Operations Manager",
        description: "Multi-agent system with analysis, risk, and execution agents for automated operational workflows.",
        tech: ["FastAPI", "React", "AI Agents", "LLMs"],
        github: "https://github.com/naveen18112003/Autonomous-AI-Business-Operations-Manager",
        demo: "https://autonomous-ai-business-operations-m.vercel.app/overview",
        image: "/project-agent.png",
        featured: true,
        architecture: `
sequenceDiagram
    participant U as User
    participant O as Orchestrator
    participant A as Analysis Agent
    participant R as Risk Agent
    participant E as Execution Agent
    U->>O: Request Task
    O->>A: Analyze Specs
    A-->>O: Analysis Plan
    O->>R: Evaluate Risks
    R-->>O: Risk Level 
    O->>E: Execute Task
    E-->>U: Final Delivery
        `,
        brief: {
            challenge: "Coordinating multiple agents without falling into 'infinite loops' or conflicting execution states.",
            solution: "Designed a state-machine orchestrator with strictly defined handoffs and a 'supervisor' agent that monitors for task redundancy.",
            impact: "Successfully automated 80% of repetitive operational workflows with zero manual intervention required."
        }
    }
];

function Mermaid({ chart }: { chart: string }) {
    useEffect(() => {
        mermaid.initialize({
            startOnLoad: true,
            theme: "dark",
            securityLevel: "loose",
            fontFamily: "var(--font-space-grotesk), sans-serif",
        });
        mermaid.run({ querySelector: ".mermaid-renderer" }).catch(console.error);
    }, [chart]);

    return (
        <div key={chart} className="mermaid-renderer flex justify-center w-full overflow-auto p-4 bg-white/5 rounded-xl border border-white/10">
            {chart}
        </div>
    );
}

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-24 relative bg-black/20">
            <div className="container-custom relative z-10">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6 text-white text-center">
                        Featured <span className="text-primary">Work</span>
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto text-center px-4">
                        Selection of projects demonstrating complex system architecture and intelligence.
                    </p>
                </m.div>

                <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto px-4">
                    {projects.map((project, idx) => (
                        <m.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative flex flex-col lg:flex-row gap-8 p-6 md:p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:border-primary/40 transition-all duration-500 will-change-transform overflow-hidden"
                        >
                            {/* Content Side */}
                            <div className="flex-1 z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                        <FolderGit2 className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk text-white">{project.title}</h3>
                                </div>
                                <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map(t => (
                                        <Badge key={t} variant="secondary" className="bg-white/5 border-white/10 text-white/70 py-0">{t}</Badge>
                                    ))}
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-primary/30 hover:bg-primary/10 text-primary rounded-full px-6"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <Layers className="w-4 h-4 mr-2" /> View Architecture
                                </Button>
                            </div>

                            {/* Image Side */}
                            <div className="flex-1 z-10">
                                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 group-hover:border-primary/30 transition-colors">
                                    <Image
                                        src={project.image}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        alt={project.title}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Link href={project.github} target="_blank"><Button size="sm" className="bg-white text-black">Source</Button></Link>
                                        {project.demo !== "#" && <Link href={project.demo} target="_blank"><Button size="sm" className="bg-primary text-white">Live Demo</Button></Link>}
                                    </div>
                                </div>
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSelectedProject(null)} />
                        <m.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-auto p-8 shadow-2xl">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                                <Button variant="ghost" size="icon" onClick={() => setSelectedProject(null)} className="rounded-full hover:bg-white/5"><X className="w-5 h-5 text-white" /></Button>
                            </div>
                            {selectedProject.architecture && <div className="mb-10"><Mermaid chart={selectedProject.architecture} /></div>}
                            {selectedProject.brief && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5"><h4 className="text-secondary text-xs font-bold uppercase mb-2">Challenge</h4><p className="text-xs text-muted-foreground">{selectedProject.brief.challenge}</p></div>
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5"><h4 className="text-primary text-xs font-bold uppercase mb-2">Solution</h4><p className="text-xs text-muted-foreground">{selectedProject.brief.solution}</p></div>
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5"><h4 className="text-green-400 text-xs font-bold uppercase mb-2">Impact</h4><p className="text-xs text-muted-foreground">{selectedProject.brief.impact}</p></div>
                                </div>
                            )}
                        </m.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
