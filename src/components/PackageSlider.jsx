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

export const PackageSlider = ({ id, packageData }) => {
	const [index, setIndex] = useState(0);

	const slideLeft = () => {
		if (index !== 0) setIndex(index - 1);
	};

	const slideRight = () => {
		if (index !== carousel.length - 1) setIndex(index + 1);
	};

	return (
		<div className="relative h-[400px] lg:h-screen">
			<Arrow onClick={slideLeft} className={"left-2 lg:left-10"}>
				<BsChevronCompactLeft />
			</Arrow>
			<div
				className="w-screen h-[400px] lg:h-screen object-cover duration-500 bg-center bg-cover bg-no-repeat z-0"
				style={{
					backgroundImage: `url(${carousel[index].img})`,
				}}
			>
				<Content
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

const Content = ({ heading, title, price }) => {
	return (
		<div className="w-screen h-screen flex flex-col justify-around">
			<div className="px-8 mt-10 lg:mt-40 flex flex-col gap-8 text-white items-center justify-center">
				<div className="uppercase text-xl text-center">{heading}</div>
				<h1 className="text-4xl lg:px-40 lg:text-6xl text-center font-fancy">
					{title}
				</h1>
				<div className="flex flex-col text-2xl text-center font-fancy">
					<h1 className="font-fancy">{price}</h1>
				</div>
			</div>
			<div className="mx-8 lg:mx-56 text-white">
				<div>
					<span>India, Uttarakhand</span>
				</div>
			</div>
		</div>
	);
};
