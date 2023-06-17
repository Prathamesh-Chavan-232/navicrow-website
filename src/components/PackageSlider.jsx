import { useState } from "react";
import dest1 from "../assets/landscapes/1.png";
import dest2 from "../assets/landscapes/2.png";
import dest3 from "../assets/landscapes/3.png";
import dest4 from "../assets/landscapes/4.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Main } from "./Main";

const carousel = [
	{
		img: dest1,
	},
	{
		img: dest2,
	},
	{
		img: dest3,
	},
	{
		img: dest4,
	},
];

const Arrow = ({ onClick, className, children }) => {
	return (
		<button
			className={
				"p-2 absolute top-[50%] -translate-x-0 translate-y-[-50%] rounded-full text-xl lg:text-4xl bg-white/80 " +
				(className || "")
			}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export const PackageSlider = ({ packageData }) => {
	const [index, setIndex] = useState(0);

	const slideLeft = () => {
		if (index !== 0) setIndex(index - 1);
	};

	const slideRight = () => {
		if (index !== carousel.length - 1) setIndex(index + 1);
	};

	return (
		<div className="relative h-[400px] lg:h-screen bg-light-gray group">
			<Arrow onClick={slideLeft} className={"left-2 lg:left-10"}>
				<BsChevronCompactLeft />
			</Arrow>
			<div
				className="w-screen h-[400px] lg:h-screen object-cover duration-500 bg-center bg-cover bg-no-repeat "
				style={{ backgroundImage: `url(${carousel[index].img})` }}
			>
				<Main
					heading={`${packageData.duration} DAY-TRIP`}
					title={packageData.title}
					price={`₹ ${packageData.price} /-`}
				/>
			</div>
			<Arrow onClick={slideRight} className={"right-2 lg:right-10"}>
				<BsChevronCompactRight />
			</Arrow>
		</div>
	);
};
