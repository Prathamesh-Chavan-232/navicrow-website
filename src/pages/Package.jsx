import React from "react";
import { Header } from "../components/navbar/Header";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { WhyUs } from "../components/WhyUs";
import { FloatingButton } from "../components/FloatingButton";
import { Footer } from "../components/footer/Footer";
import { useState } from "react";
import { Main } from "../components/Main";
import { Dayplan } from "../components/Dayplan";
import charDhamTemple from "../assets/landscapes/char-dham-1.jpg";

export const Package = () => {
	const [floating, setFloating] = useState(true);

	function toggleFloating() {
		setFloating(!floating);
	}
	return (
		<div>
			{/* Section 1 - Navbar + Hero */}
			<div className="travel-package">
				<Header clr="white" toggleFloating={toggleFloating} />
				<Main
					heading="11-DAY TRIP"
					title="Chardham via Haridwar"
					price="₹ 18000 /-"
				/>
			</div>

			{/* Section - About the Trip */}
			<div className="bg-olive-green py-60"></div>
			{/* Day wise */}
			<Dayplan />
			<div className="flex main-img h-screen">
				<img
					src={charDhamTemple}
					alt=""
					className="absolute left-1/2 w-[600px]"
				/>
			</div>
			{/* Section - About the Trip */}
			<Dayplan reverse={true} />
			{/* Section 2 - About us (Why Niarra?) */}
			<TravelStyleCards />
			<WhyUs />
			<div className={`${floating ? "block" : "hidden"}`}>
				<FloatingButton />
			</div>
			<Footer />
		</div>
	);
};
