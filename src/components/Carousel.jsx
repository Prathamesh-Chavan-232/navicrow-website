import arrowLeft from "../assets/arrowl.png";
import arrowRight from "../assets/arrowr.png";
import carousel1 from "../assets/landscapes/carousel-1.jpeg";
import carousel2 from "../assets/landscapes/carousel-2.jpeg";
import carousel3 from "../assets/landscapes/carousel-3.jpeg";
import dest1 from "../assets/landscapes/destinations-1.jpg";
import dest2 from "../assets/landscapes/dodham.png";
import dest3 from "../assets/landscapes/mountains-5.jpg";
import { useState } from "react";

const destinationsSlider = [
	{
		title: "Char Dham",
		img: carousel1,
	},
	{
		title: "Do Dham",
		img: carousel2,
	},
	{
		title: "Kedarnath",
		img: carousel3,
	},
];

const carousel = [
	{
		title: "Char Dham",
		img: dest1,
	},
	{
		title: "Do Dham",
		img: dest2,
	},
	{
		title: "Kedarnath",
		img: dest3,
	},
];

const Img = ({ img, className }) => {
	return (
		<button>
			<img
				src={img}
				alt="arrow"
				className={
					"absolute top-0 bottom-0 m-auto w-[10%] h-[20%] " + (className || "")
				}
			/>
		</button>
	);
};

export const Carousel = () => {
	const [index, setIndex] = useState(0);
	return (
		<div className="relative flex items-center">
			<Img img={arrowRight} className={"right-10"} />
			<div
				id="slider"
				className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
			>
				{carousel.map((item, i) => {
					return (
						<div key={i} className="relative inline-block">
							<img
								src={item.img}
								alt="carousel image"
								className="w-screen h-screen object-cover"
							/>
							<div className=" text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
								<h1 className="text-4xl lg:text-6xl font-fancy">
									{item.title}
								</h1>
								<button></button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
