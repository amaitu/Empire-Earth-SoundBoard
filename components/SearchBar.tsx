import { Search } from "lucide-react";
import { InputHTMLAttributes } from "react";

interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch, className = "", ...props }: SearchBarProps) {
    return (
        <div className={`relative w-full ${className}`}>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
                type="text"
                placeholder="Search sounds..."
                className="w-full pl-10 pr-4 py-2 border rounded-md bg-white dark:bg-zinc-950 text-sm outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-shadow"
                onChange={(e) => onSearch(e.target.value)}
                {...props}
            />
        </div>
    );
}
