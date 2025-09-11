import React from 'react';

const Loading = () => {
	return (
		<div className="flex min-h-screen items-center justify-center bg-black">
			<div className="relative">
				{/* Outer ring */}
				<div className="h-20 w-20 rounded-full border-4 border-gray-200"></div>

				{/* Inner ring with animation */}
				<div className="absolute top-0 left-0 h-20 w-20 animate-spin rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent">
					{/* Optional: Add a subtle glow effect */}
					<div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
				</div>

				{/* Optional: Add loading text */}
				<p className="mt-4 text-center font-medium text-gray-300">Loading...</p>
			</div>
		</div>
	);
};

export default Loading;
