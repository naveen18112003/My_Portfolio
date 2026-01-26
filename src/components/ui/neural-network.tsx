"use client";

import { useEffect, useRef } from "react";

export const NeuralNetwork = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        // Resize handler
        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', handleResize);

        // Particle settings
        const particleCount = 60;
        const connectionDist = 150;
        const mouseDist = 200;

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > w) this.vx *= -1;
                if (this.y < 0 || this.y > h) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = "rgba(124, 58, 237, 0.5)"; // Primary color
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const particles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        let mouseX = 0;
        let mouseY = 0;

        const handleMouse = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
        window.addEventListener('mousemove', handleMouse);

        const animate = () => {
            ctx.clearRect(0, 0, w, h);

            particles.forEach((p, index) => {
                p.update();
                p.draw();

                // Connect particles
                for (let j = index; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDist) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(124, 58, 237, ${1 - dist / connectionDist})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                // Connect to mouse
                const dx = p.x - mouseX;
                const dy = p.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouseDist) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(6, 182, 212, ${1 - dist / mouseDist})`; // Secondary color for interaction
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouseX, mouseY);
                    ctx.stroke();
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouse);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-40"
        />
    );
};
