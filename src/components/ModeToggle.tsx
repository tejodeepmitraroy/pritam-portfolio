'use client';
import * as React from 'react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<div className="flex items-center rounded-full bg-gray-300 p-1">
			{theme === 'dark' ? (
				<Button
					variant="ghost"
					size="icon"
					className={`h-4 w-4 cursor-pointer rounded-full bg-white`}
					onClick={() => setTheme('light')}
				>
					{' '}
					Light
				</Button>
			) : (
				<Button
					variant="ghost"
					size="icon"
					className={`h-4 w-4 cursor-pointer rounded-full bg-gray-700`}
					onClick={() => setTheme('dark')}
				>
					Dark
				</Button>
			)}
		</div>
	);
}
