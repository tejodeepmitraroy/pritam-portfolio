'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
	name: string;

	content: string;

	index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
	name,

	content,

	index,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className={cn(
				'group relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-lg',
				'transition-all duration-300 hover:shadow-xl',
				'border border-gray-100'
			)}
		>
			<div className="mb-4 flex items-center">
				<div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
					{/* {image ? (
						<img
							src={image}
							alt={name}
							className="h-full w-full object-cover"
						/>
					) : (
					)} */}
					<div className="flex h-full items-center justify-center text-white">
						{name.charAt(0).toUpperCase()}
					</div>
				</div>
				<div className="ml-4">
					<h4 className="font-medium text-gray-900">{name}</h4>
					{/* <p className="text-sm text-gray-500">
						
					</p> */}
				</div>
			</div>
			<div className="relative">
				<div className="absolute -top-2 -left-4 text-5xl font-bold text-gray-100 opacity-70">
					"
				</div>
				<p className="relative z-10 text-gray-600">{content}</p>
			</div>
			{/* <div className="mt-4 flex items-center">
				{[...Array(5)].map((_, i) => (
					<svg
						key={i}
						className="h-5 w-5 text-yellow-400"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
				))}
			</div> */}
		</motion.div>
	);
};

export default TestimonialCard;
