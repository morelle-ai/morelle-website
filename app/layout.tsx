import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Morelle | Fast Charging E-Bike and Robotics Systems",
    template: "%s | Morelle"
  },
  description:
    "Morelle builds fast-charging e-bike mobility and robotics systems designed for uptime, safety, and reliability.",
  openGraph: {
    title: "Morelle",
    description:
      "Fast-charging e-bike mobility and robotics systems designed for uptime, safety, and reliability.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Morelle"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Morelle",
    description:
      "Fast-charging e-bike mobility and robotics systems designed for uptime, safety, and reliability.",
    images: ["/og.svg"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-hero">
          <SiteHeader />
          <main className="pb-20">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
