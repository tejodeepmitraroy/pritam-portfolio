import Navigation from '@/components/navigation/navigation';

import ContactForm from '@/components/contact-form';

import Footer from '@/components/navigation/Footer';
import PageTitle from '@/components/page-title';
import { getAbout, getSkills } from '@/sanity/actions/queryActions';
import SkillCard from '@/components/skill-card';

import AboutMain from '@/components/page/about/About-main';

export default async function About() {
	// // Skill bar animation variants
	// const skillVariants = {
	//   hidden: { width: 0 },
	//   visible: (percent: number) => ({
	//     width: `${percent}%`,
	//     transition: {
	//       duration: 1.5,
	//       ease: "easeOut",
	//     },
	//   }),
	// };

	// // Tools marquee animation
	// const marqueeVariants = {
	//   animate: {
	//     x: [0, -1000],
	//     transition: {
	//       x: {
	//         repeat: Number.POSITIVE_INFINITY,
	//         repeatType: "loop",
	//         duration: 20,
	//         ease: "linear",
	//       },
	//     },
	//   },
	// };

	// const toolsSkill = [
	// 	{
	// 		toolName: 'Framer',
	// 		description: 'No code website builder tool',
	// 		percentage: 92,
	// 	},
	// 	{
	// 		toolName: 'Figma',
	// 		description: 'User interface design tool',
	// 		percentage: 83,
	// 	},
	// 	{
	// 		toolName: 'Illustrator',
	// 		description: 'Professional graphic software',
	// 		percentage: 74,
	// 	},
	// 	{
	// 		toolName: 'Photoshop',
	// 		description: 'Professional graphic software',
	// 		percentage: 62,
	// 	},
	// 	{
	// 		toolName: 'Slack',
	// 		description: 'User interface design tool',
	// 		percentage: 80,
	// 	},
	// 	{
	// 		toolName: 'Notion',
	// 		description: 'Note taking and reminder tool',
	// 		percentage: 54,
	// 	},
	// ];

	const aboutData = await getAbout();
	const skillsData = await getSkills();

	return (
		<div className="min-h-screen overflow-hidden">
			{/* Header */}
			<Navigation />

			{/* About Title */}
			<PageTitle title="ABOUT" />

			{/* Profile Section */}
			<AboutMain aboutData={aboutData} />

			{/* Skills Section */}
			<section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-6 py-12 md:grid-cols-2">
				{skillsData.map((skill, index) => (
					<SkillCard
						key={index}
						toolName={skill.name}
						subtitle={skill.subtitle}
						percentage={skill.percentage}
					/>
				))}
			</section>

			{/* Contact Form */}
			<ContactForm />

			<Footer />
		</div>
	);
}
