'use client';
import React, { FC } from 'react';
import { motion } from 'motion/react';
import AnimatedSection from '@/components/animated-section';
import SectionHeader from '@/components/section-header';
import { About} from '@/types/sanity.types';

interface AboutSectionProps {
	aboutData: About;

}
const AboutSection: FC<AboutSectionProps> = ({ aboutData, }) => {
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
					<p className="mb-4 text-2xl leading-relaxed text-stone-600">
						{aboutData.paragraph}
					</p>
				</motion.div>

				{/* Skills */}
				<motion.div
					className={`text-sm leading-relaxed text-gray-600 dark:text-white/80`}
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.5 }}
				>
					<p className="mb-4 text-2xl leading-relaxed text-stone-600">
						{aboutData.paragraph2}
					</p>
				</motion.div>
			</section>
		</AnimatedSection>
	);
};

export default AboutSection;
