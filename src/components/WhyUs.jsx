import React from "react";
import elephant from "../assets/animals/elephant-2.webp";
const BulletPoint = ({ icon, title, subtitle }) => {
	return (
		<div className="flex flex-col gap-4 xl:w-60">
			<h1 className="font-fancy text-4xl">{title}</h1>
			<p>{subtitle}</p>
		</div>
	);
};
export const WhyUs = ({ clr }) => {
	return (
		<div
			className={`${
				clr === "green"
					? "bg-olive-green text-white "
					: "bg-light-gray text-black "
			} relative px-4 py-20 flex flex-col items-center justify-start gap-8 text-center xl:px-12`}
		>
			{/* Why niarra & Elephant */}
			<div className="flex flex-col gap-4">
				<h2 className="text-lg">WHAT MAKES US DIFFERENT</h2>
				<h2 className="text-6xl font-fancy">Why Navicrow</h2>
			</div>
			<div className="w-full flex flex-col-reverse items-center gap-10 justify-around xl:flex-row xl:gap-0">
				<div className="flex flex-col gap-6 xl:gap-20 items-center text-left lg:text-center">
					<div className="flex">
						<div className="w-[50px] hidden xl:block"></div>
						<BulletPoint
							title={"Unforgettable experiences"}
							subtitle={
								"Creating your trip is entirely collaborative and our Travel Researchers are here for every step."
							}
						/>
					</div>
					<div className="flex">
						<div className="w-[100px] hidden xl:block"></div>
						<BulletPoint
							title={"Positive Impact"}
							subtitle={
								"Curated sustainable experiences and accommodation that maximize the benefits to local people and place."
							}
						/>
					</div>
					<div className="flex">
						<div className="w-[400px] hidden xl:block"></div>
						<BulletPoint
							title={"Fairness and Transparency"}
							subtitle={
								"An open, competitive pricing structure that ensures more money goes to where it's needed in the destination."
							}
						/>
					</div>
				</div>
				<img
					src={elephant}
					alt=""
					className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-96 xl:block"
				/>
				<div className="flex flex-col gap-3 text-2xl xl:text-lg text-left xl:w-96">
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

				<img src={elephant} alt="" className="w-64 h-96 xl:hidden" />
			</div>
		</div>
	);
};
