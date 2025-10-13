'use client';
import Footer from '@/components/navigation/Footer';
import Navigation from '@/components/navigation/navigation';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
	Check,
	Clock,
	TrendingUp,
	Sparkles,
	DollarSign,
	Zap,
	Star,
	ArrowRight,
	MessageCircle,
	ChevronDown,
} from 'lucide-react';
import Link from 'next/link';

const ServicesPage = () => {
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

	const pricingPlans = [
		{
			name: 'Starter',
			price: '$99',
			priceINR: '₹8,000',
			description: 'Perfect for beginners',
			features: [
				'2 videos per month',
				'Basic edits & transitions',
				'Captions & subtitles',
				'48-72 hr delivery',
				'1 revision round',
			],
			cta: 'Get Starter Plan',
			popular: false,
		},
		{
			name: 'Growth',
			price: '$349',
			priceINR: '₹28,000',
			description: 'Most popular for growing creators',
			features: [
				'8 videos per month',
				'Advanced edits & effects',
				'Captions & graphics',
				'Custom thumbnails',
				'48 hr delivery',
				'2 revision rounds',
				'Priority support',
			],
			cta: 'Get Growth Plan',
			popular: true,
		},
		{
			name: 'Pro',
			price: '$699',
			priceINR: '₹56,000',
			description: 'For professional creators',
			features: [
				'16 videos per month',
				'Premium edits & animations',
				'Advanced graphics & motion design',
				'Custom thumbnails & channel art',
				'SEO optimization',
				'24-48 hr delivery',
				'Unlimited revisions',
				'Dedicated editor',
				'Strategy consultation',
			],
			cta: 'Get Pro Plan',
			popular: false,
		},
	];

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

	const features = [
		{
			icon: <Sparkles className="h-6 w-6" />,
			title: 'Engaging Storytelling Edits',
			benefit: 'Higher watch time & retention',
		},
		{
			icon: <TrendingUp className="h-6 w-6" />,
			title: 'Captions & Graphics',
			benefit: 'Professional polish that stands out',
		},
		{
			icon: <Star className="h-6 w-6" />,
			title: 'Custom Thumbnails',
			benefit: 'More clicks & higher CTR',
		},
		{
			icon: <Zap className="h-6 w-6" />,
			title: 'SEO-Friendly Titles & Hooks',
			benefit: 'Better discoverability',
		},
		{
			icon: <Clock className="h-6 w-6" />,
			title: '48–72 hr Delivery',
			benefit: 'Consistency without stress',
		},
	];

	const faqs = [
		{
			question: 'How much does YouTube video editing cost in India?',
			answer:
				'Our packages start from ₹8,000/month for 2 videos. We offer flexible plans for beginners, growing creators, and professionals with pricing ranging from ₹8,000 to ₹56,000 per month.',
		},
		{
			question: 'How long does it take to edit a 10-minute YouTube video?',
			answer:
				'We deliver edited videos within 48-72 hours for most packages. Pro plan members get priority 24-48 hour delivery. The timeline includes professional editing, captions, graphics, and quality checks.',
		},
		{
			question: 'Do you also design YouTube thumbnails?',
			answer:
				'Yes! Our Growth and Pro packages include custom thumbnail design. We create eye-catching, click-worthy thumbnails optimized for higher CTR and more views.',
		},
		{
			question: 'Can you help with Shorts/Reels along with long-form videos?',
			answer:
				'Absolutely! We specialize in both long-form YouTube videos and short-form content (Shorts, Reels, TikToks). We stay updated with the latest trends and algorithm-friendly editing techniques.',
		},
	];

	return (
		<div className="min-h-screen overflow-hidden bg-white dark:bg-gray-900">
			<Navigation />

			{/* Hero Section - Above the Fold */}
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
						Professional YouTube Video Editing Services to Grow Your Channel
						Faster
					</motion.h1>

					<motion.p
						className="mx-auto mb-8 max-w-3xl text-xl text-gray-300 md:text-2xl"
						variants={fadeInUp}
					>
						Boost views, subscribers, and watch-time with high-quality edits
						crafted for YouTubers.
					</motion.p>

					<motion.div
						className="flex flex-col items-center justify-center gap-4 sm:flex-row"
						variants={fadeInUp}
					>
						<Link href={whatsappLink} target="_blank">
							<Button
								size="lg"
								className="rounded-lg bg-white px-8 py-6 text-lg text-gray-900 shadow-xl hover:bg-gray-100"
							>
								<MessageCircle className="mr-2" />
								Chat with Us on WhatsApp
							</Button>
						</Link>
						<Link href="#pricing">
							<Button
								size="lg"
								variant="outline"
								className="rounded-lg border-2 border-white bg-transparent px-8 py-6 text-lg text-white hover:bg-white hover:text-gray-900"
							>
								View Pricing Plans
							</Button>
						</Link>
					</motion.div>

					<motion.div className="mt-12" variants={fadeInUp}>
						<ChevronDown className="mx-auto h-8 w-8 animate-bounce text-gray-400" />
					</motion.div>
				</motion.div>
			</section>

			{/* Problem → Solution Section */}
			<section className="bg-gray-50 px-6 py-20 dark:bg-gray-800">
				<div className="mx-auto max-w-6xl">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={staggerContainer}
					>
						<motion.h2
							className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-5xl dark:text-white"
							variants={fadeInUp}
						>
							Tired of Spending Hours Editing Instead of Creating?
						</motion.h2>

						<div className="mb-12 grid gap-12 md:grid-cols-2">
							{/* Problems */}
							<motion.div
								className="rounded-2xl border-2 border-red-200 bg-red-50 p-8 dark:border-red-800 dark:bg-red-900/20"
								variants={fadeInUp}
							>
								<h3 className="mb-6 text-2xl font-bold text-red-600 dark:text-red-400">
									The Problem
								</h3>
								<ul className="space-y-4">
									<li className="flex items-start">
										<Clock className="mt-1 mr-3 h-6 w-6 flex-shrink-0 text-red-500" />
										<span className="text-gray-700 dark:text-gray-300">
											Editing takes 6–8 hours per video
										</span>
									</li>
									<li className="flex items-start">
										<TrendingUp className="mt-1 mr-3 h-6 w-6 flex-shrink-0 rotate-180 text-red-500" />
										<span className="text-gray-700 dark:text-gray-300">
											Poor edits reduce watch-time & kill subscriber growth
										</span>
									</li>
									<li className="flex items-start">
										<Sparkles className="mt-1 mr-3 h-6 w-6 flex-shrink-0 text-red-500" />
										<span className="text-gray-700 dark:text-gray-300">
											Hard to keep up with trends (shorts, reels, transitions)
										</span>
									</li>
									<li className="flex items-start">
										<DollarSign className="mt-1 mr-3 h-6 w-6 flex-shrink-0 text-red-500" />
										<span className="text-gray-700 dark:text-gray-300">
											Expensive editors without guaranteed results
										</span>
									</li>
								</ul>
							</motion.div>

							{/* Solutions */}
							<motion.div
								className="rounded-2xl border-2 border-green-200 bg-green-50 p-8 dark:border-green-800 dark:bg-green-900/20"
								variants={fadeInUp}
							>
								<h3 className="mb-6 text-2xl font-bold text-green-600 dark:text-green-400">
									Our Solution
								</h3>
								<ul className="space-y-4">
									<li className="flex items-start">
										<Zap className="mt-1 mr-3 h-6 w-6 flex-shrink-0 text-green-500" />
										<span className="text-gray-700 dark:text-gray-300">
											Save 10+ hours weekly with our professional editors
										</span>
									</li>
									<li className="flex items-start">
										<TrendingUp className="mt-1 mr-3 h-6 w-6 flex-shrink-0 text-green-500" />
										<span className="text-gray-700 dark:text-gray-300">
											Boost watch-time & retention with engaging edits
										</span>
									</li>
									<li className="flex items-start">
										<Sparkles className="mt-1 mr-3 h-6 w-6 flex-shrink-0 text-green-500" />
										<span className="text-gray-700 dark:text-gray-300">
											Stay on-trend with shorts/reels & algorithm-friendly edits
										</span>
									</li>
									<li className="flex items-start">
										<DollarSign className="mt-1 mr-3 h-6 w-6 flex-shrink-0 text-green-500" />
										<span className="text-gray-700 dark:text-gray-300">
											Affordable packages designed for beginners, growing
											creators, and pros
										</span>
									</li>
								</ul>
							</motion.div>
						</div>

						<motion.div className="text-center" variants={fadeInUp}>
							<Link href="#pricing">
								<Button
									size="lg"
									className="bg-blue-600 text-white hover:bg-blue-700"
								>
									See Editing Packages
									<ArrowRight className="ml-2" />
								</Button>
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Features + Benefits Section */}
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
							What Makes Our Editing Stand Out
						</motion.h2>

						<div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{features.map((feature, index) => (
								<motion.div
									key={index}
									className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-purple-50 p-6 transition-shadow hover:shadow-xl dark:border-blue-800 dark:from-blue-900/20 dark:to-purple-900/20"
									variants={fadeInUp}
								>
									<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
										{feature.icon}
									</div>
									<h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
										{feature.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-400">
										{feature.benefit}
									</p>
								</motion.div>
							))}
						</div>

						<motion.div className="text-center" variants={fadeInUp}>
							<Link href={whatsappLink} target="_blank">
								<Button
									size="lg"
									className="bg-purple-600 text-white hover:bg-purple-700"
								>
									Start Your First Video Today
									<ArrowRight className="ml-2" />
								</Button>
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Pricing Section */}
			<section
				id="pricing"
				className="bg-gradient-to-br from-gray-50 to-blue-50 px-6 py-20 dark:from-gray-800 dark:to-blue-900/20"
			>
				<div className="mx-auto max-w-7xl">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={staggerContainer}
					>
						<motion.div className="mb-16 text-center" variants={fadeInUp}>
							<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl dark:text-white">
								🎁 Plans Designed for Every Creator
							</h2>
							<p className="text-xl text-gray-600 dark:text-gray-400">
								Limited-time bonus: Free intro animation + strategy call
							</p>
						</motion.div>

						<div className="grid gap-8 md:grid-cols-3">
							{pricingPlans.map((plan, index) => (
								<motion.div
									key={index}
									className={`relative rounded-2xl p-8 ${
										plan.popular
											? 'scale-105 bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl'
											: 'border-2 border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'
									}`}
									variants={fadeInUp}
								>
									{plan.popular && (
										<div className="absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-gray-900">
											BEST SELLER
										</div>
									)}

									<h3
										className={`mb-2 text-2xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}
									>
										{plan.name}
									</h3>
									<p
										className={`mb-4 text-sm ${plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}
									>
										{plan.description}
									</p>
									<div className="mb-6">
										<span className="text-4xl font-bold">{plan.price}</span>
										<span
											className={`text-lg ${plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}
										>
											{' / '}
											{plan.priceINR}
										</span>
									</div>

									<ul className="mb-8 space-y-3">
										{plan.features.map((feature, idx) => (
											<li key={idx} className="flex items-start">
												<Check
													className={`mt-0.5 mr-2 h-5 w-5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-green-500'}`}
												/>
												<span
													className={
														plan.popular
															? 'text-white/90'
															: 'text-gray-700 dark:text-gray-300'
													}
												>
													{feature}
												</span>
											</li>
										))}
									</ul>

									<Link href={whatsappLink} target="_blank">
										<Button
											size="lg"
											className={`w-full ${
												plan.popular
													? 'bg-white text-blue-600 hover:bg-gray-100'
													: 'bg-blue-600 text-white hover:bg-blue-700'
											}`}
										>
											{plan.cta}
										</Button>
									</Link>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* How It Works Section */}
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
								<Button
									size="lg"
									className="bg-green-600 text-white hover:bg-green-700"
								>
									Upload Your First Video
									<ArrowRight className="ml-2" />
								</Button>
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Portfolio Section */}
			<section className="bg-gray-50 px-6 py-20 dark:bg-gray-800">
				<div className="mx-auto max-w-6xl">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={staggerContainer}
					>
						<motion.h2
							className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-5xl dark:text-white"
							variants={fadeInUp}
						>
							Our Work in Action
						</motion.h2>
						<motion.p
							className="mb-16 text-center text-xl text-gray-600 dark:text-gray-400"
							variants={fadeInUp}
						>
							Our edits improved retention rate by +30%
						</motion.p>

						<motion.div
							className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
							variants={fadeInUp}
						>
							{[1, 2, 3].map((item) => (
								<div
									key={item}
									className="flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"
								>
									<p className="text-gray-600 dark:text-gray-400">
										Video Sample {item}
									</p>
								</div>
							))}
						</motion.div>

						<motion.div className="text-center" variants={fadeInUp}>
							<Link href="#pricing">
								<Button
									size="lg"
									variant="outline"
									className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
								>
									See How We Can Improve Your Videos
									<ArrowRight className="ml-2" />
								</Button>
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

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

			{/* FAQ Section */}
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
							{faqs.map((faq, index) => (
								<motion.div
									key={index}
									className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800"
									variants={fadeInUp}
								>
									<h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
										{faq.question}
									</h3>
									<p className="text-gray-700 dark:text-gray-300">
										{faq.answer}
									</p>
								</motion.div>
							))}
						</div>

						<motion.div className="text-center" variants={fadeInUp}>
							<p className="mb-4 text-gray-600 dark:text-gray-400">
								Still have questions?
							</p>
							<Link href={whatsappLink} target="_blank">
								<Button
									size="lg"
									variant="outline"
									className="border-2 border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
								>
									<MessageCircle className="mr-2" />
									Chat with us on WhatsApp
								</Button>
							</Link>
						</motion.div>
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

export default ServicesPage;
