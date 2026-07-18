"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdultPortfolioModal() {
  const router = useRouter();

  useEffect(() => {
    try {
      const consent = window.localStorage.getItem("adult_content_consented");
      if (consent === "true") {
        router.push("/portfolio/adult/gallery");
      }
    } catch (error) {
      // Ignore
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col items-center justify-center p-4">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-10 max-w-lg w-full text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-red-500/5 pointer-events-none" />
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4 text-red-500 relative z-10">Age Restriction</h1>
        <p className="text-zinc-300 text-lg mb-8 relative z-10">
          This section contains mature content. You must be at least 18 years old to view this gallery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
          <Link href="/portfolio/adult/gallery" className="w-full sm:w-auto">
            <span className="inline-flex items-center justify-center rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold px-8 h-12 transition-all cursor-pointer shadow-lg w-full">
              I am 18 or older
            </span>
          </Link>
          <Link href="/portfolio" className="w-full sm:w-auto">
            <span className="inline-flex items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-900 px-8 h-12 transition-all font-medium cursor-pointer w-full">
              Exit
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
