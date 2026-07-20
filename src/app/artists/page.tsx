import { Header } from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock data for artists
const artists = [
  {
    id: "1",
    name: "Jahbreal Banks",
    style: "Realism & Portraiture",
    image: "/Jahbreal Banks.png",
    bio: "Award-winning artist specializing in hyper-realistic black and grey portraits.",
  },
  {
    id: "2",
    name: "Elena Rostova",
    style: "Realism & Portraiture",
    image: "/Elena  Rostova.png",
    bio: "Award-winning artist known for stunning realism and portraiture with flawless detail.",
  },
  {
    id: "3",
    name: "Sarah Jenkins",
    style: "Minimalist & Fine Line",
    image: "/Sarah Jenkins.png",
    bio: "Delicate, precise fine line work and intricate geometric patterns.",
  }
];

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500">Our Artists</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Meet our resident artists. Each brings a unique style and years of experience to ensure your vision is executed perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div key={artist.id} className="group relative overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-900 transition-all hover:border-zinc-700">
              <div className="aspect-[4/5] relative overflow-hidden">
                {/* Fallback color while loading or if image fails */}
                <div className="absolute inset-0 bg-zinc-900 animate-pulse" />
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-30 transform transition-transform duration-300">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">{artist.style}</p>
                <h2 className="text-2xl font-bold text-white mb-2">{artist.name}</h2>
                <p className="text-sm text-zinc-300 mb-6 line-clamp-2">{artist.bio}</p>
                
                <Link href={`/artists/${artist.id}`}>
                  <Button variant="outline" className="w-full bg-black/50 backdrop-blur-sm border-zinc-700 hover:bg-white hover:text-black transition-colors">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
