
import React from "react";
import { Card } from "./utlis/Card";
import img from "../assets/landscapes/char-dham-1.jpg";
import img2 from "../assets/landscapes/travel-style-1.jpg";
import img3 from "../assets/landscapes/mountains-4.jpg";
export const DoDhamPackages = () => {
	return (
		<div className="py-10 xl:pl-20 bg-light-gray text-black">
			<div className="flex flex-col gap-12 items-center justify-around lg:flex-row">
				<div>
					<h1 className="text-4xl font-fancy">
						Browse Do Dham Packages
					</h1>
				</div>
				{/*  Desktop Travel Style Cards */}
				<div className="flex flex-col items-center justify-center gap-16 lg:flex-row">
					{/* Card 1 */}
					<Card
						img={img}
						title="Do Dham via Haridwar"
						subtitle="Indulge in a blissful honeymoon experience, create cherished memories of love and celebration."
						link="/package/dodham-via-haridwar"
					/>
					<Card
						img={img2}
						title="Dodham via Delhi"
						subtitle="
							Embark on a transformative spiritual journey with our immersive pilgrimage travel style package."
						link="/package/dodham-via-delhi"
					/>
					<Card
						img={img3}
						title="Dodham via Helicopter"
						subtitle="
							Quality time with family and friends, complete flexibility"
						link="/package/dodham-via-helicopter"
					/>
					<Card
						img={img}
						title="Do Dham via Chopta"
						subtitle="Indulge in a blissful honeymoon experience, create cherished memories of love and celebration."
						link="/package/dodham-via-chopta"
					/>
				</div>
			</div>
		</div>
	);
};
