"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 pointer-events-none transform-gpu overflow-hidden",
                className
            )}
        >
            <div
                className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent via-[#7C3AED]/10 to-transparent opacity-20"
                style={{
                    maskImage: "linear-gradient(to bottom, transparent, white, transparent)",
                }}
            />

            {/* Moving Beams */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5, x: Math.random() * 500 - 250 }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.5, 0.5],
                        y: [0, -1000]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear"
                    }}
                    className="absolute bottom-0 left-1/2 w-[2px] h-[500px] bg-gradient-to-t from-transparent via-primary to-transparent blur-sm origin-bottom"
                    style={{
                        left: `${15 * i + 10}%`
                    }}
                />
            ))}
        </div>
    );
};
