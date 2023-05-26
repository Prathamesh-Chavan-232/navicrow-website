import Aos from "aos";
import { useEffect } from "react";

export const Card = ({ img, title, subtitle, link, isCenter = false }) => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	});
	return (
		<div className="min-w-[300px] max-w-[400px] flex flex-col gap-4 items-center">
			{isCenter && (
				<div className="p-4 bg-light-gray flex flex-col gap-8 text-center">
					<span className="text-sm">TRAVEL IN STYLE</span>
					<span data-aos="zoom-in" className="font-fancy text-6xl">
						Find Travel Inspiration by <span className="italic">style</span>
					</span>
				</div>
			)}
			<div className={`relative`}>
				<span
					className={`text-white font-fancy text-3xl text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
				>
					{title}
				</span>
				<img src={img} alt="" className="h-[600px]" />
			</div>
			<span className="text-center text-lg font-thin">{subtitle}</span>
			<button className="px-10 py-4 border border-olive-green bg-transparent text-2xl text-olive-green rounded-full baseline transition-color duration-200 lg:text-lg lg:px-8 lg:py-3 hover:text-white hover:bg-olive-green">
				<a href={link}>Discover more</a>
			</button>
		</div>
	);
};
