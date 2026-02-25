"use client"

import { Sound, Language } from "@/app/sounds"
import { useState } from "react"

const CornerRipples = ({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) => {
    const posClass = {
        'tl': 'top-0 left-0',
        'tr': 'top-0 right-0',
        'bl': 'bottom-0 left-0',
        'br': 'bottom-0 right-0',
    }[position];

    return (
        <div className={`absolute ${posClass} w-0 h-0`}>
            <div className="absolute top-0 left-0 w-12 h-12 -mt-6 -ml-6 rounded-full border-2 border-white/80 animate-ping" style={{ animationDuration: '1.5s' }} />
            <div className="absolute top-0 left-0 w-12 h-12 -mt-6 -ml-6 rounded-full border-2 border-white/60 animate-ping" style={{ animationDelay: '0.25s', animationDuration: '1.5s' }} />
            <div className="absolute top-0 left-0 w-12 h-12 -mt-6 -ml-6 rounded-full border-2 border-white/40 animate-ping" style={{ animationDelay: '0.5s', animationDuration: '1.5s' }} />
        </div>
    );
};

export default function SoundCard({ sound, language, onClickOverride }: { sound: Sound, language: Language, onClickOverride?: () => void }) {
    const [playingCount, setPlayingCount] = useState(0);

    function playSound() {
        if (onClickOverride) {
            onClickOverride();
            return;
        }
        const path = language !== 'en' && sound.supportedLangs.includes(language) 
            ? sound.path.replace(/^en\//, `${language}/`) 
            : sound.path;
        const audio = new Audio(`/sounds/${path}`)
        
        setPlayingCount(c => c + 1);
        audio.onended = () => setPlayingCount(c => Math.max(0, c - 1));
        audio.onerror = () => setPlayingCount(c => Math.max(0, c - 1));
        audio.play().catch(() => setPlayingCount(c => Math.max(0, c - 1)));
    }

    const getDynamicTextSize = (text: string) => {
        if (text.length > 50) return 'text-xs xl:text-base';
        if (text.length > 28) return 'text-sm xl:text-xl';
        return 'text-lg xl:text-2xl';
    };

    const isPlaying = playingCount > 0;

    return (
        <div className="bg-red">
            <button
                type="button"
                className="relative overflow-hidden cursor-pointer bg-black opacity-55 hover:opacity-50 rounded border-empire-red border-4 text-white w-36 h-20 xl:w-44 xl:h-28 flex items-center justify-center"
                onClick={playSound}
            >
                {isPlaying && (
                    <div className="absolute inset-0 pointer-events-none">
                        <CornerRipples position="tl" />
                        <CornerRipples position="tr" />
                        <CornerRipples position="bl" />
                        <CornerRipples position="br" />
                    </div>
                )}
                <div className={`p-3 relative z-10 ${getDynamicTextSize(sound.label)}`}>{sound.label}</div>
            </button>
        </div>
    )
}
