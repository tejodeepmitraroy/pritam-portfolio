"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/context/theme-context"

export default function ContactForm() {
  const { theme } = useTheme()
  const isLight = theme === "light"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

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

  return (
    <div className="py-12 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className={`${isLight ? "text-gray-600" : "text-white/80"} mb-4`}>
            Looking to start a project or you need consultation? Feel free to contact me.
          </p>
          <div className={`${isLight ? "text-[#2563EB]" : "text-[#d4ff00]"} mb-1`}>lucas@email.com</div>
          <div className={`${isLight ? "text-gray-500" : "text-white/70"} text-sm mb-4`}>www.framer.website</div>
          <div className={`${isLight ? "text-gray-500" : "text-white/70"} text-sm`}>San Francisco, CA, USA</div>
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
              className={`w-full p-2 rounded-md ${
                isLight
                  ? "bg-white border border-gray-300 text-gray-900"
                  : "bg-white/10 border border-white/20 text-white"
              } focus:outline-none ${isLight ? "focus:border-[#2563EB]" : "focus:border-[#d4ff00]"}`}
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
              className={`w-full p-2 rounded-md ${
                isLight
                  ? "bg-white border border-gray-300 text-gray-900"
                  : "bg-white/10 border border-white/20 text-white"
              } focus:outline-none ${isLight ? "focus:border-[#2563EB]" : "focus:border-[#d4ff00]"}`}
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
              className={`w-full p-2 rounded-md ${
                isLight
                  ? "bg-white border border-gray-300 text-gray-900"
                  : "bg-white/10 border border-white/20 text-white"
              } focus:outline-none ${isLight ? "focus:border-[#2563EB]" : "focus:border-[#d4ff00]"}`}
              required
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full p-2 rounded-md font-medium ${
                isLight ? "bg-[#2563EB] text-white" : "bg-[#d4ff00] text-black"
              } disabled:opacity-70`}
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
                className={`mt-4 p-3 rounded-md ${
                  isLight ? "bg-green-100 text-green-800" : "bg-green-900/30 text-green-400"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Your message has been sent successfully! I'll get back to you soon.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  )
}
