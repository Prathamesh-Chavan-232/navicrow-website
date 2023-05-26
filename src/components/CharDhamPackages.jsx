import React from "react";
import { Card } from "./utlis/Card";
import img from "../assets/landscapes/char-dham-1.jpg";
import img2 from "../assets/landscapes/travel-style-1.jpg";
import img3 from "../assets/landscapes/mountains-4.jpg";
export const CharDhamPackages = () => {
	return (
		<div className="py-10 xl:pl-20 bg-light-gray text-black overflow-x-scroll">
			<div className="flex flex-col gap-12 items-center justify-around">
				<div>
					<h1 className="text-4xl font-fancy">
						Browse Our Best Packages
					</h1>
				</div>
				{/*  Desktop Travel Style Cards */}
				<div className="flex flex-col items-center justify-center gap-16">
					{/* Card 1 */}
					<Card
						img={img}
						title="Char Dham via Haridwar"
						subtitle="Indulge in a blissful honeymoon experience, create cherished memories of love and celebration."
						link="/package/chardham-via-haridwar"
					/>
					<Card
						img={img2}
						title="Chardham via Delhi"
						subtitle="
							Embark on a transformative spiritual journey with our immersive pilgrimage travel style package."
						link="/package/chardham-via-delhi"
					/>
					<Card
						img={img3}
						title="Chardham via Helicopter"
						subtitle="
							Quality time with family and friends, complete flexibility"
						link="/package/chardham-via-helicopter"
					/>
					<Card
						img={img}
						title="Char Dham via Chopta"
						subtitle="Indulge in a blissful honeymoon experience, create cherished memories of love and celebration."
						link="/package/chardham-via-chopta"
					/>
				</div>
			</div>
		</div>
	);
};
