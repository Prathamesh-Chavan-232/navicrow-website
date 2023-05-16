import { Hero } from "./components/Hero";
import { Navbar } from "/src/components/navbar/Navbar";
import { WhyUs } from "./components/WhyUs";
import { useEffect, useState } from "react";
import { Carousel } from "./components/Carousel";
import { TravelStyles } from "./components/TravelStyles";

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
// [ ] - Responsive
// [ ] - Fonts
// [ ] - Animations & Other Fancy stuff
// [ ] - Optimization, Better Separation of components, code spiltting, etc
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
		<div className="home">
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
			<TravelStyles />
		</div>
	);
};
