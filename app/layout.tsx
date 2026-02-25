import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Sticker from "@/components/Sticker";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Empire Earth Soundboard",
  description: "Play various sounds from the classic real-time strategy game Empire Earth directly in your browser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/BroadsheetLDOBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistMono.variable} antialiased`}
      >
        <a 
          href="https://www.gog.com/en/gog-preservation-program" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden sm:block absolute top-4 left-4 sm:top-6 sm:left-6 z-50 hover:scale-105 transition-transform duration-200"
        >
          <picture>
            <source srcSet="/images/gog-badge-empire-earth.webp" type="image/webp" />
            <img 
              src="/images/gog-badge-empire-earth.png" 
              alt="Get Empire Earth on GOG" 
              width={148} 
              height={148} 
              className="w-20 sm:w-28 h-auto object-contain"
            />
          </picture>
        </a>
        <Sticker />
        {children}
      </body>
    </html>
  );
}
