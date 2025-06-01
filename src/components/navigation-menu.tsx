"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useTheme } from "@/context/theme-context"

interface NavigationMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const menuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: "-100%", transition: { duration: 0.3 } },
  }

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "EXPERIENCE", path: "/experience" },
    { name: "EDUCATION", path: "/education" },
    { name: "WRITING", path: "/writing" },
    { name: "CONTACT", path: "/contact" },
  ]

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-[#2563EB] dark:bg-black text-white z-50 overflow-hidden"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="container mx-auto p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <button onClick={onClose} className="text-white">
                <X size={24} />
              </button>
              <div className="flex items-center space-x-4">
                <motion.button
                  onClick={toggleTheme}
                  className="flex items-center space-x-2 bg-[#d4ff00] text-black px-4 py-2 rounded-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-medium">{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
                  <div className={`h-4 w-4 rounded-full ${theme === "dark" ? "bg-white" : "bg-black"}`}></div>
                </motion.button>
              </div>
            </div>

            <div className="flex flex-col space-y-4 text-4xl font-bold">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${
                    pathname === item.path ? "text-[#d4ff00]" : "text-white"
                  }  hover:text-[#d4ff00] transition-colors`}
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto">
              <div className="text-white/70 text-base">San Francisco, CA, USA</div>
              <div className="text-[#d4ff00] mb-1 mt-2">lucas@email.com</div>
              <div className="text-white/70 text-base">www.framer.website</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
