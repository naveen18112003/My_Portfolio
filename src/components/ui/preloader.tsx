"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
            // Force layout recalculation for scroll libraries
            window.dispatchEvent(new Event('resize'));
        }, 2200);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 h-[100dvh] z-[9999] flex items-center justify-center bg-[#050505] overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col items-center justify-center w-full px-6">

                        {/* Part 1: WELCOME TO */}
                        <motion.h2
                            initial={{ opacity: 0, letterSpacing: "15px", y: 10 }}
                            animate={{ opacity: 1, letterSpacing: "6px", y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="text-[10px] md:text-xs font-mono text-gray-400 tracking-[0.3em] md:tracking-[0.5em] pl-[0.3em] md:pl-[0.5em] mb-8 text-center uppercase will-change-[transform,opacity]"
                        >
                            <span className="lowercase">welcome to</span>
                        </motion.h2>

                        {/* Part 2: Naveen's Portfolio */}
                        <div className="relative flex flex-col items-center">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                className="text-4xl md:text-7xl font-black text-center text-white font-space-grotesk leading-none tracking-tighter will-change-transform"
                            >
                                Naveen’s
                                <span className="block mt-1 text-2xl md:text-5xl opacity-80 uppercase tracking-widest text-primary/80">
                                    Portfolio
                                </span>
                            </motion.h1>

                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1.2, delay: 0.5, ease: "circOut" }}
                                className="h-[1px] w-24 md:w-32 bg-primary mt-8 will-change-transform"
                            />
                        </div>

                    </div>
                    {/* Atmospheric Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
