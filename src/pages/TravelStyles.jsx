import React from "react";
import { Header } from "../components/navbar/Header";
import { Footer } from "../components/footer/Footer";
import { WhyUs } from "../components/WhyUs";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { Main } from "../components/Main";

export const TravelStyles = () => {
	return (
		<div>
			{/* Section 1 - Navbar + Hero */}
			<div className="travel-style">
				<Header />
				<Main
					heading="LUXURY SAFARIS AND WILDLIFE ADVENTURES"
					title="Family Travel"
				/>
			</div>
			{/* Section 2 - About us (Why Niarra?) */}
			<TravelStyleCards />
			<WhyUs />
			<Footer />
		</div>
	);
};
