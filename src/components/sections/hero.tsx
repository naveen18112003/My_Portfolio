"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HackerText } from "@/components/ui/hacker-text";
import { MagneticButton } from "@/components/ui/magnetic-button";

import { NeuralNetwork } from "@/components/ui/neural-network";
import { AgentTerminal } from "@/components/ui/agent-terminal";

export function Hero() {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-12">
            <NeuralNetwork />
            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Visual Pillar (First on Mobile for better engagement) */}
                    <m.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:flex-1 flex justify-center order-first lg:order-last will-change-transform"
                    >
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[40px] lg:blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse" />
                            <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden bg-black/60 shadow-2xl">
                                <Image
                                    src="/profile.png"
                                    alt="Naveen"
                                    fill
                                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-105 lg:scale-125"
                                    priority
                                    sizes="(max-width: 768px) 192px, 400px"
                                />
                            </div>
                        </div>
                    </m.div>

                    {/* Content Pillar */}
                    <m.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="w-full lg:flex-1 text-center lg:text-left will-change-[transform,opacity]"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Available for Global Projects
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-space-grotesk tracking-tight mb-4 text-white leading-[1.1]">
                            <HackerText text="Naveen" className="text-white" /> {" "}
                            <span className="text-secondary">Yadav</span>
                        </h1>

                        <div className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 font-mono h-12 flex items-center justify-center lg:justify-start">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Agentic AI Architect",
                                        "Enterprise RAG Specialist",
                                        "Revenue Intelligence System Builder",
                                        "Backend Security Expert",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    deleteSpeed: 30,
                                }}
                            />
                        </div>

                        <p className="text-base sm:text-lg text-muted-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Crafting autonomous intelligence and resilient backend infrastructures. Senior student at Sir MVIT, Bengaluru, specializing in IoT & Cybersecurity.
                        </p>

                        <div className="hidden sm:block">
                            <AgentTerminal />
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-10">
                            <Link href="#projects">
                                <Button size="lg" className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary/90 rounded-full font-bold">
                                    Explore Engineering <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                            <a href="/resume.pdf" download>
                                <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 border-white/10 hover:bg-white/5 rounded-full">
                                    Get Resume <Download className="ml-2 w-4 h-4" />
                                </Button>
                            </a>
                        </div>
                    </m.div>

                </div>
            </div>
        </section>
    );
}
