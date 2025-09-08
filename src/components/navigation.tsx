"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import NavigationMenu from "./navigation-menu";
import { ModeToggle } from "./ModeToggle";


export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className="flex fixed bg-background w-full z-50  justify-between items-center p-6  mx-auto text-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="flex items-center mx-auto justify-between w-full max-w-5xl space-x-4">
          <Menu
            size={38}
            onClick={() => setIsMenuOpen(true)}
            className="text-gray-700 dark:text-white"
          />
          <Link href="/">
            <div className="text-xl font-light">PM</div>
          </Link>
          <div className="flex items-center space-x-4">
            <ModeToggle />
          </div>
        </section>
      </motion.header>

      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
