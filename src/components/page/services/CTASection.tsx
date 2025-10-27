'use client';
import React, { FC } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { ServicePage } from '@/types/sanity.types';

interface CTASectionProps {
	ctaSectionData: ServicePage['finalCta'];
}

const CTASection: FC<CTASectionProps> = ({ ctaSectionData }) => {
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
		<section className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 px-6 py-20 text-white">
			<div className="mx-auto max-w-4xl text-center">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={staggerContainer}
				>
					<motion.h2
						className="mb-6 text-3xl font-bold md:text-5xl"
						variants={fadeInUp}
					>
						{ctaSectionData?.headline}
					</motion.h2>

					<motion.p className="mb-8 text-xl text-white/90" variants={fadeInUp}>
						{ctaSectionData?.subHeadline}
					</motion.p>

					<motion.div
						className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row"
						variants={fadeInUp}
					>
						{ctaSectionData?.ctaButtons?.map((buttonData) => (
							<Link
								key={buttonData._key}
								href={buttonData.link || '#'}
								target="_blank"
							>
								<Button
									size="lg"
									className="rounded-full bg-white px-8 py-6 text-lg text-purple-600 shadow-2xl hover:bg-gray-100"
								>
									{<MessageCircle className="mr-2" />}
									{buttonData.text}
								</Button>
							</Link>
						))}

						{/* <Link href="#pricing">
							<Button
								size="lg"
								variant="outline"
								className="rounded-full border-white/30 bg-white/10 px-8 py-6 text-lg text-white backdrop-blur-sm hover:bg-white/20"
							>
								See Pricing Packages
							</Button>
						</Link> */}
					</motion.div>

					<motion.p className="text-sm text-white/80" variants={fadeInUp}>
						✓ No contracts. 100% satisfaction guaranteed.
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
};

export default CTASection;
