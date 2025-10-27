'use client';
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ServicePage } from '@/types/sanity.types';

// const faqs = [
// 	{
// 		question: 'How much does YouTube video editing cost in India?',
// 		answer:
// 			'Our packages start from ₹8,000/month for 2 videos. We offer flexible plans for beginners, growing creators, and professionals with pricing ranging from ₹8,000 to ₹56,000 per month.',
// 	},
// 	{
// 		question: 'How long does it take to edit a 10-minute YouTube video?',
// 		answer:
// 			'We deliver edited videos within 48-72 hours for most packages. Pro plan members get priority 24-48 hour delivery. The timeline includes professional editing, captions, graphics, and quality checks.',
// 	},
// 	{
// 		question: 'Do you also design YouTube thumbnails?',
// 		answer:
// 			'Yes! Our Growth and Pro packages include custom thumbnail design. We create eye-catching, click-worthy thumbnails optimized for higher CTR and more views.',
// 	},
// 	{
// 		question: 'Can you help with Shorts/Reels along with long-form videos?',
// 		answer:
// 			'Absolutely! We specialize in both long-form YouTube videos and short-form content (Shorts, Reels, TikToks). We stay updated with the latest trends and algorithm-friendly editing techniques.',
// 	},
// ];

interface FaqProps {
	faqSectionData: ServicePage['faqSection'];
}
const Faq = ({ faqSectionData }: FaqProps) => {
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
		<section className="bg-white px-6 py-20 dark:bg-gray-900">
			<div className="mx-auto max-w-4xl">
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
						Frequently Asked Questions
					</motion.h2>

					<div className="mb-12 space-y-6">
						{faqSectionData?.faqs?.map((faq) => (
							<motion.div
								key={faq.question}
								className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800"
								variants={fadeInUp}
							>
								<h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
									{faq.question}
								</h3>
								<p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
							</motion.div>
						))}
					</div>

					{faqSectionData?.ctaButton?.text && (
						<motion.div className="text-center" variants={fadeInUp}>
							<p className="mb-4 text-gray-600 dark:text-gray-400">
								Still have questions?
							</p>
							<Link
								href={faqSectionData?.ctaButton?.link || ''}
								target="_blank"
							>
								<Button
									size="lg"
									variant="outline"
									className="border-2 border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
								>
									{/* <MessageCircle className="mr-2" /> */}
									{faqSectionData?.ctaButton?.text}
								</Button>
							</Link>
						</motion.div>
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default Faq;
