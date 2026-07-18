"use client";

import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface PayPalCheckoutProps {
  amount: string;
  artistName: string;
  onSuccess: (orderId: string) => void;
  onError: (error: unknown) => void;
}

export function PayPalCheckout({ amount, artistName, onSuccess, onError }: PayPalCheckoutProps) {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test",
        currency: "USD",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical", color: "silver", shape: "rect", label: "pay" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: `Tattoo Deposit – ${artistName}`,
                amount: {
                  currency_code: "USD",
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          if (actions.order) {
            const order = await actions.order.capture();
            onSuccess(order.id || data.orderID);
          }
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
}
