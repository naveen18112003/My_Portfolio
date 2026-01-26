"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export const HackerText = ({
    text,
    className,
    speed = 30
}: {
    text: string,
    className?: string,
    speed?: number
}) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const animate = () => {
        let iteration = 0;

        clearInterval(intervalRef.current as NodeJS.Timeout);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                prev.split("").map((letter, index) => {
                    if (index < iteration) {
                        return text[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                }).join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current as NodeJS.Timeout);
            }

            iteration += 1 / 3;
        }, speed);
    };

    useEffect(() => {
        animate();
        return () => clearInterval(intervalRef.current as NodeJS.Timeout);
    }, []);

    return (
        <span
            className={cn("font-mono cursor-default", className)}
            onMouseEnter={() => animate()}
        >
            {displayText}
        </span>
    );
}
