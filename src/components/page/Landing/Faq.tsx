import LandingPageHeader from '@/components/LandingPageHeader';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';

const Faq = () => {
	const faqs = [
		{
			question: 'How much does YouTube video editing cost in India?',
			answer:
				'Our packages start from ₹8,000/month for 2 videos. We offer flexible plans for beginners, growing creators, and professionals with pricing ranging from ₹8,000 to ₹56,000 per month.',
		},
		{
			question: 'How long does it take to edit a 10-minute YouTube video?',
			answer:
				'We deliver edited videos within 48-72 hours for most packages. Pro plan members get priority 24-48 hour delivery. The timeline includes professional editing, captions, graphics, and quality checks.',
		},
		{
			question: 'Do you also design YouTube thumbnails?',
			answer:
				'Yes! Our Growth and Pro packages include custom thumbnail design. We create eye-catching, click-worthy thumbnails optimized for higher CTR and more views.',
		},
		{
			question: 'Can you help with Shorts/Reels along with long-form videos?',
			answer:
				'Absolutely! We specialize in both long-form YouTube videos and short-form content (Shorts, Reels, TikToks). We stay updated with the latest trends and algorithm-friendly editing techniques.',
		},
	];

	return (
		<section className="w-full px-6 py-20">
			<section className="mx-auto w-full max-w-6xl">
				<LandingPageHeader title="FAQ" />
				<Accordion
					type="single"
					collapsible
					className="w-full"
					defaultValue="item-1"
				>
					{faqs.map((faq, index) => (
						<AccordionItem
							key={faq.question}
							value={`item-${index + 1}`}
							className="mb-10 rounded-2xl border border-teal-600"
						>
							<AccordionTrigger className="mb-4 items-center justify-center text-lg font-bold text-white md:text-3xl">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent>
								<p className="mb-10 text-center text-2xl text-gray-600 dark:text-gray-400">
									{faq.answer}
								</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</section>
		</section>
	);
};

export default Faq;
