import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Pricing = () => {
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
	const whatsappNumber = '1234567890'; // Replace with actual WhatsApp number
	const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi! I'm interested in your YouTube video editing services.`;

	return (
		<section
			id="pricing"
			className="px-6 py-20 dark:from-gray-800 dark:to-blue-900/20"
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
	);
};

export default Pricing;
