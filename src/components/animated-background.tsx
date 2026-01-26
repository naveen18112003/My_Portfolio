"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Meteors = ({ number = 20 }: { number?: number }) => {
    const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
        []
    );

    useEffect(() => {
        const styles = [...new Array(number)].map(() => ({
            top: -5,
            left: Math.floor(Math.random() * window.innerWidth) + "px",
            animationDelay: Math.random() * 1 + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
        }));
        setMeteorStyles(styles);
    }, [number]);

    return (
        <>
            {meteorStyles.map((style, idx) => (
                <span
                    key={idx}
                    className={cn(
                        "pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor opacity-0"
                    )}
                    style={style}
                >
                    <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
                </span>
            ))}
        </>
    );
};

export const AnimatedBackground = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <div className={cn("fixed inset-0 z-[-1] overflow-hidden bg-[#030014] pointer-events-none", className)}>

            {/* 1. Deep Space Radial Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-[#030014] to-[#030014]" />

            {/* 2. Moving Aurora Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] mix-blend-screen"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, 100, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"
            />

            {/* 3. Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            {/* 4. Meteors */}
            <Meteors number={20} />

            {/* 5. Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030014_100%)] opacity-80" />
        </div>
    )
}
