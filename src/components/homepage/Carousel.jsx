import Flickity from "react-flickity-component";
import { RoundedTransparent } from "../utlis/RoundedTransparent";
export const Carousel = () => {
	return (
		<Flickity>
			<div className="w-full h-[800px] flex flex-col gap-8 items-center justify-center lg:h-[1200px] bg-carousel-1 bg-cover">
				<p className="text-xl font-semibold">I WANT TO EXPLORE IN</p>
				<h2 className="font-fancy text-6xl">Africa</h2>
				<RoundedTransparent text="Discover More" />
			</div>
			<div className="w-full h-[800px] flex flex-col gap-8 items-center justify-center lg:h-[1200px] bg-carousel-2 bg-cover">
				<p className="text-xl font-semibold">I WANT TO EXPLORE IN</p>
				<h2 className="font-fancy text-6xl">Africa</h2>
				<RoundedTransparent text="Discover More" />
			</div>
			<div className="w-full h-[800px] flex flex-col gap-8 items-center justify-center lg:h-[1200px] bg-carousel-1 bg-cover">
				<p className="text-xl font-semibold">I WANT TO EXPLORE IN</p>
				<h2 className="font-fancy text-6xl">Africa</h2>
				<RoundedTransparent text="Discover More" />
			</div>
		</Flickity>
	);
};
