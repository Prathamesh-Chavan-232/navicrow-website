import { Hero } from "../components/homepage/Hero";
import { Header } from "/src/components/navbar/Header";
import { WhyUs } from "../components/homepage/WhyUs";
import { Carousel } from "../components/homepage/Carousel";
import { TravelStyle } from "../components/homepage/TravelStyle";
import { Footer } from "../components/footer/Footer";

import { motion as m } from "framer-motion";

export const Home = () => {
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
				<Header clr="red" />
				<Hero />
			</div>
			{/* Section 2 - About us (Why Niarra?) */}
			<WhyUs />
			{/* Section 3 - Carousel */}
			{/* <Carousel /> */}
			{/* Section 4 - Travel Styles */}
			{/* <TravelStyle /> */}
			<Footer />
		</m.main>
	);
};
