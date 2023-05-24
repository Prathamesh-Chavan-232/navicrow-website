import React from "react";

export const TravelStyleCards = () => {
	return (
		<div className="text-black">
			<div className="px-4 conic">
				<div className="py-24 flex flex-col items-center font-medium gap-10">
					<span className="lg:hidden">TRAVEL IN STYLE</span>
					<span className="lg:hidden font-fancy text-7xl">
						Find Travel Inspiration by{" "}
						<span className="font-normal italic">style</span>
					</span>

					{/*  Mobile Travel Style Cards (Replace With Slider)  */}
					<div className="flex flex-col gap-4 items-center lg:hidden">
						<img
							src="/src/assets/landscapes/travel-style-1.jpg"
							alt=""
							className="lg:w-96"
						/>
						<span className="px-8 text-center">
							Luxury Family safaris and inspiring wildlife adventures with a
							positive impact
						</span>
						<button className="px-10 py-4 border border-olive-green bg-transparent text-2xl text-olive-green rounded-full baseline transition-color duration-200 hover:text-white hover:bg-olive-green">
							Discover more
						</button>
					</div>

					{/*  Desktop Travel Style Cards */}
					<div className="px-36 hidden items-center justify-center gap-16 lg:flex">
						{/* Card 1 */}
						<div className="w-96 flex flex-col gap-4 items-center">
							<img
								src="/src/assets/landscapes/travel-style-1.jpg"
								alt=""
								className="lg:w-96"
							/>
							<span className="text-center">
								Luxury Family safaris and inspiring wildlife adventures with a
								positive impact
							</span>
							<button className="px-10 py-4 border border-olive-green bg-transparent text-2xl text-olive-green rounded-full baseline transition-color duration-200 lg:text-lg lg:px-8 lg:py-3 hover:text-white hover:bg-olive-green">
								Discover more
							</button>
						</div>
						{/* Card 2 */}
						<div className="w-96 flex flex-col gap-4 items-center">
							<div className="p-4 bg-light-gray flex flex-col gap-8 text-center">
								<span className="text-sm">TRAVEL IN STYLE</span>
								<span className="font-fancy text-6xl">
									Find Travel Inspiration by{" "}
									<span className="italic">style</span>
								</span>
							</div>
							<img
								src="/src/assets/landscapes/travel-style-2.jpg"
								alt=""
								className="lg:w-96"
							/>
							<span className="text-center">
								Luxury Family safaris and inspiring wildlife adventures with a
								positive impact
							</span>
							<button className="px-10 py-4 border border-olive-green bg-transparent text-2xl text-olive-green rounded-full baseline transition-color duration-200 lg:text-lg lg:px-8 lg:py-3 hover:text-white hover:bg-olive-green">
								Discover more
							</button>
						</div>
						{/* Card 3 */}
						<div className="w-96 flex flex-col gap-4 items-center">
							<img
								src="/src/assets/landscapes/travel-style-1.jpg"
								alt=""
								className="lg:w-96"
							/>
							<span className="text-center">
								Luxury Family safaris and inspiring wildlife adventures with a
								positive impact
							</span>
							<button className="px-10 py-4 border border-olive-green bg-transparent text-2xl text-olive-green rounded-full baseline transition-color duration-200 lg:text-lg lg:px-8 lg:py-3 hover:text-white hover:bg-olive-green">
								Discover more
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
