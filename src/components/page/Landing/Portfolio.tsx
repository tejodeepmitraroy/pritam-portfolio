import LandingPageHeader from '@/components/LandingPageHeader';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Portfolio = () => {
	const Portfolios = [
		{
			title: '',
			url: 'https://www.youtube.com/embed/jagzYcqXr8M?si=XpArfk2Qq35v2Mx3',
			image: '',
		},
		{
			title: '',
			url: 'https://www.youtube.com/embed/jagzYcqXr8M?si=XpArfk2Qq35v2Mx3',
			image: '',
		},
		{
			title: '',
			url: 'https://www.youtube.com/embed/jagzYcqXr8M?si=XpArfk2Qq35v2Mx3',
			image: '',
		},
	];
	return (
		<section className="bg-teal-500 px-6 py-20">
			<div className="mx-auto max-w-7xl">
				<LandingPageHeader title={'Our Work in Action'} />
				<div>
					{/* <p className="mb-16 text-center text-xl text-gray-600 dark:text-gray-400">
						Our edits improved retention rate by +30%
					</p> */}

					<div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{Portfolios.map((item) => (
							<div
								key={item.title}
								className="flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"
							>
								<iframe
									className="aspect-video rounded-2xl"
									width="1920"
									src={item.url}
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									// allowfullscreen
								></iframe>
							</div>
						))}
					</div>

					<div className="text-center">
						<Link href="#pricing">
							<Button
								size="lg"
								className="gap-3 bg-blue-600 px-10 py-6 text-lg text-white hover:bg-blue-700"
							>
								See How We Can Improve Your Videos
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
