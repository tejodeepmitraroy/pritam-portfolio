"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import { useTheme } from "@/context/theme-context";
import ContactForm from "@/components/contact-form";
import { Dribbble, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function About() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Skill bar animation variants
  const skillVariants = {
    hidden: { width: 0 },
    visible: (percent: number) => ({
      width: `${percent}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    }),
  };

  // Tools marquee animation
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };


  const toolsSkill =[{
    toolName:"Framer",
    description:"No code website builder tool",
    percentage:92

  },
  {
    toolName:"Figma",
    description:"User interface design tool",
    percentage:83
  },
  {
    toolName:"Illustrator",
    description:"Professional graphic software",
    percentage:74
  },
  {
    toolName:"Photoshop",
    description:"Professional graphic software",
    percentage:62
  },
  {
    toolName:"Slack",
    description:"User interface design tool",
    percentage:80
  },
  {
    toolName:"Notion",
    description:"Note taking and reminder tool",
    percentage:54
  }



]

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-white overflow-hidden">
      {/* Header */}
      <Navigation />

      {/* About Title */}
      <section className="flex mt-22  flex-col items-center text-center px-6 pt-16 pb-12 max-w-5xl mx-auto">
        <motion.h1
          className=" text-primary dark:text-[#d4ff00] mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ABOUT
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0L23.5 16.5H40L26.5 26.5L30 40L20 30L10 40L13.5 26.5L0 16.5H16.5L20 0Z"
              fill="#d4ff00"
            />
          </svg>
        </motion.div>
      </section>

      {/* Profile Section */}
      <section className="px-6 py-8 max-w-5xl grid md:grid-cols-2 gap-12 mx-auto">
        {/* Profile Image */}
        <motion.section
          className="w-fit"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-fit items-center justify-center  bg-gray-800 rounded-md overflow-hidden">
            <Image
              src="/profile.png"
              alt="Profile"
              width={500}
              height={0}
              className=" w-[400px] "
            />
            {/* <div className="absolute top-0 right-0 h-full w-2 bg-[#d4ff00]"></div>
              <div className="absolute bottom-0 left-0 h-2 w-full bg-[#d4ff00]"></div>
              <div className="absolute top-1/4 right-4">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 40C20 30 30 20 40 20C50 20 60 30 60 40C60 50 50 60 40 60C30 60 20 50 20 40Z"
                    stroke="#d4ff00"
                    strokeWidth="2"
                  />
                </svg>
              </div> */}
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-6 bg-[#d4ff00] p-3 rounded-md">
            <Link
              href="https://www.instagram.com/vfx_pritam/"
              className="text-black cursor-pointer transition-all duration-300 ease-in-out hover:scale-120 hover:translate-y-[-5px]"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-black cursor-pointer transition-all duration-300 ease-in-out hover:scale-120 hover:translate-y-[-5px]"
            >
              <Dribbble className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-black cursor-pointer transition-all duration-300 ease-in-out hover:scale-120 hover:translate-y-[-5px]"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/pritammajumderedits/"
              className="text-black cursor-pointer transition-all duration-300 ease-in-out hover:scale-120 hover:translate-y-[-5px]"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </motion.section>

        {/* Bio Text */}
        <section className="flex  flex-col justify-start items-start">
          <motion.p
            className=" text-2xl mb-6 text-left text-stone-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            My passion lies in the intersection of art and technology, creating
            visually captivating interfaces and elevating overall user digital
            experiences.
          </motion.p>

          <motion.p
            className=" text-xl mb-6 text-left text-stone-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            I hold a Bachelor of Technology in Computer Science from the
            esteemed Art University and a Master of Fine Arts in Interactive
            Design. This academic foundation has equipped me with a solid
            understanding of the principles that underpin effective interaction
            design, providing me with the knowledge to create designs that
            seamlessly blend aesthetics and functionality.
          </motion.p>
        </section>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Framer */}
        {toolsSkill.map((skill, index) => (
          <SkillsCard
            key={index}
            toolName={skill.toolName}
            description={skill.description}
            percentage={skill.percentage}
          />
        ))}
        
      </section>

      {/* Contact Form */}
      <ContactForm />

     <Footer />
    </div>
  );
}

const SkillsCard = ({
  toolName,
  description,
  percentage,
}: {
  toolName: string;
  description: string;
  percentage: number;
}) => {
  return (
    <motion.div
      className="bg-[#d4ff00] p-4 rounded-md relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-black text-4xl font-medium">{toolName}</h2>
          <p className="text-black/70 text-sm">{description}</p>
        </div>
        <div className="text-black text-6xl font-bold">{percentage}%</div>
      </div>
    </motion.div>
  );
};
