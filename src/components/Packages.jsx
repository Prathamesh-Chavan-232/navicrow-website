import React from "react";
import { Card } from "./utlis/Card";
import img from "../assets/landscapes/char-dham-1.jpg"
import img2 from "../assets/landscapes/travel-style-1.jpg"
import img3 from "../assets/landscapes/mountains-4.jpg"
export const Packages = () => {
	return (
		<div className="py-10 pl-20 bg-light-gray text-black">
			<div className="flex items-center justify-around">
				<div>
					<h1 className="text-4xl font-fancy">Browse Our {<br/>} Best Packages</h1>
				</div>
					{/*  Desktop Travel Style Cards */}
					<div className="hidden items-center justify-center gap-16 xl:flex">
						{/* Card 1 */}
						<Card
							img={img}
							title="Char Dham via Haridwar"
							subtitle="Indulge in a blissful honeymoon experience, create cherished memories of love and celebration."
							link="honeymoons"
						/>
						<Card
							img={img2}
							title="Chardham via Delhi"
							subtitle="
							Embark on a transformative spiritual journey with our immersive pilgrimage travel style package."
							link="pilgrimage-tour"
						/>
						<Card
							img={img3}
							title="Chardham via Helicopter"
							subtitle="
							Quality time with family and friends, complete flexibility"
							link="family-travel"
						/>
						<Card
							img={img}
							title="Char Dham via Haridwar"
							subtitle="Indulge in a blissful honeymoon experience, create cherished memories of love and celebration."
							link="honeymoons"
						/>
					</div>
			</div>
		</div>
	);
};
