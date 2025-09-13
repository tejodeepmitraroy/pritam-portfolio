'use client';
import React, { FC } from 'react';
import { motion } from 'motion/react';
import AnimatedSection from '@/components/animated-section';
import SectionHeader from '@/components/section-header';
import { About, Skills } from '@/types/sanity.types';

interface AboutSectionProps {
	aboutData: About;
	skillsData: Skills[];
}
const AboutSection: FC<AboutSectionProps> = ({ aboutData, skillsData }) => {
	// const skills = [
	// 	{
	// 		name: 'Frontend',
	// 		percent: 82,
	// 		tools: 'HTML, CSS, JavaScript',
	// 	},
	// 	{
	// 		name: 'UI/UX, Prototyping',
	// 		percent: 82,
	// 		tools: 'Figma, Adobe XD',
	// 	},
	// 	{
	// 		name: 'Stack',
	// 		percent: 82,
	// 		tools: 'React, Node, Express',
	// 	},
	// ];
	return (
		<AnimatedSection className="">
			<SectionHeader title="ABOUT" />

			<section className="grid w-full grid-cols-2 gap-6">
				<motion.div
					className={`text-sm leading-relaxed text-gray-600 dark:text-white/80`}
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.3 }}
				>
					<p className="mb-4">{aboutData.paragraph}</p>
				</motion.div>

				{/* Skills */}
				<section className="mt-8 w-full space-y-5">
					<motion.div
						className={`text-sm leading-relaxed text-gray-600 dark:text-white/80`}
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.5 }}
					>
						<p className="mb-4">{aboutData.paragraph2}</p>
					</motion.div>

					{skillsData.map((skill) => (
						<motion.div
							className={`flex w-full items-center justify-between rounded-lg bg-[#2563EB] p-6 dark:bg-[#d4ff00]`}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							whileHover={{ y: -5 }}
							key={skill.name}
						>
							<section className="w-full">
								<h3 className="mb-1 text-blue-200">{skill.name}</h3>
								<div className={`text-xs text-blue-200 dark:text-black/70`}>
									{skill.subtitle}
								</div>
							</section>

							<section className="mt-2 flex w-full items-center justify-center border-l-2 border-l-white/30 text-3xl font-bold text-white/30">
								{skill.percentage}%
							</section>
						</motion.div>
					))}
				</section>
			</section>
		</AnimatedSection>
	);
};

export default AboutSection;
