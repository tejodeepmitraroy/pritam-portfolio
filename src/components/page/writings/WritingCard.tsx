import React, { FC } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

interface WritingCard {
	article: {
		title: string;
		excerpt: string;
		date: string;
		readTime: string;
		category: string;
	};
	index: number;
}

const WritingCard: FC<WritingCard> = ({ article, index }) => {
	return (
		<motion.div
			className={`rounded-lg bg-white p-6 shadow-md dark:bg-[#d4ff00]/10`}
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			whileHover={{ y: -5 }}
		>
			<div className="mb-2 flex items-center space-x-2">
				<span
					className={`text-[#2563EB]' rounded-full bg-[#2563EB]/10 px-2 py-1 text-xs dark:bg-[#d4ff00]/20 dark:text-[#d4ff00]`}
				>
					{article.category}
				</span>
				<span className={`text-xs text-gray-500 dark:text-white/70`}>
					{article.date}
				</span>
			</div>
			<h3
				className={`mb-2 text-xl font-bold text-[#d4ff00] dark:text-[#2563EB]`}
			>
				{article.title}
			</h3>
			<p className={`mb-4 text-gray-600 dark:text-white/80`}>
				{article.excerpt}
			</p>
			<div className="flex items-center justify-between">
				<span className={`text-xs text-gray-500 dark:text-white/70`}>
					{article.readTime}
				</span>
				<Link
					href="#"
					className={`text-sm font-medium text-[#2563EB] hover:underline dark:text-[#d4ff00]`}
				>
					Read Article
				</Link>
			</div>
		</motion.div>
	);
};

export default WritingCard;
