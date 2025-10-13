import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
	Clock,
	TrendingUp,
	Sparkles,
	DollarSign,
	Zap,
	ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import LandingPageHeader from '@/components/LandingPageHeader';

const Problems = () => {
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
		<section className="w-full px-10 py-20">
			<div className="mx-auto flex w-full max-w-6xl flex-col">
				<LandingPageHeader title="Tired of Spending Hours Editing Instead of Creating?" />
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={staggerContainer}
					className=""
				>
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
							<Button className="gap-3 bg-blue-600 px-10 py-6 text-lg text-white hover:bg-blue-700">
								See Editing Packages
								<ArrowRight />
							</Button>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Problems;
