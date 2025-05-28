"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import CustomCursor from "@/components/custom-cursor";
import CustomCursorDark from "@/components/custom-cursor-dark";
import SectionHeader from "@/components/section-header";
import AnimatedSection from "@/components/animated-section";
import Navigation from "@/components/navigation";
import { useTheme } from "@/context/theme-context";
import ContactForm from "@/components/contact-form";
import HeroSection from "@/components/page/home/HeroSection";
import ProjectionSection from "@/components/page/home/ProjectionSection";
import ExperienceSection from "@/components/page/home/ExperienceSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Text animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  // Skill bar animation variants
  const skillVariants = {
    hidden: { width: 0 },
    visible: (percent: number) => ({
      width: `${percent}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    }),
  };

  

  // Don't render anything until client-side hydration is complete
  if (!mounted) {
    return <div className="min-h-screen bg-black"></div>;
  }

  return (
    <main
      className={`min-h-screen dark:bg-black ${isLight ? "bg-gray-100" : "bg-black"} ${
        isLight ? "text-gray-800" : "text-white"
      } overflow-hidden`}
    >
      {/* Custom Cursor */}
      {isLight ? <CustomCursor /> : <CustomCursorDark />}

      {/* Header */}
      <Navigation />
      <HeroSection/>

      

      {/* About Section */}
      

      {/* Projects Section */}
      <ProjectionSection/>

      {/* Experience Section */}
      <ExperienceSection/>

      {/* Tools Section */}
      
      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer/>
    </main>
  );
}
