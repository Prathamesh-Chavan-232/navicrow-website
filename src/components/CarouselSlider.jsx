import { useState } from "react";
import dest1 from "../assets/landscapes/destinations-1.jpg";
import dest2 from "../assets/landscapes/dodham.png";
import dest3 from "../assets/landscapes/mountains-5.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

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

const Arrow = ({ onClick, className, children }) => {
	return (
		<button
			className={
				"p-2 absolute top-[50%] -translate-x-0 translate-y-[-50%] rounded-full text-xl lg:text-4xl bg-black/40 " +
				(className || "")
			}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export const CarouselSlider = () => {
	const [index, setIndex] = useState(0);

	const slideLeft = () => {
		if (index !== 0) setIndex(index - 1);
	};

	const slideRight = () => {
		if (index !== carousel.length - 1) setIndex(index + 1);
	};

	return (
		<div className="z-0 relative h-[400px] lg:h-screen bg-light-gray group">
			<Arrow onClick={slideLeft} className={"left-2 lg:left-10"}>
				<BsChevronCompactLeft />
			</Arrow>
			<div
				className="w-screen h-[400px] lg:h-screen object-cover duration-500 bg-center bg-cover bg-no-repeat "
				style={{ backgroundImage: `url(${carousel[index].img})` }}
			>
				<div className="flex flex-col items-center justify-center gap-4 text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
					<h1 className="text-4xl lg:text-6xl font-fancy">
						{carousel[index].title}
					</h1>
					<a
						href={carousel[index].link}
						className="px-10 py-4 border border-white bg-transparent text-md lg:text-2xl text-white rounded-full baseline transition-color duration-200 hover:text-olive-green hover:bg-white"
					>
						Discover more
					</a>
				</div>
			</div>
			<Arrow onClick={slideRight} className={"right-2 lg:right-10"}>
				<BsChevronCompactRight />
			</Arrow>
		</div>
	);
};
