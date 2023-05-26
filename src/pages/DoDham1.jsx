

import React from "react";
import { Header } from "../components/navbar/Header";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { WhyUs } from "../components/WhyUs";
import { FloatingButton } from "../components/utlis/FloatingButton";
import { Footer } from "../components/footer/Footer";
import { Main } from "../components/Main";
import charDhamTemple from "../assets/landscapes/char-dham-1.jpg";
import { useState } from "react";
import { charDhamPackage1 } from "../data";

export const DoDham1 = () => {
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
					heading={`${charDhamPackage1.duration} DAY-TRIP`}
					title={charDhamPackage1.title}
					price={`₹ ${charDhamPackage1.price} /-`}
				/>
			</div>

			{/* Section - About the Trip */}
			<AboutThePage packageData={charDhamPackage1} />
			{/* Day wise */}
			<Dayplan packageData={charDhamPackage1} reverse={false} />
			<img src={charDhamTemple} alt="" className="lg:hidden" />
			<div className="hidden main-img h-screen lg:block">
				<img
					src={charDhamTemple}
					alt=""
					className="absolute left-1/2 w-[600px]"
				/>
			</div>
			{/* Section - About the Trip */}
			<Dayplan packageData={charDhamPackage1} reverse={true} />
			<div className="hidden main-img h-screen lg:block">
				<img
					src={charDhamTemple}
					alt=""
					className="absolute left-1/2 w-[600px]"
				/>
			</div>
			<Dayplan packageData={charDhamPackage1} reverse={false} />
			<TravelStyleCards />
			<WhyUs />
			<div className={`${floating ? "block" : "hidden"}`}>
				<FloatingButton />
			</div>
			<Footer />
		</div>
	);
};

const AboutThePage = ({ packageData }) => {
	return (
		<div className="bg-olive-green space-y-20 py-20 overflow-x-hidden">
			<div className="px-20 space-y-20 text-white">
				<div className="flex flex-col text-center">
					<span className="font-medium">OVERVIEW</span>
					<h1 className="font-fancy text-6xl">{packageData.title}</h1>
				</div>
				<div className="flex flex-col gap-12 items-center justify-center xl:gap-64 xl:flex-row">
					<div className="max-w-[400px]">
						<img src={charDhamTemple} alt="" />
					</div>
					<div className="flex flex-col gap-4  xl:max-w-sm  text-white text-md">
						<p className="text-xl">
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
				</div>
				<div>
					<div className="flex flex-col gap:20 xl:gap-32 xl:flex-row xl:justify-center xl:items-center">
						<div className="flex flex-col gap-6 xl:max-w-md">
							<span className="text-xs font-medium">HIGHLIGHTS</span>
							<h1 className="text-4xl font-fancy">Trip Highlights</h1>
							<ul className="space-y-4">
								{packageData.tripHighlights.map((item, i) => {
									return (
										<li key={i} className="">
											{item}
										</li>
									);
								})}
							</ul>
						</div>
						<div className="flex flex-col gap-6 xl:max-w-md">
							<span className="text-xs font-medium">HIGHLIGHTS</span>
							<h1 className="text-4xl font-fancy">What's Included</h1>
							<ul className="space-y-4">
								{packageData.included.map((item, i) => {
									return <li key={i}>{item}</li>;
								})}
							</ul>
						</div>
						<div className="flex flex-col gap-6 xl:max-w-md">
							<span className="text-xs font-medium">HIGHLIGHTS</span>
							<h1 className="text-4xl font-fancy">What's Excluded</h1>
							<ul className="space-y-4">
								{packageData.excluded.map((item, i) => {
									return <li key={i}>{item}</li>;
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Dayplan = ({ reverse, packageData}) => {
	return (
		<div>
			<div className="bg-light-gray py-40">
				{/* Split  */}
				<div
					className={`px-8 flex flex-col gap-6 lg:gap-[20rem] items-center justify-center ${
						reverse ? "lg:flex-row-reverse" : "lg:flex-row"
					} `}
				>
					<div className="text-center lg:text-left max-w-[20rem]">
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
		</div>
	);
};
