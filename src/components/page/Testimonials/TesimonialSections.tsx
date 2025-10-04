'use client';

import React, { useEffect, useState } from 'react';
import SectionHeader from '@/components/section-header';
import TestimonialCard from './TestimonialCard';
import { motion, useAnimation } from 'motion/react';
import AnimatedSection from '@/components/animated-section';

interface Testimonial {
	id: string;
	name: string;
	content: string;
}

interface TestimonialSectionsProps {
	testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
	{
		id: '1',
		name: 'Tejodeep Mitra Roy',
		content:
			'Outstanding service! The team went above and beyond to deliver exceptional results for our project.',
	},
	{
		id: '2',
		name: 'Sourav Mitra',

		content:
			'Professional, creative, and delivered on time. Highly recommended for any web development needs.',
	},
	{
		id: '3',
		name: 'Mritanko Roy',
		content:
			'Transformed our online presence completely. The attention to detail and user experience is remarkable.',
	},
	// Duplicate items for seamless looping
	{
		id: '4',
		name: 'Sayanananda',

		content:
			'Exceptional work! The team delivered beyond our expectations with creativity and precision.',
	},
	{
		id: '5',
		name: 'David Kim',
		content:
			'Reliable and professional. The development process was smooth and transparent.',
	},
];

const TestimonialSections: React.FC<TestimonialSectionsProps> = ({
	testimonials = defaultTestimonials,
}) => {
	// Duplicate the testimonials for seamless looping
	const duplicatedTestimonials = [...testimonials, ...testimonials];
	const [isPaused, setIsPaused] = useState(false);
	const controls = useAnimation();

	useEffect(() => {
		if (!isPaused) {
			controls.start({
				x: ['0%', '-50%'],
				transition: {
					x: {
						repeat: Infinity,
						repeatType: 'loop',
						duration: 40,
						ease: 'linear',
					},
				},
			});
		}
	}, [isPaused, controls]);

	return (
		<AnimatedSection
			delay={0.2}
			className="overflow-hidden bg-gray-50 py-16 md:py-24"
		>
			<SectionHeader title="CLIENT TESTIMONIALS" />

			{/* <div className="mx-auto max-w-2xl text-center">
					<SectionHeader title="CLIENT TESTIMONIALS" />
					<h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						What our clients say
					</h2>
					<p className="mt-4 text-lg leading-8 text-gray-600">
						Don't just take our word for it. Here's what our clients have to say
						about working with us.
					</p>
				</div> */}

			<div
				className="relative mt-16 overflow-hidden"
				onMouseEnter={() => setIsPaused(true)}
				onMouseLeave={() => setIsPaused(false)}
			>
				<motion.div className="flex w-max gap-8" animate={controls}>
					{duplicatedTestimonials.map((testimonial, index) => (
						<div
							key={`${testimonial.id}-${index}`}
							className="w-[350px] flex-shrink-0"
						>
							<TestimonialCard
								index={index % testimonials.length}
								name={testimonial.name}
								content={testimonial.content}
							/>
						</div>
					))}
				</motion.div>

				{/* Gradient fades */}
				<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-gray-50 to-transparent" />
				<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-gray-50 to-transparent" />
			</div>

			<div className="mt-20 text-center">
				<motion.a
					href="/contact"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:from-blue-700 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
				>
					Share your experience
					<svg
						className="-mr-1 ml-2 h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</motion.a>
			</div>
		</AnimatedSection>
	);
};

export default TestimonialSections;
