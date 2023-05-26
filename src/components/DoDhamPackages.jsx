
import React from "react";
import { Card } from "./utlis/Card";
import img from "../assets/landscapes/char-dham-1.jpg";
import img2 from "../assets/landscapes/travel-style-1.jpg";
import img3 from "../assets/landscapes/mountains-4.jpg";
export const DoDhamPackages = () => {
	return (
		<div className="py-10 px-6 bg-light-gray text-black">
			<div className="flex flex-col gap-12 items-center justify-around">
				<div>
					<h1 className="text-4xl font-fancy text-center">
						Browse Do Dham Packages
					</h1>
				</div>
				{/*  Desktop Travel Style Cards */}
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
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
						subtitle="Embark on a transformative spiritual journey with our immersive pilgrimage travel style package."
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
