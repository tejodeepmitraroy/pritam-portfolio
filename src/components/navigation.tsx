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
        className="flex justify-between items-center p-6 w-full max-w-4xl mx-auto text-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
        <Link href="/">
          <div className="text-xl font-light">PM</div>
        </Link>
        <div className="flex items-center space-x-4">
          <ModeToggle />
        </div>
      </motion.header>

      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
