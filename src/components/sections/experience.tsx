"use client";

import { motion } from "framer-motion";
import { Calendar, Award, BookOpen, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function Experience() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <TracingBeam className="px-6">
                    <div className="max-w-2xl mx-auto antialiased pt-4 relative">

                        {/* Introduction */}
                        <div className="mb-12">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl font-bold font-space-grotesk mb-4 flex items-center gap-3"
                            >
                                <BookOpen className="text-primary w-8 h-8" /> Experience & Achievements
                            </motion.h2>
                        </div>

                        {/* Education */}
                        <div className="mb-12 relative pl-8 border-l border-white/10">
                            <div className="absolute left-0 top-1 w-3 h-3 -translate-x-[6.5px] bg-primary rounded-full border border-background" />
                            <h3 className="text-xl font-bold mb-1">Bachelor of Engineering</h3>
                            <div className="text-primary text-sm font-medium mb-1">Sir MVIT, Bengaluru • 2022 - 2026</div>
                            <div className="text-muted-foreground text-sm space-y-2">
                                <p>CSE (IoT and Cybersecurity with Blockchain Technology)</p>
                                <p className="font-mono text-secondary">CGPA: 8.5</p>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="mb-12 relative pl-8 border-l border-white/10">
                            <div className="absolute left-0 top-1 w-3 h-3 -translate-x-[6.5px] bg-secondary rounded-full border border-background" />
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Award className="w-5 h-5 text-secondary" /> Certifications
                            </h3>
                            <ul className="text-muted-foreground text-sm space-y-2 list-disc list-inside">
                                <li>Generative AI, LLM and RAG – GeeksforGeeks</li>
                                <li>Agentic AI – GeeksforGeeks</li>
                                <li>AI Tools – GeeksforGeeks</li>
                                <li>Machine Learning – IBM (Coursera)</li>
                                <li>Cybersecurity Analyst – TCS (Forage)</li>
                            </ul>
                        </div>

                        {/* Achievements */}
                        <div className="mb-12 relative pl-8 border-l border-white/10">
                            <div className="absolute left-0 top-1 w-3 h-3 -translate-x-[6.5px] bg-yellow-500 rounded-full border border-background" />
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Trophy className="w-5 h-5 text-yellow-500" /> Key Milestones
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                                    <div className="text-2xl font-bold text-white mb-1">200+</div>
                                    <div className="text-xs text-muted-foreground">DSA Problems Solved</div>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                                    <div className="text-lg font-bold text-white mb-1">Top 64</div>
                                    <div className="text-xs text-muted-foreground">National Hackathon (MNIT)</div>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                                    <div className="text-lg font-bold text-white mb-1">1.2K+ Sub</div>
                                    <div className="text-xs text-muted-foreground">YouTube Channel</div>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                                    <div className="text-lg font-bold text-white mb-1">NCC</div>
                                    <div className="text-xs text-muted-foreground">Cadet (Leadership)</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </TracingBeam>
            </div>
        </section>
    );
}
