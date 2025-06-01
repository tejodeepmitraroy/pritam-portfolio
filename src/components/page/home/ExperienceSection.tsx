"use client"
import AnimatedSection from '@/components/animated-section';
import SectionHeader from '@/components/section-header';
import { motion } from 'framer-motion';
import React from 'react'

const ExperienceSection = () => {
  return (
    <AnimatedSection delay={0.3}>
      <SectionHeader title="EXPERIENCE" />

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3
            className={`font-medium text-gray-800 dark:text-white mb-1`}
          >
            Senior UX/UI Designer
          </h3>
          <p
            className={`text-xs mb-3 text-gray-500 dark:text-white/70`}
          >
            2020 - Present
          </p>
          <p
            className={`text-sm text-gray-600 dark:text-white/80 leading-relaxed`}
          >
            Lead the creation of the highly intuitive and visually appealing
            UI/UX designs for web and mobile applications, collaborating with
            developers to ensure the seamless delivery of products.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3
            className={`font-medium text-gray-800 dark:text-white mb-1`}
          >
            UX/UI Designer
          </h3>
          <p
            className={`text-gray-500 dark:text-white/70 text-xs mb-3`}
          >
            2018 - 2020
          </p>
          <p
            className={`text-sm text-gray-600 dark:text-white/80 leading-relaxed`}
          >
            Collaborated with the development team to transform UI/UX designs
            into functional commercial design solutions, ensuring a consistent
            brand experience across all digital touchpoints.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3
            className={`font-medium text-gray-800 dark:text-white mb-1`}
          >
            Lead Product Designer
          </h3>
          <p
            className={`text-gray-500 dark:text-white/70 text-xs mb-3`}
          >
            2016 - 2018
          </p>
          <p
            className={`text-sm text-gray-600 dark:text-white/80 leading-relaxed`}
          >
            Designed and implemented creative solutions that blend user needs
            with business goals, creating a cohesive visual system and creating
            smooth user experiences.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3
            className={`font-medium text-gray-800 dark:text-white mb-1`}
          >
            Junior Designer
          </h3>
          <p
            className={`text-gray-500 dark:text-white/70 text-xs mb-3`}
          >
            2014 - 2016
          </p>
          <p
            className={`text-sm text-gray-600 dark:text-white/80 leading-relaxed`}
          >
            Handled the creation of landing pages for various clients, creating
            visually appealing and user-friendly designs while collaborating
            with developers.
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-16 mt-12 text-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className={`text-2xl font-bold text-[#2563EB] dark:text-[#d4ff00]`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
          >
            380+
          </motion.div>
          <div
            className={`text-xs text-gray-500 dark:text-white/70`}
          >
            Projects
            <br />
            Completed
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            className={`text-2xl font-bold text-[#2563EB] dark:text-[#d4ff00]`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
          >
            420+
          </motion.div>
          <div
            className={`text-xs text-gray-500 dark:text-white/70`}
          >
            Happy
            <br />
            Clients
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            className={`text-2xl font-bold text-[#2563EB] dark:text-[#d4ff00]`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
          >
            2K+
          </motion.div>
          <div
            className={`text-xs text-gray-500 dark:text-white/70`}
          >
            Hours of
            <br />
            Work
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

export default ExperienceSection
