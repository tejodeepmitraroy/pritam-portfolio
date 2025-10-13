'use client';
import { motion } from 'framer-motion';
import Navigation from '@/components/navigation/navigation';

import ContactForm from '@/components/contact-form';
import PageTitle from '@/components/page-title';
import Footer from '@/components/navigation/Footer';
import WritingCard from '@/components/page/writings/WritingCard';

export default function Writing() {
	const articles = [
		{
			title: 'Our illustration process',
			excerpt:
				'A deep dive into our illustration process, from concept to final delivery. Learn about our approach to creating engaging visuals that enhance user experience.',
			date: 'May 10, 2023',
			readTime: '5 min read',
			category: 'Design Process',
		},
		{
			title: 'Animation in web design',
			excerpt:
				'Exploring the role of animation in modern web design and how it can improve user engagement and guide users through complex interfaces.',
			date: 'April 15, 2023',
			readTime: '8 min read',
			category: 'Web Design',
		},
		{
			title: 'Color theory in design',
			excerpt:
				'Understanding color theory and its application in design. Learn how to create effective color palettes that communicate the right message.',
			date: 'March 5, 2023',
			readTime: '6 min read',
			category: 'Design Fundamentals',
		},
		{
			title: 'Typography and human psychology',
			excerpt:
				'Exploring the psychological impact of typography choices and how they influence user perception and behavior in digital products.',
			date: 'Feb 20, 2023',
			readTime: '7 min read',
			category: 'Typography',
		},
		{
			title: 'The future of UX design',
			excerpt:
				'Predicting trends and innovations that will shape the future of UX design, from voice interfaces to augmented reality experiences.',
			date: 'Jan 15, 2023',
			readTime: '10 min read',
			category: 'UX Trends',
		},
		{
			title: 'Designing for accessibility',
			excerpt:
				'Best practices for creating inclusive designs that work for everyone, including people with disabilities and diverse needs.',
			date: 'Dec 10, 2022',
			readTime: '9 min read',
			category: 'Accessibility',
		},
	];

	return (
		<div className="min-h-screen overflow-hidden">
			<Navigation />
			<PageTitle title="Writing" />

			<section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2">
				{articles.map((article, index) => (
					<WritingCard key={index} article={article} index={index} />
				))}
			</section>

			<section className="mx-auto max-w-6xl px-6 py-8">
				<div className="flex justify-center">
					<motion.button
						className={`rounded-md bg-[#2563EB] px-6 py-3 font-medium text-white`}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Load More Articles
					</motion.button>
				</div>
			</section>

			{/* Contact Form */}
			<ContactForm />

			<Footer />
		</div>
	);
}
