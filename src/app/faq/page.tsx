import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

const faqs = [
  {
    q: "How much does a tattoo cost?",
    a: "Pricing varies by artist, size, placement, and complexity. Our artists start at $150 for small pieces. We provide a custom quote during your free consultation.",
  },
  {
    q: "Do I need to put down a deposit?",
    a: "Yes, a non-refundable deposit (typically $50–$150 depending on the project) is required to secure your appointment. This is applied to the total cost of your tattoo.",
  },
  {
    q: "How do I prepare for my appointment?",
    a: "Eat a full meal beforehand, stay hydrated, wear loose/comfortable clothing that allows easy access to the tattoo area, and avoid alcohol for at least 24 hours prior.",
  },
  {
    q: "How long does healing take?",
    a: "Surface healing typically takes 2–4 weeks. Full deep healing of the skin can take 3–6 months. We provide detailed aftercare instructions after every session.",
  },
  {
    q: "Can I bring my own design?",
    a: "Absolutely! We love working with clients who have a vision. Bring references, sketches, or inspiration images. Our artists will refine the concept into a final tattoo-ready design.",
  },
  {
    q: "What styles do your artists specialise in?",
    a: "Our team covers a wide range of styles including Realism, Neo-Traditional, Fine Line, Black & Grey, Geometric, Watercolour, Japanese / Irezumi, and Old School / Traditional.",
  },
  {
    q: "Is walk-ins accepted?",
    a: "Walk-ins are welcome based on artist availability, but we strongly recommend booking a consultation in advance to guarantee your preferred artist and time slot.",
  },
  {
    q: "How do I care for my new tattoo?",
    a: "Keep it clean, moisturized, and out of direct sunlight. Avoid soaking it in water (pools, baths) for the first 2–3 weeks. Do not pick or scratch the peeling skin.",
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-4 text-center border-b border-zinc-900 bg-zinc-950">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Got questions?</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500">
            Frequently Asked<br />Questions
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Everything you need to know before your first (or next) tattoo session.
          </p>
        </section>

        {/* FAQ list */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none select-none hover:bg-zinc-900 transition-colors">
                  <span className="font-semibold text-zinc-100 pr-4">{faq.q}</span>
                  <span className="text-zinc-500 transition-transform duration-300 group-open:rotate-45 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-zinc-400 leading-relaxed border-t border-zinc-800">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-zinc-950 border-t border-zinc-900 text-center">
          <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
          <p className="text-zinc-400 mb-8">Book a free consultation and we'll answer everything in person.</p>
          <Link href="/booking">
            <Button className="h-12 px-8 bg-white text-black hover:bg-zinc-200 font-semibold">
              Book a Free Consultation
            </Button>
          </Link>
        </section>
      </main>

      <footer className="bg-black py-8 border-t border-zinc-900">
        <div className="container mx-auto px-4 text-center text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} Inks &amp; Needles. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
