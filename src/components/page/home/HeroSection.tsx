"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="flex min-h-dvh flex-col justify-center items-center px-6 max-w-4xl mx-auto relative">
      {/* Hero Section */}
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-widest mb-2"
        >
          CRAFTING DIGITAL GOODS SINCE — V.2017
        </motion.p>

        <motion.h1
          className={`  text-[#2563EB] dark:text-[#3b82f6]`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative font-dm-sans">PRITAM</div>
          <div className="relative font-dm-sans flex items-center justify-center">
            <span>MA</span>
            <div className="relative w-32 h-32 mx-1 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <span>JUMDER</span>
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 font-sans"
        >
          I'm Pritam Majumder — a senior product designer
          <br />
          passionately creating digital experiences and
          <br />
          interfaces that people love to use.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white">
          <ArrowDown size={20} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
