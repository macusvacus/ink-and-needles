import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does a tattoo cost?",
    a: "Pricing varies by artist, size, placement, and complexity. Our artists start at $150 for small pieces. We provide a custom quote during your free consultation.",
  },
  {
    q: "Do I need to put down a deposit?",
    a: "Yes, a non-refundable deposit (typically $50-$150 depending on the project) is required to secure your appointment. This is applied to the total cost of your tattoo.",
  },
  {
    q: "How do I prepare for my appointment?",
    a: "Eat a full meal beforehand, stay hydrated, wear loose/comfortable clothing that allows easy access to the tattoo area, and avoid alcohol for at least 24 hours prior.",
  },
  {
    q: "How long does healing take?",
    a: "Surface healing typically takes 2-4 weeks. Full deep healing of the skin can take 3-6 months. We provide detailed aftercare instructions after every session.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-luminosity grayscale"
          >
            <source src="/TattooKacie_-_Octopi____Octopi_octopus_seacreatures_mermaidlife_saltlife_florid_wvYQ87.mp4" type="video/mp4" />
          </video>
          {/* Background pattern/gradient over video */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/10 via-black/80 to-black z-0" />
          
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
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white bg-black/50 backdrop-blur">
                  Explore Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-black border-t border-zinc-900">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
              Ahoy there, scalawag! We&apos;re here to make this whole getting yourself a new tattoo or piercing experience pretty damn easy. Whatever you have in mind, we got you. Our shop is located in Niagara Falls, NY and we serve the entire Western New York region and beyond. Seriously, our clients come from all over and agree we&apos;re worth the trip. All of our artists know their shit and are going to ensure you leave stoked about your new tattoo or piercing.
            </p>
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

        {/* FAQ Section */}
        <section className="py-24 bg-black border-t border-zinc-900">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-zinc-500">Everything you need to know before your appointment.</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-zinc-800">
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-zinc-300">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-12 text-center">
              <Link href="/faq">
                <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white">
                  View All FAQs
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-24 bg-zinc-950 border-t border-zinc-900 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/10 via-zinc-950 to-zinc-950 -z-10" />
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-400">
              Ready to get inked?
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
              Book a free consultation and let&apos;s bring your vision to life.
            </p>
            <Link href="/booking">
              <Button size="lg" className="h-14 px-10 text-lg bg-white text-black hover:bg-zinc-200">
                Book Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-black pt-16 pb-8 border-t border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-zinc-400">
            <div>
              <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Inks & Needles</h3>
              <p className="text-sm leading-relaxed mb-6">
                Premium tattoo studio dedicated to bringing your unique vision to life with world-class artists and unparalleled service.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Location</h3>
              <p className="text-sm leading-relaxed mb-2">2045 Niagara Falls Boulevard</p>
              <p className="text-sm leading-relaxed mb-2">Niagara Falls, New York 14304</p>
              <Link href="https://maps.google.com/?q=2045+Niagara+Falls+Boulevard,+Niagara+Falls,+NY+14304" target="_blank" className="text-sm text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-4 transition-colors">
                Get Directions
              </Link>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Hours</h3>
              <p className="text-sm mb-2 flex justify-between"><span>Mon - Thu:</span> <span>11:00 AM - 8:00 PM</span></p>
              <p className="text-sm mb-2 flex justify-between"><span>Fri - Sat:</span> <span>11:00 AM - 10:00 PM</span></p>
              <p className="text-sm mb-2 flex justify-between"><span>Sunday:</span> <span>12:00 PM - 6:00 PM</span></p>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/artists" className="hover:text-white transition-colors">Artists</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/booking" className="hover:text-white transition-colors">Book Now</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-900 text-center text-zinc-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Inks & Needles. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
