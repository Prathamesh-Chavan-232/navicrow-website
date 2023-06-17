import { useState } from "react";

import img1 from "../../assets/landscapes/banner-2.jpg";
import img2 from "../../assets/landscapes/travel-style-2.jpg";
import img3 from "../../assets/landscapes/mountains-5.jpg";
import img4 from "../../assets/landscapes/mountains-4.jpg";
import img5 from "../../assets/landscapes/banner.jpg";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const slides = [
	{
		img: img1,
	},
	{
		img: img2,
	},
	{
		img: img3,
	},
	{
		img: img4,
	},
];

export const Slider = () => {
	const [index, setIndex] = useState(0);

	const prev = () => {
		setIndex((curr) => (curr == 0 ? slides.length - 1 : curr - 1));
	};

	const next = () => {
		setIndex((curr) => (curr == slides.length - 1 ? 0 : curr + 1));
	};

	return (
		<div className="relative bg-light-gray overflow-hidden max-w-[400px]">
			<div
				className="flex transition-transform ease-out duration-500"
				style={{ transform: `translateX(-${index * 100}%)` }}
			>
				{slides.map((slide, i) => {
					return (
						<img
							src={slide.img}
							key={i}
							className="inline-block w-[400px] h-[600px]"
						/>
					);
				})}
			</div>
			<div className="absolute inset-0 flex items-center justify-between p-4">
				<button
					onClick={prev}
					className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
				>
					<BsChevronCompactLeft size={40} />
				</button>
				<button
					onClick={next}
					className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
				>
					<BsChevronCompactRight size={40} />
				</button>
			</div>
			<div className="absolute bottom-4 right-0 left-0">
				<div className="flex items-center justify-center gap-2">
					{slides.map((item, i) => {
						return (
							<div
								className={`transition-all w-3 h-3 bg-white rounded-full ${
									index === i ? "p-2" : "bg-opacity-50"
								}`}
							>
								{" "}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
