import ContactForm from '@/components/contact-form';
import Footer from '@/components/navigation/Footer';
import Navigation from '@/components/navigation/navigation';
import PageTitle from '@/components/page-title';
import ServiceCard from '@/components/page/services/ServiceCard';
import TestimonialCard from '@/components/page/Testimonials/TestimonialCard';
import { getAllServices } from '@/sanity/actions/queryActions';
import React from 'react';

const ServicesPage = async () => {
	const testimonials = [
		{
			id: '1',
			name: 'John Doe',
			role: 'CEO',
			company: 'TechCorp',
			content:
				'Outstanding service! The team went above and beyond to deliver exceptional results for our project.',
		},
		{
			id: '2',
			name: 'Jane Smith',
			role: 'Marketing Director',
			company: 'Digital Solutions',
			content:
				'Professional, creative, and delivered on time. Highly recommended for any web development needs.',
		},
		{
			id: '3',
			name: 'Michael Johnson',
			role: 'Founder',
			company: 'StartupX',
			content:
				'Transformed our online presence completely. The attention to detail and user experience is remarkable.',
		},
	];

	const servicesData = await getAllServices();

	return (
		<div className="min-h-screen overflow-hidden bg-gray-50">
			<Navigation />
			<PageTitle title="SERVICES" />
			<section className="mx-auto grid max-w-5xl gap-8 px-6 py-12 md:grid-cols-2 md:px-0 lg:grid-cols-3">
				{servicesData &&
					servicesData.map((service, index) => (
						<ServiceCard
							key={index}
							title={service.title}
							description={service.description}
							services={service.services}
						/>
					))}
			</section>
			{/* Testimonials */}

			<section className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
				{testimonials.map((testimonial, index) => (
					<TestimonialCard
						key={testimonial.id}
						index={index}
						name={testimonial.name}
						// role={testimonial.role}
						// company={testimonial.company}
						content={testimonial.content}
						// image={testimonial.image}
					/>
				))}
			</section>

			<ContactForm />
			<Footer />
		</div>
	);
};

export default ServicesPage;
