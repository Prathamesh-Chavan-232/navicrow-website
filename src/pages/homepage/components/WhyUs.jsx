import React from "react";

export const WhyUs = () => {
	return (
		<div className="w-screen h-screen relative flex justify-center bg-olive-green">
			{/* Why niarra & Elephant */}
			<div className="mt-20 space-y-8 text-center">
				<h2 className="text-lg">WHAT MAKES US DIFFERENT</h2>
				<h2 className="text-6xl font-fancy">Why Niarra</h2>
				<div className="flex flex-col space-x-6">
					<img
						src="/assets/animals/elephant-portrait.avif"
						alt=""
						className="w-64 h-96"
					/>
					<img
						src="/assets/animals/elephant.jpg"
						alt=""
						className="hidden lg:block"
					/>
				</div>
			</div>
			{/* Absolute Divs */}
			<div className="w-full h-full absolute text-xl">
				{/* Left side paragraphs */}
				{/* para 1 */}
				<div className="absolute w-64 top-[28rem] left-56">
					<p>Unforgettable experiences Creating your trip is entirely</p>
					<p>
						collaborative and our Travel Researchers are here for every step.
					</p>
				</div>
				{/* Para 2 */}
				<div className="absolute w-64 top-[42rem] left-72">
					<p>Unforgettable experiences Creating your trip is entirely</p>
					<p>
						collaborative and our Travel Researchers are here for every step.
					</p>
				</div>
				{/* Para 3 */}
				<div className="absolute w-64 top-[56rem] left-96">
					<p>Unforgettable experiences Creating your trip is entirely</p>
					<p>
						collaborative and our Travel Researchers are here for every step.
					</p>
				</div>
				{/* Right side paragraphs */}
				<div className="flex flex-col space-x-3 absolute w-96 top-96 right-56">
					<p className="font-bold">
						Niarra Travel is a forward-thinking travel company headquartered in
						London born out of a passion to do things differently.
					</p>
					<p>
						In Swahili, a Bantu language spoken by millions in Eastern, Central
						and Southern Africa, the name Niara means "with utmost purpose" and
						our team are united by a passion for exploration and a belief that
						the right kind of travel can make the world a better place.
					</p>
					<p>
						Our Travel Researchers are here to create incredible trips with a
						positive impact for you.
					</p>
				</div>
			</div>
		</div>
	);
};
