"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, FolderGit2, Layers, X, Info, Zap, Target, TrendingUp } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Project {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    image: string;
    featured?: boolean;
    architecture?: string; // Mermaid diagram or detailed description
    brief?: {
        challenge: string;
        solution: string;
        impact: string;
    };
}

const projects: Project[] = [
    {
        title: "Enterprise RAG & Agentic Search",
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
    },
    {
        title: "News Article Categorizer",
        description: "NLP-based machine learning model to categorize news articles into specific domains with high precision.",
        tech: ["Python", "NLP", "Scikit-Learn", "Machine Learning"],
        github: "https://github.com/naveen18112003/News-Article-Categorizer-NLP-Machine-Learning",
        demo: "#",
        image: "/project-rag.png",
        featured: false,
        architecture: `
graph TD
    Data[Raw Text Data] --> Pre[Preprocessing/Tokenization]
    Pre --> Vec[TF-IDF Vectorization]
    Vec --> Model[SVM/Naive Bayes Model]
    Model --> Class[Categorized Output]
        `
    },
    {
        title: "Plant Disease Detection",
        description: "Deep learning model using Convolutional Neural Networks (CNN) to identify diseases in plants from leaf images.",
        tech: ["Python", "TensorFlow", "Keras", "CNN"],
        github: "https://github.com/naveen18112003/Plant-Disease-Detection-Using-CNN",
        demo: "#",
        image: "/project-analytics.png",
        featured: false,
        architecture: `
graph LR
    Img[Leaf Image] --> Conv[Convolutional Layers]
    Conv --> Pool[Max Pooling]
    Pool --> Flatten[Flattening]
    Flatten --> Dense[Dense Neural Network]
    Dense --> Pred[Disease Class Prediction]
        `
    },
    {
        title: "Cybersecurity Risk Detector",
        description: "ML-driven explainable AI (XAI) system for real-time risk assessment, severity analysis, and offline security reporting.",
        tech: ["Python", "Streamlit", "Machine Learning", "XAI"],
        github: "https://github.com/naveen18112003/Cybersecurity-Risk-Detector-WebApp",
        demo: "#",
        image: "/project-agent.png",
        featured: false,
        architecture: `
graph TD
    Traffic[Network Traffic/Logs] --> Feature[Feature Extraction]
    Feature --> RF[Random Forest Classifier]
    RF --> XAI[SHAP Explainability]
    RF --> Alert[Severity Scoring]
    XAI --> Insight[Risk Justification]
        `
    }
];

import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import mermaid from "mermaid";

// Initialize mermaid
if (typeof window !== "undefined") {
    mermaid.initialize({
        startOnLoad: true,
        theme: "dark",
        securityLevel: "loose",
        fontFamily: "var(--font-space-grotesk), sans-serif",
        flowchart: {
            htmlLabels: true,
            useMaxWidth: false,
        },
        themeVariables: {
            primaryColor: "#a855f7",
            primaryTextColor: "#fff",
            primaryBorderColor: "#a855f7",
            lineColor: "#fff",
            secondaryColor: "#1e1b4b",
            tertiaryColor: "#000",
            fontSize: "14px",
        }
    });
}

function Mermaid({ chart }: { chart: string }) {
    useEffect(() => {
        // Use mermaid.run for more reliable dynamic rendering in v10+
        mermaid.run({
            querySelector: ".mermaid-renderer",
        }).catch(err => console.error("Mermaid render error:", err));
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
        <section id="projects" className="py-24 relative">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">
                        Featured <span className="text-secondary">Work</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A selection of projects demonstrating complex system architecture and AI integration.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative flex flex-col md:flex-row gap-8 p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md hover:border-primary/50 transition-all duration-500 overflow-hidden"
                        >
                            {/* Decorative Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content Side (Details) */}
                            <div className="flex-1 relative z-10 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                        <FolderGit2 className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk">{project.title}</h3>
                                </div>

                                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map(t => (
                                        <Badge key={t} variant="secondary" className="bg-white/5 border-white/10 text-white/70">
                                            {t}
                                        </Badge>
                                    ))}
                                </div>

                                {project.architecture && (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-fit border-primary/30 hover:bg-primary/10 text-primary"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <Layers className="w-4 h-4 mr-2" /> View Architecture
                                    </Button>
                                )}
                            </div>

                            {/* Visual/Source Side */}
                            <div className="flex-1 relative z-10">
                                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/30 transition-colors">
                                    <Image
                                        src={project.image}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        alt={project.title}
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                                    {/* Action Buttons Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Link href={project.github} target="_blank">
                                            <Button size="sm" className="bg-white text-black hover:bg-white/90">
                                                <Github className="w-4 h-4 mr-2" /> Source
                                            </Button>
                                        </Link>
                                        {project.demo !== "#" && (
                                            <Link href={project.demo} target="_blank">
                                                <Button size="sm" className="bg-primary text-white hover:bg-primary/90">
                                                    <ExternalLink className="w-4 h-4 mr-2" /> Demo
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground px-2">
                                    <span className="flex items-center gap-1">
                                        <Github className="w-3 h-3" /> {project.github.split('/').pop()}
                                    </span>
                                    {project.featured && (
                                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 italic">
                                            Featured
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="https://github.com/naveen18112003/" target="_blank">
                        <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                            View Full Archive <ArrowUpRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Architecture Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-md"
                            onClick={() => setSelectedProject(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl max-h-[90vh] bg-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                        >
                            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/20 rounded-lg text-primary">
                                        <Layers className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-space-grotesk">{selectedProject.title}</h3>
                                        <p className="text-xs text-muted-foreground italic flex items-center gap-1">
                                            <Info className="w-3 h-3" /> Technical Architecture Flow
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full hover:bg-white/10"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>

                            <div className="flex-1 overflow-auto p-4 sm:p-8 flex flex-col">
                                {selectedProject.architecture && (
                                    <div className="mb-6 sm:mb-10 w-full flex flex-col items-center">
                                        <Mermaid chart={selectedProject.architecture} />
                                        <p className="mt-4 text-[8px] sm:text-[10px] text-muted-foreground uppercase tracking-widest font-bold opacity-50 text-center">
                                            System Logic & Orchestration
                                        </p>
                                    </div>
                                )}

                                {selectedProject.brief && (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                                        <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors group">
                                            <div className="flex items-center gap-3 mb-2 sm:mb-3 text-secondary">
                                                <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider">The Challenge</h4>
                                            </div>
                                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                                {selectedProject.brief.challenge}
                                            </p>
                                        </div>

                                        <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors group">
                                            <div className="flex items-center gap-3 mb-2 sm:mb-3 text-primary">
                                                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider">The Solution</h4>
                                            </div>
                                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                                {selectedProject.brief.solution}
                                            </p>
                                        </div>

                                        <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors group">
                                            <div className="flex items-center gap-3 mb-2 sm:mb-3 text-green-400">
                                                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider">Impact</h4>
                                            </div>
                                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                                {selectedProject.brief.impact}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-white/5 text-[10px] sm:text-xs text-muted-foreground text-center italic">
                                    Project developed demonstrating expertise in {selectedProject.tech.join(" • ")}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
