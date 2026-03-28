"use client";
import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;

    async function initLenis() {
      try {
        const Lenis = (await import("lenis")).default;
        lenis = new Lenis({
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
        });

        function raf(time: number) {
          lenis?.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      } catch (e) {
        console.warn("Lenis not available:", e);
      }
    }

    initLenis();

    return () => {
      lenis?.destroy();
    };
  }, []);
}
