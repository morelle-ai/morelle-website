import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sand/80 text-navy">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Image
              src="/mlogo.svg"
              alt="Morelle"
              width={48}
              height={48}
              className="h-8 w-auto"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(11%) sepia(20%) saturate(1500%) hue-rotate(182deg) brightness(95%) contrast(95%)",
              }}
            />
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-5">
              <a
                href="mailto:hello@morelle.com"
                aria-label="Email Morelle"
                className="transition-opacity hover:opacity-60"
              >
                <Image
                  src="/email-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-7 w-7 object-contain"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/morelle-inc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Morelle on LinkedIn"
                className="transition-opacity hover:opacity-60"
              >
                <Image
                  src="/linkedin-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-2">
            {/* Products */}
            <div>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/mobility"
                    className="text-sm text-slate transition-colors hover:text-navy"
                  >
                    Mobility
                  </Link>
                </li>
                <li>
                  <Link
                    href="/robotics"
                    className="text-sm text-slate transition-colors hover:text-navy"
                  >
                    Robotics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technology"
                    className="text-sm text-slate transition-colors hover:text-navy"
                  >
                    Technology
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-slate transition-colors hover:text-navy"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-slate transition-colors hover:text-navy"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-policy"
                    className="text-sm text-slate transition-colors hover:text-navy"
                  >
                    Refunds
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy/10">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <p className="text-xs text-slate/70">
            © {year} Morelle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
