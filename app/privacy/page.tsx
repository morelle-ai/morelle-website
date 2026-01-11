import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Morelle privacy policy covering data use, Stripe payments, and Calendly scheduling."
});

export default function PrivacyPage() {
  return (
    <section className="section band-white">
      <div className="section-inner">
        <h1 className="font-display text-3xl font-semibold">Privacy Policy</h1>
        <div className="mt-6 space-y-4 text-sm text-slate">
          <p>
            We collect only the information needed to process reservations and schedule
            calls. This includes your name, contact details, and any details you share
            in forms.
          </p>
          <p>
            Payments are processed through Stripe. Scheduling is handled through
            Calendly. These providers act as third-party processors and maintain their
            own privacy practices.
          </p>
          <p>
            We do not sell personal information. We retain data only as long as needed
            to operate the reservation or communication process.
          </p>
        </div>
      </div>
    </section>
  );
}
