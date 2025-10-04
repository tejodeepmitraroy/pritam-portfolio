'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface ExperienceProps {
	index: number;
	jobTitle?: string;
	company?: string;
	timeRange?: string;
	description?: string;
}

const ExperienceCard: FC<ExperienceProps> = ({
	index,
	jobTitle,
	company,
	timeRange,
	description,
}) => {
	return (
		<motion.div
			key={index}
			className="mb-12 flex flex-col"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
		>
			<h3 className="text-2xl font-bold text-gray-800">{jobTitle}</h3>
			<span className="mt-4 text-lg text-gray-500">{company}</span>
			<span className="mb-4 text-lg text-gray-500">
				{timeRange ?? 'Present'}
			</span>
			<p className="text-left leading-relaxed text-gray-700">{description}</p>
		</motion.div>
	);
};

export default ExperienceCard;
