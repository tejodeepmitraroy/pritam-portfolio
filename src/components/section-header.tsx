"use client"
import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
}

export default function SectionHeader({ title }: SectionHeaderProps) {


  return (
    <div className="flex justify-between items-center mb-8">
      <motion.h2
        className={`text-[#2563EB] dark:text-[#d4ff00] font-medium text-sm`}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className={`h-px bg-[#2563EB] dark:bg-[#d4ff00] flex-grow ml-4`}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />
    </div>
  )
}
