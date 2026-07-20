"use client";
import { Header } from "@/components/Header";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const adultPortfolioItems = [
  { id: 1, src: "/INO3A.png" },
  { id: 2, src: "/Screenshot 2026-07-17 203924.png" },
  { id: 3, src: "/Screenshot 2026-07-17 203947.png" },
  { id: 4, src: "/Screenshot 2026-07-17 204008.png" },
  { id: 5, src: "/Screenshot 2026-07-17 204032.png" },
  { id: 6, src: "/Screenshot 2026-07-17 204104.png" },
  { id: 7, src: "/Screenshot 2026-07-17 204130.png" },
  { id: 8, src: "/Screenshot 2026-07-17 204158.png" },
  { id: 9, src: "/Screenshot 2026-07-17 204218.png" },
  { id: 10, src: "/Screenshot 2026-07-17 204237.png" },
  { id: 11, src: "/Screenshot 2026-07-17 204318.png" },
  { id: 12, src: "/Screenshot 2026-07-17 204347.png" },
  { id: 13, src: "/Screenshot 2026-07-17 204411.png" },
  { id: 14, src: "/Screenshot 2026-07-17 204429.png" },
  { id: 15, src: "/Screenshot 2026-07-17 204450.png" },
  { id: 16, src: "/Screenshot 2026-07-17 204509.png" },
  { id: 17, src: "/Screenshot 2026-07-17 204531.png" },
  { id: 18, src: "/Screenshot 2026-07-17 204553.png" },
  { id: 19, src: "/Screenshot 2026-07-17 204609.png" },
  { id: 20, src: "/Screenshot 2026-07-17 204647.png" },
  { id: 21, src: "/Screenshot 2026-07-17 204706.png" },
];

export default function AdultGalleryView() {
  useEffect(() => {
    try {
      window.localStorage.setItem("adult_content_consented", "true");
    } catch (e) {
      // Ignore localStorage errors
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="mb-12 border-l-4 border-red-500 pl-6">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
            18+ Gallery
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A curated collection of mature and intimate pieces. Viewer discretion is advised.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {adultPortfolioItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative overflow-hidden rounded-xl border border-zinc-900 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={`18+ Gallery item ${item.id}`}
                  className="w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-black py-12 border-t border-zinc-900">
        <div className="container mx-auto px-4 text-center text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Inks & Needles. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
