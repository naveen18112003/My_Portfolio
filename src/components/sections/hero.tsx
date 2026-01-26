"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
            {/* Desktop Only: Neural Network */}
            <div className="hidden lg:block absolute inset-0">
                <NeuralNetwork />
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Visual Pillar - Centered for Mobile */}
                    <div className="w-full lg:flex-1 flex justify-center order-first lg:order-last fade-in-on-load lg:animate-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative hidden lg:block will-change-transform"
                        >
                            <div className="relative w-[400px] h-[400px] group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse" />
                                <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden bg-black/60 shadow-2xl">
                                    <Image
                                        src="/profile.png"
                                        alt="Naveen"
                                        fill
                                        className="object-cover object-top transition-transform duration-1000 group-hover:scale-105 scale-125"
                                        priority
                                        sizes="400px"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Mobile Only: Static Image to avoid Framer blurs/lag */}
                        <div className="lg:hidden relative w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-primary/20 overflow-hidden bg-black/60 shadow-xl">
                            <Image
                                src="/profile.png"
                                alt="Naveen"
                                fill
                                className="object-cover object-top"
                                priority
                                sizes="(max-width: 768px) 192px, 256px"
                            />
                        </div>
                    </div>

                    {/* Content Pillar */}
                    <div className="w-full lg:flex-1 text-center lg:text-left fade-in-on-load [animation-delay:200ms]">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="hidden lg:block will-change-[transform,opacity]"
                        >
                            <ContentBody />
                        </motion.div>

                        {/* Mobile Only: Simple Content */}
                        <div className="lg:hidden">
                            <ContentBody mobile />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

const ContentBody = ({ mobile = false }: { mobile?: boolean }) => (
    <>
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/10 bg-primary/5 text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-wider mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Global Projects
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-space-grotesk tracking-tight mb-4 text-white leading-[1.1]">
            <HackerText text="Naveen Kumar" className="text-white" /> {" "}
            <span className="text-secondary">Yadav</span>
        </h1>

        <div className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 font-mono h-12 flex items-center justify-center lg:justify-start">
            <Typewriter
                options={{
                    strings: [
                        "Agentic AI Architect",
                        "Enterprise RAG Specialist",
                        "Revenue Intelligence Builder",
                        "Backend Security Expert",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 40,
                }}
            />
        </div>

        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Crafting autonomous intelligence and resilient backend infrastructures. Senior student at Sir MVIT, Bengaluru.
        </p>

        <div className="hidden lg:block mb-8">
            <AgentTerminal />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link href="#projects">
                <Button size="lg" className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary/90 rounded-full font-bold text-sm">
                    Explore Engineering <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
            </Link>
            <a href="/resume.pdf" download className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 border-white/10 hover:bg-white/5 rounded-full text-sm">
                    Get Resume <Download className="ml-2 w-4 h-4" />
                </Button>
            </a>
        </div>
    </>
);
