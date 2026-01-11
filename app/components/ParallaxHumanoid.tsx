"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import humanoidSvg from "@/content/humanoid/humanoid.svg";

export default function ParallaxHumanoid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updatePosition = () => {
      const isMobile = window.innerWidth < 768;
      
      if (isMobile) {
        // No parallax on mobile - remove any transform
        container.style.transform = "";
        return;
      }

      // Only apply parallax when scrolled (avoids jump at page load)
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        container.style.transform = `translateY(${scrollY * 0.12}px)`;
      } else {
        container.style.transform = "";
      }
    };

    // Don't run immediately - wait for scroll
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition, { passive: true });

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <Image
        src={humanoidSvg}
        alt="Humanoid robot"
        width={400}
        height={600}
        className="relative z-10 h-auto w-full max-w-md drop-shadow-2xl"
        priority
      />
    </div>
  );
}
