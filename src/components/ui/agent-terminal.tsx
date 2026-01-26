"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

const logs = [
    "Initializing Agentic Orchestrator...",
    "Scanning repositories @naveen18112003...",
    "Analysis Agent: 15+ GenAI projects identified.",
    "RAG Pipeline: Multi-step reasoning enabled.",
    "Intent Analyzer: User intent mapped to technical expertise.",
    "System Status: Elite engineering proof confirmed.",
    "> Building the future of AI workflows...",
];

export const AgentTerminal = () => {
    const [currentLogs, setCurrentLogs] = useState<string[]>([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < logs.length) {
            const timer = setTimeout(() => {
                setCurrentLogs((prev) => [...prev, logs[index]]);
                setIndex(index + 1);
            }, 2000);
            return () => clearTimeout(timer);
        } else {
            // Reset after a while for loop
            const resetTimer = setTimeout(() => {
                setCurrentLogs([]);
                setIndex(0);
            }, 10000);
            return () => clearTimeout(resetTimer);
        }
    }, [index]);

    return (
        <div className="w-full max-w-md mx-auto lg:mx-0 mt-8 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden shadow-2xl font-mono text-[10px] sm:text-xs">
            <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border-b border-white/10">
                <Terminal className="w-3 h-3 text-primary" />
                <span className="text-muted-foreground uppercase tracking-widest text-[8px] sm:text-[10px] font-bold">Agent Logic Trace</span>
                <div className="flex gap-1 ml-auto">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500/50" />
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500/50" />
                </div>
            </div>
            <div className="p-3 sm:p-4 h-32 sm:h-40 overflow-y-auto flex flex-col gap-1 custom-scrollbar">
                <AnimatePresence>
                    {currentLogs.map((log, i) => (
                        <motion.div
                            key={i + log}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`${log.startsWith('>') ? 'text-primary font-bold mt-2' : 'text-muted-foreground'}`}
                        >
                            <span className="text-primary/50 mr-2">➜</span>
                            {log}
                        </motion.div>
                    ))}
                </AnimatePresence>
                {index < logs.length && (
                    <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-2 h-4 bg-primary inline-block ml-1"
                    />
                )}
            </div>
        </div>
    );
};
