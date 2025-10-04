'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { motion, Variants } from 'motion/react';
import Link from 'next/link';

// Animation variants
const cardVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
	hover: {
		y: -5,
		transition: {
			type: 'spring' as const, // Add 'as const' to make it a literal type
			stiffness: 400,
			damping: 10,
		},
	},
};

const circleVariants: Variants = {
	hidden: { scale: 0 },
	visible: {
		scale: 1,
		transition: {
			type: 'spring' as const, // Add 'as const' here too
			stiffness: 100,
			damping: 15,
		},
	},
	hover: {
		scale: 1.5,
		opacity: 0.5,
	},
};
const listItemVariants = {
	hidden: { x: -20, opacity: 0 },
	visible: (i: number) => ({
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.1 * i,
			duration: 0.3,
		},
	}),
};

interface ServiceCardProps {
	title?: string;
	description?: string;
	services?: string[];
	gradientFrom?: string;
	gradientTo?: string;
	icon?: React.ReactNode;
	index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	title,
	description,
	services = [],
	gradientFrom = 'from-blue-500',
	gradientTo = 'to-indigo-600',
	icon,
	index = 0,
}) => {
	return (
		<motion.div
			className={cn(
				'group relative h-full overflow-hidden rounded-2xl p-8 text-white',
				`bg-gradient-to-br ${gradientFrom} ${gradientTo}`,
				'transition-all duration-300 hover:shadow-xl hover:shadow-black/10'
			)}
			variants={cardVariants}
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			whileHover="hover"
			viewport={{ once: true, margin: '-50px' }}
			custom={index}
		>
			{/* Animated decorative elements */}
			<motion.div
				className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10"
				variants={circleVariants}
			/>
			<motion.div
				className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10"
				variants={circleVariants}
				transition={{ delay: 0.1 }}
			/>

			<div className="relative z-10 flex h-full flex-col items-start">
				{/* Icon with animation */}
				{icon && (
					<motion.div
						className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 200,
							damping: 15,
							delay: 0.2,
						}}
					>
						{icon}
					</motion.div>
				)}

				{/* Title with animation */}
				<motion.h3
					className="mb-4 text-2xl font-bold"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
				>
					{title}
				</motion.h3>

				{/* Description with animation */}
				{description && (
					<motion.p
						className="mb-6 text-sm leading-relaxed text-white/90"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
					>
						{description}
					</motion.p>
				)}

				{/* Services List with staggered animations */}
				{services && services.length > 0 && (
					<div className="space-y-3">
						<motion.div
							className="h-px w-full bg-white/20"
							initial={{ width: 0 }}
							animate={{ width: '100%' }}
							transition={{ delay: 0.5, duration: 0.5 }}
						/>
						<motion.ul className="space-y-2">
							{services.map((service, i) => (
								<motion.li
									key={i}
									className="flex items-start"
									variants={listItemVariants}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									custom={i}
								>
									<Check className="mt-1 mr-2 h-4 w-4 flex-shrink-0 text-white/80" />
									<span className="text-sm leading-relaxed text-white/90">
										{service}
									</span>
								</motion.li>
							))}
						</motion.ul>
					</div>
				)}
			</div>

			{/* Contact Button */}
			<motion.div
				className="mt-auto w-full pt-6"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6 }}
			>
				<Link
					href="/contact"
					className={cn(
						'inline-flex w-full items-center justify-center rounded-lg bg-white/20 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm',
						'transition-all duration-300 hover:bg-white/30 hover:shadow-lg hover:shadow-black/10',
						'focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none'
					)}
				>
					Contact Us
					<svg
						className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default ServiceCard;
