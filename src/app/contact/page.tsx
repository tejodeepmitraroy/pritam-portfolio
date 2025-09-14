'use client';
import Navigation from '@/components/navigation/navigation';
import ContactForm from '@/components/contact-form';
import PageTitle from '@/components/page-title';
import Footer from '@/components/navigation/Footer';

export default function Contact() {
	return (
		<div className={`min-h-screen overflow-hidden`}>
			<Navigation />
			<PageTitle title="CONTACT" />

			{/* <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-16 pb-12 text-center">
				<motion.div
					className={`mb-6 text-8xl leading-none font-bold tracking-tight ${
						isLight ? 'text-[#2563EB]' : 'text-[#d4ff00]'
					}`}
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					CONTACT
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.5, duration: 0.5 }}
				>
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20 0L23.5 16.5H40L26.5 26.5L30 40L20 30L10 40L13.5 26.5L0 16.5H16.5L20 0Z"
							fill={isLight ? '#2563EB' : '#d4ff00'}
						/>
					</svg>
				</motion.div>
			</section> */}

			{/* Contact Form */}
			<ContactForm headerView={false} />

			<Footer />
		</div>
	);
}
