import { useState } from "react";
import dest1 from "../assets/landscapes/destinations-1.jpg";
import dest2 from "../assets/landscapes/dodham.png";
import dest3 from "../assets/landscapes/mountains-5.jpg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const carousel = [
	{
		title: "Char Dham",
		img: dest1,
		link: "/destinations/char-dham",
	},
	{
		title: "Do Dham",
		img: dest2,
		link: "/destinations/do-dham",
	},
	{
		title: "Kedarnath",
		img: dest3,
		link: "/destinations/kedarnath",
	},
];

export const Carousel = () => {
	const [index, setIndex] = useState(0);
	return (
		<div className="relative h-[400px] lg:h-screen bg-light-gray">
			<button
				className="absolute top-1/2 left-10"
				onClick={() => {
					if (index !== 0) setIndex(index - 1);
				}}
			>
				<MdChevronLeft size={60} />
			</button>

			<div id="slider" className="">
				<div
					className="w-screen h-[400px] lg:h-screen object-cover duration-500 bg-center bg-cover bg-no-repeat "
					style={{ backgroundImage: `url(${carousel[index].img})` }}
				>
					<div className="flex flex-col items-center justify-center gap-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<h1 className="text-4xl lg:text-6xl font-fancy">
							{carousel[index].title}
						</h1>
						<button className="px-10 py-4 border border-white bg-transparent text-2xl text-white rounded-full baseline transition-color duration-200 hover:text-olive-green hover:bg-white">
							<a href={carousel[index].link}>Discover more</a>
						</button>
					</div>
				</div>
			</div>
			<button
				onClick={() => {
					if (index !== carousel.length - 1) setIndex(index + 1);
				}}
				className="absolute top-1/2 right-10"
			>
				<MdChevronRight size={60} />
			</button>
		</div>
	);
};
