"use client";

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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <NeuralNetwork />
            <div className="container px-4 mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 text-center lg:text-left z-10"
                >
                    <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for Hire
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-space-grotesk tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
                        <HackerText text="Naveen Kumar" className="block" />
                        <span className="text-secondary text-5xl md:text-7xl tracking-tighter">Yadav</span>
                    </h1>

                    <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-[60px] md:h-auto font-mono">
                        <Typewriter
                            options={{
                                strings: [
                                    "Enterprise RAG Platforms",
                                    "Autonomous AI Agents",
                                    "Revenue Intelligence Systems",
                                    "Cybersecurity Analysis",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                                delay: 50,
                            }}
                        />
                    </div>

                    <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0">
                        Final year CSE (IoT & Cybersecurity) student at Sir MVIT, Bengaluru.
                        Passionate about building scalable AI systems and autonomous agents.
                    </p>

                    <AgentTerminal />

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-8">
                        <Link href="#projects">
                            <MagneticButton>
                                <Button size="lg" className="w-full sm:w-auto glow bg-primary hover:bg-primary/90">
                                    View Projects <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </MagneticButton>
                        </Link>
                        <a href="/resume.pdf" download="Naveen_Kumar_Yadav_Resume.pdf">
                            <MagneticButton>
                                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10">
                                    Download Resume <Download className="ml-2 w-4 h-4" />
                                </Button>
                            </MagneticButton>
                        </a>
                        <Link href="#contact">
                            <Button variant="ghost" size="lg" className="w-full sm:w-auto hover:bg-white/5">
                                Contact Me <Mail className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Photo / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative z-10 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] group">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[50px] opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />

                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-full border-4 border-white/5 overflow-hidden bg-black/50 backdrop-blur-sm shadow-2xl">
                            <Image
                                src="/profile.png"
                                alt="Naveen"
                                fill
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-110 scale-[1.5]"
                                priority
                            />
                        </div>


                    </div>
                </motion.div>
            </div>
        </section>
    );
}
