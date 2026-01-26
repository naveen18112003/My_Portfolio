"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Code2, Home, User, FolderGit2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSound } from "@/components/sound-provider";

const navItems = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { name: "Skills", href: "#skills", icon: <Code2 className="w-4 h-4" /> },
    { name: "Projects", href: "#projects", icon: <FolderGit2 className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <Send className="w-4 h-4" /> },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { playHover, playClick } = useSound();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 pointer-events-none">
            {/* Floating Island Container */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                    "pointer-events-auto flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-all duration-300 px-4 py-2",
                    isScrolled ? "min-w-[320px] bg-black/60 border-white/20" : "min-w-[300px]"
                )}
            >
                <Link
                    href="/"
                    onMouseEnter={playHover}
                    onClick={playClick}
                    className="text-xl font-bold font-space-grotesk tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 hover:to-primary transition-all px-2"
                >
                    Naveen<span className="text-primary">.</span>
                </Link>

                {/* Desktop Nav - Removed as it duplicates Dock */
                    <div className="hidden md:flex items-center gap-1">
                        {/* Links moved to Dock */}
                    </div>
                }

                <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                    <span className="text-xs text-muted-foreground hidden sm:block">
                        ⌘+K
                    </span>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        className="pointer-events-auto absolute top-20 left-4 right-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl md:hidden"
                    >
                        <div className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center gap-4 text-lg font-medium p-3 rounded-xl hover:bg-white/10 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <div className="p-2 bg-white/5 rounded-lg text-primary">
                                        {item.icon}
                                    </div>
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
