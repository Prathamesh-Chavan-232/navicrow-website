import React from "react";

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
				<h2 className="text-6xl font-fancy">Why Niarra</h2>
			</div>
			<div className="flex flex-col items-center justify-center gap-32 lg:flex-row">
				<img
					src="/src/assets/animals/elephant-portrait.avif"
					alt=""
					className="w-64 h-96"
				/>
				<div className="flex flex-col gap-3 text-xl text-left lg:w-96">
					<p className="">
						Niarra Travel is a forward-thinking travel company headquartered in
						London born out of a passion to do things differently.
					</p>
					<p className="">
						In Swahili, a Bantu language spoken by millions in Eastern, Central
						and Southern Africa, the name Niara means "with utmost purpose" and
						our team are united by a passion for exploration and a belief that
						the right kind of travel can make the world a better place.
					</p>
					<p className="">
						Our Travel Researchers are here to create incredible trips with a
						positive impact for you.
					</p>
				</div>
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
