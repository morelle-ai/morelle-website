import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: "Mobility",
  description:
    "Reserve the Morelle fast-charging e-bike with a refundable deposit and a clear delivery path."
});

export default function MobilityPage() {
  return (
    <div>
      <section className="section band-white">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              Fast charging designed for everyday riding.
            </h1>
            <p className="mt-4 text-base text-slate">
              Morelle's e-bike is fully charged in under ~15 minutes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/reserve" className="button-primary">
                Reserve Now
              </Link>
              <Link
                href="/technology"
                className="text-sm text-slate/60 underline underline-offset-4 transition-colors hover:text-navy hover:decoration-navy"
              >
                Learn more about our technology
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/bike/Bike2.svg"
              alt="Morelle e-bike"
              className="h-[360px] w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="section band-sand">
        <div className="section-inner">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Sleek and Lightweight */}
            <div className="flex flex-col border border-navy/10 bg-white p-8">
              <p className="text-md font-semibold uppercase tracking-[0.25em] text-navy">
                Sleek & Lightweight
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">
                Aluminum frame, yet under 30 lbs. Light enough to carry up stairs with ease. Energy dense batteries and a high torque mid-drive motor enable an exceptionally light bike.
              </p>
              <div className="mt-6 flex h-40 items-center border border-navy/10 justify-center bg-sand/50">
                <img
                  src="/bike/Bike3.svg"
                  alt="Lightweight e-bike frame"
                  className="h-full w-full object-contain p-4"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Fast Charging */}
            <div className="flex flex-col border border-navy/10 bg-white p-8">
              <p className="text-md font-semibold uppercase tracking-[0.25em] text-navy">
                Fast Charging
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">
                Charge anywhere in less than 15 minutes with Morelle chargers that plug into any wall outlet. Charging in minutes instead of hours.
              </p>
              <div className="mt-6 flex h-40 items-center border border-navy/10 justify-center bg-sand/50">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-display text-5xl font-semibold text-navy">&lt;15</span>
                    <span className="text-base text-slate">min</span>
                  </div>
                  <p className="mt-2 text-xs text-slate/70">full charge</p>
                </div>
              </div>
            </div>

            {/* High Power */}
            <div className="flex flex-col border border-navy/10 bg-white p-8">
              <p className="text-md font-semibold uppercase tracking-[0.25em] text-navy">
                High Power
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">
                UL certified 350 Wh battery provides about an hour of riding on full power assist. No more Eco-mode! Pedal assist up to 28 mph.
              </p>
              <div className="mt-6 flex h-40 items-center border border-navy/10 justify-center bg-sand/50">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <span className="font-display text-3xl font-semibold text-navy">350</span>
                    <span className="ml-1 text-sm text-slate">Wh</span>
                    <p className="mt-1 text-xs text-slate/70">battery</p>
                  </div>
                  <div>
                    <span className="font-display text-3xl font-semibold text-navy">28</span>
                    <span className="ml-1 text-sm text-slate">mph</span>
                    <p className="mt-1 text-xs text-slate/70">pedal assist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Showcase */}
      <section className="section band-white">
        <div className="section-inner grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">The Battery</p>
            <h2 className="mt-4 font-display text-3xl font-semibold">
              Engineered for speed and longevity.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Our proprietary silicon-anode battery technology enables ultra-fast charging without compromising cycle life. Compact, energy-dense, and designed to perform.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate">
              <li>UL certified for safety</li>
              <li>~350 Wh capacity</li>
              <li>1,000+ fast-charge cycles validated</li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="/bike/Silver_Brick_Side.webp"
              alt="Morelle battery pack"
              width={400}
              height={300}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Key Specs */}
      <section className="section band-sand">
        <div className="section-inner">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Key Specs</p>
            <h2 className="mt-4 font-display text-3xl font-semibold">
              Built for performance.
            </h2>
          </div>
          <div className="mt-12 grid gap-px bg-navy/10 sm:grid-cols-2 lg:grid-cols-5">
            <div className="bg-white p-6 text-center">
              <p className="font-display text-3xl font-semibold text-navy">~350</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate">Wh Battery</p>
            </div>
            <div className="bg-white p-6 text-center">
              <p className="font-display text-3xl font-semibold text-navy">28</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate">mph Assist</p>
            </div>
            <div className="bg-white p-6 text-center">
              <p className="font-display text-3xl font-semibold text-navy">&lt;30</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate">lbs Weight</p>
            </div>
            <div className="bg-white p-6 text-center">
              <p className="font-display text-3xl font-semibold text-navy">&lt;15</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate">min Charge</p>
            </div>
            <div className="bg-white p-6 text-center">
              <p className="font-display text-3xl font-semibold text-navy">UL</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate">Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="section band-white">
        <div className="section-inner grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Availability</p>
            <h2 className="mt-4 font-display text-3xl font-semibold">
              Coming Q1 2026.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              MSRP is expected to start around $3,000 with limited early production. Reserve now to secure priority access.
            </p>
            <Link href="/reserve" className="button-primary mt-6 inline-block">
              Reserve Your E-Bike
            </Link>
          </div>
          <div>
            <img
              src="/bike/Bike2.svg"
              alt="Morelle e-bike"
              className="h-[300px] w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
