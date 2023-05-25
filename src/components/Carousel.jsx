import Flickity from "react-flickity-component";
export const Carousel = () => {
	return (
		<div className="overflow-x-hidden">
			<Flickity>
				<div className="w-full h-[600px] flex flex-col gap-8 items-center justify-center lg:h-[1200px] bg-carousel-1 bg-cover">
					<p className="text-xl font-semibold">I WANT TO EXPLORE IN</p>
					<h2 className="font-fancy text-6xl">Char Dham</h2>
					<button className="px-10 py-4 border border-olive-green bg-transparent text-xl text-olive-green rounded-full baseline transition-color duration-200 hover:text-white hover:bg-olive-green">
						<a href="/destinations/char-dham">Discover more</a>
					</button>
				</div>
				<div className="w-full h-[800px] flex flex-col gap-8 items-center justify-center lg:h-[1200px] bg-carousel-2 bg-cover">
					<p className="text-xl font-semibold">I WANT TO EXPLORE IN</p>
					<h2 className="font-fancy text-6xl">Do Dham</h2>
					<button className="px-10 py-4 border border-white bg-transparent text-xl text-white rounded-full baseline transition-color duration-200 hover:text-olive-green hover:bg-white">
						<a href="/destinations/char-dham">Discover more</a>
					</button>
				</div>
				<div className="w-full h-[800px] flex flex-col gap-8 items-center justify-center lg:h-[1200px] bg-carousel-1 bg-cover">
					<p className="text-xl font-semibold">I WANT TO EXPLORE IN</p>
					<h2 className="font-fancy text-6xl">Kedarnath</h2>
					<button className="px-10 py-4 border border-olive-green bg-transparent text-xl text-olive-green rounded-full baseline transition-color duration-200 hover:text-white hover:bg-olive-green">
						<a href="/destinations/char-dham">Discover more</a>
					</button>
				</div>
			</Flickity>
		</div>
	);
};
