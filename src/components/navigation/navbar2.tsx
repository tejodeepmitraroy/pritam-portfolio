import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const navbar2 = () => {
	return (
		<section className="fixed z-50 flex h-20 w-full items-center bg-white py-2">
			<nav className="mx-auto flex w-full max-w-[90rem] items-center">
				<section className="w-full">
					<span className="font-dancing-script text-5xl font-bold"> PM</span>
				</section>
				<section className="flex w-full items-center justify-center text-lg font-medium">
					<ul className="flex items-center gap-5">
						<li>
							<Link href="/" className="navbarItem">
								Home
							</Link>
						</li>
						<li>
							<Link href="/services" className="navbarItem">
								Offering
							</Link>
						</li>
						<li>
							<Link className="navbarItem" href="/portfolio">
								Why choose US
							</Link>
						</li>

						<li>
							<Link className="navbarItem" href="/contact">
								Contact
							</Link>
						</li>
					</ul>
				</section>
				<section className="flex w-full items-center justify-end">
					<Button>Get Started</Button>
				</section>
			</nav>
		</section>
	);
};

export default navbar2;
