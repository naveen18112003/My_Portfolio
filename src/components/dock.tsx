"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Twitter, Home, User, FolderGit2, Code2 } from "lucide-react";

export function Dock() {
    const mouseX = useMotionValue(Infinity);

    return (
        <div className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 flex h-12 sm:h-16 gap-2 sm:gap-4 items-end rounded-2xl border border-white/10 bg-white/5 px-3 sm:px-4 pb-2 sm:pb-3 backdrop-blur-md transition-all">
            <DockIcon mouseX={mouseX} href="/" aria-label="Home">
                <Home className="h-full w-full" />
            </DockIcon>
            <DockIcon mouseX={mouseX} href="#skills" aria-label="Skills">
                <Code2 className="h-full w-full" />
            </DockIcon>
            <DockIcon mouseX={mouseX} href="#projects" aria-label="Projects">
                <FolderGit2 className="h-full w-full" />
            </DockIcon>

            {/* Separator */}
            <div className="h-full w-[1px] bg-white/10 mx-1" />

            <DockIcon mouseX={mouseX} href="https://github.com/naveen18112003/" target="_blank" aria-label="GitHub">
                <Github className="h-full w-full" />
            </DockIcon>
            <DockIcon mouseX={mouseX} href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-full w-full" />
            </DockIcon>
            <DockIcon mouseX={mouseX} href="mailto:naveenkumaryadav967@gmail.com" aria-label="Email">
                <Mail className="h-full w-full" />
            </DockIcon>
        </div>
    );
}

function DockIcon({
    mouseX,
    children,
    className,
    ...props
}: {
    mouseX: any;
    children: React.ReactNode;
    className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    const ref = useRef<HTMLAnchorElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [32, 60, 32]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
        >
            <a
                ref={ref}
                className={cn("flex aspect-square cursor-pointer items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/5 transition-colors text-white", className)}
                {...props}
            >
                <motion.div style={{ width }} className="flex items-center justify-center">
                    {children}
                </motion.div>
            </a>
        </motion.div>
    );
}
