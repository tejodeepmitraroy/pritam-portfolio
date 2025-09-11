'use client';
import React from 'react';
import { motion } from 'motion/react';
import AnimatedSection from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const AboutSection = () => {
	const skills = [
		{
			name: 'Frontend',
			percent: 82,
			tools: 'HTML, CSS, JavaScript',
		},
		{
			name: 'UI/UX, Prototyping',
			percent: 82,
			tools: 'Figma, Adobe XD',
		},
		{
			name: 'Stack',
			percent: 82,
			tools: 'React, Node, Express',
		},
	];
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
					<p className="mb-4">
						My passion lies in the intersection of art and technology, creating
						visually appealing designs while maintaining a smooth user
						experience.
					</p>
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
						<p className="mb-4">
							I hold a Bachelor of Science in Computer Science and a Master's
							degree in Interaction Design. I've completed my studies at
							prestigious institutions that equipped me with a solid foundation
							in both design and development, allowing me to bridge the gap
							between creativity and functionality.
						</p>
					</motion.div>

					{skills.map((skill) => (
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
									{skill.tools}
								</div>
							</section>

							<section className="mt-2 flex w-full items-center justify-center border-l-2 border-l-white/30 text-3xl font-bold text-white/30">
								{skill.percent}%
							</section>
						</motion.div>
					))}
				</section>
			</section>
		</AnimatedSection>
	);
};

export default AboutSection;
