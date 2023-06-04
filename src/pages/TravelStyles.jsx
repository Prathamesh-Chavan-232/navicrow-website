import React from "react";
import { Header } from "../components/navbar/Header";
import { Footer } from "../components/footer/Footer";
import { WhyUs } from "../components/WhyUs";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { FloatingButton } from "../components/utlis/FloatingButton";
import { Main } from "../components/Main";
import { useState } from "react";
import { CharDhamPackages } from "../components/CharDhamPackages";
import Aos from "aos";
import { useEffect } from "react";
import charDhamTemple from "../assets/landscapes/char-dham-1.jpg";
import { InfoComponent } from "./InfoComponent";

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
      <InfoComponent />
			{/* Section 2 - About us (Why Niarra?) */}
			<CharDhamPackages />
			<TravelStyleCards />
			<WhyUs />
			<div className={`${floating ? "block" : "hidden"}`}>
				<FloatingButton />
			</div>
		</div>
	);
};
