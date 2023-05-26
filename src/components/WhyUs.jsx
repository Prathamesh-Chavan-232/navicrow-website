import React from "react";
import elephant from "../assets/animals/elephant-2.webp";
import { gsap } from "gsap";
import { useRef } from "react";
import { useIntersection } from "react-use";
export const WhyUs = ({ clr }) => {
	// Ref for our element
	const sectionRef = useRef(null);
	// All the ref to be observed

	const intersection = useIntersection(sectionRef, {
		root: null,
		rootMargin: "0px",
		threshold: 0.5,
	});

	// Animation for fading in
	const fadeIn = (element) => {
		gsap.to(element, 1, {
			opacity: 1,
			ease: "power4.out",
			stagger: {
				amount: 0.3,
			},
		});
	};
	// Animation for fading out
	const fadeOut = (element) => {
		gsap.to(element, 1, {
			duration: 0.5,
			opacity: 0,
			y: -20,
			ease: "power4.out",
		});
	};

	// checking to see when the vieport is visible to the user
	intersection && intersection.intersectionRatio < 0.2
		? fadeOut(".fadeIn")
		: fadeIn(".fadeIn");

	return (
		<div
			className={`${
				clr === "green"
					? "bg-olive-green text-white "
					: "bg-light-gray text-black "
			} relative px-4 py-20 flex flex-col items-center gap-12 text-center lg:px-12 lg:py-40`}
		>
			{/* Why niarra & Elephant */}
			<div className="">
				<h2 className="text-lg">WHAT MAKES US DIFFERENT</h2>
				<h2 className="text-6xl font-fancy fadeIn">Why Navicrow</h2>
			</div>
			<div className="w-full flex flex-col-reverse items-center gap-10 justify-around lg:flex-row lg:gap-0">
				<div className="flex flex-col gap-6 lg:gap-20 text-left lg:text-center">
					<div className="flex">
						<div className="w-[100px] hidden lg:block"></div>
						<div className="flex flex-col gap-4 w-72 lg:w-60">
							<h1 className="font-fancy text-2xl">Unforgettable experiences</h1>
							<p>
								Creating your trip is entirely collaborative and our Travel
								Researchers are here for every step.
							</p>
						</div>
					</div>
					<div className="flex">
						<div className="w-[200px] hidden lg:block"></div>
						<div className="flex flex-col gap-4 w-60">
							<h1 className="font-fancy text-2xl">Positive Impact</h1>
							<p>
								Curated sustainable experiences and accommodation that maximize
								the benefits to local people and place.
							</p>
						</div>
					</div>
					<div className="flex">
						<div className="w-[400px] hidden lg:block"></div>
						<div className="flex flex-col gap-4 w-60">
							<h1 className="font-fancy text-2xl">Fairness and Transparency</h1>
							<p>
								An open, competitive pricing structure that ensures more money
								goes to where it's needed in the destination.
							</p>
						</div>
					</div>
				</div>
				<img
					src={elephant}
					alt=""
					className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-96 lg:block"
				/>
				<div className="flex flex-col gap-3 text-lg text-left lg:w-96">
					<p className="">
						Navicrow Travels is an innovative tour and travel company, offering
						unique travel and holiday experiences. Our passion lies in
						revolutionizing the way people undertake this sacred journey, and we
						are dedicated to providing exceptional services that leave a lasting
						impact.
					</p>
					<p className="">
						Derived from the concept of navigating through divine realms, the
						name "Navicrow" encapsulates our commitment to guiding pilgrims
						through the transformative Char Dham Yatra. We understand the
						profound significance of this pilgrimage and strive to curate
						extraordinary trips that go beyond conventional travel experiences.
					</p>
					<p className="">
						At Navicrow Travels, we firmly believe in the power of travel to
						enrich lives.
					</p>
				</div>

				<img src={elephant} alt="" className="w-64 h-96 lg:hidden" />
			</div>
		</div>
	);
};
