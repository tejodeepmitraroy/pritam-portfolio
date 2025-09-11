import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTheme } from '@/context/theme-context';
const ToolsSection = () => {
	const { theme } = useTheme();
	const isLight = theme === 'light';
	// Tools marquee animation
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
		<section
			className={`${
				isLight ? 'bg-[#2563EB]/10' : 'bg-[#d4ff00]/10'
			} overflow-hidden py-8`}
		>
			<motion.div
				className={`flex space-x-8 ${
					isLight ? 'text-[#2563EB]' : 'text-[#d4ff00]'
				} text-4xl font-bold whitespace-nowrap`}
				variants={marqueeVariants}
				animate="animate"
			>
				<div>FRAMER</div>
				<div>PHOTOSHOP</div>
				<div>FIGMA</div>
				<div>ILLUSTRATOR</div>
				<div>FRAMER</div>
				<div>PHOTOSHOP</div>
				<div>FIGMA</div>
				<div>ILLUSTRATOR</div>
			</motion.div>
		</section>
	);
};

export default ToolsSection;
