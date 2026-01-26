"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{
            lerp: 0.1, // Increase lerp for mobile feel if enabled
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
            syncTouch: false // Disable touch sync for native feel
        }}>
            {children}
        </ReactLenis>
    );
}
