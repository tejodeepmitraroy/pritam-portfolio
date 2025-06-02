"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import { useTheme } from "@/context/theme-context"
import CustomCursor from "@/components/custom-cursor"
import ContactForm from "@/components/contact-form"

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const isLight = theme === "light"

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      title: "E-commerce Redesign",
      description:
        "A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
      category: "UX/UI Design",
      year: "2023",
    },
    {
      title: "Finance Dashboard",
      description: "An intuitive dashboard for financial data visualization and analysis.",
      category: "Web Application",
      year: "2022",
    },
    {
      title: "Travel App",
      description: "A mobile application for travel planning and booking with personalized recommendations.",
      category: "Mobile App",
      year: "2022",
    },
    {
      title: "Healthcare Portal",
      description: "A patient-centered healthcare portal for managing appointments and medical records.",
      category: "Web Application",
      year: "2021",
    },
    {
      title: "Smart Home System",
      description: "An integrated system for controlling and monitoring smart home devices.",
      category: "IoT",
      year: "2021",
    },
    {
      title: "Educational Platform",
      description: "An online learning platform with interactive courses and progress tracking.",
      category: "Web Application",
      year: "2020",
    },
  ]

  if (!mounted) return null

  return (
    <main className={`min-h-screen ${isLight ? "bg-gray-100" : "bg-black"} overflow-hidden`}>
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
          PROJECTS
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

      <section className="px-6 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg ${isLight ? "bg-white shadow-md" : "bg-[#d4ff00]/10"} cursor-pointer`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-xl font-bold ${!isLight && "text-[#d4ff00]"}`}>{project.title}</h3>
                <span className={`text-sm ${isLight ? "text-gray-500" : "text-white/70"}`}>{project.year}</span>
              </div>
              <p className={`mb-4 ${isLight ? "text-gray-600" : "text-white/80"}`}>{project.description}</p>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isLight ? "text-gray-500" : "text-white/70"}`}>{project.category}</span>
                <button
                  className={`text-sm font-medium ${isLight ? "text-[#2563EB]" : "text-[#d4ff00]"} hover:underline`}
                >
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
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
    </main>
  )
}
