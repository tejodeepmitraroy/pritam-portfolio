"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram, Dribbble, Facebook, Linkedin } from "lucide-react"
import Navigation from "@/components/navigation"
import { useTheme } from "@/context/theme-context"
import CustomCursorDark from "@/components/custom-cursor-dark"
import ContactForm from "@/components/contact-form"

export default function About() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const isLight = theme === "light"

  useEffect(() => {
    setMounted(true)
  }, [])

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
  }

  // Tools marquee animation
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
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Custom Cursor */}
      <CustomCursorDark />

      {/* Header */}
      <Navigation />

      {/* About Title */}
      <section className="flex flex-col items-center text-center px-6 pt-16 pb-12 max-w-4xl mx-auto">
        <motion.div
          className="text-[#d4ff00] font-bold text-8xl tracking-tight leading-none mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ABOUT
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L23.5 16.5H40L26.5 26.5L30 40L20 30L10 40L13.5 26.5L0 16.5H16.5L20 0Z" fill="#d4ff00" />
          </svg>
        </motion.div>
      </section>

      {/* Profile Section */}
      <section className="px-6 py-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-[400px] bg-gray-800 rounded-md overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=300" alt="Profile" fill className="object-cover" />
              <div className="absolute top-0 right-0 h-full w-2 bg-[#d4ff00]"></div>
              <div className="absolute bottom-0 left-0 h-2 w-full bg-[#d4ff00]"></div>
              <div className="absolute top-1/4 right-4">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 40C20 30 30 20 40 20C50 20 60 30 60 40C60 50 50 60 40 60C30 60 20 50 20 40Z"
                    stroke="#d4ff00"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 mt-6 bg-[#d4ff00] p-3 rounded-md">
              <motion.a href="#" className="text-black" whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a href="#" className="text-black" whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                <Dribbble className="h-5 w-5" />
              </motion.a>
              <motion.a href="#" className="text-black" whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a href="#" className="text-black" whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.p
              className="text-white text-lg mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              My passion lies in the intersection of art and technology, creating visually captivating interfaces and
              elevating overall user digital experiences.
            </motion.p>

            <motion.p
              className="text-white text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              I hold a Bachelor of Technology in Computer Science from the esteemed Art University and a Master of Fine
              Arts in Interactive Design. This academic foundation has equipped me with a solid understanding of the
              principles that underpin effective interaction design, providing me with the knowledge to create designs
              that seamlessly blend aesthetics and functionality.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Framer */}
          <motion.div
            className="bg-[#d4ff00] p-4 rounded-md relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-black font-medium">Framer</h3>
                <p className="text-black/70 text-sm">No code website builder tool</p>
              </div>
              <div className="text-black text-4xl font-bold">92%</div>
            </div>
          </motion.div>

          {/* Figma */}
          <motion.div
            className="bg-[#d4ff00] p-4 rounded-md relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-black font-medium">Figma</h3>
                <p className="text-black/70 text-sm">User interface design tool</p>
              </div>
              <div className="text-black text-4xl font-bold">83%</div>
            </div>
          </motion.div>

          {/* Illustrator */}
          <motion.div
            className="bg-[#d4ff00] p-4 rounded-md relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-black font-medium">Illustrator</h3>
                <p className="text-black/70 text-sm">Professional graphic software</p>
              </div>
              <div className="text-black text-4xl font-bold">74%</div>
            </div>
          </motion.div>

          {/* Photoshop */}
          <motion.div
            className="bg-[#d4ff00] p-4 rounded-md relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-black font-medium">Photoshop</h3>
                <p className="text-black/70 text-sm">Professional graphic software</p>
              </div>
              <div className="text-black text-4xl font-bold">62%</div>
            </div>
          </motion.div>

          {/* Slack */}
          <motion.div
            className="bg-[#d4ff00] p-4 rounded-md relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-black font-medium">Slack</h3>
                <p className="text-black/70 text-sm">User interface design tool</p>
              </div>
              <div className="text-black text-4xl font-bold">80%</div>
            </div>
          </motion.div>

          {/* Notion */}
          <motion.div
            className="bg-[#d4ff00] p-4 rounded-md relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-black font-medium">Notion</h3>
                <p className="text-black/70 text-sm">Note taking and reminder tool</p>
              </div>
              <div className="text-black text-4xl font-bold">54%</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-[#d4ff00]/10 py-8 overflow-hidden mt-12">
        <motion.div
          className="flex space-x-8 text-[#d4ff00] font-bold text-4xl whitespace-nowrap opacity-30"
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
    </div>
  )
}
