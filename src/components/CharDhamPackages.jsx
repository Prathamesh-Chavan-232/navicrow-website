import React, { useEffect } from "react";
import { Card } from "./utlis/Card";
import img from "../assets/landscapes/char-dham-1.jpg";
import img2 from "../assets/landscapes/travel-style-1.jpg";
import img3 from "../assets/landscapes/mountains-4.jpg";
import Aos from "aos";



export const CharDhamPackages = () => {
  useEffect(()=> {
    Aos.init({duration:1000})
  })
	return (
		<div className="py-10 px-6 bg-light-gray text-black">

			<div className="flex flex-col gap-12 items-center justify-center"> 
				{/*  Desktop Travel Style Cards */}
				<div>
					<h1 data-aos="zoom-in-up" className="text-4xl font-fancy">
						Browse Our Best Packages
					</h1>
				</div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
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
						img={img}
						title="Chardham via Helicopter"
						subtitle="Embark on a transformative spiritual journey with our immersive pilgrimage travel style package."
						link="/package/chardham-via-helicopter"
					/>
					<Card
						img={img3}
						title="Char Dham via Chopta"
						subtitle="Indulge in a blissful honeymoon experience, create cherished memories of love and celebration."
						link="/package/chardham-via-chopta"
					/>
        </div>
      </div>
    </div>
    );
};
