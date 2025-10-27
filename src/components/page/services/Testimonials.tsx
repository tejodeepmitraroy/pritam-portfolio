'use client';
import React, { FC } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { ServicePage } from '@/types/sanity.types';

interface TestimonialsProps {
	testimonialsData: ServicePage['testimonials'];
}
const Testimonials: FC<TestimonialsProps> = ({ testimonialsData }) => {
	// const whatsappNumber = '1234567890'; // Replace with actual WhatsApp number
	// const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi! I'm interested in your YouTube video editing services.`;
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	// const testimonials = [
	// 	{
	// 		id: '1',
	// 		name: 'Sarah Johnson',
	// 		role: 'Tech YouTuber',
	// 		content:
	// 			'I saved 10+ hours weekly and doubled my subscriber count thanks to their editing. The quality is consistently amazing!',
	// 		rating: 5,
	// 	},
	// 	{
	// 		id: '2',
	// 		name: 'Mike Chen',
	// 		role: 'Gaming Creator',
	// 		content:
	// 			'Professional, fast, and highly creative — my channel grew 3x faster! The retention rate improvements are incredible.',
	// 		rating: 5,
	// 	},
	// 	{
	// 		id: '3',
	// 		name: 'Priya Sharma',
	// 		role: 'Lifestyle Vlogger',
	// 		content:
	// 			'Best decision for my channel! The edits are engaging, trendy, and delivered on time. My views increased by 150%.',
	// 		rating: 5,
	// 	},
	// ];
	return (
		<section className="bg-white px-6 py-20 dark:bg-gray-900">
			<div className="mx-auto max-w-6xl">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={staggerContainer}
				>
					<motion.h2
						className="mb-16 text-center text-3xl font-bold text-gray-900 md:text-5xl dark:text-white"
						variants={fadeInUp}
					>
						{testimonialsData?.sectionHeading}
					</motion.h2>

					<div className="mb-12 grid gap-8 md:grid-cols-3">
						{testimonialsData?.testimonialsList?.map((testimonial) => (
							<motion.div
								key={testimonial.clientName}
								className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-purple-50 p-6 dark:border-blue-800 dark:from-blue-900/20 dark:to-purple-900/20"
								variants={fadeInUp}
							>
								<div className="mb-4 flex">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className="h-5 w-5 fill-yellow-400 text-yellow-400"
										/>
									))}
								</div>
								<p className="mb-4 text-gray-700 italic dark:text-gray-300">
									"{testimonial.quote}"
								</p>
								<div>
									<p className="font-bold text-gray-900 dark:text-white">
										{testimonial.clientName}
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">
										{testimonial.role}
									</p>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div className="text-center" variants={fadeInUp}>
						<Link
							href={testimonialsData?.ctaButton?.link || '#'}
							target="_blank"
						>
							<Button
								size="lg"
								className="bg-blue-600 text-white hover:bg-blue-700"
							>
								{testimonialsData?.ctaButton?.text}
							</Button>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Testimonials;
