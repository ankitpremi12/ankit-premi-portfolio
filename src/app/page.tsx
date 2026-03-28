"use client";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

import Loader from "@/components/ui/Loader";
import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";

import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Analytics from "@/components/sections/Analytics";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

import { useLenis } from "@/hooks/useLenis";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export default function Home() {
  useLenis();
  const { isLoading } = usePortfolioStore();

  // Hide cursor on mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      document.body.style.cursor = "none";
    }
  }, []);

  // Hover cursor effect
  useEffect(() => {
    const setCursorHovering = usePortfolioStore.getState().setCursorHovering;
    const addListeners = () => {
      const els = document.querySelectorAll("a, button, [role='button']");
      els.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorHovering(true));
        el.addEventListener("mouseleave", () => setCursorHovering(false));
      });
    };

    const timer = setTimeout(addListeners, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader />
      <CustomCursor />
      <Toaster position="bottom-right" />

      <main
        className="bg-[#050505] min-h-screen"
        style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.5s ease" }}
      >
        <Navbar />

        <Hero />

        {/* Katana divider */}
        <div className="katana-divider mx-8 md:mx-16" />

        <Skills />

        <div className="katana-divider mx-8 md:mx-16" />

        <Experience />

        <div className="katana-divider mx-8 md:mx-16" />

        <Projects />

        <div className="katana-divider mx-8 md:mx-16" />

        <Analytics />

        <div className="katana-divider mx-8 md:mx-16" />

        <Achievements />

        <div className="katana-divider mx-8 md:mx-16" />

        <Contact />
      </main>
    </>
  );
}
