"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "motion/react";
import AnimatedSection from "./animated-section";
import SectionHeader from "./section-header";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatedSection delay={0.2}>
      <SectionHeader title="Contact Form" />
      <div className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className={`text-gray-600 text-left text-lg font-medium dark:text-white/80 mb-4`}>
              Looking to start a project or you need consultation? Feel free to
              contact me.
            </p>
            <div className={`text-[#2563EB] dark:text-[#d4ff00] mb-1`}>
              pritammajumder@email.com
            </div>
            
            <div className={`text-gray-500 dark:text-white/70 text-sm`}>
             India, West Bengal, Kolkata
            </div>
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
                className={`w-full p-2 rounded-md bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-[#2563EB]`}
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
                className={`w-full p-2 rounded-md bg-white border border-gray-300 text-gray-900 dark:bg-white/10 dark:border dark:border-white/20 dark:text-white focus:outline-none focus:border-[#2563EB] dark:focus:border-[#d4ff00]`}
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
                className={`w-full p-2 rounded-md 
                bg-white  border-gray-300 text-gray-900 dark:bg-white/10 dark:border dark:border-white/20 dark:text-white focus:outline-none focus:border-[#2563EB] dark:focus:border-[#d4ff00]`}
                required
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
              ></motion.textarea>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full p-2 rounded-md font-medium bg-[#2563EB] text-white dark:bg-[#d4ff00] dark:text-black disabled:opacity-70`}
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
                  className={`mt-4 p-3 rounded-md bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Your message has been sent successfully! I'll get back to you
                  soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
