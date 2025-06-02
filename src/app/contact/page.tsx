"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import { useTheme } from "@/context/theme-context"
import CustomCursor from "@/components/custom-cursor"

import ContactForm from "@/components/contact-form"

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const isLight = theme === "light"

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={`min-h-screen ${isLight ? "bg-gray-100" : "bg-black"} overflow-hidden`}>
     <CustomCursor /> 

      <Navigation />

      <section className="flex flex-col items-center text-center px-6 pt-16 pb-12 max-w-4xl mx-auto">
        <motion.div
          className={`font-bold text-8xl tracking-tight leading-none mb-6 ${
            isLight ? "text-[#2563EB]" : "text-[#d4ff00]"
          }`}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          CONTACT
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0L23.5 16.5H40L26.5 26.5L30 40L20 30L10 40L13.5 26.5L0 16.5H16.5L20 0Z"
              fill={isLight ? "#2563EB" : "#d4ff00"}
            />
          </svg>
        </motion.div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <footer className={`${isLight ? "bg-[#2563EB]/10" : "bg-[#d4ff00]/10"} py-8 overflow-hidden mt-12`}>
        <motion.div
          className={`flex space-x-8 ${
            isLight ? "text-[#2563EB]" : "text-[#d4ff00]"
          } font-bold text-4xl whitespace-nowrap opacity-30`}
          animate={{
            x: [0, -1000],
            transition: {
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            },
          }}
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
    </div>
  )
}
