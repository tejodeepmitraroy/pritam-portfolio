import Footer from '@/components/navigation/Footer';
import Navigation from '@/components/navigation/navigation';
import React from 'react';
import ProblemSolution from '@/components/page/services/ProblemSolution';
import Hero from '@/components/page/services/Hero';
import HowItWorks from '@/components/page/services/HowItWorks';
import Features from '@/components/page/services/Features';
import Portfolio from '@/components/page/services/Portfolio';
import PricingSection from '@/components/page/services/PricingSection';
import WhyChooseUs from '@/components/page/services/WhyChooseUs';
import Testimonials from '@/components/page/services/Testimonials';
import Faq from '@/components/page/services/Faq';
import CTASection from '@/components/page/services/CTASection';
import { getServicePage } from '@/sanity/actions/queryActions';

const ServicesPage = async () => {
	// const whatsappNumber = '1234567890'; // Replace with actual WhatsApp number
	// const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi! I'm interested in your YouTube video editing services.`;

	// const fadeInUp = {
	// 	hidden: { opacity: 0, y: 20 },
	// 	visible: { opacity: 1, y: 0 },
	// };

	// const staggerContainer = {
	// 	hidden: { opacity: 0 },
	// 	visible: {
	// 		opacity: 1,
	// 		transition: {
	// 			staggerChildren: 0.1,
	// 		},
	// 	},
	// };

	// const testimonials = [
	// 	{
	// 		id: '1',
	// 		name: 'Sarah Johnson',
	// 		role: 'Tech YouTuber',
	// 		content:
	// 			'I saved 10+ hours weekly and doubled my subscriber count thanks to their editing. The quality is consistently amazing!',
	// 		rating: 5,
	// 	},
	// 	{
	// 		id: '2',
	// 		name: 'Mike Chen',
	// 		role: 'Gaming Creator',
	// 		content:
	// 			'Professional, fast, and highly creative — my channel grew 3x faster! The retention rate improvements are incredible.',
	// 		rating: 5,
	// 	},
	// 	{
	// 		id: '3',
	// 		name: 'Priya Sharma',
	// 		role: 'Lifestyle Vlogger',
	// 		content:
	// 			'Best decision for my channel! The edits are engaging, trendy, and delivered on time. My views increased by 150%.',
	// 		rating: 5,
	// 	},
	// ];

	// const pricingPlans = [
	// 	{
	// 		name: 'Starter',
	// 		price: '$99',
	// 		priceINR: '₹8,000',
	// 		description: 'Perfect for beginners',
	// 		features: [
	// 			'2 videos per month',
	// 			'Basic edits & transitions',
	// 			'Captions & subtitles',
	// 			'48-72 hr delivery',
	// 			'1 revision round',
	// 		],
	// 		cta: 'Get Starter Plan',
	// 		popular: false,
	// 	},
	// 	{
	// 		name: 'Growth',
	// 		price: '$349',
	// 		priceINR: '₹28,000',
	// 		description: 'Most popular for growing creators',
	// 		features: [
	// 			'8 videos per month',
	// 			'Advanced edits & effects',
	// 			'Captions & graphics',
	// 			'Custom thumbnails',
	// 			'48 hr delivery',
	// 			'2 revision rounds',
	// 			'Priority support',
	// 		],
	// 		cta: 'Get Growth Plan',
	// 		popular: true,
	// 	},
	// 	{
	// 		name: 'Pro',
	// 		price: '$699',
	// 		priceINR: '₹56,000',
	// 		description: 'For professional creators',
	// 		features: [
	// 			'16 videos per month',
	// 			'Premium edits & animations',
	// 			'Advanced graphics & motion design',
	// 			'Custom thumbnails & channel art',
	// 			'SEO optimization',
	// 			'24-48 hr delivery',
	// 			'Unlimited revisions',
	// 			'Dedicated editor',
	// 			'Strategy consultation',
	// 		],
	// 		cta: 'Get Pro Plan',
	// 		popular: false,
	// 	},
	// ];

	// const workProcess = [
	// 	{
	// 		step: '1',
	// 		title: 'Share Your Raw Footage',
	// 		description:
	// 			'Upload your video files via Google Drive, Dropbox, or any preferred method.',
	// 	},
	// 	{
	// 		step: '2',
	// 		title: 'We Edit & Send Preview',
	// 		description:
	// 			'Our team crafts your video with professional edits within 48 hours.',
	// 	},
	// 	{
	// 		step: '3',
	// 		title: 'Review & Request Changes',
	// 		description:
	// 			'Watch the preview and share your feedback for any adjustments.',
	// 	},
	// 	{
	// 		step: '4',
	// 		title: 'Final Delivery',
	// 		description: 'Receive your polished video in full HD, ready to upload!',
	// 	},
	// ];

	const servicePageData = await getServicePage();

	console.log(servicePageData);

	return (
		<div className="font-dm-sans min-h-screen overflow-hidden bg-white dark:bg-gray-900">
			<Navigation />

			{/* Hero Section - Above the Fold */}
			<Hero heroSectionData={servicePageData?.heroSection} />

			{/* Problem → Solution Section */}
			<ProblemSolution
				problemSolutionData={servicePageData?.problemSolutionBlock}
			/>

			{/* Features + Benefits Section */}
			<Features featureData={servicePageData?.featuresBlock} />

			{/* Pricing Section */}
			<PricingSection pricingSectionData={servicePageData?.pricing} />

			{/* How It Works Section */}

			<HowItWorks howItWorksData={servicePageData?.howItWorks} />
			{/* Portfolio Section */}
			<Portfolio portfolioData={servicePageData?.portfolio} />

			{/* Testimonials Section */}
			<Testimonials testimonialsData={servicePageData?.testimonials} />

			{/* Why Choose Us Section */}
			<WhyChooseUs whyChooseUsData={servicePageData?.whyChooseUs} />

			{/* FAQ Section */}
			<Faq faqSectionData={servicePageData?.faqSection} />

			{/* Final CTA Section */}
			<CTASection ctaSectionData={servicePageData?.finalCta} />

			<Footer />
		</div>
	);
};

export default ServicesPage;
