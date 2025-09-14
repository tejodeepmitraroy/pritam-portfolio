'use client';

import type React from 'react';

import { useState } from 'react';
import { motion } from 'motion/react';
import AnimatedSection from './animated-section';
import SectionHeader from './section-header';

interface ContactFormProps {
	headerView?: boolean;
}
export default function ContactForm({ headerView = true }: ContactFormProps) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitSuccess(true);
			setFormData({ name: '', email: '', message: '' });

			// Reset success message after 3 seconds
			setTimeout(() => {
				setSubmitSuccess(false);
			}, 3000);
		}, 1500);
	};

	return (
		<AnimatedSection delay={0.2}>
			{headerView ?? <SectionHeader title="Contact Form" />}
			<div className="mx-auto max-w-6xl px-6 py-12">
				<div className="grid gap-8 md:grid-cols-2">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
					>
						<p
							className={`mb-4 text-left text-lg font-medium text-gray-600 dark:text-white/80`}
						>
							Looking to start a project or you need consultation? Feel free to
							contact me.
						</p>
						<div className={`mb-1 text-[#2563EB] dark:text-[#d4ff00]`}>
							pritammajumder761@email.com
						</div>

						<div className={`text-sm text-gray-500 dark:text-white/70`}>
							India, West Bengal, Kolkata
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.2 }}
					>
						<form onSubmit={handleSubmit} className="space-y-4">
							<motion.input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="Jane Smith"
								className={`w-full rounded-md border border-gray-300 bg-white p-2 text-gray-900 focus:border-[#2563EB] focus:outline-none`}
								required
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: 0.3 }}
							/>
							<motion.input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="jane@framer.com"
								className={`w-full rounded-md border border-gray-300 bg-white p-2 text-gray-900 focus:border-[#2563EB] focus:outline-none dark:border dark:border-white/20 dark:bg-white/10 dark:text-white dark:focus:border-[#d4ff00]`}
								required
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: 0.4 }}
							/>
							<motion.textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								placeholder="Message..."
								rows={4}
								className={`w-full rounded-md border-gray-300 bg-white p-2 text-gray-900 focus:border-[#2563EB] focus:outline-none dark:border dark:border-white/20 dark:bg-white/10 dark:text-white dark:focus:border-[#d4ff00]`}
								required
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: 0.5 }}
							></motion.textarea>
							<motion.button
								type="submit"
								disabled={isSubmitting}
								className={`w-full rounded-md bg-[#2563EB] p-2 font-medium text-white disabled:opacity-70 dark:bg-[#d4ff00] dark:text-black`}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: 0.6 }}
							>
								{isSubmitting ? 'Sending...' : 'Send'}
							</motion.button>

							{submitSuccess && (
								<motion.div
									className={`mt-4 rounded-md bg-green-100 p-3 text-green-800 dark:bg-green-900/30 dark:text-green-400`}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
								>
									Your message has been sent successfully! I'll get back to you
									soon.
								</motion.div>
							)}
						</form>
					</motion.div>
				</div>
			</div>
		</AnimatedSection>
	);
}
