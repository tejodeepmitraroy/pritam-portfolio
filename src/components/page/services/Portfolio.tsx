import LandingPageHeader from '@/components/LandingPageHeader';
import { Button } from '@/components/ui/button';
import { ServicePage } from '@/types/sanity.types';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

interface PortfolioProps {
	portfolioData: ServicePage['portfolio'];
}
const Portfolio: FC<PortfolioProps> = ({ portfolioData }) => {
	// const Portfolios = [
	// 	{
	// 		title: '23',
	// 		url: 'https://www.youtube.com/embed/jagzYcqXr8M?si=XpArfk2Qq35v2Mx3',
	// 		image: '',
	// 	},
	// 	{
	// 		title: '24',
	// 		url: 'https://www.youtube.com/embed/jagzYcqXr8M?si=XpArfk2Qq35v2Mx3',
	// 		image: '',
	// 	},
	// 	{
	// 		title: '25',
	// 		url: 'https://www.youtube.com/embed/jagzYcqXr8M?si=XpArfk2Qq35v2Mx3',
	// 		image: '',
	// 	},
	// ];
	return (
		<section className="bg-teal-500 px-6 py-20">
			<div className="mx-auto max-w-7xl">
				<LandingPageHeader title={portfolioData?.sectionHeading || ''} />
				<div>
					{/* <p className="mb-16 text-center text-xl text-gray-600 dark:text-gray-400">
						Our edits improved retention rate by +30%
					</p> */}

					<div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{portfolioData?.portfolioItems?.map((item) => (
							<div
								key={item._key}
								className="flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"
							>
								<iframe
									className="aspect-video rounded-2xl"
									width="1920"
									src={item.videoEmbedUrl}
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									// allowfullscreen
								></iframe>
							</div>
						))}
					</div>

					<div className="text-center">
						<Link href={portfolioData?.ctaButton?.link || '#'} target="_blank">
							<Button
								size="lg"
								className="gap-3 bg-blue-600 px-10 py-6 text-lg text-white hover:bg-blue-700"
							>
								{portfolioData?.ctaButton?.text || ''}
								<ArrowRight className="ml-2" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
