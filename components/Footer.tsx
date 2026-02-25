export default function Footer() {
    return (
        <footer className="mt-16 py-8 text-center text-sm bg-black text-gray-200">
            <div className="max-w-3xl mx-auto space-y-4 px-4">
                <p>
                    Empire Earth Soundboard is an open-source, fan-made project dedicated to preserving and sharing the iconic voice lines and sound effects from the 2001 classic real-time strategy game, Empire Earth. <a href="https://sgbarker.com">By Steve Barker.</a>
                </p>

                <div className="py-4 space-y-2 text-gray-400 text-xs sm:text-sm">
                    {/*<p>Special thanks to <a href="#" className="text-gray-300 hover:text-white underline underline-offset-4 transition-colors">Placeholder Person 1</a> for their help with audio extraction.</p>*/}
                    {/*<p>Shoutout to <a href="#" className="text-gray-300 hover:text-white underline underline-offset-4 transition-colors">Placeholder Community Member 2</a> for providing localized voice lines.</p>*/}
                    {/*<p>Inspired by the amazing work of <a href="#" className="text-gray-300 hover:text-white underline underline-offset-4 transition-colors">Placeholder Creator 3</a>.</p>*/}
                </div>

                <div className="flex flex-col items-center space-y-4 pt-2 font-medium">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                        <a 
                            href="https://github.com/amaitu/empire-earth-soundboard" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors underline underline-offset-4"
                        >
                            Source code
                        </a>
                        <a 
                            href="https://www.gog.com/en/game/empire_earth_gold_edition" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors underline underline-offset-4"
                        >
                            Get Empire Earth
                        </a>
                        <a 
                            href="https://ee.heavengames.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors underline underline-offset-4"
                        >
                            EE Heaven
                        </a>
                        <a 
                            href="https://www.reddit.com/r/empireearth/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors underline underline-offset-4"
                        >
                            r/empireearth
                        </a>
                    </div>
                    <a 
                        href="https://www.gog.com/en/gog-preservation-program" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:scale-105 transition-transform duration-200 block mt-4"
                    >
                        <picture>
                            <source srcSet="/images/gog-badge-empire-earth.webp" type="image/webp" />
                            <img 
                                src="/images/gog-badge-empire-earth.png" 
                                alt="Get Empire Earth on GOG" 
                                width={160} 
                                height={53} 
                                className="w-28 sm:w-36 h-auto"
                            />
                        </picture>
                    </a>
                </div>
            </div>
        </footer>
    );
}
