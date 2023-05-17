import React from "react";

export const WhyUs = () => {
	return (
		<div className="px-12 py-16 flex flex-col items-center space-y-12 bg-olive-green text-white lg:flex-row lg:justify-center">
			{/* Why niarra & Elephant */}
			<div className="flex flex-col justify-center items-center p-24 space-y-8 text-center">
				<h2 className="text-lg">WHAT MAKES US DIFFERENT</h2>
				<h2 className="text-6xl font-fancy">Why Niarra</h2>
				<div className="flex flex-col space-x-6">
					<img
						src="/assets/animals/elephant-portrait.avif"
						alt=""
						className="w-64 h-96"
					/>
					{/* <img
						src="/assets/animals/elephant.jpg"
						alt=""
						className="hidden lg:block"
					/> */}
				</div>
			</div>
			<div className="flex flex-col space-y-3 lg:w-96">
				<p className="text-xl font-bold">
					Niarra Travel is a forward-thinking travel company headquartered in
					London born out of a passion to do things differently.
				</p>
				<p className="text-xl">
					In Swahili, a Bantu language spoken by millions in Eastern, Central
					and Southern Africa, the name Niara means "with utmost purpose" and
					our team are united by a passion for exploration and a belief that the
					right kind of travel can make the world a better place.
				</p>
				<p className="text-xl">
					Our Travel Researchers are here to create incredible trips with a
					positive impact for you.
				</p>
			</div>

			{/* <div>
				<div className="text-xl flex flex-col space-y-7">
					<div className="flex">
						<div className="lg:w-72">
							<p>Unforgettable experiences Creating your trip is entirely</p>
							<p>
								collaborative and our Travel Researchers are here for every
								step.
							</p>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};
