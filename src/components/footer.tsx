import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background/50 backdrop-blur-xl">
            <div className="container px-4 py-8 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-lg font-bold font-space-grotesk tracking-tighter">
                        Naveen<span className="text-primary">.dev</span>
                    </span>
                    <p className="text-sm text-muted-foreground">
                        Building scalable AI & Backend systems.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="https://github.com/naveen18112003/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href="mailto:naveenkumaryadav967@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="w-5 h-5" />
                    </Link>
                </div>

                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Naveen. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
