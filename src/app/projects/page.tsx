import Navigation from '@/components/navigation/navigation';
import ContactForm from '@/components/contact-form';
import Footer from '@/components/navigation/Footer';
import PageTitle from '@/components/page-title';
import ProjectCard from '@/components/page/projects/ProjectCard';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getAllProjects } from '@/sanity/actions/queryActions';
import { imageUrlFor } from '@/sanity/config/SanityImageUrl';

export default async function Projects() {
	const getAllProject = await getAllProjects();
	console.log('Project Content', getAllProject);
	return (
		<main className={`min-h-screen overflow-hidden`}>
			<Navigation />
			<PageTitle title="PROJECTS" />

			<section className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-6 py-8 md:px-0">
				{getAllProject.map((project, index) => (
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
			</section>

			{/* Contact Form */}
			<ContactForm />

			<Footer />
		</main>
	);
}
