"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Meteors } from "@/components/ui/meteors";
import { useState } from "react";

export function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "7d422d17-c022-4c96-a738-d46a96141e52",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Portfolio Message from ${formData.name}`,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <Meteors number={20} />
            <div className="container px-4 mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">
                        Ready to <span className="text-primary">Collaborate?</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        I'm currently looking for full-time AI / Backend opportunities.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <Card className="p-8 backdrop-blur-xl bg-white/5 border-white/10 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-muted-foreground">
                                    Thanks for reaching out, Naveen will get back to you soon.
                                </p>
                                <Button
                                    variant="link"
                                    onClick={() => setStatus("idle")}
                                    className="mt-6 text-primary"
                                >
                                    Send another message
                                </Button>
                            </motion.div>
                        ) : (
                            <motion.form
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-6"
                                onSubmit={handleSubmit}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Let's build something amazing together..."
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={status === "submitting"}
                                    className="w-full md:w-auto glow group min-w-[140px]"
                                >
                                    {status === "submitting" ? (
                                        <>
                                            Sending... <Loader2 className="ml-2 w-4 h-4 animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            Send Message <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>
                                {status === "error" && (
                                    <p className="text-sm text-red-500 mt-2">
                                        Something went wrong. Please try again later.
                                    </p>
                                )}
                            </motion.form>
                        )}
                    </AnimatePresence>
                </Card>

                <div className="mt-12 flex justify-center gap-8">
                    <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <Mail />
                        </div>
                        <div className="text-sm text-muted-foreground">Email Me At</div>
                        <Link href="mailto:naveenkumaryadav967@gmail.com" className="font-bold hover:text-primary transition-colors">
                            naveenkumaryadav967@gmail.com
                        </Link>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                            <span className="text-xl">📍</span>
                        </div>
                        <div className="text-sm text-muted-foreground">Location</div>
                        <div className="font-bold">Bengaluru, India</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
