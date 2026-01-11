import Link from "next/link";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Reservation Cancelled",
  description: "Your checkout was cancelled."
});

export default function ReserveCancelPage() {
  return (
    <section className="section band-white">
      <div className="section-inner">
        <h1 className="font-display text-3xl font-semibold">Checkout cancelled</h1>
        <p className="mt-4 text-sm text-slate">
          Your reservation was not completed. You can try again whenever you are
          ready.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/mobility#reserve" className="button-primary">
            Return to Reservation
          </Link>
          <Link href="/" className="button-outline">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
