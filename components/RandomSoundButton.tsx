"use client"

import { useState } from "react"
import groups, { Language, Sound } from "@/app/sounds"
import SoundCard from "./SoundCard"

const allSounds = Object.values(groups).flatMap(group => group.sounds);

type FloatingText = {
    id: number;
    text: string;
    left: number;
};

export default function RandomSoundButton({ language }: { language: Language }) {
    const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);

    function playRandomSound() {
        const randomIndex = Math.floor(Math.random() * allSounds.length);
        const sound = allSounds[randomIndex];
        if (!sound) return;
        
        const path = language !== 'en' && sound.supportedLangs.includes(language) 
            ? sound.path.replace(/^en\//, `${language}/`) 
            : sound.path;
        const audio = new Audio(`/sounds/${path}`)
        audio.play()

        const newText = {
            id: Date.now() + Math.random(),
            text: sound.label,
            left: Math.random() * 60 + 20, // 20% to 80% to avoid edge clipping
        };
        
        setFloatingTexts(prev => [...prev, newText]);
        
        // Remove text after animation completes
        setTimeout(() => {
            setFloatingTexts(prev => prev.filter(t => t.id !== newText.id));
        }, 2500);
    }

    const dummySound: Sound = {
        label: "🎲 Random",
        path: "",
        supportedLangs: []
    }

    return (
        <>
            <SoundCard sound={dummySound} language={language} onClickOverride={playRandomSound} />
            
            {/* Floating texts container */}
            {floatingTexts.length > 0 && (
                <div className="fixed bottom-0 left-0 w-full h-full pointer-events-none overflow-hidden z-50">
                    {floatingTexts.map(t => (
                        <div
                            key={t.id}
                            className="absolute bottom-10 text-3xl font-bold text-black stroke drop-shadow-2xl whitespace-nowrap"
                            style={{
                                left: `${t.left}%`,
                                animation: 'floatUpAndFade 2.5s ease-out forwards',
                            }}
                        >
                            {t.text}
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}
