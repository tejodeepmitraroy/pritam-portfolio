'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

interface NavigationMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function NavigationMenu({
	isOpen,
	onClose,
}: NavigationMenuProps) {
	const pathname = usePathname();
	const { setTheme, theme } = useTheme();
	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	const menuVariants = {
		hidden: { opacity: 0, y: '-100%' },
		visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
		exit: { opacity: 0, y: '-100%', transition: { duration: 0.3 } },
	};

	const menuItems = [
		{ name: 'HOME', path: '/' },
		{ name: 'ABOUT', path: '/about' },
		{ name: 'PROJECTS', path: '/projects' },
		{ name: 'EXPERIENCE', path: '/experience' },
		// { name: 'EDUCATION', path: '/education' },
		{ name: 'WRITING', path: '/writing' },
		{ name: 'CONTACT', path: '/contact' },
	];

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="fixed inset-0 z-50 overflow-hidden bg-[#2563EB] text-white dark:bg-black"
					variants={menuVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					<div className="mx-auto flex h-full w-full max-w-6xl flex-col p-6">
						<div className="mb-12 flex items-center justify-between">
							<button onClick={onClose} className="text-white">
								<X size={24} />
							</button>
							<div className="flex items-center space-x-4">
								<motion.button
									onClick={toggleTheme}
									className="flex items-center space-x-2 rounded-md bg-[#d4ff00] px-4 py-2 text-black"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<span className="font-medium">
										{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
									</span>
									<div
										className={`h-4 w-4 rounded-full ${
											theme === 'dark' ? 'bg-white' : 'bg-black'
										}`}
									></div>
								</motion.button>
							</div>
						</div>

						<div className="flex flex-col space-y-4 text-4xl font-bold">
							{menuItems.map((item) => (
								<Link
									key={item.path}
									href={item.path}
									className={`${
										pathname === item.path ? 'text-[#d4ff00]' : 'text-white'
									} transition-colors hover:text-[#d4ff00]`}
									onClick={onClose}
								>
									{item.name}
								</Link>
							))}
						</div>

						<div className="mt-auto">
							<div className="text-base text-white/70">
								India, West Bengal, Kolkata
							</div>
							<div className="mt-2 mb-1 text-[#d4ff00]">
								pritammajumderedits@gmail.com
							</div>
							{/* <div className="text-base text-white/70">www.framer.website</div> */}
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
