import Aos from "aos";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Card = ({ img, title, subtitle, link, isCenter = false }) => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div
			data-aos="fade"
			className="min-w-[300px] max-w-[400px] flex flex-col gap-4 items-center"
		>
			{isCenter && (
				<div className="p-4 bg-light-gray flex flex-col gap-8 text-center">
					<span className="text-sm">TRAVEL IN STYLE</span>
					<span data-aos="zoom-in" className="font-fancy text-5xl">
						Find Travel Inspiration by{" "}
						<span className="font-normal italic">style</span>
					</span>
				</div>
			)}
			<div className={`relative`}>
				<span
					className={`text-white font-fancy text-3xl text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
				>
					{title}
				</span>
				<LazyLoadImage
					src={img}
					className={"h-[600px]"}
					effect="black-and-white"
				/>
			</div>
			<span className="text-center text-lg font-thin">{subtitle}</span>
			<a
				href={link}
				className="px-10 py-4 border border-olive-green bg-transparent text-2xl text-olive-green rounded-full baseline transition-color duration-200 lg:text-lg lg:px-8 lg:py-3 hover:text-white hover:bg-olive-green"
			>
				Discover more
			</a>
		</div>
	);
};
