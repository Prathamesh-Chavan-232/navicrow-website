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
		<div className="">
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
			<div className="bg-olive-green space-y-20 py-20 overflow-x-hidden">
				<div className="flex flex-col items-center justify-center text-center text-white">
					<span className="font-medium">OVERVIEW</span>
					<h1 className="font-fancy text-6xl">Char Dham Yatra via Haridwar</h1>
				</div>
				<div className="px-4 flex flex-col gap-6 items-center justify-around lg:flex-row">
					<div className="max-w-[400px]">
						<img src={charDhamTemple} alt="" />
					</div>
					<div className="flex flex-col gap-4 lg:max-w-[40rem] text-white text-xl">
						<p>
							We invite you to embark on a transformative and opulent journey to
							Char Dham.
						</p>
						<p>
							From exquisite accommodations and personalized services to gourmet
							dining and exclusive helicopter transfers, we provide a seamless
							and lavish expedition that allows you to immerse yourself in the
							divine while being enveloped in utmost comfort. Join us on this
							divine odyssey to Char Dham and discover a truly unparalleled
							journey of the soul.
						</p>
						<p>
							Nestled amidst the awe-inspiring Himalayas, Char Dham comprises
							the revered pilgrimage sites of Yamunotri, Gangotri, Kedarnath,
							and Badrinath. Our luxurious trip to Char Dham offers an
							extraordinary blend of spirituality and indulgence, ensuring an
							unforgettable experience.
						</p>
					</div>
					<div className="grid grid-cols-3"></div>
				</div>
			</div>
			{/* Day wise */}
			<Dayplan />
			<img src={charDhamTemple} alt="" className="lg:hidden" />
			<div className="hidden main-img h-screen lg:block">
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
