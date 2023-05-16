import { Hero } from "../components/homepage/Hero";
import { Header } from "/src/components/navbar/Header";
import { WhyUs } from "../components/homepage/WhyUs";
import { Carousel } from "../components/homepage/Carousel";
import { TravelStyle } from "../components/homepage/TravelStyle";
import { Footer } from "../components/footer/Footer";

import { motion as m } from "framer-motion";

const content = {
	animate: {
		transition: { staggerChildren: 10.1, delayChildren: 0.6 },
	},
};
const nav = {
	initial: { y: -20, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: [0.6, -0.05, 0.01, 0.99],
		},
	},
};

export const Home = () => {
	return (
		// Hero Section
		<m.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 1 }}
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
			<Footer />
		</m.main>
	);
};
