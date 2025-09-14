'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface ExperienceProps {
	index: number;
	jobTitle: string;
	company: string;
	startDate: number;
	endDate: number;
	description: string;
}

const ExperienceCard: FC<ExperienceProps> = ({
	index,
	jobTitle,
	company,
	startDate,
	endDate,
	description,
}) => {
	return (
		<motion.div
			key={index}
			className="mb-12"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
		>
			<h3 className="mb-1 text-xl font-bold text-gray-800">{jobTitle}</h3>
			<p className="mb-1 text-gray-600">{company}</p>
			<p className="mb-4 text-sm text-gray-500">
				{startDate} - {endDate ?? 'Present'}
			</p>
			<p className="leading-relaxed text-gray-700">{description}</p>
		</motion.div>
	);
};

export default ExperienceCard;
