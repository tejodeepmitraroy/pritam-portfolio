"use client"
import AnimatedSection from '@/components/animated-section'
import SectionHeader from '@/components/section-header'
import { motion } from 'framer-motion';
import React from 'react'

const ProjectionSection = () => {
  return (
    <AnimatedSection delay={0.2}>
        <SectionHeader title="PROJECTS"  />

        <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((item, index) => (
            <motion.div
              key={item}
              className="bg-gray-800 aspect-square rounded-lg flex items-center justify-center cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-white text-2xl">
                {item === 1 && (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="7"
                      height="7"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <rect
                      x="14"
                      y="3"
                      width="7"
                      height="7"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <rect
                      x="3"
                      y="14"
                      width="7"
                      height="7"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <rect
                      x="14"
                      y="14"
                      width="7"
                      height="7"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                )}
                {item === 2 && (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18M6 12L10 8M6 12L10 16"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {item === 3 && (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path d="M12 7V17" stroke="white" strokeWidth="2" />
                    <path d="M7 12H17" stroke="white" strokeWidth="2" />
                  </svg>
                )}
                {item === 4 && (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
  )
}

export default ProjectionSection
