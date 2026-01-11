"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const bikeImages = ["/bike/Bike4.jpg", "/bike/Bike5.jpg", "/bike/Bike6.jpg"];

export default function ReservePage() {
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedTier, setSelectedTier] = useState<"R1" | "R2">("R2");

  function handleClose() {
    if (typeof window === "undefined") {
      return;
    }

    const hasHistory = window.history.length > 1;
    const isSameOriginReferrer = document.referrer?.startsWith(window.location.origin);

    if (hasHistory && isSameOriginReferrer) {
      router.back();
      return;
    }

    router.push("/");
  }

  function nextImage() {
    setCurrentImage((prev) => (prev + 1) % bikeImages.length);
  }

  function prevImage() {
    setCurrentImage((prev) => (prev - 1 + bikeImages.length) % bikeImages.length);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      email: String(formData.get("email") || ""),
      address1: String(formData.get("address1") || ""),
      address2: String(formData.get("address2") || ""),
      city: String(formData.get("city") || ""),
      state: String(formData.get("state") || ""),
      zip: String(formData.get("zip") || ""),
      country: String(formData.get("country") || ""),
      tier: selectedTier,
    };

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
    <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-sand lg:flex-row lg:overflow-hidden">
      {/* Close button - positioned in top right */}
      <button
        type="button"
        onClick={handleClose}
        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center bg-sand/80 text-slate transition-colors hover:text-navy lg:bg-transparent"
        aria-label="Close"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Mobile: Image Slideshow at top */}
      <div className="relative h-64 w-full flex-shrink-0 bg-navy sm:h-80 lg:hidden">
        <Image
          src={bikeImages[currentImage]}
          alt="Morelle e-bike"
          fill
          className="object-cover"
          priority
        />
        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Previous image"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Next image"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {bikeImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`h-1.5 w-1.5 transition-colors ${
                idx === currentImage ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Image Slideshow on left */}
      <div className="relative hidden w-1/2 bg-navy lg:block">
        <Image
          src={bikeImages[currentImage]}
          alt="Morelle e-bike"
          fill
          className="object-cover"
          priority
        />
        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Previous image"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Next image"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {bikeImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`h-2 w-2 transition-colors ${
                idx === currentImage ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right: Form */}
      <div className="w-full flex-shrink-0 lg:flex lg:w-1/2 lg:flex-1 lg:flex-col lg:overflow-y-auto">
        <div className="px-6 py-8 sm:px-8 sm:py-12 lg:flex lg:min-h-full lg:flex-col lg:justify-center lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <h1 className="font-display text-3xl font-semibold text-navy">
              Reserve Your Morelle
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Be one of the first to own a Morelle, the only e-bike that fully charges in under 15 minutes. Reservation is fully refundable.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Starting at $3,000 (reservation value will be applied to purchase price). Deliveries begin in Q1 2026. First model will be in limited quantity.
            </p>

            {/* Tier Selection */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.25em] text-slate">
                Select Reservation Tier
              </p>
              <div className="mt-3 grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedTier("R1")}
                  className={`border p-4 text-left transition-colors ${
                    selectedTier === "R1"
                      ? "border-navy bg-navy text-sand"
                      : "border-navy/20 bg-white text-navy hover:border-navy/40"
                  }`}
                >
                  <p className="font-display text-lg font-semibold">R1</p>
                  <p className="mt-1 text-2xl font-semibold">$100</p>
                  <p className="mt-2 text-xs opacity-70">First to receive delivery</p>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTier("R2")}
                  className={`border p-4 text-left transition-colors ${
                    selectedTier === "R2"
                      ? "border-navy bg-navy text-sand"
                      : "border-navy/20 bg-white text-navy hover:border-navy/40"
                  }`}
                >
                  <p className="font-display text-lg font-semibold">R2</p>
                  <p className="mt-1 text-2xl font-semibold">$50</p>
                  <p className="mt-2 text-xs opacity-70">Second wave delivery</p>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              {/* Name */}
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-slate">
                  Name <span className="text-ember">*</span>
                </label>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <input
                    required
                    name="firstName"
                    placeholder="First Name"
                    className="w-full border border-navy/20 bg-white px-3 py-2 text-sm placeholder:text-slate/50"
                  />
                  <input
                    required
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full border border-navy/20 bg-white px-3 py-2 text-sm placeholder:text-slate/50"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-slate">
                  Email <span className="text-ember">*</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full border border-navy/20 bg-white px-3 py-2 text-sm"
                />
              </div>

              {/* Address */}
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-slate">
                  Address
                </label>
                <input
                  name="address1"
                  placeholder="Address 1"
                  className="mt-2 w-full border border-navy/20 bg-white px-3 py-2 text-sm placeholder:text-slate/50"
                />
                <input
                  name="address2"
                  placeholder="Address 2"
                  className="mt-2 w-full border border-navy/20 bg-white px-3 py-2 text-sm placeholder:text-slate/50"
                />
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <input
                    name="city"
                    placeholder="City"
                    className="w-full border border-navy/20 bg-white px-3 py-2 text-sm placeholder:text-slate/50"
                  />
                  <input
                    name="state"
                    placeholder="State/Province"
                    className="w-full border border-navy/20 bg-white px-3 py-2 text-sm placeholder:text-slate/50"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <input
                    name="zip"
                    placeholder="Zip/Postal Code"
                    className="w-full border border-navy/20 bg-white px-3 py-2 text-sm placeholder:text-slate/50"
                  />
                  <input
                    name="country"
                    placeholder="Country"
                    className="w-full border border-navy/20 bg-white px-3 py-2 text-sm placeholder:text-slate/50"
                  />
                </div>
              </div>

              {errorMessage && (
                <p className="text-sm text-ember">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full bg-yellow px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-yellow/90 disabled:opacity-50"
              >
                {isSubmitting
                  ? "Redirecting to payment..."
                  : `Continue to Payment – $${selectedTier === "R1" ? "100" : "50"}`}
              </button>

              <p className="text-center text-xs text-slate/70">
                Secure payment powered by Stripe
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
