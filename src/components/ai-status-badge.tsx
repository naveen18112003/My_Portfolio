"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useChat } from "@/context/chat-context";

export function AiStatusBadge() {
    const { openChat } = useChat();
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState("");
    const [mood, setMood] = useState<"neutral" | "happy" | "dancing">("neutral");

    // Scroll Logic
    const { scrollY } = useScroll();
    // Fade out from 1 to 0 as we scroll from 0px to 800px (approx 1 page)
    const opacity = useTransform(scrollY, [0, 800], [1, 0]);
    const pointerEvents = useTransform(scrollY, (y) => y > 800 ? "none" : "auto");

    // Updated Text
    const fullMessage = "Hi, I’m Naveen’s AI assistant. Ask me anything about his work or projects.";

    useEffect(() => {
        // Initial Hello Wave
        const timer1 = setTimeout(() => setShowMessage(true), 1200);
        return () => clearTimeout(timer1);
    }, []);

    useEffect(() => {
        if (showMessage && message.length < fullMessage.length) {
            const timeout = setTimeout(() => {
                setMessage(fullMessage.slice(0, message.length + 1));
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [showMessage, message]);

    return (
        <motion.div
            style={{ opacity, pointerEvents }}
            className="fixed top-24 right-8 z-40 hidden lg:flex flex-row-reverse items-start gap-4"
        >
            {/* Full Body Bot Container */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setMood("happy")}
                onMouseLeave={() => setMood("neutral")}
                onClick={() => {
                    setMood("dancing");
                    openChat();
                }}
            >
                {/* Hover Glow */}
                <div className="absolute -inset-4 bg-primary/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex flex-col items-center">

                    {/* HEAD */}
                    <motion.div
                        animate={{
                            y: mood === "dancing" ? [0, -2, 0] : 0,
                            rotate: mood === "happy" ? [0, 2, -2, 0] : 0
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="relative w-12 h-10 bg-black/90 border-2 border-primary/50 rounded-xl flex items-center justify-center shadow-lg z-20"
                    >
                        {/* Face */}
                        <div className="flex gap-2 items-center">
                            <motion.div
                                animate={{ scaleY: mood === "happy" ? 0.2 : 1 }}
                                className="w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_5px_cyan]"
                            />
                            <motion.div
                                animate={{ scaleY: mood === "happy" ? 0.2 : 1 }}
                                className="w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_5px_cyan]"
                            />
                        </div>
                    </motion.div>

                    {/* NECK */}
                    <div className="w-2 h-1 bg-gray-600" />

                    {/* UPPER BODY (With ASK ME screen) */}
                    <div className="relative w-16 h-20 bg-gray-800 rounded-2xl border border-white/10 flex flex-col items-center justify-center z-10 shadow-inner">
                        {/* Stomach Screen */}
                        <div className="w-12 h-10 bg-black/50 rounded-lg flex items-center justify-center border border-white/5 overflow-hidden">
                            <span className="text-[8px] font-bold text-cyan-300 animate-pulse text-center leading-tight">
                                ASK<br />ME
                            </span>
                        </div>

                        {/* ARMS */}
                        {/* Left Arm (Waving) */}
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: [0, -20, 0, -20, 0] }}
                            transition={{
                                repeat: Infinity,
                                repeatDelay: 3,
                                duration: 1.5,
                                ease: "easeInOut"
                            }}
                            className="absolute -left-3 top-2 w-3 h-8 bg-gray-700 rounded-full origin-top"
                        />

                        {/* Right Arm */}
                        <motion.div
                            animate={{
                                rotate: mood === "dancing" ? [0, 20, 0] : 0
                            }}
                            className="absolute -right-3 top-2 w-3 h-8 bg-gray-700 rounded-full origin-top"
                        />
                    </div>

                    {/* LEGS */}
                    <div className="flex gap-2 mt-[-2px]">
                        <motion.div
                            animate={{ height: mood === "dancing" ? [10, 8, 10] : 10 }}
                            className="w-3 h-3 bg-gray-700 rounded-b-lg"
                        />
                        <motion.div
                            animate={{ height: mood === "dancing" ? [8, 10, 8] : 10 }}
                            className="w-3 h-3 bg-gray-700 rounded-b-lg"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Speech Bubble */}
            <AnimatePresence>
                {showMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8, rotate: -2 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="mt-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl rounded-tr-none text-xs font-medium text-white shadow-xl origin-top-right"
                    >
                        {message}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
