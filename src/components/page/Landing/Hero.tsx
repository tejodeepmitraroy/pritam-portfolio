import React from 'react';
import Navbar2 from '@/components/navigation/navbar2';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
	// const staggerContainer = {
	// 	hidden: { opacity: 0 },
	// 	visible: {
	// 		opacity: 1,
	// 		transition: {
	// 			staggerChildren: 0.1,
	// 		},
	// 	},
	// };

	// const fadeInUp = {
	// 	hidden: { opacity: 0, y: 20 },
	// 	visible: { opacity: 1, y: 0 },
	// };
	return (
		<section className="h-dvh w-full">
			<section className="absolute z-10 h-dvh w-full">
				<section className="relative h-full w-full">
					<video
						src="/video/Show case Portfolio.mp4"
						autoPlay
						loop
						muted
						className="h-full w-full object-cover opacity-40"
					/>
					<div className="absolute top-0 h-full w-full bg-black opacity-70"></div>
				</section>
			</section>

			<section className="relative z-20 h-full w-full">
				<Navbar2 />
				<section className="relative z-20 flex h-full w-full items-center justify-center">
					<section className="mx-auto w-full max-w-6xl">
						<h1 className="font-dm-sans w-full text-7xl leading-20 font-semibold text-white">
							{' '}
							Professional Video Editing Services in Kolkata to Grow Your Brand
							Faster
						</h1>

						<p className="font-dm-sans mt-10 w-full max-w-6xl text-xl text-white">
							{' '}
							Serving creators, startups, and businesses in Dum Dum, Salt Lake,
							Barrackpore & across India.
						</p>
						<section className="mt-16 flex items-center justify-center gap-4">
							<Button className="flex items-center justify-center rounded-full bg-teal-600 px-8 py-7 text-xl shadow-zinc-700">
								<span className="flex items-center gap-2">
									<MessageCircle className="scale-125" />
									Get Started Today
								</span>
							</Button>
							<Button className="flex items-center justify-center rounded-full bg-sky-600 px-10 py-7 text-xl shadow-zinc-700">
								View Our Service
							</Button>
						</section>
					</section>
				</section>
			</section>

			{/* <Navigation /> */}

			{/* Hero Section - Above the Fold
			<section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gray-900 dark:bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
            
            <motion.div
            className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center text-white"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            >
            {/* <video src="/video.mp4" autoPlay loop muted /> 
            <motion.h1
            className="mb-6 text-4xl leading-tight font-bold md:text-6xl lg:text-7xl"
            variants={fadeInUp}
            >
            Professional YouTube Video Editing Services to Grow Your Channel
						Faster
                        </motion.h1>
                        
                        <motion.p
						className="mx-auto mb-8 max-w-3xl text-xl text-gray-300 md:text-2xl"
						variants={fadeInUp}
                        >
						Boost views, subscribers, and watch-time with high-quality edits
						crafted for YouTubers.
                        </motion.p>
                        
                        <motion.div
						className="flex flex-col items-center justify-center gap-4 sm:flex-row"
						variants={fadeInUp}
                        >
						<Link href={whatsappLink} target="_blank">
                        <Button
                        size="lg"
                        className="rounded-lg bg-white px-8 py-6 text-lg text-gray-900 shadow-xl hover:bg-gray-100"
                        >
                        <MessageCircle className="mr-2" />
                        Chat with Us on WhatsApp
                        </Button>
						</Link>
						<Link href="#pricing">
                        <Button
                        size="lg"
                        variant="outline"
                        className="rounded-lg border-2 border-white bg-transparent px-8 py-6 text-lg text-white hover:bg-white hover:text-gray-900"
                        >
                        View Pricing Plans
                        </Button>
						</Link>
                        </motion.div>
                        
                        <motion.div className="mt-12" variants={fadeInUp}>
						<ChevronDown className="mx-auto h-8 w-8 animate-bounce text-gray-400" />
                        </motion.div>
                        </motion.div>
                        </section>  */}
		</section>
	);
};

export default Hero;
