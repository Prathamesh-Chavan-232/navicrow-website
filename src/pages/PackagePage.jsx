import { Carousel } from "../components/Carousel";
import { useEffect, useState } from "react";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { WhyUs } from "../components/WhyUs";
import { FloatingButton } from "../components/utlis/FloatingButton";
import { AboutPackage } from "../components/AboutPackage";
import { DaysHeading } from "../components/DaysHeading";
import img2 from "../assets/landscapes/temple-1.jpg";
import img1 from "../assets/landscapes/banner-3.jpg";
import { Dayplan } from "../components/Dayplan";
import { useParams } from "react-router-dom";
import { Main } from "../components/Main";
import img from "../assets/landscapes/pilgrimage-2.jpg";
import {
	chardhamHighlights,
	dodhamHighlights,
	kedarnathHighlights,
	packages,
} from "../data";
import { Slider } from "../components/utlis/Slider";

import dest1 from "../assets/landscapes/chardham.png";
import dest2 from "../assets/landscapes/dodham.png";
import dest3 from "../assets/landscapes/kedarnath.png";

const slides = [
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

const Img = ({ id = "", align, img = img2 }) => {
	return (
		<div className="relative bg-light-gray w-screen">
			<div
				className={`h-screen lg:block ${
					align == "left"
						? "main-img-1"
						: id.endsWith("helicopter")
						? "heli-img"
						: "main-img-2"
				}`}
			>
				<img
					src={img}
					alt=""
					className={`px-6 lg:px-0 h-[600px] absolute -top-[5%] ${
						align === "left" ? "lg:left-[10%]" : "lg:right-[10%]"
					}`}
				/>
			</div>
		</div>
	);
};

export const PackagePage = () => {
	const { id } = useParams();
	const [floating, setFloating] = useState(true);
	const [tripHighlights, setTripHighlights] = useState([]);

	function toggleFloating() {
		setFloating(!floating);
	}

	useEffect(() => {
		if (id.startsWith("chardham")) setTripHighlights(chardhamHighlights);
		else if (id.startsWith("dodham")) setTripHighlights(dodhamHighlights);
		else setTripHighlights(kedarnathHighlights);
		console.log(id);
		console.log(tripHighlights);
		console.log(packages[id]);
	}, []);

	return (
		<div className="w-screen">
			{/* Section 1 - Navbar + Hero */}
			{/* <Header clr="white" toggleFloating={toggleFloating} /> */}
			<Main
				heading={`${packages[id].duration} DAY-TRIP`}
				title={packages[id].title}
				price={`₹ ${packages[id].price} /-`}
				img={img}
			/>

			{/* <Carousel carousel={slides} /> */}
			<AboutPackage
				id={id}
				tripHighlights={
					id.startsWith("chardham")
						? chardhamHighlights
						: id.startsWith("dodham")
						? dodhamHighlights
						: kedarnathHighlights
				}
				packageData={packages[id]}
			/>
			{packages[id].itinerary.map((item, i) => {
				return (
					<div key={i}>
						<DaysHeading
							anim="zoom-out"
							days={packages[id].days[i]}
							title={packages[id].titles[i]}
							desc={packages[id].desc[i]}
							reverse={i % 2}
							id={id}
						/>
						<Img
							id={id}
							align={i % 2 ? "left" : "right"}
							img={i % 2 ? img1 : img2}
						/>
						<Dayplan
							packageData={packages[id]}
							days={2 * i + 1}
							itinerary={item}
							id={id}
						/>
						{/* <div className="px-4 py-[20%] lg:py-40 flex flex-col items-center justify-center gap-6 bg-light-gray">
							<Slider />
							<p className="text-lg text-center lg:text-2xl">
								Embark on a transformative spiritual journey with our immersive
								pilgrimage travel style package.
							</p>
						</div> */}
					</div>
				);
			})}
			<TravelStyleCards />
			<WhyUs />
			<div className={`${floating ? "block" : "hidden"}`}>
				<FloatingButton />
			</div>
		</div>
	);
};
