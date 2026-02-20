"use client";

import React from "react";
import { motion } from "framer-motion";
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

                    {/* Professional Experience */}
                    <div className="mb-12 relative pl-8 border-l border-primary/20 fade-in-on-load">
                        <div className="absolute left-0 top-1.5 w-3 h-3 -translate-x-[6px] bg-primary rounded-full ring-4 ring-primary/10" />
                        <h3 className="text-xl md:text-2xl font-bold mb-6 text-white uppercase tracking-wider">Professional Experience</h3>

                        <div className="space-y-10">
                            {/* MindMatrix Internship */}
                            <div className="relative group">
                                <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors uppercase">GenAI Intern</h4>
                                <div className="text-primary text-sm font-semibold mb-2">MindMatrixEd • Jan 2026 - Present</div>
                                <p className="text-muted-foreground/80 text-sm md:text-base leading-relaxed uppercase tracking-wide text-xs">
                                    Building Android applications with Kotlin and Jetpack, and integrating Generative AI features using LLM APIs and prompt engineering.
                                </p>
                            </div>

                            {/* TCS Internship */}
                            <div className="relative group">
                                <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors uppercase">Cybersecurity Analyst – Virtual Internship</h4>
                                <div className="text-primary text-sm font-semibold mb-2">Tata Consultancy Services • Jul 2025 - Aug 2025</div>
                                <p className="text-muted-foreground/80 text-sm md:text-base leading-relaxed uppercase tracking-wide text-xs">
                                    Worked on Identity and Access Management (IAM) concepts used in large enterprises.
                                    Analyzed access control strategies and secure system design considerations.
                                </p>
                            </div>

                            {/* YouTube */}
                            <div className="relative group">
                                <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors uppercase">Content Creator</h4>
                                <div className="text-primary text-sm font-semibold mb-2">YouTube • Jun 2023 - Aug 2025</div>
                                <p className="text-muted-foreground/80 text-sm md:text-base leading-relaxed uppercase tracking-wide text-xs">
                                    Built and grew a technical channel to 1.2K+ subscribers through consistent content creation.
                                    Developed communication, audience engagement, and content planning skills.
                                </p>
                            </div>
                        </div>
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
                        <ul className="grid grid-cols-1 gap-3 text-muted-foreground/80 text-sm md:text-base list-none">
                            {[
                                {
                                    name: "Generative AI, LLM and RAG – Skill Up (GeeksforGeeks, 2026)",
                                    link: "https://www.geeksforgeeks.org/certificate/dae88e16ddd16704d7c1543461d2f916?utm_source=socials&utm_medium=cc_link",
                                    image: "/cert-genai.jpg"
                                },
                                {
                                    name: "Agentic AI – Skill Up (GeeksforGeeks, 2026)",
                                    link: "https://www.geeksforgeeks.org/certificate/9f146fcd7158c3f26ab6a061d4e0a553?utm_source=socials&utm_medium=cc_link",
                                    image: "/cert-agentic.jpg"
                                },
                                {
                                    name: "AI Tools – Skill Up (GeeksforGeeks, 2026)",
                                    link: "https://www.geeksforgeeks.org/certificate/ede1899b941709abac0d9473107696b9?utm_source=socials&utm_medium=cc_link",
                                    image: "/cert-aitools.jpg"
                                },
                                {
                                    name: "Machine Learning Introduction for Everyone – IBM (Coursera, 2025)",
                                    link: "https://www.coursera.org/account/accomplishments/verify/79ZBC2YTT1",
                                    image: "/cert-ml.jpg"
                                },
                                {
                                    name: "Cybersecurity Awareness and Innovation – EIT Digital (Coursera, 2025)",
                                    link: "https://www.coursera.org/account/accomplishments/verify/HM11A22C",
                                    image: "/cert-cybersecurity.jpg"
                                },
                                {
                                    name: "Cybersecurity Analyst Job Simulation – TCS (Forage, 2025)",
                                    link: "https://drive.google.com/drive/u/1/folders/1qQPg4r1mzhX0HCn6j7YBGRfukrlmALEI",
                                    image: "/cert-tcs.jpg"
                                }
                            ].map((cert, i) => (
                                <li key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-secondary/30 transition-all group">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0">
                                            {cert.image ? (
                                                <a href={cert.image} target="_blank" rel="noopener noreferrer" className="block w-10 h-10 rounded overflow-hidden border border-white/10 hover:border-secondary transition-colors">
                                                    <img src={cert.image} alt="Certificate" className="w-full h-full object-cover" />
                                                </a>
                                            ) : (
                                                <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                                            )}
                                        </div>
                                        <span className="text-white/90 group-hover:text-white transition-colors font-medium">{cert.name}</span>
                                    </div>
                                    <div className="flex gap-2 shrink-0">
                                        {cert.link && (
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[10px] uppercase font-bold tracking-widest text-secondary hover:text-white hover:bg-secondary px-3 py-1.5 rounded-full border border-secondary/30 transition-all"
                                            >
                                                Verify
                                            </a>
                                        )}
                                    </div>
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
