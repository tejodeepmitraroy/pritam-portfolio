'use client';
import AnimatedSection from '@/components/animated-section';
import SectionHeader from '@/components/section-header';
import { Separator } from '@/components/ui/separator';
import { motion } from 'motion/react';
import React from 'react';

const ExperienceData = [
	{
		employer: 'Company A',
		title: 'Senior UX/UI Designer',
		date: '2020 - Present',
		description:
			'Lead the creation of the highly intuitive and visually appealing UI/UX designs for web and mobile applications, collaborating with developers to ensure the seamless delivery of products.',
	},
	{
		employer: 'Company B',
		title: 'UX/UI Designer',
		date: '2018 - 2020',
		description:
			'Collaborated with the development team to transform UI/UX designs into functional commercial design solutions, ensuring a consistent brand experience across all digital touchpoints.',
	},
	{
		employer: 'Company C',
		title: 'Lead Product Designer',
		date: '2016 - 2018',
		description:
			'Designed and implemented creative solutions that blend user needs with business goals, creating a cohesive visual system and creating smooth user experiences.',
	},
	{
		employer: 'Company D',
		title: 'Junior Designer',
		date: '2014 - 2016',
		description:
			'Handled the creation of landing pages for various clients, creating visually appealing and user-friendly designs while collaborating with developers.',
	},
];
const ExperienceSection = () => {
	return (
		<AnimatedSection delay={0.3}>
			<SectionHeader title="EXPERIENCE" />

			<div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
				{ExperienceData.map((item, index) => (
					<ExperienceCard
						key={index}
						title={item.title}
						date={item.date}
						employer={item.employer}
						description={item.description}
						index={index}
					/>
				))}
			</div>

			{/* Stats */}
			<section className="mt-12 grid w-full grid-cols-3 text-center">
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="flex flex-col items-start justify-start gap-3 border-r-2 border-gray-200 py-6 dark:border-gray-800"
				>
					<motion.div
						className={`text-5xl font-bold text-[#2563EB] dark:text-[#d4ff00]`}
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
					>
						380+
					</motion.div>
					<p className={`text-gray-500 dark:text-white/70`}>
						Projects
						<br />
						Completed
					</p>
				</motion.section>

				<motion.section
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="flex flex-col items-start gap-3 border-r-2 border-gray-200 p-6 dark:border-gray-800"
				>
					<motion.div
						className={`text-5xl font-bold text-[#2563EB] dark:text-[#d4ff00]`}
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ type: 'spring', stiffness: 100, delay: 0.6 }}
					>
						420+
					</motion.div>
					<p className={`te text-gray-500 dark:text-white/70`}>
						Happy
						<br />
						Clients
					</p>
				</motion.section>

				<motion.section
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="flex flex-col items-start gap-3 p-6"
				>
					<motion.div
						className={`text-5xl font-bold text-[#2563EB] dark:text-[#d4ff00]`}
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ type: 'spring', stiffness: 100, delay: 0.8 }}
					>
						2K+
					</motion.div>
					<p className={`text-gray-500 dark:text-white/70`}>
						Hours of
						<br />
						Work
					</p>
				</motion.section>
			</section>
		</AnimatedSection>
	);
};

export default ExperienceSection;

const ExperienceCard = ({
	title,
	employer,
	date,
	description,
	index,
}: {
	title: string;
	employer: string;
	date: string;
	description: string;
	index: number;
}) => {
	return (
		<motion.div
			key={index}
			initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7 }}
			className="text-left"
		>
			<section className="w-full">
				<h3 className={`my-2 mb-1 text-gray-800 dark:text-white`}>{title}</h3>
			</section>
			<section className="w-full">
				<span className="text-gray-500 dark:text-white/70">{employer}</span>

				<p
					className={`mb-4 text-left text-base text-gray-500 dark:text-white/70`}
				>
					{date}
				</p>
			</section>
			<section className="w-full">
				<p
					className={`text-left text-lg leading-relaxed text-black dark:text-white/80`}
				>
					{description}
				</p>
			</section>
			<Separator className="mt-20" />
		</motion.div>
	);
};
