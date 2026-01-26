"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 2200);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col items-center">

                        {/* Part 1: WELCOME TO */}
                        <motion.h2
                            initial={{ opacity: 0, letterSpacing: "20px", y: 20 }}
                            animate={{ opacity: 1, letterSpacing: "5px", y: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="text-sm md:text-xl font-mono text-gray-400 uppercase tracking-[0.5em] mb-4"
                        >
                            Welcome To
                        </motion.h2>

                        {/* Part 2: NAVEEN PORTFOLIO (Cinematic Scale Reveal) */}
                        <div className="relative">
                            <motion.h1
                                initial={{ scale: 2, opacity: 0, filter: "blur(30px)" }}
                                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
                                className="text-4xl md:text-8xl font-black text-center text-white font-space-grotesk leading-tight tracking-tight px-4"
                            >
                                NAVEEN
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-300 to-primary animate-gradient-x">
                                    PORTFOLIO
                                </span>
                            </motion.h1>

                            {/* Glow Effect behind text */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                transition={{ duration: 2, delay: 0.5 }}
                                className="absolute inset-0 bg-primary/20 blur-[100px] -z-10"
                            />
                        </div>

                        {/* Part 3: Decoration Lines */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "200px", opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.8 }}
                            className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mt-8"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
