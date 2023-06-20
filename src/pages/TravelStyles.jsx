import React from "react";
import { Header } from "../components/navbar/Header";
import { Footer } from "../components/footer/Footer";
import { WhyUs } from "../components/WhyUs";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { FloatingButton } from "../components/utlis/FloatingButton";
import { Main } from "../components/Main";
import { InfoComponent } from "../components/InfoComponent";
import { PackageCards } from "../components/PackageCards";
import Aos from "aos";
import { useEffect } from "react";
import { useState } from "react";
import img from "../assets/landscapes/kedarnath.png";

export const TravelStyles = () => {
	const [floating, setFloating] = useState(true);

	function toggleFloating() {
		setFloating(!floating);
	}
	return (
		<div>
			{/* Section 1 - Navbar + Hero */}
			<div className="travel-style"></div>
			{/* <Header clr="white" toggleFloating={toggleFloating} /> */}
			<Main
				heading="TRANSFORMATIVE SPIRTUAL JOURNEY "
				title="Pilgrimage Tour"
				img={img}
			/>
			<InfoComponent />
			{/* Section 2 - About us (Why Niarra?) */}
			<PackageCards id="char-dham" />
			<TravelStyleCards />
			<WhyUs />
			<div className={`${floating ? "block" : "hidden"}`}>
				<FloatingButton />
			</div>
		</div>
	);
};
