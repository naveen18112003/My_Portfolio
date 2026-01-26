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

export const metadata: Metadata = {
  title: "Naveen Kumar Yadav | Agentic AI & Backend Engineer",
  description: "Elite Portfolio of Naveen Kumar Yadav, specializing in Enterprise RAG, Autonomous Agents, and Scalable Backend Architectures.",
  openGraph: {
    title: "Naveen Kumar Yadav | Agentic AI Engineer",
    description: "Building the next generation of Autonomous AI Agents and RAG Platforms.",
    url: "https://naveen-portfolio.vercel.app", // Adjust if you have a different URL
    siteName: "Naveen Portfolio",
    images: [
      {
        url: "/profile.png", // Using your profile as the share image or you can generate a specific one later
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen Kumar Yadav | Agentic AI Engineer",
    description: "Specializing in Autonomous Agents and Scalable Backend Systems.",
    images: ["/profile.png"],
  },
};

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
          </ChatProvider>
        </SoundProvider>
      </body>
    </html>
  );
}
