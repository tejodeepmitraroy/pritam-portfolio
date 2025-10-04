import type React from 'react';

import Navigation from '@/components/navigation/navigation';

import PageTitle from '@/components/page-title';
import Footer from '@/components/navigation/Footer';
import ExperienceCard from '../../components/page/experience/ExperienceCard';
import { getAllExperience } from '@/sanity/actions/queryActions';
export default async function Experience() {
	// const experiences = [
	// 	{
	// 		title: 'Senior UX/UI Designer',
	// 		company: 'SuperCo',

	// 		startDate: 2019,
	// 		endDate: 2024,
	// 		description:
	// 			'Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs.',
	// 	},
	// 	{
	// 		title: 'UI/UX Designer',
	// 		company: 'BlendXYZ',
	// 		startDate: 2016,
	// 		endDate: 2017,
	// 		description:
	// 			'Collaborated with the development team to implement a responsive design approach, improving the mobile user experience and increasing mobile app engagement.',
	// 	},
	// 	{
	// 		title: 'Lead Product Designer',
	// 		company: 'CocoBasic',
	// 		startDate: 2017,
	// 		endDate: 2019,
	// 		description:
	// 			'Designed and implemented creative solutions such as wellness app and high-traffic e-commerce websites for various clients and increase overall client business to his satisfaction.',
	// 	},
	// 	{
	// 		title: 'Junior Designer',
	// 		company: 'Internisium',
	// 		startDate: 2015,
	// 		endDate: 2016,
	// 		description:
	// 			'Internship and starting position in creative team as Junior Designer. Focused on creating wireframes, styleguides, presentations and prototypes for web and mobile applications.',
	// 	},
	// ];

	const experienceData = await getAllExperience();
	return (
		<div className="min-h-screen overflow-hidden">
			<Navigation />
			<PageTitle title="EXPERIENCE" />

			{/* <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-16 pb-12 text-center">
				<motion.div
					className="mb-6 text-8xl leading-none font-bold tracking-tight text-[#1a66ff]"
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					EXPERIENCE
				</motion.div>
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
							fill="#1a66ff"
						/>
					</svg>
				</motion.div>
			</section> */}

			<section className="mx-auto max-w-5xl px-6 py-8 md:px-0">
				<div className="grid gap-12 md:grid-cols-2">
					{experienceData.map((exp, index) => (
						<ExperienceCard
							key={index}
							index={index}
							jobTitle={exp.position}
							company={exp.company}
							timeRange={exp.timeRange}
							description={exp.description}
						/>
					))}
				</div>
			</section>

			{/* <section className="mx-auto max-w-6xl px-6 py-12">
				<div className="flex justify-center gap-16 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="flex flex-col items-center"
					>
						<motion.div
							className="text-4xl font-bold text-[#1a66ff]"
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
						>
							380+
						</motion.div>
						<div className="text-sm text-[#1a66ff]">
							Projects
							<br />
							Completed
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="flex flex-col items-center"
					>
						<motion.div
							className="text-4xl font-bold text-[#1a66ff]"
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ type: 'spring', stiffness: 100, delay: 0.6 }}
						>
							420+
						</motion.div>
						<div className="text-sm text-[#1a66ff]">
							Satisfied
							<br />
							Clients
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.6 }}
						className="flex flex-col items-center"
					>
						<motion.div
							className="text-4xl font-bold text-[#1a66ff]"
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ type: 'spring', stiffness: 100, delay: 0.8 }}
						>
							2K+
						</motion.div>
						<div className="text-sm text-[#1a66ff]">
							Positive
							<br />
							Reviews
						</div>
					</motion.div>
				</div>
			</section> */}

			<Footer />
		</div>
	);
}
