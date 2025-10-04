import AnimatedSection from '@/components/animated-section';
import SectionHeader from '@/components/section-header';
import React from 'react';
import { getAllServices } from '@/sanity/actions/queryActions';
import ServiceCard from '../services/ServiceCard';

const ServicesSection = async () => {
	const servicesData = await getAllServices();
	return (
		<AnimatedSection delay={0.2}>
			<SectionHeader title="PROJECTS" />
			<section className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
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
		</AnimatedSection>
	);
};

export default ServicesSection;
