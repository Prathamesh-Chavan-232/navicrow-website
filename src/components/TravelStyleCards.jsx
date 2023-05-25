import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./utlis/Card";
import travelCard1 from "../assets/landscapes/travel-style-1.jpg";
import travelCard2 from "../assets/landscapes/travel-style-1.jpg";

export const TravelStyleCards = () => {
	return (
		<div className="text-black">
			<div className="px-6 conic">
				<div className="py-24 flex flex-col items-center font-medium gap-10">
					<span className="xl:hidden">TRAVEL IN STYLE</span>
					<span className="xl:hidden text-center font-fancy text-4xl lg:text-7xl">
						Find Travel Inspiration by{" "}
						<span className="font-normal italic">style</span>
					</span>

					{/*  Mobile Travel Style Cards (Replace With Slider)  */}
					<div className="flex flex-col gap-8 items-center xl:hidden">
						<div className="relative">
							<span className="text-white font-fancy text-4xl text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-6xl lg:text-8xl">
								Pilgrimage
							</span>
							<img src={travelCard1} alt="" />
						</div>
						<span className="text-xl text-center lg:text-3xl">
							Luxury Family safaris and inspiring wildlife adventures with a
							positive impact
						</span>
						<button className="px-10 py-4 border border-olive-green bg-transparent text-2xl text-olive-green rounded-full baseline transition-color duration-200 hover:text-white hover:bg-olive-green">
							<a href="/travel-styles/pilgrimage-tour">Discover more</a>
						</button>
					</div>

					{/*  Desktop Travel Style Cards */}
					<div className="px-36 hidden items-center justify-center gap-16 xl:flex">
						{/* Card 1 */}
						<Card
							img={travelCard1}
							title="Honeymoons"
							subtitle="
								Luxury Family safaris and inspiring wildlife adventures with a
								positive impact
							"
							link="honeymoons"
						/>
						<Card
							isCenter={true}
							img={travelCard2}
							title="Pilgrimage"
							subtitle="
								Luxury Family safaris and inspiring wildlife adventures with a
								positive impact
							"
							link="pilgrimage-tour"
						/>
						<Card
							img={travelCard1}
							title="Family Travel"
							subtitle="
							Quality time with family and friends, complete flexibility"
							link="family-travel"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
