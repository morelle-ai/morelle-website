import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "./lib/seo";
import humanoidSvg from "@/content/humanoid/humanoid.svg";
export const metadata = buildMetadata({
  title: "Morelle",
  description:
    "Ultra fast charging energy storage systems for next-generation robotics and mobility."
});

export default function HomePage() {
  return (
    <div>
      {/* Hero - Clean white with bike SVG */}
      <section className="section band-white">
        <div className="section-inner">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate">
                Morelle e-bike
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
                Charge in minutes, not hours.
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate">
                The Morelle e-bike features breakthrough battery technology that fully charges in under 15 minutes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/mobility" className="button-primary">
                  Explore E-Bike
                </Link>
                <Link href="/reserve" className="button-outline">
                  Reserve Now
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/bike/Bike3.svg"
                alt="Morelle e-bike"
                className="h-auto w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured In - All media in 2 rows */}
      <section className="bg-sand py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-slate">
            Featured in
          </p>
          <div className="mt-8 space-y-8">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              <a
                href="https://www.bikeperfect.com/news/mtb-legend-gary-fisher-gives-us-the-lowdown-on-morelle-his-radical-new-e-bike-venture"
                aria-label="BikePerfect coverage"
                className="flex w-40 items-center justify-center"
              >
                <img
                  src="/featuredin/bp.svg"
                  alt="BikePerfect"
                  className="h-10 w-auto object-contain opacity-75 grayscale transition-opacity hover:opacity-100"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.investors.com/news/management/leaders-and-success/gary-fisher-mountain-bike-pioneer-jumps-on-new-bicycle-dream/"
                aria-label="Investor's Business Daily coverage"
                className="flex w-40 items-center justify-center"
              >
                <img
                  src="/featuredin/id.svg"
                  alt="Investor's Business Daily"
                  className="h-10 w-auto object-contain opacity-75 grayscale transition-opacity hover:opacity-100"
                  loading="lazy"
                />
              </a>
              <a
                href="https://robbreport.com/motors/motorcycles/morelle-e-bike-fully-recharge-15-minute-1236906287/"
                aria-label="Robb Report coverage"
                className="flex w-40 items-center justify-center"
              >
                <img
                  src="/featuredin/rr.svg"
                  alt="Robb Report"
                  className="h-10 w-auto object-contain opacity-75 grayscale transition-opacity hover:opacity-100"
                  loading="lazy"
                />
              </a>
              <div className="flex w-40 items-center justify-center">
                <img
                  src="/featuredin/lb.svg"
                  alt="La Bicicleta"
                  className="h-10 w-auto object-contain opacity-75 grayscale"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              <a
                href="https://newatlas.com/bicycles/morelle-15-min-fast-charging-ebike/"
                aria-label="New Atlas coverage"
                className="flex w-40 items-center justify-center"
              >
                <img
                  src="/featuredin/na.svg"
                  alt="New Atlas"
                  className="h-10 w-auto object-contain opacity-75 grayscale transition-opacity hover:opacity-100"
                  loading="lazy"
                />
              </a>
              <a
                href="https://gearjunkie.com/news/gary-fisher-e-bike-brand-morelle"
                aria-label="GearJunkie coverage"
                className="flex w-40 items-center justify-center"
              >
                <img
                  src="/featuredin/gj.svg"
                  alt="GearJunkie"
                  className="h-10 w-auto object-contain opacity-75 grayscale transition-opacity hover:opacity-100"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.forbes.com/sites/carltonreid/2025/07/27/startup-morelle-markets-15-minute-charge-e-bike-tech-powers-robots-too/"
                aria-label="Forbes coverage"
                className="flex w-40 items-center justify-center"
              >
                <img
                  src="/featuredin/forbes.svg"
                  alt="Forbes"
                  className="h-10 w-auto object-contain opacity-75 grayscale transition-opacity hover:opacity-100"
                  loading="lazy"
                />
              </a>
              <a
                href="https://bicycleretailer.com/industry-news/2025/03/26/gary-fisher-debuts-fast-charging-morelle-e-bike-sea-otter-next-month"
                aria-label="Bicycle Retailer coverage"
                className="flex w-40 items-center justify-center"
              >
                <img
                  src="/featuredin/br.svg"
                  alt="Bicycle Retailer"
                  className="h-10 w-auto object-contain opacity-75 grayscale transition-opacity hover:opacity-100"
                  loading="lazy"
                />
              </a>
              <a
                href="https://velo.outsideonline.com/news/sea-otter-classic-gary-fisher-backed-morelle-e-bikes-boasts-15-minute-charge-capability/"
                aria-label="Outside coverage"
                className="flex w-40 items-center justify-center"
              >
                <img
                  src="/featuredin/ou.svg"
                  alt="Outside"
                  className="h-10 w-auto object-contain opacity-75 grayscale transition-opacity hover:opacity-100"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem / Solution */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-navy">The Problem</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-navy md:text-4xl lg:min-h-[5rem]">
                Traditional charging kills productivity.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate">
                Hours of downtime. Oversized fleets to compensate. Missed delivery windows. The old approach to charging is holding back the potential of electric mobility and robotics.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-navy">The Solution</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-navy md:text-4xl lg:min-h-[5rem]">
                Morelle changes the equation. Charging fast and safe.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate">
                Our ultra-fast charging technology delivers a full charge in under 15 minutes. No more waiting. No more oversized fleets. Just continuous, reliable operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 text-center md:grid-cols-3 md:gap-12">
            <div>
              <p className="font-display text-5xl font-semibold text-yellow md:text-6xl">15</p>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-sand/70">Minutes to full charge</p>
            </div>
            <div>
              <p className="font-display text-5xl font-semibold text-yellow md:text-6xl">99%</p>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-sand/70">Fleet uptime achieved</p>
            </div>
            <div>
              <p className="font-display text-5xl font-semibold text-yellow md:text-6xl">3×</p>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-sand/70">Cost savings vs swap</p>
            </div>
          </div>
        </div>
      </section>

      {/* Robotics with Humanoid */}
      <section className="overflow-hidden bg-sand pb-12 pt-12 md:pb-0 md:pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <p className="text-xs uppercase tracking-[0.25em] text-slate">Robotics</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-navy md:text-4xl">
                Built for uptime-critical operations.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate">
                Custom battery packs, intelligent BMS, high-power chargers, and full integration support. Everything designed as one system for robotics and mobility applications that can't afford downtime.
              </p>
              <div className="mt-8">
                <Link href="/robotics" className="button-primary">
                  Explore Robotics
                </Link>
              </div>
            </div>
            <div className="relative order-1 flex h-full items-end justify-center lg:order-2 lg:-mr-16">
              <Image
                src={humanoidSvg}
                alt="Humanoid robot"
                width={400}
                height={600}
                className="h-auto w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <svg className="mx-auto h-10 w-10 text-yellow" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="mt-8">
            <p className="font-display text-2xl font-medium leading-relaxed text-navy md:text-3xl">
              "Our customers were questioning whether robotics was worth the investment when half their fleet was always charging. Morelle solved that skepticism instantly."
            </p>
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-[0.25em] text-slate">
            VP Engineering, Stealth Humanoid Company
          </p>
        </div>
      </section>

      {/* Product CTA */}
      <section className="bg-navy py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-yellow/70">Mobility</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-sand">
                The Morelle E-Bike
              </h3>
              <p className="mt-3 text-sm text-yellow/80">
                Reserve a fast-charging e-bike with a refundable deposit.
              </p>
              <Link href="/reserve" className="button-primary mt-6 w-fit">
                Reserve E-Bike
              </Link>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-yellow/70">Robotics</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-sand">
                Robotics Platform
              </h3>
              <p className="mt-3 text-sm text-yellow/80">
                Battery and charger systems built for uptime-critical operations.
              </p>
              <Link href="/robotics#book-call" className="button-primary mt-6 w-fit">
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
