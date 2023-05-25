import React from "react";
import elephant from "../assets/animals/elephant-2.webp";
export const WhyUs = ({ clr }) => {
	return (
		<div
			className={`${
				clr === "green"
					? "bg-olive-green text-white "
					: "bg-light-gray text-black "
			} px-12 py-20 flex flex-col items-center gap-12 text-center lg:py-40`}
		>
			{/* Why niarra & Elephant */}
			<div>
				<h2 className="text-lg">WHAT MAKES US DIFFERENT</h2>
				<h2 className="text-6xl font-fancy">Why Book with Navicrow</h2>
			</div>
			<div className="flex flex-col items-center justify-center gap-32 lg:flex-row">
				<img src={elephant} alt="" className="w-64 h-96" />
				<div className="flex flex-col gap-3 text-xl text-left lg:w-96">
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
			</div>
		</div>
	);
};
