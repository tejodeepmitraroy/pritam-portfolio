'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/navigation';

import ContactForm from '@/components/contact-form';
import { Dribbble, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import PageTitle from '@/components/page-title';

export default function About() {
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

	const toolsSkill = [
		{
			toolName: 'Framer',
			description: 'No code website builder tool',
			percentage: 92,
		},
		{
			toolName: 'Figma',
			description: 'User interface design tool',
			percentage: 83,
		},
		{
			toolName: 'Illustrator',
			description: 'Professional graphic software',
			percentage: 74,
		},
		{
			toolName: 'Photoshop',
			description: 'Professional graphic software',
			percentage: 62,
		},
		{
			toolName: 'Slack',
			description: 'User interface design tool',
			percentage: 80,
		},
		{
			toolName: 'Notion',
			description: 'Note taking and reminder tool',
			percentage: 54,
		},
	];

	return (
		<div className="min-h-screen overflow-hidden">
			{/* Header */}
			<Navigation />

			{/* About Title */}
			<PageTitle title="ABOUT" />

			{/* Profile Section */}
			<section className="mx-auto grid max-w-5xl gap-12 px-6 py-8 md:grid-cols-2">
				{/* Profile Image */}
				<motion.section
					className="w-fit"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
				>
					<div className="relative w-fit items-center justify-center overflow-hidden rounded-md bg-gray-800">
						<Image
							src="/profile.png"
							alt="Profile"
							width={500}
							height={0}
							className="w-[400px]"
						/>
						{/* <div className="absolute top-0 right-0 h-full w-2 bg-[#d4ff00]"></div>
              <div className="absolute bottom-0 left-0 h-2 w-full bg-[#d4ff00]"></div>
              <div className="absolute top-1/4 right-4">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 40C20 30 30 20 40 20C50 20 60 30 60 40C60 50 50 60 40 60C30 60 20 50 20 40Z"
                    stroke="#d4ff00"
                    strokeWidth="2"
                  />
                </svg>
              </div> */}
					</div>

					{/* Social Media Icons */}
					<div className="mt-6 flex justify-center space-x-4 rounded-md bg-[#d4ff00] p-3">
						<Link
							href="https://www.instagram.com/vfx_pritam/"
							className="cursor-pointer text-black transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:scale-120"
						>
							<Instagram className="h-6 w-6" />
						</Link>
						<Link
							href="#"
							className="cursor-pointer text-black transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:scale-120"
						>
							<Dribbble className="h-6 w-6" />
						</Link>
						<Link
							href="#"
							className="cursor-pointer text-black transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:scale-120"
						>
							<Facebook className="h-6 w-6" />
						</Link>
						<Link
							href="https://www.linkedin.com/in/pritammajumderedits/"
							className="cursor-pointer text-black transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:scale-120"
						>
							<Linkedin className="h-6 w-6" />
						</Link>
					</div>
				</motion.section>

				{/* Bio Text */}
				<section className="flex flex-col items-start justify-start">
					<motion.p
						className="mb-6 text-left text-2xl leading-relaxed text-stone-600"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.7, duration: 0.5 }}
					>
						My passion lies in the intersection of art and technology, creating
						visually captivating interfaces and elevating overall user digital
						experiences.
					</motion.p>

					<motion.p
						className="mb-6 text-left text-xl leading-relaxed text-stone-600"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.9, duration: 0.5 }}
					>
						I hold a Bachelor of Technology in Computer Science from the
						esteemed Art University and a Master of Fine Arts in Interactive
						Design. This academic foundation has equipped me with a solid
						understanding of the principles that underpin effective interaction
						design, providing me with the knowledge to create designs that
						seamlessly blend aesthetics and functionality.
					</motion.p>
				</section>
			</section>

			{/* Skills Section */}
			<section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-6 py-12 md:grid-cols-2">
				{/* Framer */}
				{toolsSkill.map((skill, index) => (
					<SkillsCard
						key={index}
						toolName={skill.toolName}
						description={skill.description}
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

const SkillsCard = ({
	toolName,
	description,
	percentage,
}: {
	toolName: string;
	description: string;
	percentage: number;
}) => {
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
					<p className="text-sm text-black/70">{description}</p>
				</div>
				<div className="text-6xl font-bold text-black">{percentage}%</div>
			</div>
		</motion.div>
	);
};
