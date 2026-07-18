"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PayPalCheckout } from "@/components/PayPalCheckout";

const DEPOSIT_AMOUNT = 50;

interface CheckoutModalProps {
  artistName: string;
  date: string;
  time: string;
  onClose: () => void;
}

export function CheckoutModal({ artistName, date, time, onClose }: CheckoutModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "paypal" | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleStripe = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ artistName, date, time, depositAmount: DEPOSIT_AMOUNT }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Deposit Paid!</h2>
          <p className="text-zinc-400 mb-6">Your booking with <span className="text-white font-medium">{artistName}</span> is confirmed for {date} at {time}.</p>
          <Button className="bg-white text-black hover:bg-zinc-200 w-full" onClick={onClose}>Close</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 max-w-lg w-full relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-1">Confirm Booking</h2>
        <p className="text-zinc-400 text-sm mb-8">A ${DEPOSIT_AMOUNT} deposit is required to secure your appointment.</p>

        {/* Summary */}
        <div className="bg-black rounded-xl border border-zinc-900 p-4 mb-8 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-zinc-500">Artist</span>
            <span className="text-white font-medium">{artistName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Date</span>
            <span className="text-white">{date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Time</span>
            <span className="text-white">{time}</span>
          </div>
          <div className="border-t border-zinc-800 pt-2 flex justify-between font-bold">
            <span className="text-zinc-400">Deposit Due</span>
            <span className="text-white">${DEPOSIT_AMOUNT}.00</span>
          </div>
        </div>

        {/* Payment Method Selection */}
        {!paymentMethod && (
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Choose Payment Method</p>
            <button
              onClick={() => setPaymentMethod("stripe")}
              className="w-full flex items-center gap-4 p-4 rounded-xl border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#635BFF] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Pay with Card</p>
                <p className="text-xs text-zinc-500">Powered by Stripe · Visa, Mastercard, Amex</p>
              </div>
              <svg className="w-4 h-4 text-zinc-600 group-hover:text-white ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={() => setPaymentMethod("paypal")}
              className="w-full flex items-center gap-4 p-4 rounded-xl border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#003087] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 6.082-8.558 6.082h-2.19c-1.049 0-1.934.765-2.095 1.802l-1.42 9.012h3.68l.96-6.088c.174-.999 1.047-1.73 2.063-1.73h1.32c4.223 0 7.527-1.713 8.488-6.67.244-1.26.13-2.314-.6-3.121z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Pay with PayPal</p>
                <p className="text-xs text-zinc-500">Use your PayPal account or balance</p>
              </div>
              <svg className="w-4 h-4 text-zinc-600 group-hover:text-white ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Stripe flow */}
        {paymentMethod === "stripe" && (
          <div className="space-y-4">
            <button onClick={() => setPaymentMethod(null)} className="text-zinc-500 hover:text-white text-sm flex items-center gap-1 transition-colors mb-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back
            </button>
            <Button onClick={handleStripe} disabled={loading} className="w-full h-12 bg-[#635BFF] hover:bg-[#4f46e5] text-white text-base">
              {loading ? "Redirecting..." : `Pay $${DEPOSIT_AMOUNT} with Card`}
            </Button>
            <p className="text-xs text-center text-zinc-600">You will be redirected to Stripe's secure checkout.</p>
          </div>
        )}

        {/* PayPal flow */}
        {paymentMethod === "paypal" && (
          <div className="space-y-4">
            <button onClick={() => setPaymentMethod(null)} className="text-zinc-500 hover:text-white text-sm flex items-center gap-1 transition-colors mb-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back
            </button>
            <PayPalCheckout
              amount={`${DEPOSIT_AMOUNT}.00`}
              artistName={artistName}
              onSuccess={(orderId) => {
                console.log("PayPal order:", orderId);
                setSuccess(true);
              }}
              onError={(err) => console.error("PayPal error:", err)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
