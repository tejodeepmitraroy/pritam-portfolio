'use client';
import React, { FC } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
	tooltip?: string;
	thumbnail?: string;
	index: number;
	link?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
	tooltip,
	thumbnail,
	index,
	link,
}) => {
	return (
		<Link href={link || ''}>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.2 * index }}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className="group relative"
			>
				<div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
					<div className="relative flex h-full w-full items-center justify-center rounded-xl bg-black/50">
						<section className="absolute bottom-0 left-0 flex w-fit flex-col items-center justify-center border-b border-l bg-blue-500 p-4">
							<p className="text-2xl font-bold text-white">{tooltip}</p>
						</section>
					</div>
				</div>
				{thumbnail && (
					<Image
						src={thumbnail}
						alt={tooltip || ''}
						width={400}
						height={300}
						className="aspect-[4/3] w-full cursor-pointer rounded-xl"
					/>
				)}
			</motion.div>
		</Link>
	);
};

export default ProjectCard;
