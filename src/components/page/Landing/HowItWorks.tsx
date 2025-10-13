'use client';
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import LandingPageHeader from '@/components/LandingPageHeader';

const HowItWorks = () => {
	const whatsappNumber = '1234567890'; // Replace with actual WhatsApp number
	const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi! I'm interested in your YouTube video editing services.`;

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

	const workProcess = [
		{
			step: '1',
			title: 'Share Your Raw Footage',
			description:
				'Upload your video files via Google Drive, Dropbox, or any preferred method.',
		},
		{
			step: '2',
			title: 'We Edit & Send Preview',
			description:
				'Our team crafts your video with professional edits within 48 hours.',
		},
		{
			step: '3',
			title: 'Review & Request Changes',
			description:
				'Watch the preview and share your feedback for any adjustments.',
		},
		{
			step: '4',
			title: 'Final Delivery',
			description: 'Receive your polished video in full HD, ready to upload!',
		},
	];
	return (
		<section className="px-6 py-20">
			<div className="mx-auto max-w-6xl">
				<LandingPageHeader title="How It Works" />
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
						How It Works
					</motion.h2>

					<div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{workProcess.map((process, index) => (
							<motion.div
								key={index}
								className="relative text-center"
								variants={fadeInUp}
							>
								<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-2xl font-bold text-white">
									{process.step}
								</div>
								<h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
									{process.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									{process.description}
								</p>

								{index < workProcess.length - 1 && (
									<div className="absolute top-8 left-[60%] hidden h-0.5 w-[80%] bg-gradient-to-r from-blue-600 to-purple-600 lg:block"></div>
								)}
							</motion.div>
						))}
					</div>

					<motion.div className="text-center" variants={fadeInUp}>
						<Link href={whatsappLink} target="_blank">
							<Button className="bg-green-600 text-white hover:bg-green-700">
								Upload Your First Video
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
