'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
	children: ReactNode;
	delay?: number;
	className?: string;
}

export default function AnimatedSection({
	children,
	delay = 0,
	className = '',
}: AnimatedSectionProps) {
	return (
		<motion.section
			className={`mx-auto max-w-3xl px-6 py-16 lg:max-w-5xl lg:px-0 ${className}`}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.7, delay }}
		>
			{children}
		</motion.section>
	);
}
