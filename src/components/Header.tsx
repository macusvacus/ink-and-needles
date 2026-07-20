"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    if (path === "/portfolio/adult") {
      return pathname === path
        ? "text-red-500 font-semibold"
        : "text-red-500/70 hover:text-red-500 transition-colors font-semibold";
    }
    return pathname === path
      ? "text-white transition-colors"
      : "hover:text-white transition-colors";
  };

  return (
    <header className="border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Inks & Needles Logo" className="h-8 w-auto object-contain" />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <Link href="/artists" className={getLinkClass("/artists")}>Artists</Link>
          <Link href="/portfolio" className={getLinkClass("/portfolio")}>Portfolio</Link>
          <Link href="/portfolio/adult" className={getLinkClass("/portfolio/adult")}>18+ Gallery</Link>
          <Link href="/booking" className={getLinkClass("/booking")}>Booking</Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Link href="/booking">
            <Button className="bg-white text-black hover:bg-zinc-200">Book Now</Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-zinc-400 hover:text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-black">
          <nav className="flex flex-col p-4 gap-4 text-sm font-medium text-zinc-400">
            <Link href="/artists" className={getLinkClass("/artists")} onClick={() => setIsOpen(false)}>Artists</Link>
            <Link href="/portfolio" className={getLinkClass("/portfolio")} onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link href="/portfolio/adult" className={getLinkClass("/portfolio/adult")} onClick={() => setIsOpen(false)}>18+ Gallery</Link>
            <Link href="/booking" className={getLinkClass("/booking")} onClick={() => setIsOpen(false)}>Booking</Link>
            <Link href="/booking" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-white text-black hover:bg-zinc-200 mt-2">Book Now</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
