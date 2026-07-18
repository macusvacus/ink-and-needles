import Link from "next/link";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    artist: "Jahbreal Banks",
    artistId: "1",
    style: "Realism",
    src: "/Jahbreal 1.png",
  },
  {
    id: 2,
    artist: "Elena Rostova",
    artistId: "2",
    style: "Realism",
    src: "/Elena 1.png",
  },
  {
    id: 3,
    artist: "Sarah Jenkins",
    artistId: "3",
    style: "Fine Line",
    src: "/sarah  1.png",
  },
  {
    id: 4,
    artist: "Jahbreal Banks",
    artistId: "1",
    style: "Black & Grey",
    src: "/jahbreal 2.png",
  },
  {
    id: 5,
    artist: "Elena Rostova",
    artistId: "2",
    style: "Portraiture",
    src: "/Elena 2.png",
  },
  {
    id: 6,
    artist: "Sarah Jenkins",
    artistId: "3",
    style: "Geometric",
    src: "/sarah 2.png",
  },
  {
    id: 7,
    artist: "Jahbreal Banks",
    artistId: "1",
    style: "Realism",
    src: "/jahbreal 3.png",
  },
  {
    id: 8,
    artist: "Elena Rostova",
    artistId: "2",
    style: "Black & Grey",
    src: "/Elena 3.png",
  },
];

const styles = ["All", "Realism", "Neo-Traditional", "Fine Line", "Black & Grey", "Geometric", "Colour"];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Inks & Needles Logo" className="h-8 w-auto object-contain" />
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <Link href="/artists" className="hover:text-white transition-colors">Artists</Link>
            <Link href="/portfolio" className="text-white transition-colors">Portfolio</Link>
            <Link href="/portfolio/adult" className="text-red-500/70 hover:text-red-500 transition-colors font-semibold">18+ Gallery</Link>
            <Link href="/booking" className="hover:text-white transition-colors">Booking</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/booking">
              <Button className="bg-white text-black hover:bg-zinc-200">Book Now</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-16">
        {/* Page title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500">
            Portfolio
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A curated collection of work from our resident artists. Every piece tells a story.
          </p>
        </div>

        {/* Style filter pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {styles.map((style) => (
            <span
              key={style}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
                style === "All"
                  ? "bg-white text-black border-white"
                  : "border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white"
              }`}
            >
              {style}
            </span>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative overflow-hidden rounded-xl border border-zinc-900 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={`${item.style} tattoo by ${item.artist}`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-0.5">{item.style}</p>
                  <p className="text-white font-semibold text-sm">{item.artist}</p>
                  <Link href={`/artists/${item.artistId}`} className="mt-3">
                    <Button size="sm" variant="outline" className="text-xs border-zinc-600 hover:bg-white hover:text-black transition-colors w-full">
                      View Artist
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 py-16 border-t border-zinc-900 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tight mb-4">Love What You See?</h2>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto">Browse our artists and book your custom piece today. No idea too big or too small.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/artists">
              <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white px-8">
                Meet the Artists
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200 px-8">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-zinc-900">
        <div className="container mx-auto px-4 text-center text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Inks & Needles. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
