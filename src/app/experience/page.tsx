"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import { useTheme } from "@/context/theme-context"
import CustomCursor from "@/components/custom-cursor"


export default function Experience() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const isLight = theme === "light"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    }, 1500)
  }

  const experiences = [
    {
      title: "Senior UX/UI Designer",
      company: "SuperCo",
      period: "2019 — Present",
      description:
        "Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs.",
    },
    {
      title: "UI/UX Designer",
      company: "BlendXYZ",
      period: "2016 — 2017",
      description:
        "Collaborated with the development team to implement a responsive design approach, improving the mobile user experience and increasing mobile app engagement.",
    },
    {
      title: "Lead Product Designer",
      company: "CocoBasic",
      period: "2017 — 2019",
      description:
        "Designed and implemented creative solutions such as wellness app and high-traffic e-commerce websites for various clients and increase overall client business to his satisfaction.",
    },
    {
      title: "Junior Designer",
      company: "Internisium",
      period: "2015 — 2016",
      description:
        "Internship and starting position in creative team as Junior Designer. Focused on creating wireframes, styleguides, presentations and prototypes for web and mobile applications.",
    },
  ]

  if (!mounted) {
    return <div className="min-h-screen bg-gray-100"></div>
  }

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
    <CustomCursor /> 

      <Navigation />

      <section className="flex flex-col items-center text-center px-6 pt-16 pb-12 max-w-4xl mx-auto">
        <motion.div
          className="font-bold text-8xl tracking-tight leading-none mb-6 text-[#1a66ff]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          EXPERIENCE
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L23.5 16.5H40L26.5 26.5L30 40L20 30L10 40L13.5 26.5L0 16.5H16.5L20 0Z" fill="#1a66ff" />
          </svg>
        </motion.div>
      </section>

      <section className="px-6 py-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
              <p className="text-gray-600 mb-1">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex justify-center gap-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <motion.div
              className="text-4xl font-bold text-[#1a66ff]"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            >
              380+
            </motion.div>
            <div className="text-sm text-[#1a66ff]">
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
            className="flex flex-col items-center"
          >
            <motion.div
              className="text-4xl font-bold text-[#1a66ff]"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
            >
              420+
            </motion.div>
            <div className="text-sm text-[#1a66ff]">
              Satisfied
              <br />
              Clients
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <motion.div
              className="text-4xl font-bold text-[#1a66ff]"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
            >
              2K+
            </motion.div>
            <div className="text-sm text-[#1a66ff]">
              Positive
              <br />
              Reviews
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-700 mb-4">
              Looking to start a project or you need consultation? Feel free to contact me.
            </p>
            <div className="text-[#1a66ff] mb-1">lucas@email.com</div>
            <div className="text-gray-500 text-sm mb-4">www.framer.website</div>
            <div className="text-gray-500 text-sm">San Francisco, CA, USA</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-[#1a66ff]"
                required
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              />
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@framer.com"
                className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-[#1a66ff]"
                required
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              />
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message..."
                rows={4}
                className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-[#1a66ff]"
                required
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
              ></motion.textarea>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full p-2 rounded-md font-medium bg-[#1a66ff] text-white disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </motion.button>

              {submitSuccess && (
                <motion.div
                  className="mt-4 p-3 rounded-md bg-green-100 text-green-800"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Your message has been sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#1a66ff]/10 py-8 overflow-hidden mt-12">
        <motion.div
          className="flex space-x-8 text-[#1a66ff] font-bold text-4xl whitespace-nowrap opacity-30"
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
