'use client';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
	title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
	return (
		<div className="mb-12 flex items-center justify-between">
			<motion.h2
				className={`text-[#2563EB] dark:text-[#d4ff00]`}
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				{title}
			</motion.h2>
			<motion.div
				className={`ml-4 h-px flex-grow bg-[#2563EB] dark:bg-[#d4ff00]`}
				initial={{ scaleX: 0, originX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7, delay: 0.2 }}
			/>
		</div>
	);
}
