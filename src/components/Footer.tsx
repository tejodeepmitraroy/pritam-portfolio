import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";

const Footer = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };
  const { theme } = useTheme();
  const isLight = theme === "light";
  return (
    <footer
      className={`${
        isLight ? "bg-[#2563EB]/10" : "bg-[#d4ff00]/10"
      } py-8 overflow-hidden mt-12`}
    >
      <motion.div
        className={`flex space-x-8 ${
          isLight ? "text-[#2563EB]" : "text-[#d4ff00]"
        } font-bold text-4xl whitespace-nowrap opacity-30`}
        variants={marqueeVariants}
        animate="animate"
        custom={-1}
      >
        <div>PORTFOLIO</div>
        <div>TWITTER</div>
        <div>LINKEDIN</div>
        <div>BEHANCE</div>
        <div>PORTFOLIO</div>
        <div>TWITTER</div>
        <div>LINKEDIN</div>
        <div>BEHANCE</div>
      </motion.div>
    </footer>
  );
};

export default Footer;
