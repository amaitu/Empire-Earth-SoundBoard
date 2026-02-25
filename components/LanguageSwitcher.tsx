import { Button } from "@/components/ui/button";
import { Language } from "@/app/sounds";

interface LanguageSwitcherProps {
    language: Language;
    onChange: (lang: Language) => void;
}

export default function LanguageSwitcher({ language, onChange }: LanguageSwitcherProps) {
    return (
        <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-500">Language:</span>
            <div className="flex bg-zinc-100 dark:bg-zinc-900 rounded-md p-1">
                <Button 
                    variant={language === 'en' ? 'default' : 'ghost'} 
                    size="sm"
                    onClick={() => onChange('en')}
                    className="h-7 px-3 cursor-pointer"
                >
                    English
                </Button>
                <Button 
                    variant={language === 'de' ? 'default' : 'ghost'} 
                    size="sm"
                    onClick={() => onChange('de')}
                    className="h-7 px-3 cursor-pointer"
                >
                    Deutsch
                </Button>
            </div>
        </div>
    );
}
