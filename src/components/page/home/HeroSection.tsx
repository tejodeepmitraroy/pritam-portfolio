"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="flex min-h-dvh flex-col justify-center items-center px-6 max-w-5xl mx-auto relative">
      {/* Hero Section */}
      <section className="w-full flex gap-20 flex-col items-center ">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-widest mb-2"
        >
          CRAFTING DIGITAL GOODS SINCE — 2020
        </motion.p>
        <h1 className={` w-full text-[#2563EB] dark:text-[#3b82f6]`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full "
          > 
            PRITAM
          </motion.div>
          <div className="relative   flex items-center justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              MA
            </motion.span>
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-32 h-40 mx-1 overflow-hidden rounded-full">
              <Image
                src="/profile.png"
                alt="Profile"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              JUMDER
            </motion.span>
          </div>
        </h1>
      </section>
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 w-full max-w-xl text-2xl font-sans"
        >
          I'm Pritam Majumder — a Experienced Video Editor and VFX Artist passionate about creating
          digital experiences and visuals that people love .
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
