import React, { useEffect } from "react";
import elephant from "../assets/animals/elephant-2.webp";
import Aos from "aos";
import "aos/dist/aos.css"
const BulletPoint = ({ icon, title, subtitle }) => {
	return (
		<div className="flex flex-col gap-4 xl:w-72">
			<h1 className="font-fancy text-4xl">{title}</h1>
			<p className="lg:text-xl">{subtitle}</p>
		</div>
	);
};
export const WhyUs = ({ clr }) => {

  useEffect(
    ( )=> {
      Aos.init({duration: 600
      })
      
    },[]
  )
	return (
		<div
			className={`${
				clr === "green"
					? "bg-olive-green text-white "
					: "bg-light-gray text-black "
			} h-screen w-screen relative px-4 py-20 flex flex-col items-center justify-center gap-8 text-center xl:px-12`}
		>
			{/* Why niarra & Elephant */}
			<div className="flex flex-col gap-4">
				<h2 className="text-lg">WHAT MAKES US DIFFERENT</h2>
				<h2 className="text-6xl font-fancy" data-aos="fade-down">Why Navicrow</h2>
			</div>
			<div className="w-full flex flex-col-reverse gap-10 justify-around xl:flex-row xl:gap-0">
				<div className="md:px-20 flex flex-col gap-6 xl:gap-20 text-left xl:px-0">
					<div data-aos="fade-right" className="flex"> 
						<div className="w-[100px] hidden xl:block"></div>
						<BulletPoint
							title={"Unforgettable experiences"}
							subtitle={
								"Creating your trip is entirely collaborative and our Travel Researchers are here for every step."
							}
						/>
					</div>
					<div data-aos="fade-right" className="flex">
						<div className="w-[200px] hidden xl:block"></div>
						<BulletPoint
							title={"Positive Impact"}
							subtitle={
								"Curated sustainable experiences and accommodation that maximize the benefits to local people and place."
							}
						/>
					</div>
					<div data-aos="fade-right" className="flex">
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
				<div className="md:px-20 flex flex-col gap-3 md:text-2xl xl:text-lg text-left xl:px-0 xl:w-96">
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
				<div className="flex w-full xl:hidden justify-center items-center">
					<img src={elephant} alt="" className="w-64 h-96 xl:hidden" />
				</div>
			</div>
		</div>
	);
};
