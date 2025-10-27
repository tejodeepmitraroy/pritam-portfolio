'use client';
import React, { FC } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ServicePage } from '@/types/sanity.types';

interface HowItWorksProps {
	howItWorksData: ServicePage['howItWorks'];
}

const HowItWorks: FC<HowItWorksProps> = ({ howItWorksData }) => {
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

	// const workProcess = [
	// 	{
	// 		step: '1',
	// 		title: 'Share Your Raw Footage',
	// 		description:
	// 			'Upload your video files via Google Drive, Dropbox, or any preferred method.',
	// 	},
	// 	{
	// 		step: '2',
	// 		title: 'We Edit & Send Preview',
	// 		description:
	// 			'Our team crafts your video with professional edits within 48 hours.',
	// 	},
	// 	{
	// 		step: '3',
	// 		title: 'Review & Request Changes',
	// 		description:
	// 			'Watch the preview and share your feedback for any adjustments.',
	// 	},
	// 	{
	// 		step: '4',
	// 		title: 'Final Delivery',
	// 		description: 'Receive your polished video in full HD, ready to upload!',
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
						{howItWorksData?.sectionHeading}
					</motion.h2>

					<div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{howItWorksData?.steps?.map((process, index) => (
							<motion.div
								key={index}
								className="relative text-center"
								variants={fadeInUp}
							>
								<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-2xl font-bold text-white">
									{process.stepNumber}
								</div>
								<h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
									{process.stepTitle}
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									{process.stepDescription}
								</p>

								{howItWorksData?.steps &&
									index < howItWorksData?.steps?.length - 1 && (
										<div className="absolute top-8 left-[60%] hidden h-0.5 w-[80%] bg-gradient-to-r from-blue-600 to-purple-600 lg:block"></div>
									)}
							</motion.div>
						))}
					</div>

					<motion.div className="text-center" variants={fadeInUp}>
						<Link href={howItWorksData?.ctaButton?.link || '#'} target="_blank">
							<Button
								size="lg"
								className="bg-green-600 text-white hover:bg-green-700"
							>
								{howItWorksData?.ctaButton?.text}
								<ArrowRight className="ml-2" />
							</Button>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default HowItWorks;
