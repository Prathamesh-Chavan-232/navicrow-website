import { useEffect, useState } from "react";

import { Header } from "../components/navbar/Header";
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
import {
	chardhamHighlights,
	dodhamHighlights,
	kedarnathHighlights,
	packages,
} from "../data";
import { Slider } from "../components/utlis/Slider";

const Img = ({ id = "", align, img = img2 }) => {
	return (
		<div className="relative bg-light-gray">
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
					className={`px-6 lg:px-0 h-[500px] w-[600px] lg:h-[800px] absolute -top-40 lg:-top-10 ${
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
		<div>
			{/* Section 1 - Navbar + Hero */}
			<Header clr="white" toggleFloating={toggleFloating} />
			<Main
				heading={`${packages[id].duration} DAY-TRIP`}
				title={packages[id].title}
				price={`₹ ${packages[id].price} /-`}
				img=""
			/>
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
							anim="zoom-out-left"
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
						<div className="py-20 flex items-center justify-center bg-light-gray">
							<Slider></Slider>
						</div>
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
