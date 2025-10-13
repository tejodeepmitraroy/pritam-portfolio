'use client';
import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import {
	Sparkles,
	TrendingUp,
	Star,
	Zap,
	Clock,
	ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import LandingPageHeader from '@/components/LandingPageHeader';

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

const Features = () => {
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
		<section className="w-full px-6 py-20">
			<div className="mx-auto max-w-7xl">
				<LandingPageHeader title="What Makes Our Editing Out" />
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={staggerContainer}
				>
					<div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{features.map((feature) => (
							<FeatureCard
								key={feature.title}
								title={feature.title}
								icon={feature.icon}
								benefit={feature.benefit}
							/>
						))}
					</div>

					<motion.div className="text-center" variants={fadeInUp}>
						<Link href={''} target="_blank">
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
	);
};

export default Features;

export const FeatureCard = ({
	icon,
	title,
	benefit,
}: {
	icon: ReactNode;
	title: string;
	benefit: string;
}) => {
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.div
			className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-purple-50 p-6 transition-shadow hover:shadow-xl dark:border-blue-800 dark:from-blue-900/20 dark:to-purple-900/20"
			variants={fadeInUp}
		>
			<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
				{icon}
			</div>
			<h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
				{title}
			</h3>
			<p className="text-gray-600 dark:text-gray-400">{benefit}</p>
		</motion.div>
	);
};
