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
import { gsap } from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import { useEffect } from "react";

export const CharDham1 = () => {
	const [floating, setFloating] = useState(true);

	function toggleFloating() {
		setFloating(!floating);
	}

	// gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
	//
	// gsap.defaults({ ease: "none" });
	//
	// useEffect(() => {
	// 	const pulses = gsap
	// 		.timeline({
	// 			defaults: {
	// 				scale: 2,
	// 				autoAlpha: 1,
	// 				transformOrigin: "center",
	// 				ease: "elastic(2.5, 1)",
	// 			},
	// 		})
	// 		.to(".ball02, .text01", {}, 0.84)
	// 		.to(".ball03, .text02", {}, 1.36)
	// 		.to(".ball04, .text03", {}, 1.92);
	//
	// 	const main = gsap
	// 		.timeline({
	// 			scrollTrigger: {
	// 				trigger: "#svg",
	// 				scrub: true,
	// 				start: "top center",
	// 				end: "bottom center",
	// 			},
	// 		})
	// 		.to(".ball01", { autoAlpha: 1, duration: 0.05 })
	// 		.from(".theLine", { drawSVG: 0, duration: 4 }, 0)
	// 		.to(
	// 			".ball01",
	// 			{
	// 				motionPath: {
	// 					path: ".theLine",
	// 					align: ".theLine",
	// 					alignOrigin: [0.5, 0.5],
	// 				},
	// 				duration: 4,
	// 			},
	// 			0
	// 		)
	// 		.add(pulses, 0);
	// }, []);





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


