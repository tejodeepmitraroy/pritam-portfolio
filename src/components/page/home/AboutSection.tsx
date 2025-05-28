import React from 'react'
import { motion } from "framer-motion";
import AnimatedSection from "@/components/animated-section";
import SectionHeader from "@/components/section-header";
import { useTheme } from "@/context/theme-context";

const AboutSection = () => {
    const { theme } = useTheme();
    const isLight = theme === "light";
  return (
    <AnimatedSection>
      <SectionHeader title="ABOUT" theme={theme} />

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div
          className={`text-sm ${
            isLight ? "text-gray-600" : "text-white/80"
          } leading-relaxed`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="mb-4">
            My passion lies in the intersection of art and technology, creating
            visually appealing designs while maintaining a smooth user
            experience.
          </p>
        </motion.div>
        <motion.div
          className={`text-sm ${
            isLight ? "text-gray-600" : "text-white/80"
          } leading-relaxed`}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="mb-4">
            I hold a Bachelor of Science in Computer Science and a Master's
            degree in Interaction Design. I've completed my studies at
            prestigious institutions that equipped me with a solid foundation in
            both design and development, allowing me to bridge the gap between
            creativity and functionality.
          </p>
        </motion.div>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-6xl mx-auto">
        <motion.div
          className={`${isLight ? "bg-[#2563EB]" : "bg-[#d4ff00]"} ${
            isLight ? "text-white" : "text-black"
          } p-4 rounded-lg overflow-hidden relative`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="text-sm mb-1">Frontend</div>
          <div
            className={`text-xs ${isLight ? "text-blue-200" : "text-black/70"}`}
          >
            HTML, CSS, JavaScript
          </div>
          <div className="text-3xl font-bold mt-2">82%</div>
        </motion.div>
        <motion.div
          className={`${isLight ? "bg-[#2563EB]" : "bg-[#d4ff00]"} ${
            isLight ? "text-white" : "text-black"
          } p-4 rounded-lg overflow-hidden relative`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -5 }}
        >
          <div className="text-sm mb-1">Design</div>
          <div
            className={`text-xs ${isLight ? "text-blue-200" : "text-black/70"}`}
          >
            UI/UX, Prototyping
          </div>
          <div className="text-3xl font-bold mt-2">74%</div>
        </motion.div>
        <motion.div
          className={`${isLight ? "bg-[#2563EB]" : "bg-[#d4ff00]"} ${
            isLight ? "text-white" : "text-black"
          } p-4 rounded-lg overflow-hidden relative`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ y: -5 }}
        >
          <div className="text-sm mb-1">Stack</div>
          <div
            className={`text-xs ${isLight ? "text-blue-200" : "text-black/70"}`}
          >
            React, Node, Express
          </div>
          <div className="text-3xl font-bold mt-2">80%</div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

export default AboutSection
