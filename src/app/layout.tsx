import type React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import CustomCursor from '@/components/custom-cursor';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata: Metadata = {
	title: 'Pritam Majumder - Portfolio',
	description: 'Expert Video Editor Portfolio',
	verification: {
		google: process.env.GOOGLE_SITE_VERIFICATION_TAG,
	},
	icons: {
		icon: '/icon.png',
		shortcut: '/shortcut-icon.png',
		apple: '/apple-icon.png',
		other: {
			rel: 'apple-touch-icon-precomposed',
			url: '/apple-touch-icon-precomposed.png',
		},
	},
	openGraph: {
		title: 'Pritam Majumder - Portfolio',
		description: 'Expert Video Editor Portfolio',
		type: 'website',
		locale: 'en_US',
		siteName: 'Pritam Majumder - Portfolio',
	},
	twitter: {
		title: 'Pritam Majumder - Portfolio',
		description: 'Expert Video Editor Portfolio',
		card: 'summary_large_image',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER!} />
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{/* Custom Cursor */}
					<CustomCursor />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
