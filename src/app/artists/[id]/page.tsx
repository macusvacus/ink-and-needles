import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock data (in a real app, fetch from Prisma)
const artists = [
  {
    id: "1",
    name: "Jahbreal Banks",
    style: "Realism & Portraiture",
    image: "/Jahbreal Banks.png",
    bio: "Award-winning artist specializing in hyper-realistic black and grey portraits. With over 10 years of experience, Jahbreal has mastered the art of capturing true emotion in ink.",
    portfolio: [
      "/Jahbreal 1.png",
      "/jahbreal 2.png",
      "/jahbreal 3.png",
      "/jahbreal 4.png",
      "/jahbreal 5.png",
      "/jahbreal 6.png",
      "/jahbreal 7.png",
      "/jahbreal 8.png",
      "/jahbreal 9.png",
      "/jahbreal 10.png"
    ]
  },
  {
    id: "2",
    name: "Elena Rostova",
    style: "Realism & Portraiture",
    image: "/Elena  Rostova.png",
    bio: "Award-winning artist known for stunning realism and portraiture with flawless detail. Elena brings portraits to life with precision and soul.",
    portfolio: [
      "/Elena 1.png",
      "/Elena 2.png",
      "/Elena 3.png",
      "/Elena 4.png",
      "/Elena 5.png",
      "/Elena 6.png",
      "/Elena 7.png",
      "/Elena 8.png",
      "/Elena 9.png",
      "/Elena 10.png",
      "/Elena 11.png",
      "/Elena 12.png",
      "/Elena 13.png",
      "/Elena 14.png",
      "/Elena 15.png",
      "/Elena 16.png",
      "/Elena 17.png",
      "/Elena 18.png"
    ]
  },
  {
    id: "3",
    name: "Sarah Jenkins",
    style: "Minimalist & Fine Line",
    image: "/Sarah Jenkins.png",
    bio: "Delicate, precise fine line work and intricate geometric patterns. Sarah's aesthetic appeals to collectors seeking elegant, understated body art.",
    portfolio: [
      "/sarah  1.png",
      "/sarah 2.png",
      "/sarah 3.png",
      "/sarah 4.png",
      "/sarah 5.png",
      "/sarah 6.png",
      "/sarah 7.png"
    ]
  }
];

export default async function ArtistProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const artist = artists.find(a => a.id === resolvedParams.id) || artists[0];

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col">
      <header className="border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Inks & Needles Logo" className="h-8 w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/artists">
              <Button variant="ghost" className="text-zinc-300 hover:text-white hover:bg-zinc-800">Back to Artists</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Artist Header */}
        <section className="relative h-[60vh] flex items-end">
          <div className="absolute inset-0 z-0">
            <img 
              src={artist.image} 
              alt={artist.name}
              className="w-full h-full object-cover object-top opacity-40 grayscale mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 pb-12 flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-3xl">
              <p className="text-zinc-400 font-bold tracking-widest uppercase mb-2">{artist.style}</p>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">{artist.name}</h1>
              <p className="text-lg text-zinc-300 max-w-2xl font-light leading-relaxed">{artist.bio}</p>
            </div>
            
            <div className="w-full md:w-auto shrink-0">
              <Link href={`/booking?artist=${artist.id}`}>
                <Button size="lg" className="w-full md:w-auto h-14 px-8 text-lg bg-white text-black hover:bg-zinc-200">
                  Book with {artist.name.split(' ')[0]}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="py-20 bg-zinc-950 min-h-[50vh]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-8">Selected Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {artist.portfolio.map((imgUrl, i) => (
                <div key={i} className="aspect-square relative rounded-xl overflow-hidden group cursor-pointer border border-zinc-900 hover:border-zinc-700 transition-colors">
                  <img 
                    src={imgUrl} 
                    alt={`Portfolio piece ${i+1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
