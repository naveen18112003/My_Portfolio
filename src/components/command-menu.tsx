"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command as CommandPrimitive } from "cmdk";
import { Search, Calculator, User, CreditCard, Settings, Smile, Home, Code2, FolderGit2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function CommandMenu() {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false);
        command();
    }, []);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all animate-in fade-in">
            <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-white/20 bg-black/80 shadow-2xl animate-in zoom-in-95 duration-200">
                <CommandPrimitive
                    className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-transparent"
                    loop
                >
                    <div className="flex items-center border-b border-white/10 px-3" cmdk-input-wrapper="">
                        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                        <CommandPrimitive.Input
                            className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 text-white"
                            placeholder="Type a command or search..."
                        />
                    </div>
                    <CommandPrimitive.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
                        <CommandPrimitive.Empty className="py-6 text-center text-sm">No results found.</CommandPrimitive.Empty>

                        <CommandPrimitive.Group heading="Navigation" className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
                            <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
                                <Home className="mr-2 h-4 w-4" /> Home
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => router.push("#skills"))}>
                                <Code2 className="mr-2 h-4 w-4" /> Skills
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => router.push("#projects"))}>
                                <FolderGit2 className="mr-2 h-4 w-4" /> Projects
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => router.push("#contact"))}>
                                <Send className="mr-2 h-4 w-4" /> Contact
                            </CommandItem>
                        </CommandPrimitive.Group>

                        <CommandPrimitive.Group heading="Socials" className="text-muted-foreground px-2 py-1.5 text-xs font-medium mt-2">
                            <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/naveen18112003/", "_blank"))}>
                                <span className="mr-2">🐙</span> GitHub
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => window.open("https://linkedin.com", "_blank"))}>
                                <span className="mr-2">💼</span> LinkedIn
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => window.open("mailto:naveenkumaryadav967@gmail.com", "_self"))}>
                                <span className="mr-2">✉️</span> Email
                            </CommandItem>
                        </CommandPrimitive.Group>

                    </CommandPrimitive.List>
                </CommandPrimitive>

                <div className="flex items-center justify-between border-t border-white/10 p-2 text-[10px] text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                            <span className="text-xs">↑</span>
                        </kbd>
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                            <span className="text-xs">↓</span>
                        </kbd>
                        <span>to navigate</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                            Enter
                        </kbd>
                        <span>to select</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                            Esc
                        </kbd>
                        <span>to close</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const CommandItem = ({ children, onSelect }: { children: React.ReactNode, onSelect: () => void }) => {
    return (
        <CommandPrimitive.Item
            onSelect={onSelect}
            className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors cursor-pointer text-muted-foreground hover:text-white"
        >
            {children}
        </CommandPrimitive.Item>
    )
}
