import Flickity from "react-flickity-component";
export const Carousel = () => {
	return (
		<Flickity>
			<div className="w-full h-[800px] flex flex-col gap-8 items-center justify-center lg:h-[1200px] bg-carousel-1 bg-cover">
				<p className="text-xl font-semibold">I WANT TO EXPLORE IN</p>
				<h2 className="font-fancy text-6xl">Africa</h2>
				<button className="px-8 py-3 border border-white bg-transparent text-white rounded-full baseline transition-color duration-200 hover:text-black hover:bg-white">
					Discover More
				</button>
			</div>
			<div className="w-full h-[800px] flex flex-col gap-8 items-center justify-center lg:h-[1200px] bg-carousel-2 bg-cover">
				<p className="text-xl font-semibold">I WANT TO EXPLORE IN</p>
				<h2 className="font-fancy text-6xl">Africa</h2>
				<button className="px-8 py-3 border border-white bg-transparent text-white rounded-full baseline transition-color duration-200 hover:text-black hover:bg-white">
					Discover More
				</button>
			</div>
			<div className="w-full h-[800px] flex flex-col gap-8 items-center justify-center lg:h-[1200px] bg-carousel-1 bg-cover">
				<p className="text-xl font-semibold">I WANT TO EXPLORE IN</p>
				<h2 className="font-fancy text-6xl">Africa</h2>
				<button className="px-8 py-3 border border-white bg-transparent text-white rounded-full baseline transition-color duration-200 hover:text-black hover:bg-white">
					Discover More
				</button>
			</div>
		</Flickity>
	);
};
