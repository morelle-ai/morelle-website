import Link from "next/link";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Reservation Confirmed",
  description: "Your Morelle reservation deposit is confirmed."
});

export default function ReserveSuccessPage() {
  return (
    <section className="section band-white">
      <div className="section-inner">
        <h1 className="font-display text-3xl font-semibold">
          Reservation confirmed
        </h1>
        <p className="mt-4 text-sm text-slate">
          We received your refundable deposit. You'll get an email confirmation with
          next steps shortly.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/mobility" className="button-outline">
            Back to Mobility
          </Link>
          <Link href="/technology" className="button-primary">
            Explore Technology
          </Link>
        </div>
      </div>
    </section>
  );
}
