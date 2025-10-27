'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
	Youtube,
	Instagram,
	Twitter,
	Linkedin,
	Mail,
	Phone,
	MapPin,
	MessageCircle,
} from 'lucide-react';

const Footer = () => {
	const whatsappNumber = '1234567890'; // Replace with actual WhatsApp number
	const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi! I'm interested in your YouTube video editing services.`;

	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const footerLinks = {
		services: [
			{ name: 'YouTube Video Editing', href: '#features' },
			{ name: 'Shorts & Reels Editing', href: '#features' },
			{ name: 'Thumbnail Design', href: '#features' },
			{ name: 'Color Grading', href: '#features' },
			{ name: 'Motion Graphics', href: '#features' },
		],
		company: [
			{ name: 'About Us', href: '#about' },
			{ name: 'Our Work', href: '#portfolio' },
			{ name: 'Pricing', href: '#pricing' },
			{ name: 'Testimonials', href: '#testimonials' },
			{ name: 'FAQ', href: '#faq' },
		],
		resources: [
			{ name: 'Blog', href: '#' },
			{ name: 'Case Studies', href: '#' },
			{ name: 'Video Tips', href: '#' },
			{ name: 'Creator Guide', href: '#' },
			{ name: 'Support', href: '#' },
		],
		legal: [
			{ name: 'Privacy Policy', href: '#' },
			{ name: 'Terms of Service', href: '#' },
			{ name: 'Refund Policy', href: '#' },
			{ name: 'Cookie Policy', href: '#' },
		],
	};

	const socialLinks = [
		{
			name: 'YouTube',
			icon: Youtube,
			href: '#',
			color: 'hover:text-red-500',
		},
		{
			name: 'Instagram',
			icon: Instagram,
			href: '#',
			color: 'hover:text-pink-500',
		},
		{
			name: 'Twitter',
			icon: Twitter,
			href: '#',
			color: 'hover:text-blue-400',
		},
		{
			name: 'LinkedIn',
			icon: Linkedin,
			href: '#',
			color: 'hover:text-blue-600',
		},
	];

	return (
		<footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
			{/* Decorative background elements */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
				<div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
			</div>

			<div className="relative z-10">
				{/* Main Footer Content */}
				<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ staggerChildren: 0.1 }}
						className="grid gap-12 lg:grid-cols-5"
					>
						{/* Brand Section */}
						<motion.div variants={fadeInUp} className="lg:col-span-2">
							<h3 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-3xl font-bold text-transparent">
								Video Editing Pro
							</h3>
							<p className="mb-6 text-gray-400">
								Transforming raw footage into engaging YouTube content that
								captivates audiences and drives growth. Your success is our
								mission.
							</p>

							{/* Contact Info */}
							<div className="mb-6 space-y-3">
								<div className="flex items-center gap-3 text-gray-400">
									<Mail className="h-5 w-5 text-blue-400" />
									<a
										href="mailto:contact@example.com"
										className="transition-colors hover:text-white"
									>
										contact@example.com
									</a>
								</div>
								<div className="flex items-center gap-3 text-gray-400">
									<Phone className="h-5 w-5 text-blue-400" />
									<a
										href="tel:+1234567890"
										className="transition-colors hover:text-white"
									>
										+1 (234) 567-890
									</a>
								</div>
								<div className="flex items-center gap-3 text-gray-400">
									<MapPin className="h-5 w-5 text-blue-400" />
									<span>Mumbai, India</span>
								</div>
							</div>

							{/* Social Links */}
							<div className="flex gap-4">
								{socialLinks.map((social) => (
									<Link
										key={social.name}
										href={social.href}
										className={`rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 ${social.color}`}
										aria-label={social.name}
									>
										<social.icon className="h-5 w-5" />
									</Link>
								))}
							</div>
						</motion.div>

						{/* Services Links */}
						<motion.div variants={fadeInUp}>
							<h4 className="mb-4 text-lg font-semibold">Services</h4>
							<ul className="space-y-2">
								{footerLinks.services.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-gray-400 transition-colors hover:text-white"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</motion.div>

						{/* Company Links */}
						<motion.div variants={fadeInUp}>
							<h4 className="mb-4 text-lg font-semibold">Company</h4>
							<ul className="space-y-2">
								{footerLinks.company.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-gray-400 transition-colors hover:text-white"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</motion.div>

						{/* Resources Links */}
						<motion.div variants={fadeInUp}>
							<h4 className="mb-4 text-lg font-semibold">Resources</h4>
							<ul className="space-y-2">
								{footerLinks.resources.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-gray-400 transition-colors hover:text-white"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</motion.div>
					</motion.div>

					{/* CTA Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center"
					>
						<h3 className="mb-3 text-2xl font-bold md:text-3xl">
							Ready to Elevate Your Content?
						</h3>
						<p className="mb-6 text-white/90">
							Get started today and see the difference professional editing
							makes
						</p>
						<Link
							href={whatsappLink}
							target="_blank"
							className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-purple-600 shadow-lg transition-all hover:scale-105 hover:bg-gray-100"
						>
							<MessageCircle className="h-5 w-5" />
							Start Your Free Consultation
						</Link>
					</motion.div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-white/10">
					<div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
						<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
							<p className="text-center text-sm text-gray-400">
								© {new Date().getFullYear()} Video Editing Pro. All rights
								reserved.
							</p>
							<div className="flex flex-wrap justify-center gap-6">
								{footerLinks.legal.map((link) => (
									<Link
										key={link.name}
										href={link.href}
										className="text-sm text-gray-400 transition-colors hover:text-white"
									>
										{link.name}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
