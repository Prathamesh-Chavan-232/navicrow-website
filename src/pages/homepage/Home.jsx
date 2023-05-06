import { Hero } from "./components/Hero";
import { Navbar } from "../../components/Navbar";
import { WhyUs } from "./components/WhyUs";
// import { useEffect, useState } from "react";

// TODO:
// [ ] - Basic Layout
// [ ] - Proper Layout
// [ ] - Drop downs Carousels
// [ ] - Responsive
// [ ] - Fonts
// [ ] - Animations & Other Fancy stuff
// [ ] - Optimization, Better Separation of components, code spiltting, etc
export const Home = () => {
	return (
		// Hero Section
		<div className="home">
			{/* Section 1 - Navbar + Hero */}
			<div className="hero">
				<Navbar />
				<Hero />
			</div>
			{/* Section 2 - About us (Why Niarra?) */}
			<WhyUs />
		</div>
	);
};
