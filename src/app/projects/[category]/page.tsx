import ContactForm from '@/components/contact-form';
import Footer from '@/components/navigation/Footer';
import Navigation from '@/components/navigation/navigation';
import PageTitle from '@/components/page-title';
import React from 'react';

import ProjectCard from '@/components/page/projects/ProjectCard';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { imageUrlFor } from '@/sanity/config/SanityImageUrl';
import { getProjectBySlug } from '@/sanity/actions/queryActions';

const page = async ({ params }: { params: Promise<{ category: string }> }) => {
	const { category } = await params;
	console.log('category', category);

	const projectsData = await getProjectBySlug(category);
	console.log('projectsData', projectsData);
	return (
		<main className={`min-h-screen overflow-hidden`}>
			<Navigation />

			<PageTitle title={projectsData?.title} />

			<section className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-6 py-8">
				{projectsData?.projects?.map((project, index) => (
					<ProjectCard
						key={index}
						tooltip={project.title}
						thumbnail={imageUrlFor(
							project.thumbnail as SanityImageSource
						).url()}
						index={index}
						link={project.link}
					/>
				))}
			</section>

			{/* Contact Form */}
			<ContactForm />

			<Footer />
		</main>
	);
};

export default page;
