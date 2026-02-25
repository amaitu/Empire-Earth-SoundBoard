'use client'

import { useState } from 'react'
import groups, { Language } from './sounds'
import PageHeader from "@/components/PageHeader";
import SoundGroup from "@/components/SoundGroup";
import SearchBar from "@/components/SearchBar";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import RandomSoundButton from "@/components/RandomSoundButton";
import Footer from "@/components/Footer";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [language, setLanguage] = useState<Language>('en');

    const filteredGroups = (() => {
        const lowerQuery = searchQuery.toLowerCase();
        
        return Object.entries(groups).reduce((acc, [key, group]) => {
            const filteredSounds = group.sounds.filter(sound => {
                // Filter by language first
                if (!sound.supportedLangs.includes(language)) return false;
                
                // Then filter by search query if any
                if (!searchQuery.trim()) return true;
                return (sound.label || '').toLowerCase().includes(lowerQuery) || 
                       sound.path.toLowerCase().includes(lowerQuery);
            });
            
            if (filteredSounds.length > 0) {
                acc[key] = {
                    ...group,
                    sounds: filteredSounds
                };
            }
            return acc;
        }, {} as typeof groups);
    })();

    return (
        <div className="min-h-screen bg-linear-to-b from-empire-gold-light to-empire-gold">
            <main
                className="pt-5 px-6">

                <PageHeader />

                <div className="mt-8 flex justify-center w-full">
                    <RandomSoundButton language={language} />
                </div>

                <div className="mt-8 mb-2 w-full">
                    <LanguageSwitcher language={language} onChange={setLanguage} />
                </div>

                <div className="w-full">
                    <SearchBar onSearch={setSearchQuery} />
                </div>

                <div className="mt-8 w-full space-y-8">
                    {Object.keys(filteredGroups).length === 0 ? (
                        <p className="text-center text-gray-600 dark:text-gray-400">No sounds found.</p>
                    ) : (
                        Object.values(filteredGroups)
                            .sort((a, b) => {
                                if (a.title.toLowerCase() === 'unsorted') return 1;
                                if (b.title.toLowerCase() === 'unsorted') return -1;
                                return 0;
                            })
                            .map((group) => (
                                <SoundGroup key={group.title} title={group.title} sounds={group.sounds} language={language} />
                            ))
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
