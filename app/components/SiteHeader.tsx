import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Mobility", href: "/mobility" },
  { label: "Robotics", href: "/robotics" },
  { label: "Technology", href: "/technology" }
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy/15 bg-navy/95 text-yellow backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/mlogo.svg"
            alt="Morelle"
            width={48}
            height={48}
            priority
            className="h-7 w-auto md:h-8"
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-white hover:text-yellow"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/robotics#book-call" className="button-primary">
          Book a Call
        </Link>
      </div>
      <div className="flex justify-center gap-6 border-t border-yellow/20 py-2 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link text-white hover:text-yellow"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
