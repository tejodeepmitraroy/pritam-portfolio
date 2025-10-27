'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { ServicePage } from '@/types/sanity.types';

interface HeroProps {
	heroSectionData: ServicePage['heroSection'];
}

const Hero: FC<HeroProps> = ({ heroSectionData }) => {
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

	return (
		<section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gray-900 dark:bg-black">
			<div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black"></div>
			<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

			<motion.div
				className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center text-white"
				initial="hidden"
				animate="visible"
				variants={staggerContainer}
			>
				{/* <video src="/video.mp4" autoPlay loop muted /> */}
				<motion.h1
					className="mb-6 text-4xl leading-tight font-bold md:text-6xl lg:text-7xl"
					variants={fadeInUp}
				>
					{heroSectionData?.h1Headline}
				</motion.h1>

				<motion.p
					className="mx-auto mb-8 max-w-3xl text-xl text-gray-300 md:text-2xl"
					variants={fadeInUp}
				>
					{heroSectionData?.subHeadline}
				</motion.p>

				<motion.div
					className="flex flex-col items-center justify-center gap-4 sm:flex-row"
					variants={fadeInUp}
				>
					<Link href={heroSectionData?.ctaPrimary?.link || '#'} target="_blank">
						<Button
							size="lg"
							className="rounded-lg bg-white px-8 py-6 text-lg text-gray-900 shadow-xl hover:bg-gray-100"
						>
							<MessageCircle className="mr-2" />
							{heroSectionData?.ctaPrimary?.text || ''}
						</Button>
					</Link>
					<Link
						href={heroSectionData?.ctaSecondary?.link || '#'}
						target="_blank"
					>
						<Button
							size="lg"
							variant="outline"
							className="rounded-lg border-2 border-white bg-transparent px-8 py-6 text-lg text-white hover:bg-white hover:text-gray-900"
						>
							{heroSectionData?.ctaSecondary?.text || ''}
						</Button>
					</Link>
				</motion.div>

				<motion.div className="mt-12" variants={fadeInUp}>
					<ChevronDown className="mx-auto h-8 w-8 animate-bounce text-gray-400" />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
