import React from "react";
import { Main } from "../components/about/Main";
import { Navbar } from "../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

export const About = () => {
	// scroll direction hook
	function useScrollDirection() {
		const [scrollDirection, setScrollDirection] = useState(null);

		useEffect(() => {
			let lastScrollY = window.scrollY;

			const updateScrollDirection = () => {
				const scrollY = window.scrollY;
				const direction = scrollY > lastScrollY ? "down" : "up";
				if (
					direction !== scrollDirection &&
					(scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
				) {
					setScrollDirection(direction);
				}
				lastScrollY = scrollY > 0 ? scrollY : 0;
			};
			window.addEventListener("scroll", updateScrollDirection); // add event listener
			return () => {
				window.removeEventListener("scroll", updateScrollDirection); // clean up
			};
		}, [scrollDirection]);

		return scrollDirection;
	}

	// header component
	function Header() {
		const scrollDirection = useScrollDirection();

		return (
			<div
				className={`sticky nav ${
					scrollDirection === "down" ? "-top-24" : "top-0"
				} h-24 transition-all duration-500`}
			>
				<Navbar />
			</div>
		);
	}
	return (
		<m.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: "easeOut" }}
			className="text-gray-900"
		>
			{/* Section 1 - Navbar + Hero */}
			<Header />
			<Main />
			<section className="p-8 flex flex-col items-center justify-center gap-6">
				<p className="lg:px-24 lg:w-[32rem] text-xl">
					In 2014, Niarra founder Byron Thomas tagged annual leave onto a work
					trip to visit Africa's oldest national park, Virunga, in the DRC.
				</p>
				<p className="lg:px-24 lg:w-[32rem]">
					It was there, trekking into the forest with armed guards and rangers
					like Innocent Mburanumwe, that Byron first appreciated the phenomenal
					investment that goes into critical, large-scale conservation projects.
					Virunga and its gorillas couldn't exist without tourism revenue. They
					also wouldn't exist without the brave people risking their lives to
					protect it, as seen in the Virunga documentary released at a similar
					time.
				</p>
				<p className="lg:px-24 lg:w-[32rem]">
					On that trip, it soon became evident that community buy-in and shared
					value is vital for the long-term protection of the natural world. The
					trip planted a seed that positive impact travel treads an incredibly
					complex and fine line but one that is essential for communities,
					nature, and our planet's health. 
				</p>

				<p className="lg:px-24 lg:w-[32rem]">
					It was there, trekking into the forest with armed guards and rangers
					like Innocent Mburanumwe, that Byron first appreciated the phenomenal
					investment that goes into critical, large-scale conservation projects.
					Virunga and its gorillas couldn't exist without tourism revenue. They
					also wouldn't exist without the brave people risking their lives to
					protect it, as seen in the Virunga documentary released at a similar
					time.
				</p>
				<p className="lg:px-24 lg:w-[32rem]">
					It was there, trekking into the forest with armed guards and rangers
					like Innocent Mburanumwe, that Byron first appreciated the phenomenal
					investment that goes into critical, large-scale conservation projects.
					Virunga and its gorillas couldn't exist without tourism revenue. They
					also wouldn't exist without the brave people risking their lives to
					protect it, as seen in the Virunga documentary released at a similar
					time.
				</p>
			</section>
		</m.main>
	);
};
