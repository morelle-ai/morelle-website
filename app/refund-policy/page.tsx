import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: "Refund Policy",
  description:
    "Morelle reservation deposit refund policy and processing details."
});

export default function RefundPolicyPage() {
  return (
    <section className="section band-white">
      <div className="section-inner">
        <h1 className="font-display text-3xl font-semibold">Refund Policy</h1>
        <div className="mt-6 space-y-4 text-sm text-slate">
          <p>
            Reservation deposits for the Morelle e-bike are fully refundable until a
            final purchase agreement is executed.
          </p>
          <p>
            To request a refund, email hello@morelle.com with the reservation email
            address. Refunds are issued back to the original payment method via
            Stripe.
          </p>
          <p>
            Processing times may vary by bank or card provider. We will confirm once a
            refund is submitted.
          </p>
        </div>
      </div>
    </section>
  );
}
