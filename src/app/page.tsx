import Navigation from '@/components/navigation';
import ContactForm from '@/components/contact-form';
import HeroSection from '@/components/page/home/HeroSection';
import ProjectionSection from '@/components/page/home/ProjectionSection';
import ExperienceSection from '@/components/page/home/ExperienceSection';
import Footer from '@/components/Footer';
import AboutSection from '@/components/page/home/AboutSection';

export default function Home() {
	// Text animation variants
	// const letterVariants = {
	//   hidden: { opacity: 0, y: 50 },
	//   visible: (i: number) => ({
	//     opacity: 1,
	//     y: 0,
	//     transition: {
	//       delay: i * 0.1,
	//     },
	//   }),
	// };

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

	return (
		<main
			className={`min-h-screen overflow-hidden text-gray-800 dark:text-white`}
		>
			{/* Header */}
			<Navigation />
			<HeroSection />

			{/* About Section */}
			<AboutSection />

			{/* Projects Section */}
			<ProjectionSection />

			{/* Experience Section */}
			<ExperienceSection />

			{/* Tools Section */}

			{/* Contact Form */}
			<ContactForm />

			{/* Footer */}
			<Footer />
		</main>
	);
}
