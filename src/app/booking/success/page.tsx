import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BookingSuccessPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Booking Confirmed!</h1>
        <p className="text-zinc-400 text-lg mb-2">Your deposit has been received.</p>
        <p className="text-zinc-500 text-sm mb-10">
          You'll receive a confirmation email shortly with all the details about your appointment. We can't wait to work with you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/booking">
            <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900">Book Another</Button>
          </Link>
          <Link href="/">
            <Button className="bg-white text-black hover:bg-zinc-200">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
