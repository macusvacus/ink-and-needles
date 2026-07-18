import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col">
      {/* Navigation */}
      <header className="border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Inks & Needles Logo" className="h-8 w-auto object-contain" />
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <Link href="/artists" className="hover:text-white transition-colors">Artists</Link>
            <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
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

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20">
          {/* Background pattern/gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black -z-10" />
          
          <div className="container px-4 text-center z-10 flex flex-col items-center">
            <div className="inline-block px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-950/50 mb-8 backdrop-blur-sm text-sm font-medium text-zinc-300">
              Now accepting bookings for Fall 2026
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 mb-6 drop-shadow-sm max-w-4xl leading-[1.1]">
              Your Body. <br /> Our Canvas.
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light">
              Connect with world-class tattoo artists, explore unique portfolios, and seamlessly book your next masterpiece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/artists">
                <Button size="lg" className="h-14 px-8 text-lg bg-white text-black hover:bg-zinc-200">
                  Find an Artist
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white">
                  Explore Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-24 bg-zinc-950 border-t border-zinc-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-4">The Process</h2>
            <p className="text-zinc-500 mb-16 max-w-xl mx-auto">From consultation to the final needle drop, we make getting your dream tattoo effortless.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 rounded-2xl bg-black border border-zinc-900 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center mb-6 text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3">Discover</h3>
                <p className="text-zinc-400">Browse through curated portfolios of top-tier artists specializing in various styles.</p>
              </div>
              {/* Feature 2 */}
              <div className="p-8 rounded-2xl bg-black border border-zinc-900 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center mb-6 text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3">Consult</h3>
                <p className="text-zinc-400">Message artists directly to discuss concepts, sizing, placement, and pricing.</p>
              </div>
              {/* Feature 3 */}
              <div className="p-8 rounded-2xl bg-black border border-zinc-900 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center mb-6 text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3">Book</h3>
                <p className="text-zinc-400">Lock in your appointment with integrated payments and calendar scheduling.</p>
              </div>
            </div>
          </div>
        </section>
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
