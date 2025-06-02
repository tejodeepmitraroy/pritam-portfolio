"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { useTheme } from "@/context/theme-context"
import CustomCursor from "@/components/custom-cursor"
import ContactForm from "@/components/contact-form"

export default function Writing() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const isLight = theme === "light"

  useEffect(() => {
    setMounted(true)
  }, [])

  const articles = [
    {
      title: "Our illustration process",
      excerpt:
        "A deep dive into our illustration process, from concept to final delivery. Learn about our approach to creating engaging visuals that enhance user experience.",
      date: "May 10, 2023",
      readTime: "5 min read",
      category: "Design Process",
    },
    {
      title: "Animation in web design",
      excerpt:
        "Exploring the role of animation in modern web design and how it can improve user engagement and guide users through complex interfaces.",
      date: "April 15, 2023",
      readTime: "8 min read",
      category: "Web Design",
    },
    {
      title: "Color theory in design",
      excerpt:
        "Understanding color theory and its application in design. Learn how to create effective color palettes that communicate the right message.",
      date: "March 5, 2023",
      readTime: "6 min read",
      category: "Design Fundamentals",
    },
    {
      title: "Typography and human psychology",
      excerpt:
        "Exploring the psychological impact of typography choices and how they influence user perception and behavior in digital products.",
      date: "Feb 20, 2023",
      readTime: "7 min read",
      category: "Typography",
    },
    {
      title: "The future of UX design",
      excerpt:
        "Predicting trends and innovations that will shape the future of UX design, from voice interfaces to augmented reality experiences.",
      date: "Jan 15, 2023",
      readTime: "10 min read",
      category: "UX Trends",
    },
    {
      title: "Designing for accessibility",
      excerpt:
        "Best practices for creating inclusive designs that work for everyone, including people with disabilities and diverse needs.",
      date: "Dec 10, 2022",
      readTime: "9 min read",
      category: "Accessibility",
    },
  ]

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
          WRITING
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg ${isLight ? "bg-white shadow-md" : "bg-[#d4ff00]/10"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    isLight ? "bg-[#2563EB]/10 text-[#2563EB]" : "bg-[#d4ff00]/20 text-[#d4ff00]"
                  }`}
                >
                  {article.category}
                </span>
                <span className={`text-xs ${isLight ? "text-gray-500" : "text-white/70"}`}>{article.date}</span>
              </div>
              <h3 className={`text-xl font-bold mb-2 ${!isLight && "text-[#d4ff00]"}`}>{article.title}</h3>
              <p className={`mb-4 ${isLight ? "text-gray-600" : "text-white/80"}`}>{article.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className={`text-xs ${isLight ? "text-gray-500" : "text-white/70"}`}>{article.readTime}</span>
                <Link
                  href="#"
                  className={`text-sm font-medium ${isLight ? "text-[#2563EB]" : "text-[#d4ff00]"} hover:underline`}
                >
                  Read Article
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-8 max-w-6xl mx-auto">
        <div className="flex justify-center">
          <motion.button
            className={`px-6 py-3 rounded-md font-medium ${
              isLight ? "bg-[#2563EB] text-white" : "bg-[#d4ff00] text-black"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Articles
          </motion.button>
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
    </div>
  )
}
