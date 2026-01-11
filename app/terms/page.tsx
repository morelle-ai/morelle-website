import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Morelle terms of service for reservations, communications, and site usage."
});

export default function TermsPage() {
  return (
    <section className="section band-white">
      <div className="section-inner">
        <h1 className="font-display text-3xl font-semibold">Terms of Service</h1>
        <div className="mt-6 space-y-4 text-sm text-slate">
          <p>
            Morelle provides this site to share product information, collect
            reservations, and schedule business conversations. By using the site, you
            agree to provide accurate information and to use the services responsibly.
          </p>
          <p>
            Reservation payments are processed through Stripe. Scheduling requests are
            handled by Calendly. Your use of those services is subject to their terms.
          </p>
          <p>
            Product timelines and pricing are subject to change. We will communicate
            updates as they become available.
          </p>
        </div>
      </div>
    </section>
  );
}
