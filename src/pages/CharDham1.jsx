import React from "react";
import { Header } from "../components/navbar/Header";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { WhyUs } from "../components/WhyUs";
import { FloatingButton } from "../components/utlis/FloatingButton";
import { Footer } from "../components/footer/Footer";
import { Main } from "../components/Main";
import { AboutPackage } from "../components/AboutPackage";
import { Dayplan } from "../components/Dayplan";  
import { useState } from "react";
import { charDhamPackage1 as packageData } from "../data";
import charDhamTemple from "../assets/landscapes/char-dham-1.jpg";
import Aos from "aos";
import { useEffect } from "react";

export const CharDham1 = () => {
	const [floating, setFloating] = useState(true);

	function toggleFloating() {
		setFloating(!floating);
	}

	gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

	gsap.defaults({ ease: "none" });

	useEffect(() => {
		const pulses = gsap
			.timeline({
				defaults: {
					scale: 2,
					autoAlpha: 1,
					transformOrigin: "center",
					ease: "elastic(2.5, 1)",
				},
			})
			.to(".ball02, .text01", {}, 0.84)
			.to(".ball03, .text02", {}, 1.36)
			.to(".ball04, .text03", {}, 1.92);

		const main = gsap
			.timeline({
				scrollTrigger: {
					trigger: "#svg",
					scrub: true,
					start: "top center",
					end: "bottom center",
				},
			})
			.to(".ball01", { autoAlpha: 1, duration: 0.05 })
			.from(".theLine", { drawSVG: 0, duration: 4 }, 0)
			.to(
				".ball01",
				{
					motionPath: {
						path: ".theLine",
						align: ".theLine",
						alignOrigin: [0.5, 0.5],
					},
					duration: 4,
				},
				0
			)
			.add(pulses, 0);
	}, []);





	return (
		<div className="">
			{/* Section 1 - Navbar + Hero */}
			<div className="travel-package">
				<Header clr="white" toggleFloating={toggleFloating} />
				<Main
					heading={`${packageData.duration} DAY-TRIP`}
					title={packageData.title}
					price={`₹ ${packageData.price} /-`}
				/>
			</div>
 

<div className="p=6 lg:p-40">
  
      <div className="bg-carousel-2">
				<svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 1200">
					<path className="line01 line" d="M 10 200  600 200"></path>
					<path className="line02 line" d="M 10 400  600 400"></path>
					<path className="line03 line" d="M 10 600  600 600"></path>
					<path className="line04 line" d="M 10 800  600 800"></path>
					<path className="line05 line" d="M 10 1000  600 1000"></path>
					<text className="text01" x="30" y="190">
						2018
					</text>
					<text className="text02" x="30" y="390">
						2019
					</text>
					<text className="text03" x="30" y="590">
						2020
					</text>

					<path
						className="theLine"
						d="M -5,0
           Q 450 230 300 450 
           T 130 750
           Q 100 850 300 1000
           T 150 1200"
						fill="none"
						stroke="orange"
						strokeWidth="10px"
					/>

					<circle className="ball ball01" r="20" cx="50" cy="100"></circle>
					<circle className="ball ball02" r="20" cx="278" cy="201"></circle>
					<circle className="ball ball03" r="20" cx="327" cy="401"></circle>
					<circle className="ball ball04" r="20" cx="203" cy="601"></circle>
				</svg>
			</div>
</div> 

			{/* Section - About the Trip */}
			<AboutPackage packageData={packageData} />
			{/* Day wise */}
			<Dayplan anim="zoom-in-right" days={"1 - 4"} packageData={packageData} reverse={false} />
			<img src={charDhamTemple} alt="" className="lg:hidden" />
			<div className="hidden main-img h-screen lg:block">
				<img
					src={charDhamTemple}
					alt=""
					className="absolute left-1/2 w-[600px]"
				/>
			</div>
			{/* Section - About the Trip */}
			<Dayplan anim="zoom-out-left" packageData={packageData} reverse={true} />
			<div className="hidden main-img h-screen lg:block">
				<img
					src={charDhamTemple}
					alt=""
					className="absolute left-1/2 w-[600px]"
				/>
			</div>
			<Dayplan days={"1 - 5"} anim="zoom-in-right" packageData={packageData} reverse={false} />
			<TravelStyleCards />
			<WhyUs />
			<div className={`${floating ? "block" : "hidden"}`}>
				<FloatingButton />
			</div>
			<Footer />
		</div>
	);
};


