import React from "react";
import { Header } from "../components/navbar/Header";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { WhyUs } from "../components/WhyUs";
import { FloatingButton } from "../components/FloatingButton";
import { Footer } from "../components/footer/Footer";
import { useState } from "react";
import { Main } from "../components/Main";
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
			<div className="bg-light-gray py-60">
				{/* Split  */}
				<div className="flex gap-[20rem] items-center justify-center">
					<div className="max-w-[20rem]">
						<span>Days 1 - 4</span>
						<h1 className="font-fancy text-6xl">
							<span className="font-light italic">Haridwar </span>to Barkot
						</h1>
					</div>
					<div className="flex flex-col gap-4 max-w-[30rem] text-xl">
						<p>
							On arrival driver will pick you up and proceed to Barkot via
							Dehradun. Start your journey towards the first dham – Yamunotri.
							On the way you can explore Mussoorie, and after reaching Barkot
							witness the mesmerizing beauty of Snow Capped Peaks and overnight
							stay at hotel in Barkot.
						</p>
						<p>
							After an early breakfast, you will start your journey towards
							Yamunotri. Start your 5 km Trek from Janki Chatti to Yamunotri,
							you can take a dip in Suryakund and worship the ancient
							Divyashila. After darshan return to Janki Chatti and drive back
							towards Barkot, after dinner overnight stay at hotel in Barkot.
						</p>
					</div>
				</div>
			</div>
			<div className="flex main-img h-screen">
				<img
					src={charDhamTemple}
					alt=""
					className="absolute left-1/2 w-[600px]"
				/>
			</div>

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
