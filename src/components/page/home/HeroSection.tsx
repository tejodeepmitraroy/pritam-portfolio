'use client';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
	return (
		<section className="relative mx-auto flex min-h-dvh max-w-5xl flex-col items-center justify-center px-6">
			{/* Hero Section */}
			<section className="flex w-full flex-col items-center gap-20">
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-2 text-sm tracking-widest uppercase"
				>
					CRAFTING DIGITAL GOODS SINCE — 2020
				</motion.p>
				<h1 className={`w-full text-[#2563EB] dark:text-[#3b82f6]`}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8 }}
						className="relative w-full"
					>
						PRITAM
					</motion.div>
					<div className="relative flex items-center justify-center">
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							MA
						</motion.span>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="relative mx-1 h-40 w-32 overflow-hidden rounded-full"
						>
							<Image
								src="/profile.png"
								alt="Profile"
								fill
								className="object-cover"
							/>
						</motion.div>
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							JUMDER
						</motion.span>
					</div>
				</h1>
			</section>
			<div className="text-center">
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="mt-6 w-full max-w-xl font-sans text-2xl"
				>
					I'm Pritam Majumder — a Experienced Video Editor and VFX Artist
					passionate about creating digital experiences and visuals that people
					love .
				</motion.p>
			</div>

			<motion.div
				className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1, duration: 0.5 }}
			>
				<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">
					<ArrowDown size={20} />
				</div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
