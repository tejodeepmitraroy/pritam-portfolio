'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/navigation/navigation';
import { useTheme } from '@/context/theme-context';
import CustomCursor from '@/components/custom-cursor';
import ContactForm from '@/components/contact-form';

export default function Education() {
	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();
	const isLight = theme === 'light';

	useEffect(() => {
		setMounted(true);
	}, []);

	const education = [
		{
			degree: 'Master of Arts in Interaction Design',
			institution: 'Art University',
			period: '2012 - 2014',
			description:
				'Specialized in user-centered design approaches and designing digital products that enhance user experience.',
			courses: [
				'Advanced Interaction Design',
				'User Research Methods',
				'Design Psychology',
				'Prototyping',
			],
		},
		{
			degree: 'Bachelor of Science in Computer Science',
			institution: 'Tech University',
			period: '2008 - 2012',
			description:
				'Gained a solid foundation in core development concepts, focusing on web development.',
			courses: [
				'Web Development',
				'User Interface Design',
				'Database Systems',
				'Algorithms',
			],
		},
		{
			degree: 'Diploma in Graphic Design',
			institution: 'Design Academy',
			period: '2007 - 2008',
			description:
				'Focused on typography and digital design skills, mastering the principles of design and color theory.',
			courses: [
				'Typography',
				'Color Theory',
				'Digital Illustration',
				'Brand Identity',
			],
		},
		{
			degree: 'Art School',
			institution: 'Creative Arts Institute',
			period: '2005 - 2007',
			description:
				'Explored fundamental graphic design skills, learned basic drawing and digital art tools.',
			courses: [
				'Drawing Fundamentals',
				'Digital Art',
				'Composition',
				'Art History',
			],
		},
	];

	const certifications = [
		{
			name: 'UX Design Professional Certificate',
			issuer: 'Google',
			year: '2021',
		},
		{
			name: 'Interaction Design Specialist',
			issuer: 'Nielsen Norman Group',
			year: '2020',
		},
		{
			name: 'Web Accessibility Certification',
			issuer: 'International Association of Accessibility Professionals',
			year: '2019',
		},
		{
			name: 'Design Thinking Certification',
			issuer: 'IDEO',
			year: '2018',
		},
	];

	if (!mounted) return null;

	return (
		<div
			className={`min-h-screen ${isLight ? 'bg-gray-100' : 'bg-black'} overflow-hidden`}
		>
			<CustomCursor />

			<Navigation />

			<section className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-16 pb-12 text-center">
				<motion.div
					className={`mb-6 text-8xl leading-none font-bold tracking-tight ${
						isLight ? 'text-[#2563EB]' : 'text-[#d4ff00]'
					}`}
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					EDUCATION
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
							fill={isLight ? '#2563EB' : '#d4ff00'}
						/>
					</svg>
				</motion.div>
			</section>

			<section className="mx-auto max-w-6xl px-6 py-8">
				<h2
					className={`mb-6 text-2xl font-bold ${isLight ? 'text-gray-800' : 'text-white'}`}
				>
					Academic Background
				</h2>
				<div className="space-y-8">
					{education.map((edu, index) => (
						<motion.div
							key={index}
							className={`rounded-lg p-6 ${isLight ? 'bg-white shadow-md' : 'bg-[#d4ff00]/10'}`}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
								<div>
									<h3
										className={`text-xl font-bold ${!isLight && 'text-[#d4ff00]'}`}
									>
										{edu.degree}
									</h3>
									<p
										className={`${isLight ? 'text-gray-600' : 'text-white/80'} mb-2`}
									>
										{edu.institution}
									</p>
								</div>
								<span
									className={`text-sm ${isLight ? 'text-gray-500' : 'text-white/70'} md:text-right`}
								>
									{edu.period}
								</span>
							</div>
							<p
								className={`mb-4 ${isLight ? 'text-gray-600' : 'text-white/80'}`}
							>
								{edu.description}
							</p>
							<div>
								<h4
									className={`mb-2 font-medium ${isLight ? 'text-gray-800' : 'text-white'}`}
								>
									Key Courses:
								</h4>
								<div className="flex flex-wrap gap-2">
									{edu.courses.map((course, i) => (
										<span
											key={i}
											className={`rounded-full px-3 py-1 text-sm ${
												isLight
													? 'bg-[#2563EB]/10 text-[#2563EB]'
													: 'bg-[#d4ff00]/20 text-[#d4ff00]'
											}`}
										>
											{course}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-6 py-8">
				<h2
					className={`mb-6 text-2xl font-bold ${isLight ? 'text-gray-800' : 'text-white'}`}
				>
					Certifications
				</h2>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{certifications.map((cert, index) => (
						<motion.div
							key={index}
							className={`rounded-lg p-6 ${isLight ? 'bg-white shadow-md' : 'bg-[#d4ff00]/10'}`}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
							whileHover={{ y: -5 }}
						>
							<div className="mb-2 flex items-start justify-between">
								<h3
									className={`text-lg font-bold ${!isLight && 'text-[#d4ff00]'}`}
								>
									{cert.name}
								</h3>
								<span
									className={`text-sm ${isLight ? 'text-gray-500' : 'text-white/70'}`}
								>
									{cert.year}
								</span>
							</div>
							<p className={`${isLight ? 'text-gray-600' : 'text-white/80'}`}>
								{cert.issuer}
							</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* Contact Form */}
			<ContactForm />

			<footer
				className={`${isLight ? 'bg-[#2563EB]/10' : 'bg-[#d4ff00]/10'} mt-12 overflow-hidden py-8`}
			>
				<motion.div
					className={`flex space-x-8 ${
						isLight ? 'text-[#2563EB]' : 'text-[#d4ff00]'
					} text-4xl font-bold whitespace-nowrap opacity-30`}
					animate={{
						x: [0, -1000],
						transition: {
							x: {
								repeat: Number.POSITIVE_INFINITY,
								repeatType: 'loop',
								duration: 20,
								ease: 'linear',
							},
						},
					}}
				>
					<div>PORTFOLIO</div>
					<div>TWITTER</div>
					<div>LINKEDIN</div>
					<div>BEHANCE</div>
					<div>PORTFOLIO</div>
					<div>TWITTER</div>
					<div>LINKEDIN</div>
					<div>BEHANCE</div>
				</motion.div>
			</footer>
		</div>
	);
}
