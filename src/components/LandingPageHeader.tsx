import React, { FC } from 'react';

interface LandingPageHeaderProps {
	title: string;
}
const LandingPageHeader: FC<LandingPageHeaderProps> = ({ title }) => {
	return (
		<section className="mb-20 w-full">
			<h2 className="font-dm-sans mx-auto w-full max-w-4xl text-center text-5xl leading-14 font-semibold">
				{title}
			</h2>
		</section>
	);
};

export default LandingPageHeader;
