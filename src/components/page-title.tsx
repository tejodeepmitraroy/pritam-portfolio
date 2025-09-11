'use client';
import React from 'react';
import { motion } from 'framer-motion';

const PageTitle = ({ title }: { title?: string }) => {
	return (
		<section className="mx-auto mt-22 flex max-w-5xl flex-col items-center px-6 pt-16 pb-12 text-center text-[#2563EB]">
			<motion.h1
				className="mb-6"
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				{title}
			</motion.h1>
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
			>
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 0L23.5 16.5H40L26.5 26.5L30 40L20 30L10 40L13.5 26.5L0 16.5H16.5L20 0Z"
						fill="#d4ff00"
					/>
				</svg>
			</motion.div>
		</section>
	);
};

export default PageTitle;
