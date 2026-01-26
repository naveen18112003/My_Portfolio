"use client";

import React, { useEffect, useRef } from "react";

export const CustomCursor = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const points = useRef<{ x: number; y: number; age: number }[]>([]);
    const requestRef = useRef<number>();

    useEffect(() => {
        // Disable on touch devices or very small screens
        if (typeof window !== "undefined") {
            const isTouch = window.matchMedia("(pointer: coarse)").matches;
            const isSmall = window.innerWidth < 1024;
            if (isTouch || isSmall) return;
        }

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
            // Add a point on every move for the trail
            points.current.push({ x: e.clientX, y: e.clientY, age: 0 });
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        handleResize();

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update points age
            points.current.forEach((p) => p.age++);
            points.current = points.current.filter((p) => p.age < 20); // Trail length

            // Draw connections (Neural Trail)
            ctx.beginPath();
            ctx.strokeStyle = "rgba(168, 85, 247, 0.3)"; // Primary color with low opacity
            ctx.lineWidth = 1;

            for (let i = 0; i < points.current.length; i++) {
                const p = points.current[i];
                const alpha = 1 - p.age / 20;
                ctx.strokeStyle = `rgba(168, 85, 247, ${alpha * 0.4})`;

                if (i > 0) {
                    const prev = points.current[i - 1];
                    ctx.moveTo(prev.x, prev.y);
                    ctx.lineTo(p.x, p.y);
                }
            }
            ctx.stroke();

            // Draw Main Node (Solid Dot)
            ctx.beginPath();
            ctx.arc(mouse.current.x, mouse.current.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = "#a855f7";
            ctx.fill();

            // Slower Pulse Outer Circle (Simulated Glow)
            ctx.beginPath();
            ctx.arc(mouse.current.x, mouse.current.y, 8, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(168, 85, 247, 0.2)";
            ctx.lineWidth = 2;
            ctx.stroke();

            requestRef.current = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9999]"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};
