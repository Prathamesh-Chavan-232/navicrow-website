import React from "react";
import { Header } from "../components/navbar/Header";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { WhyUs } from "../components/WhyUs";
import { FloatingButton } from "../components/utlis/FloatingButton";
import { Footer } from "../components/footer/Footer";
import { Main } from "../components/Main";
import charDhamTemple from "../assets/landscapes/char-dham-1.jpg";
import { useState } from "react";
import { charDhamPackage1 as packageData } from "../data";
import Aos from "aos";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";

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
<div className="p-40">
  
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
			<AboutThePage packageData={packageData} />
			{/* Day wise */}
			<Dayplan anim="zoom-in-right" packageData={packageData} reverse={false} />
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
			<Dayplan anim="zoom-in-right" packageData={packageData} reverse={false} />
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
	useEffect(() => {
		Aos.init({ duration: 1200 });
	}, []);

	return (
		<div className="bg-olive-green space-y-20 py-20 overflow-x-hidden">
			<div className="px-20 space-y-20 text-white">
				<div className="flex flex-col text-center">
					<span className="font-medium">OVERVIEW</span>
					<h1 data-aos="zoom-in" className="font-fancy text-6xl">
						{packageData.title}
					</h1>
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
						<div
							data-aos="fade-right"
							className="flex flex-col gap-6 xl:max-w-md"
						>
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
						<div data-aos="fade-up" className="flex flex-col gap-6 xl:max-w-md">
							<span className="text-xs font-medium">HIGHLIGHTS</span>
							<h1 className="text-4xl font-fancy">What's Included</h1>
							<ul className="space-y-4">
								{packageData.included.map((item, i) => {
									return <li key={i}>{item}</li>;
								})}
							</ul>
						</div>
						<div
							data-aos="fade-left"
							className="flex flex-col gap-6 xl:max-w-md"
						>
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

const Dayplan = ({ reverse, anim, packageData }) => {
	useEffect(() => {
		Aos.init({ duration: 1200 });
	}, []);
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
						<h1 className="font-fancy text-6xl"></h1>
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
