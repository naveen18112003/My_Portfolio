import { LazyMotion, domMax } from "framer-motion";

import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/smooth-scroll";
import { NoiseOverlay } from "@/components/noise-overlay";
import { CommandMenu } from "@/components/command-menu";
import { AiStatusBadge } from "@/components/ai-status-badge";
import { SoundProvider } from "@/components/sound-provider";
import { ChatProvider } from "@/context/chat-context";
import { AiChat } from "@/components/ai-chat";
import { Preloader } from "@/components/ui/preloader";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Dock } from "@/components/dock";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, spaceGrotesk.variable, "font-sans antialiased bg-background text-foreground overflow-x-hidden lg:cursor-none select-none md:select-auto")}>
        <div className="hidden lg:block">
          <CustomCursor />
        </div>
        <SoundProvider>
          <ChatProvider>
            <LazyMotion features={domMax}>
              <SmoothScroll>
                <Preloader />
                <div className="hidden lg:block">
                  <NoiseOverlay />
                </div>
                <CommandMenu />
                <AiStatusBadge />
                {children}
                <Dock />
                <AiChat />
              </SmoothScroll>
            </LazyMotion>
          </ChatProvider>
        </SoundProvider>
      </body>
    </html>
  );
}
