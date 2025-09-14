import AnimatedSection from '@/components/animated-section';
import SectionHeader from '@/components/section-header';
import { Projects } from '@/types/sanity.types';

import React, { FC } from 'react';
import ProjectCard from '../projects/ProjectCard';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { imageUrlFor } from '@/sanity/config/SanityImageUrl';

interface ProjectionSectionProps {
	projects: Projects[];
}
const ProjectionSection: FC<ProjectionSectionProps> = ({ projects }) => {
	return (
		<AnimatedSection delay={0.2}>
			<SectionHeader title="PROJECTS" />
			<div className="mx-auto grid max-w-6xl grid-cols-2 gap-10">
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						tooltip={project.title}
						thumbnail={imageUrlFor(
							project.thumbnail as SanityImageSource
						).url()}
						index={index}
						link={`/projects/${project.slug?.current}`}
					/>
				))}
				{/* {projects.map((item, index) => (
					<motion.div
						key={item}
						className="flex aspect-[4/3] cursor-pointer items-center justify-center rounded-lg bg-gray-800"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 * index }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<div className="text-2xl text-white">
							{item === 1 && (
								<svg
									width="32"
									height="32"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="3"
										y="3"
										width="7"
										height="7"
										stroke="white"
										strokeWidth="2"
									/>
									<rect
										x="14"
										y="3"
										width="7"
										height="7"
										stroke="white"
										strokeWidth="2"
									/>
									<rect
										x="3"
										y="14"
										width="7"
										height="7"
										stroke="white"
										strokeWidth="2"
									/>
									<rect
										x="14"
										y="14"
										width="7"
										height="7"
										stroke="white"
										strokeWidth="2"
									/>
								</svg>
							)}
							{item === 2 && (
								<svg
									width="32"
									height="32"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6 12H18M6 12L10 8M6 12L10 16"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							)}
							{item === 3 && (
								<svg
									width="32"
									height="32"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="12"
										cy="12"
										r="9"
										stroke="white"
										strokeWidth="2"
									/>
									<path d="M12 7V17" stroke="white" strokeWidth="2" />
									<path d="M7 12H17" stroke="white" strokeWidth="2" />
								</svg>
							)}
							{item === 4 && (
								<svg
									width="32"
									height="32"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 5V19M5 12H19"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							)}
						</div>
					</motion.div>
				))} */}
			</div>
		</AnimatedSection>
	);
};

export default ProjectionSection;
