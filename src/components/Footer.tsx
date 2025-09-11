'use client';
import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const Footer = () => {
	const marqueeVariants: Variants = {
		animate: {
			x: [0, -1000],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: 'loop' as const,
					duration: 20,
					ease: 'linear' as const,
				},
			},
		},
	};

	return (
		<footer className={`mt-12 overflow-hidden bg-[#2563EB]/10 py-8`}>
			<motion.div
				className={`flex space-x-8 text-4xl font-bold whitespace-nowrap text-[#2563EB] opacity-30`}
				variants={marqueeVariants}
				animate="animate"
				custom={-1}
			>
				<div>PORTFOLIO</div>
				<div>TWITTER</div>
				<div>LINKEDIN</div>
				<div>BEHANCE</div>
				<div>PORTFOLIO</div>
				<div>TWITTER</div>
				<div>LINKEDIN</div>
				<div>BEHANCE</div>
			</motion.div>
		</footer>
	);
};

export default Footer;
