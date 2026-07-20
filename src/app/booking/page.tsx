"use client";
import { Header } from "@/components/Header";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const artists = ["No preference", "Jahbreal Banks", "Elena Rostova", "Sarah Jenkins"];
const styles = ["Not sure yet", "Realism", "Neo-Traditional", "Fine Line / Minimalist", "Black & Grey", "Geometric", "Watercolour", "Japanese / Irezumi", "Old School / Traditional", "Other"];

type Status = "idle" | "loading" | "success" | "error";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    artist: "",
    style: "",
    placement: "",
    details: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New Consultation Request from ${form.name || form.email}`,
          from_name: "Inks & Needles Website",
          name: form.name || "Not provided",
          email: form.email,
          Preferred_Artist: form.artist || "No preference",
          Style: form.style || "Not specified",
          Placement: form.placement || "Not specified",
          Details: form.details,
        }),
      });
      const result = await res.json();
      if (res.ok && result.success) {
        setStatus("success");
      } else {
        console.error("Web3Forms Error:", result);
        setStatus("error");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col">
      {/* Header */}
      <Header />

      <main className="flex-1 flex items-start justify-center py-16 px-4">
        <div className="w-full max-w-2xl">

          {/* Success state */}
          {status === "success" ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-3">Request Sent!</h2>
              <p className="text-zinc-400 mb-2">Thanks, <span className="text-white">{form.name || form.email}</span>.</p>
              <p className="text-zinc-500 text-sm mb-8 max-w-sm mx-auto">
                We've received your consultation request and sent a confirmation to <strong className="text-zinc-300">{form.email}</strong>. Expect to hear from us within 24–48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/portfolio">
                  <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white">
                    Browse Portfolio
                  </Button>
                </Link>
                <Link href="/">
                  <Button className="bg-white text-black hover:bg-zinc-200">Back to Home</Button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Page header */}
              <div className="mb-10">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Book a consultation</p>
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500">
                  Let's Create Something.
                </h1>
                <p className="text-zinc-400">
                  Fill in your details below and one of our artists will reach out to discuss your idea, answer questions, and schedule your session.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-500">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all placeholder:text-zinc-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Email Address <span className="text-zinc-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all placeholder:text-zinc-700"
                    />
                  </div>
                </div>

                {/* Artist + Style row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="artist" className="text-xs font-bold uppercase tracking-wider text-zinc-500">Preferred Artist</label>
                    <select
                      id="artist"
                      name="artist"
                      value={form.artist}
                      onChange={handleChange}
                      className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all appearance-none"
                    >
                      <option value="" disabled>Select artist...</option>
                      {artists.map((a) => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="style" className="text-xs font-bold uppercase tracking-wider text-zinc-500">Tattoo Style</label>
                    <select
                      id="style"
                      name="style"
                      value={form.style}
                      onChange={handleChange}
                      className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all appearance-none"
                    >
                      <option value="" disabled>Select style...</option>
                      {styles.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                {/* Placement */}
                <div className="space-y-2">
                  <label htmlFor="placement" className="text-xs font-bold uppercase tracking-wider text-zinc-500">Placement & Approximate Size</label>
                  <input
                    id="placement"
                    name="placement"
                    type="text"
                    placeholder="e.g. Inner forearm, roughly 4 inches"
                    value={form.placement}
                    onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all placeholder:text-zinc-700"
                  />
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <label htmlFor="details" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Tell us about your idea <span className="text-zinc-400">*</span>
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows={6}
                    placeholder="Describe your tattoo idea in as much detail as you like — concept, references, colours, mood, anything that helps us understand your vision..."
                    value={form.details}
                    onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all resize-none placeholder:text-zinc-700"
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                    Something went wrong sending your request. Please try again or email us directly.
                  </p>
                )}

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading" || !form.email || !form.details}
                    className="w-full h-14 text-lg font-medium rounded-lg bg-white text-black hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </span>
                    ) : "Send Consultation Request"}
                  </button>
                  <p className="text-center text-xs text-zinc-600 mt-3">
                    We respond within 24–48 hours. A confirmation will be sent to your email.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </main>

      <footer className="bg-black py-8 border-t border-zinc-900">
        <div className="container mx-auto px-4 text-center text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} Inks & Needles. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
