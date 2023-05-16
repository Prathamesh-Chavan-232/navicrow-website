import { Hero } from "../components/homepage/Hero";
import { Navbar } from "/src/components/navbar/Navbar";
import { WhyUs } from "../components/homepage/WhyUs";
import { useEffect, useState } from "react";
import { Carousel } from "../components/homepage/Carousel";
import { TravelStyle } from "../components/homepage/TravelStyle";
import { motion as m } from "framer-motion";
// TODO NOW:
// [ x ]: Carousel
// [ x ]: Footer
// [ ]: Why Us Section
// [ ]: About Us Page
// [ ]: Navbar Page Transition
// [ ]: Enquire Form Page Transition
// [ ]: Travel Styles
// [ ]:

// TODO:
// [ ] - Basic Layout
// [ ] - Proper Layout
// [ ] - Drop downs Carousels
// [ ] - Check all Fonts, Sizes, Heading tags, html tags.
// [ ] - Animations & Other Fancy stuff
// [ ] - Optimization, Better Separation of components, code spiltting, etc
// [ ] - (Optional if Loading is good) - Switch to Next & pnpm
export const Home = () => {
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
		// Hero Section
		<m.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: "easeOut" }}
		>
			{/* Section 1 - Navbar + Hero */}
			<div className="hero">
				<Header />
				<Hero />
			</div>
			{/* Section 2 - About us (Why Niarra?) */}
			<WhyUs />
			{/* Section 3 - Carousel */}
			<Carousel />
			{/* Section 4 - Travel Styles */}
			<TravelStyle />
		</m.main>
	);
};
