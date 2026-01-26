"use client";

import React from "react";
import { m } from "framer-motion";
import { Calendar, Award, BookOpen, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function Experience() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-black/40">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto antialiased pt-4 relative">

                    {/* Introduction */}
                    <div className="mb-12 fade-in-on-load">
                        <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6 flex items-center gap-3 text-white">
                            <BookOpen className="text-primary w-8 h-8 md:w-10 md:h-10" /> Career Journey
                        </h2>
                    </div>

                    {/* Education */}
                    <div className="mb-12 relative pl-8 border-l border-primary/20 fade-in-on-load [animation-delay:100ms]">
                        <div className="absolute left-0 top-1.5 w-3 h-3 -translate-x-[6px] bg-primary rounded-full ring-4 ring-primary/10" />
                        <h3 className="text-xl md:text-2xl font-bold mb-1 text-white">Bachelor of Engineering</h3>
                        <div className="text-primary text-sm font-semibold mb-2">Sir MVIT, Bengaluru • 2022 - 2026</div>
                        <div className="text-muted-foreground/80 text-sm md:text-base space-y-2 max-w-xl">
                            <p>CSE (IoT and Cybersecurity with Blockchain Technology)</p>
                            <p className="font-mono text-secondary-foreground bg-secondary/10 inline-block px-2 py-0.5 rounded text-xs">Current CGPA: 8.5</p>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-12 relative pl-8 border-l border-secondary/20 fade-in-on-load [animation-delay:200ms]">
                        <div className="absolute left-0 top-1.5 w-3 h-3 -translate-x-[6px] bg-secondary rounded-full ring-4 ring-secondary/10" />
                        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                            <Award className="w-5 h-5 text-secondary" /> Expert Credentials
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted-foreground/80 text-sm md:text-base list-none">
                            {[
                                "Generative AI, LLM and RAG – GfG",
                                "Agentic AI Mastery – GfG",
                                "Machine Learning Specialist – IBM",
                                "Cybersecurity Analyst – TCS",
                                "Advanced RAG Pipelines – GeeksforGeeks",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Achievements */}
                    <div className="mb-12 relative pl-8 border-l border-yellow-500/20 fade-in-on-load [animation-delay:300ms]">
                        <div className="absolute left-0 top-1.5 w-3 h-3 -translate-x-[6px] bg-yellow-500 rounded-full ring-4 ring-yellow-500/10" />
                        <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                            <Trophy className="w-5 h-5 text-yellow-500" /> Professional Milestones
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                            {[
                                { label: "DSA Problems", val: "200+" },
                                { label: "National Hackathon", val: "Top 64" },
                                { label: "YouTube Audience", val: "1.2K+" },
                                { label: "Leadership", val: "NCC Cadet" },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl group hover:border-yellow-500/30 transition-colors">
                                    <div className="text-xl md:text-2xl font-black text-white mb-1">{item.val}</div>
                                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-yellow-500/70 transition-colors">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
