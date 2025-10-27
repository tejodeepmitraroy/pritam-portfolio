import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import LandingPageHeader from '@/components/LandingPageHeader';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const Pricing = () => {
	// const fadeInUp = {
	// 	hidden: { opacity: 0, y: 20 },
	// 	visible: { opacity: 1, y: 0 },
	// };

	// const staggerContainer = {
	// 	hidden: { opacity: 0 },
	// 	visible: {
	// 		opacity: 1,
	// 		transition: {
	// 			staggerChildren: 0.1,
	// 		},
	// 	},
	// };

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

	return (
		<section
			id="pricing"
			className="px-6 py-20 dark:from-gray-800 dark:to-blue-900/20"
		>
			<LandingPageHeader title="🎁 Plans Designed for Every Creator" />
			<div className="mx-auto max-w-7xl">
				<div>
					<div className="grid gap-8 md:grid-cols-3">
						{pricingPlans.map((plan, index) => (
							<PricingCard
								key={index}
								planName={plan.name}
								planDescription={plan.description}
								popular={plan.popular}
								price={plan.price}
								priceINR={plan.priceINR}
								features={plan.features}
								cta={plan.cta}
							/>
						))}
					</div>
				</div>
			</div>
			{/* <CTA/> */}
		</section>
	);
};

export default Pricing;

export const PricingCard = ({
	planName,
	planDescription,
	popular,
	price,
	priceINR,
	features,
	cta,
}: {
	planName: string;
	planDescription: string;
	popular: boolean;
	price: string;
	priceINR: string;
	features: string[];
	cta: string;
}) => {
	const whatsappNumber = '1234567890'; // Replace with actual WhatsApp number
	const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi! I'm interested in your YouTube video editing services.`;
	return (
		<Card
			className={`relative rounded-2xl py-8 ${
				popular
					? 'scale-105 bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl'
					: 'border-2 border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'
			}`}
		>
			<CardHeader className="gap-0">
				<CardTitle>
					{popular && (
						<div className="absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-gray-900">
							BEST SELLER
						</div>
					)}

					<h3
						className={`text-center text-4xl font-bold ${popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}
					>
						{planName}
					</h3>
				</CardTitle>
				<CardDescription
					className={`mb-4 text-center text-base ${popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}
				>
					{planDescription}
				</CardDescription>

				<div className="flex items-center justify-center gap-3">
					<span className="text-4xl font-bold text-white">{price}</span>
					<span
						className={`text-lg ${popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}
					>
						{' / '}
						{priceINR}
					</span>
				</div>
			</CardHeader>
			<CardContent className="h-full px-10">
				<ul className="mb-8 space-y-3">
					{features.map((feature, idx) => (
						<li key={idx} className="flex items-start">
							<Check
								className={`mt-0.5 mr-2 h-5 w-5 flex-shrink-0 ${popular ? 'text-white' : 'text-green-500'}`}
							/>
							<span
								className={
									popular ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'
								}
							>
								{feature}
							</span>
						</li>
					))}
				</ul>
			</CardContent>
			<CardFooter>
				<Link href={whatsappLink} target="_blank" className="w-full">
					<Button
						className={`w-full p-7 text-xl font-bold transition-all duration-300 ease-in-out ${
							popular
								? 'bg-white text-blue-600 hover:bg-blue-700 hover:text-white'
								: 'bg-blue-600 text-white hover:bg-blue-700'
						}`}
					>
						{cta}
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
};
