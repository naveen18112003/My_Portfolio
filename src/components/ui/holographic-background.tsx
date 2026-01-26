"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const HolographicBackground = ({
    className,
    containerClassName,
    animate = true,
}: {
    className?: string;
    containerClassName?: string;
    animate?: boolean;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            className={cn(
                "relative h-full w-full bg-slate-950 rounded-3xl overflow-hidden",
                containerClassName
            )}
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
                }}
            />
            <div className={cn("relative h-full", className)}>
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]" />
            </div>
        </div>
    );
};
