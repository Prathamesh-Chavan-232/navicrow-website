import { Header } from "/src/components/navbar/Header";
import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/Hero";
import { Carousel } from "../components/Carousel";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { WhyUs } from "../components/WhyUs";
import { FloatingButton } from "../components/utlis/FloatingButton";
import { motion as m } from "framer-motion";
import { useState } from "react";
import { CharDhamPackages } from "../components/CharDhamPackages";
import { Main } from "../components/Main";

export const Home = () => {
	const [floating, setFloating] = useState(true);

	const getReviews = async () => {
		const res = await fetch(`${API_URL}`);
		const data = await res.json();
		console.log(data);
	};

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
        <Main heading={"CONNECTING YOUR JOURNEY WITH PURPOSE"} />
      </div>
      {/* Section 2 - About us (Why Niarra?) */}
      <WhyUs clr="green" />

			{/* Packages Card */}
			<CharDhamPackages />
			{/* Section 3 - Carousel */}
			<Carousel />
			{/* Section 4 - Travel Styles */}
			<TravelStyleCards />
			<div className={`${floating ? "block" : "hidden"}`}>
				<FloatingButton />
			</div>
	</m.main>
	);
};
