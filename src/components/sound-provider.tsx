"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface SoundContextType {
    playHover: () => void;
    playClick: () => void;
    playSuccess: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

    useEffect(() => {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        setAudioContext(ctx);
        return () => {
            ctx.close();
        }
    }, []);

    const playOscillator = (freq: number, type: OscillatorType, duration: number, vol: number = 0.1) => {
        if (!audioContext) return;
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioContext.currentTime);

        gain.gain.setValueAtTime(vol, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.start();
        osc.stop(audioContext.currentTime + duration);
    };

    const playHover = () => {
        // High pitched short blip
        playOscillator(800, "sine", 0.05, 0.05);
    };

    const playClick = () => {
        // Lower pitched thud
        playOscillator(300, "square", 0.1, 0.05);
    };

    const playSuccess = () => {
        // Ascending chime
        playOscillator(600, "sine", 0.1, 0.05);
        setTimeout(() => playOscillator(800, "sine", 0.1, 0.05), 100);
        setTimeout(() => playOscillator(1000, "sine", 0.2, 0.05), 200);
    }

    return (
        <SoundContext.Provider value={{ playHover, playClick, playSuccess }}>
            {children}
        </SoundContext.Provider>
    );
};

export const useSound = () => {
    const context = useContext(SoundContext);
    if (context === undefined) {
        throw new Error("useSound must be used within a SoundProvider");
    }
    return context;
};
