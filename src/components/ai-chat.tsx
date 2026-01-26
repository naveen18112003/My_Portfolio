"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, User } from "lucide-react";
import { Button } from "./ui/button";

const initialMessages = [
    { role: "ai", text: "Hi! I'm Naveen's Digital Twin. I know everything about his projects and technical expertise. What would you like to know?" }
];

const qaBase = [
    {
        q: "What's his technical focus?",
        a: "Naveen is deep into Agentic AI and Backend Architecture. He specializes in building multi-agent systems, complex RAG pipelines, and is currently finishing his degree in IoT & Cybersecurity at Sir MVIT."
    },
    {
        q: "Tell me about his AI projects",
        a: "Naveen has built several cutting-edge systems: from an Enterprise RAG Platform with multi-step reasoning to an Autonomous AI Business Manager. Each project now features a 'View Architecture' button so you can see the technical design diagrams!"
    },
    {
        q: "How does he build AI Agents?",
        a: "Naveen uses a multi-agent orchestration approach—think of it as a team of specialized 'workers' (Analysis, Execution, Risk) managed by a central Orchestrator. This allows for complex, autonomous decision-making."
    },
    {
        q: "What are his RAG capabilities?",
        a: "He doesn't just do basic retrieval. He implements 'Agentic RAG' which includes intent-aware routing, hybrid search (vector + keyword), and sophisticated reranking to ensure the highest possible relevance."
    },
    {
        q: "Where can I find his code?",
        a: "You can find all his repositories, including his latest Agentic AI work, on his updated GitHub profile: https://github.com/naveen18112003/"
    },
    {
        q: "Why hire Naveen?",
        a: "Naveen isn't just a coder; he's an AI Architect. He understands how to orchestrate multiple LLM agents, optimize vector retrieval, and build secure, scalable backend systems. Plus, he's actively based in Bengaluru!"
    }
];

import { useChat } from "@/context/chat-context";

export const AiChat = () => {
    const { isOpen, setIsOpen } = useChat();
    const [messages, setMessages] = useState(initialMessages);
    const [isTyping, setIsTyping] = useState(false);

    const handleQuestion = (question: string, answer: string) => {
        setMessages(prev => [...prev, { role: "user", text: question }]);
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { role: "ai", text: answer }]);
        }, 1500);
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-20 sm:bottom-24 right-4 z-50 w-[calc(100vw-2rem)] sm:w-80 md:w-96 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-white/5 p-4 border-b border-white/10 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="font-space-grotesk font-bold">Naveen AI</span>
                            </div>
                            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
                                <X className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Messages */}
                        <div className="h-64 overflow-y-auto p-4 flex flex-col gap-3">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-primary text-white' : 'bg-white/10 text-muted-foreground'}`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 p-3 rounded-2xl text-sm text-muted-foreground flex gap-1">
                                        <span className="animate-bounce">.</span>
                                        <span className="animate-bounce delay-100">.</span>
                                        <span className="animate-bounce delay-200">.</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quick Actions */}
                        <div className="p-4 border-t border-white/10 bg-white/5 flex flex-col gap-2">
                            {qaBase.map((qa, i) => (
                                <button
                                    key={i}
                                    disabled={isTyping}
                                    onClick={() => handleQuestion(qa.q, qa.a)}
                                    className="text-left text-xs p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-white transition-colors border border-white/5"
                                >
                                    {qa.q}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


        </>
    );
};
