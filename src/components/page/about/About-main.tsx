'use client';
import React, { FC } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Dribbble, Facebook, Linkedin } from 'lucide-react';
import { About } from '@/types/sanity.types';

interface AboutSectionProps {
	aboutData: About;
}
const AboutMain: FC<AboutSectionProps> = ({ aboutData }) => {
	return (
		<section className="mx-auto grid max-w-5xl gap-12 px-6 py-8 md:grid-cols-2 md:px-0">
			{/* Profile Image */}
			<motion.section
				className="w-fit"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 0.3 }}
			>
				<div className="relative w-fit items-center justify-center overflow-hidden rounded-md bg-gray-800">
					<Image
						src="/profile.png"
						alt="Profile"
						width={500}
						height={0}
						className="w-[400px]"
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
				<div className="mt-6 flex justify-center space-x-4 rounded-md bg-[#d4ff00] p-3">
					<Link
						href="https://www.instagram.com/vfx_pritam/"
						className="cursor-pointer text-black transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:scale-120"
					>
						<Instagram className="h-6 w-6" />
					</Link>
					<Link
						href="#"
						className="cursor-pointer text-black transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:scale-120"
					>
						<Dribbble className="h-6 w-6" />
					</Link>
					<Link
						href="#"
						className="cursor-pointer text-black transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:scale-120"
					>
						<Facebook className="h-6 w-6" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/pritammajumderedits/"
						className="cursor-pointer text-black transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:scale-120"
					>
						<Linkedin className="h-6 w-6" />
					</Link>
				</div>
			</motion.section>

			{/* Bio Text */}
			<section className="flex flex-col items-start justify-start">
				<motion.p
					className="mb-6 text-left text-2xl leading-relaxed text-stone-600"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7, duration: 0.5 }}
				>
					{aboutData.paragraph}
				</motion.p>

				<motion.p
					className="mb-6 text-left text-xl leading-relaxed text-stone-600"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.9, duration: 0.5 }}
				>
					{aboutData.paragraph2}
				</motion.p>
			</section>
		</section>
	);
};

export default AboutMain;
