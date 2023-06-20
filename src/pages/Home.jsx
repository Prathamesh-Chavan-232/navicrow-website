import { WhyUs } from "../components/WhyUs";
import { Main } from "../components/Main";
import { Header } from "/src/components/navbar/Header";
import { Carousel } from "../components/Carousel";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { FloatingButton } from "../components/utlis/FloatingButton";
import { PackageCards } from "../components/PackageCards";
import { motion as m } from "framer-motion";
import { useState } from "react";
import img from "../assets/landscapes/mountains-3.jpg";

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
			<Main heading={"CONNECTING YOUR JOURNEY WITH PURPOSE"} img={img} />
			{/* Section 2 - About us (Why Niarra?) */}
			<WhyUs clr="green" />

			{/* Packages Card */}
			<PackageCards id="char-dham" />
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
