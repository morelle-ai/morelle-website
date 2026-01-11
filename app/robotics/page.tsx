import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "../lib/seo";
import ParallaxHumanoid from "../components/ParallaxHumanoid";

export const metadata = buildMetadata({
  title: "Robotics",
  description:
    "Ultra fast charging battery systems for robotics, automation, and uptime-critical operations. 99% fleet uptime with 15-minute charging."
});

export default function RoboticsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section band-white relative overflow-visible !pb-0">
        <div className="section-inner">
          <div className="grid items-start gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h1 className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
                Batteries and charging built for relentless uptime.
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate">
                Morelle supports fleet operators and industrial teams that cannot afford
                downtime. We deliver the hardware and integration support to keep your
                systems running.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#book-call" className="button-primary">
                  Book a Call
                </a>
                <Link
                href="/technology"
                className="text-sm text-slate/60 underline underline-offset-4 transition-colors hover:text-navy hover:decoration-navy"
                >
                Learn more about our technology
              </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:-mr-16">
              <ParallaxHumanoid />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="relative z-0 bg-navy py-16">
        <div className="section-inner">
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

      {/* Problem / Solution */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-navy">The Problem</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-navy md:text-4xl lg:min-h-[5rem]">
                Downtime kills ROI.
              </h2>
              <p className="text-base leading-relaxed text-slate">
                Traditional charging forces you to choose: oversized fleets, complex battery swap infrastructure, or constant downtime due to charging. None of these options work when uptime is your most important KPI.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-navy">The Solution</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-navy md:text-4xl lg:min-h-[5rem]">
                Plug in. Charge. Go.
              </h2>
              <p className="text-base leading-relaxed text-slate">
                Morelle's ultra-fast charging eliminates the tradeoffs. Full charge in under
                15 minutes means your robots spend more time working and less time waiting.
                No swaps. No spare inventory. Just continuous operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-slate">Platform</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-navy md:text-4xl">
              Everything designed as one system.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate">
              Custom battery packs, intelligent BMS, high-power chargers, and full integration
              support, optimized to work together for your specific application.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="border border-navy/10 bg-white p-6">
              <p className="font-display text-lg font-semibold text-navy">Battery Packs</p>
              <p className="mt-2 text-sm text-slate">
                Sized for demanding duty cycles with silicon-based anode chemistry.
              </p>
            </div>
            <div className="border border-navy/10 bg-white p-6">
              <p className="font-display text-lg font-semibold text-navy">Custom BMS</p>
              <p className="mt-2 text-sm text-slate">
                Intelligent battery management with real-time diagnostics and health monitoring.
              </p>
            </div>
            <div className="border border-navy/10 bg-white p-6">
              <p className="font-display text-lg font-semibold text-navy">High-Power Chargers</p>
              <p className="mt-2 text-sm text-slate">
                Proprietary charging systems optimized for speed and battery longevity.
              </p>
            </div>
            <div className="border border-navy/10 bg-white p-6">
              <p className="font-display text-lg font-semibold text-navy">Integration Support</p>
              <p className="mt-2 text-sm text-slate">
                Engineering support to integrate Morelle systems into your platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Economics */}
      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-yellow/70">Economics</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-sand md:text-4xl">
                The math works in your favor.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-yellow/80">
                Internal modeling for a 100-robot fleet operating 24/7 over five years shows
                more than 3× cost savings versus battery swap systems.
              </p>
              <p className="mt-4 text-xs text-yellow/60">
                Economics based on internal modeling. Results vary by application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call CTA */}
      <section className="bg-white py-20 md:py-28" id="book-call">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-slate">Talk to us</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-navy md:text-4xl">
            Ready to eliminate charging downtime?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate">
            Share your use case and we'll map the right battery and charging
            configuration for your operations.
          </p>
          <div className="mt-8">
            <a 
              href="https://calendly.com/morelle-mike/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary inline-flex"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
