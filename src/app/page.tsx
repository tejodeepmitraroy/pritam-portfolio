import Navigation from '@/components/navigation/navigation';
import ContactForm from '@/components/contact-form';
import HeroSection from '@/components/page/home/HeroSection';
import ProjectionSection from '@/components/page/home/ProjectionSection';

import Footer from '@/components/navigation/Footer';
import AboutSection from '@/components/page/home/AboutSection';
import { getAbout, getAllProjects } from '@/sanity/actions/queryActions';
import ServicesSection from '@/components/page/home/ServicesSection';
import TestimonialSections from '@/components/page/Testimonials/TesimonialSections';

export default async function Home() {
	const aboutData = await getAbout();
	const getAllProject = await getAllProjects();

	return (
		<main
			className={`min-h-screen overflow-hidden text-gray-800 dark:text-white`}
		>
			{/* Header */}
			<Navigation />
			<HeroSection />

			{/* About Section */}
			<AboutSection aboutData={aboutData} />

			{/* Projects Section */}
			<ProjectionSection projects={getAllProject} />

			{/* Experience Section */}
			{/* <ExperienceSection /> */}

			{/* Tools Section */}
			<ServicesSection />

			<TestimonialSections />

			{/* Contact Form */}
			<ContactForm />

			{/* Footer */}
			<Footer />
		</main>
	);
}
