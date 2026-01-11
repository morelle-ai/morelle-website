"use client";

import { useState } from "react";

export default function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      country: String(formData.get("country") || ""),
      variant: String(formData.get("variant") || "")
    };

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.error || "Unable to start checkout.");
      }

      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Checkout failed. Try again."
      );
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white px-6 py-6"
    >
      <div className="space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
            Full name
          </label>
          <input
            required
            name="fullName"
            className="mt-2 w-full border border-navy/30 bg-white px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            className="mt-2 w-full border border-navy/30 bg-white px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
            Country / region
          </label>
          <input
            required
            name="country"
            className="mt-2 w-full border border-navy/30 bg-white px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
            Size or variant (optional)
          </label>
          <input
            name="variant"
            placeholder="Commuter, cargo, XL frame"
            className="mt-2 w-full border border-navy/30 bg-white px-3 py-2 text-sm"
          />
        </div>
      </div>
      {errorMessage ? (
        <p className="mt-4 text-sm text-ember">{errorMessage}</p>
      ) : null}
      <button
        type="submit"
        disabled={isSubmitting}
        className="button-primary mt-6 w-full"
      >
        {isSubmitting ? "Redirecting..." : "Continue to Payment"}
      </button>
      <p className="mt-4 text-xs text-slate">
        Deposit processed via Stripe Checkout. Refunds available on request prior
        to delivery.
      </p>
    </form>
  );
}
