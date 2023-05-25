import { Header } from "/src/components/navbar/Header";
import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/Hero";
import { Carousel } from "../components/Carousel";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { WhyUs } from "../components/WhyUs";
import { motion as m } from "framer-motion";
import { FloatingButton } from "../components/FloatingButton";
import { useState } from "react";
export const Home = () => {
	const [floating, setFloating] = useState(true);

	function toggleFloating() {
		setFloating(!floating);
	}
	return (
		// Hero Section
		<m.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: "easeOut" }}
			className="text-white"
		>
			{/* Section 1 - Navbar + Hero */}
			<div className="hero">
				<Header clr="white" toggleFloating={toggleFloating} />
				<Hero />
			</div>
			{/* Section 2 - About us (Why Niarra?) */}
			<WhyUs clr="green" />

			{/* Section 3 - Carousel */}
			<Carousel />
			{/* Section 4 - Travel Styles */}
			<TravelStyleCards />
			<div className={`${floating ? "block" : "hidden"}`}>
				<FloatingButton />
			</div>
			<Footer />
		</m.main>
	);
};
