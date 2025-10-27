'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { ServicePage } from '@/types/sanity.types';

interface WhyChooseUsProps {
	whyChooseUsData: ServicePage['whyChooseUs'];
}
const WhyChooseUs = ({ whyChooseUsData }: WhyChooseUsProps) => {
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

	return (
		<section className="bg-gradient-to-br from-blue-600 to-purple-600 px-6 py-20 text-white">
			<div className="mx-auto max-w-6xl">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={staggerContainer}
				>
					<motion.h2
						className="mb-16 text-center text-3xl font-bold md:text-5xl"
						variants={fadeInUp}
					>
						{whyChooseUsData?.sectionHeadingH2 || ''}
					</motion.h2>

					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{whyChooseUsData?.uspBullets?.map((item, index) => (
							<motion.div
								key={index}
								className="flex items-start rounded-lg bg-white/10 p-4 backdrop-blur-sm"
								variants={fadeInUp}
							>
								<Check className="mt-1 mr-3 h-6 w-6 flex-shrink-0" />
								<span className="text-lg">{item}</span>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
