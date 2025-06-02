"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import NavigationMenu from "./navigation-menu";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className="flex fixed w-full z-50  justify-between items-center p-6 bg-background mx-auto text-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="flex items-center mx-auto justify-between w-full max-w-4xl space-x-4">
          <Button
            variant="ghost"
         
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            
          >
            <Menu size={24} className="w-32 h-32 text-gray-700 dark:text-white"/>
          </Button>
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
