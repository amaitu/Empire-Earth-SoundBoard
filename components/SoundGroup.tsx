"use client"

import { useState, useEffect } from "react"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Sound, Language, getKey } from "@/app/sounds"
import SoundCard from "@/components/SoundCard"
import { ChevronDown } from "lucide-react"

interface SoundGroupProps {
    title: string;
    sounds: Sound[];
    language: Language;
}

export default function SoundGroup({ title, sounds, language }: SoundGroupProps) {
    const [isOpen, setIsOpen] = useState(true)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        // Delay enabling animations to prevent initial layout shift
        const timer = setTimeout(() => setIsMounted(true), 50)
        return () => clearTimeout(timer)
    }, [])

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full space-y-2 border border-ee-red rounded-md p-4 bg-transparent"
        >
            <CollapsibleTrigger asChild>
                <button type="button" className="flex w-full items-center justify-between cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md">
                    <h2 className="text-2xl font-semibold select-none">{title}</h2>
                    <div className="flex h-14 w-14 items-center justify-center rounded-md transition-all duration-300 ease-out group-hover:bg-accent group-hover:text-accent-foreground">
                        <ChevronDown
                            className={`h-8 w-8 transition-transform duration-300 ease-out ${
                                isOpen ? "rotate-180" : ""
                            }`}
                        />
                        <span className="sr-only">Toggle</span>
                    </div>
                </button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className={`pt-4 ${!isMounted ? '[&[data-state=open]]:!animate-none' : ''}`}>
                <div className="flex flex-wrap justify-center gap-5">
                    {sounds.map(sound => (
                        <SoundCard key={getKey(sound)} sound={sound} language={language} />
                    ))}
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}

