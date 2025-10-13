'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, MessageCircle, Star } from 'lucide-react';
import Link from 'next/link';
import Hero from '@/components/page/Landing/Hero';
import Problems from '@/components/page/Landing/Problems';
import About from '@/components/page/Landing/About';
import Features from '@/components/page/Landing/Features';
import Pricing from '@/components/page/Landing/Pricing';
import HowItWorks from '@/components/page/Landing/HowItWorks';
import Faq from '@/components/page/Landing/Faq';

import Footer from '@/components/page/Landing/Footer';

const LandingPage = () => {
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

	const testimonials = [
		{
			id: '1',
			name: 'Sarah Johnson',
			role: 'Tech YouTuber',
			content:
				'I saved 10+ hours weekly and doubled my subscriber count thanks to their editing. The quality is consistently amazing!',
			rating: 5,
		},
		{
			id: '2',
			name: 'Mike Chen',
			role: 'Gaming Creator',
			content:
				'Professional, fast, and highly creative — my channel grew 3x faster! The retention rate improvements are incredible.',
			rating: 5,
		},
		{
			id: '3',
			name: 'Priya Sharma',
			role: 'Lifestyle Vlogger',
			content:
				'Best decision for my channel! The edits are engaging, trendy, and delivered on time. My views increased by 150%.',
			rating: 5,
		},
	];

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

	return (
		// <div className="min-h-screen overflow-hidden bg-white dark:bg-gray-900">
		<div className="dark min-h-screen overflow-hidden bg-[#0c0c0c]">
			<Hero />
			<Problems />
			<About />
			<Features />
			<Pricing />
			<HowItWorks />
			{/* <Portfolio/> */}
			<Faq />

			{/* How It Works Section */}

			{/* Portfolio Section */}

			{/* Testimonials Section */}
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
							What Creators Say About Us
						</motion.h2>

						<div className="mb-12 grid gap-8 md:grid-cols-3">
							{testimonials.map((testimonial) => (
								<motion.div
									key={testimonial.id}
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
										"{testimonial.content}"
									</p>
									<div>
										<p className="font-bold text-gray-900 dark:text-white">
											{testimonial.name}
										</p>
										<p className="text-sm text-gray-600 dark:text-gray-400">
											{testimonial.role}
										</p>
									</div>
								</motion.div>
							))}
						</div>

						<motion.div className="text-center" variants={fadeInUp}>
							<Link href={whatsappLink} target="_blank">
								<Button
									size="lg"
									className="bg-blue-600 text-white hover:bg-blue-700"
								>
									Join 100+ Successful Creators → Get Started
								</Button>
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Why Choose Us Section */}
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
							Why Creators Trust Our YouTube Editing Team
						</motion.h2>

						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{[
								'Professional edits tailored for YouTube algorithms',
								'Fast delivery (24–48 hrs)',
								'Packages starting from $99 / ₹8,000',
								'Captioning, transitions, and effects included',
								'Unlimited revisions (premium package)',
								'Dedicated support team',
							].map((item, index) => (
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

			{/* Final CTA Section */}
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
							Ready to Grow Your YouTube Channel?
						</motion.h2>

						<motion.p
							className="mb-8 text-xl text-white/90"
							variants={fadeInUp}
						>
							Join hundreds of successful creators who trust us with their video
							editing
						</motion.p>

						<motion.div
							className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row"
							variants={fadeInUp}
						>
							<Link href={whatsappLink} target="_blank">
								<Button
									size="lg"
									className="rounded-full bg-white px-8 py-6 text-lg text-purple-600 shadow-2xl hover:bg-gray-100"
								>
									<MessageCircle className="mr-2" />
									Get a Free Consultation
								</Button>
							</Link>
							<Link href="#pricing">
								<Button
									size="lg"
									variant="outline"
									className="rounded-full border-white/30 bg-white/10 px-8 py-6 text-lg text-white backdrop-blur-sm hover:bg-white/20"
								>
									See Pricing Packages
								</Button>
							</Link>
						</motion.div>

						<motion.p className="text-sm text-white/80" variants={fadeInUp}>
							✓ No contracts. 100% satisfaction guaranteed.
						</motion.p>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default LandingPage;
