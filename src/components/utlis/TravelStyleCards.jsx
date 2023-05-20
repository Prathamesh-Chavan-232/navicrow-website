import React from "react";

export const TravelStyleCards = () => {
	return (
		<div className="text-black">
			<div className="px-4 conic">
				<div className="py-16 flex flex-col items-center font-medium gap-10">
					<span>TRAVEL IN STYLE</span>
					<span className="font-fancy text-5xl">
						Find Travel Inspiration by{" "}
						<span className="font-normal italic">style</span>
					</span>

					<div className="flex flex-col gap-4 items-center lg:hidden">
						<img
							src="/assets/landscapes/travel-style-1.jpg"
							alt=""
							className="lg:w-96"
						/>
						<span>
							Luxury Family safaris and inspiring wildlife adventures with a
							positive impact
						</span>
						<button className="px-10 py-4 border border-olive-green bg-transparent text-2xl text-olive-green rounded-full baseline transition-color duration-200 hover:text-white hover:bg-olive-green">
							Discover more
						</button>
					</div>
					<div className="px-36 hidden items-center justify-center gap-8 lg:flex">
						<div className="flex flex-col gap-4 items-center">
							<img
								src="/assets/landscapes/travel-style-1.jpg"
								alt=""
								className="lg:w-96"
							/>
							<span className="px-4 text-center">
								Luxury Family safaris and inspiring wildlife adventures with a
								positive impact
							</span>
							<button className="px-10 py-4 border border-olive-green bg-transparent text-2xl text-olive-green rounded-full baseline transition-color duration-200 lg:text-lg lg:px-8 lg:py-3 hover:text-white hover:bg-olive-green">
								Discover more
							</button>
						</div>
						<div className="flex flex-col gap-4 items-center">
							<div className="py-8 bg-light-gray"></div>
							<img
								src="/assets/landscapes/travel-style-2.jpg"
								alt=""
								className="lg:w-96"
							/>
							<span className="px-4 text-center">
								Luxury Family safaris and inspiring wildlife adventures with a
								positive impact
							</span>
							<button className="px-10 py-4 border border-olive-green bg-transparent text-2xl text-olive-green rounded-full baseline transition-color duration-200 lg:text-lg lg:px-8 lg:py-3 hover:text-white hover:bg-olive-green">
								Discover more
							</button>
						</div>
						<div className="flex flex-col gap-4 items-center">
							<img
								src="/assets/landscapes/travel-style-1.jpg"
								alt=""
								className="lg:w-96"
							/>
							<span className="px-4 text-center">
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
