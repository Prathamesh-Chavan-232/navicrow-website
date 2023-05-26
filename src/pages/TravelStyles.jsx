import React from "react";
import { Header } from "../components/navbar/Header";
import { Footer } from "../components/footer/Footer";
import { WhyUs } from "../components/WhyUs";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { FloatingButton } from "../components/utlis/FloatingButton";
import { Main } from "../components/Main";
import { useState } from "react";
import {CharDhamPackages} from "../components/CharDhamPackages"

export const TravelStyles = () => {
	const [floating, setFloating] = useState(true);

	function toggleFloating() {
		setFloating(!floating);
	}
	return (
		<div>
			{/* Section 1 - Navbar + Hero */}
			<div className="travel-style">
				<Header clr="white" toggleFloating={toggleFloating} />
				<Main
					heading="TRANSFORMATIVE SPIRTUAL JOURNEY "
					title="Pilgrimage Tour"
				/>
			</div>
			<div></div>
			{/* Section 2 - About us (Why Niarra?) */}
      <CharDhamPackages />
			<TravelStyleCards />
			<WhyUs />
			<div className={`${floating ? "block" : "hidden"}`}>
				<FloatingButton />
			</div>
			<Footer />
		</div>
	);
};
