"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import NavigationMenu from "./navigation-menu"
import { useTheme } from "@/context/theme-context"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === "light"

  return (
    <>
      <motion.header
        className="flex justify-between items-center p-6 w-full max-w-4xl mx-auto text-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
        <Link href="/">
          <div className="text-xl font-light">PM</div>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-300 rounded-full p-1">
            <motion.div
              className={`h-4 w-4 rounded-full cursor-pointer ${isLight ? "bg-white" : "bg-transparent"}`}
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            ></motion.div>
            <motion.div
              className={`h-4 w-4 rounded-full cursor-pointer ${!isLight ? "bg-gray-700" : "bg-transparent"}`}
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            ></motion.div>
          </div>
          
        </div>
      </motion.header>

      <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
