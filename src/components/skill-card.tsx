'use client';
import React, { FC } from 'react';
import { motion } from 'motion/react';

interface SkillCardProps {
	toolName?: string;
	subtitle?: string;
	percentage?: number;
}

const SkillCard: FC<SkillCardProps> = ({ toolName, subtitle, percentage }) => {
	return (
		<motion.div
			className="relative overflow-hidden rounded-md bg-[#d4ff00] p-4"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			whileHover={{ y: -5 }}
		>
			<div className="mb-2 flex items-start justify-between">
				<div>
					<h2 className="text-4xl font-medium text-black">{toolName}</h2>
					<p className="text-sm text-black/70">{subtitle}</p>
				</div>
				<div className="text-6xl font-bold text-black">{percentage}%</div>
			</div>
		</motion.div>
	);
};

export default SkillCard;
