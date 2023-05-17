import React from "react";
import { WhyUs } from "../components/homepage/WhyUs";
import { Header } from "../components/navbar/Header";
import { Footer } from "../components/footer/Footer";
import { Main } from "../components/Main";
export const TravelStyle = () => {
	return (
		<div>
			{/* Section 1 - Navbar + Hero */}
			<div className="travel-style">
				<Header />
				<Main />
			</div>
			{/* Section 2 - About us (Why Niarra?) */}
			<WhyUs />
			<Footer />
		</div>
	);
};
