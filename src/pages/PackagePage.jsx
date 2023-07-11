// Packages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Components
import { Main } from "../components/Main";
import { WhyUs } from "../components/WhyUs";
import { Dayplan } from "../components/Dayplan";
import { Slider } from "../components/utlis/Slider";
import { DaysHeading } from "../components/DaysHeading";
import { AboutPackage } from "../components/AboutPackage";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { FloatingButton } from "../components/utlis/FloatingButton";
import { RotatingBorder } from "../components/utlis/RotatingBorder";

// Images
import dest1 from "../assets/landscapes/chardham.png";
import dest2 from "../assets/landscapes/dodham.png";
import dest3 from "../assets/landscapes/kedarnath.png";
import img1 from "../assets/landscapes/banner-3.jpg";
import img2 from "../assets/landscapes/temple-1.jpg";
import img from "../assets/landscapes/pilgrimage-2.jpg";

// Data
import {
	chardhamHighlights,
	dodhamHighlights,
	kedarnathHighlights,
	packages,
} from "../data";

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
						<div className="px-4 py-[20%] lg:py-40 flex flex-col items-center justify-center gap-6 bg-light-gray">
							<Slider />
							<p className="text-lg text-center lg:text-2xl font-thin">
								{
									"Embark on a transformative spiritual journey with our immersive pilgrimage travel style package."
								}
							</p>
						</div>
					</div>
				);
			})}
			<TravelStyleCards />
			<WhyUs />
			<div className="px-2 lg:px-48 py-4 z-[99] float-bar bg-olive-green text-white flex items-center justify-between">
				<div className="font-fancy">
					<p className="text-lg lg:text-xl">{packages[id].title}</p>
					<p className="text-sm lg:text-lg">₹ {packages[id].price}</p>
				</div>
				<div className="flex items-center gap-4 lg:hidden">
					<a href="tel:+918954766781">
						<RotatingBorder clr={"white"} border={"1px"} size={"60px"}>
							<FontAwesomeIcon icon={faPhone} />
						</RotatingBorder>
					</a>
					<RotatingBorder clr={"white"} border={"1px"} size={"60px"}>
						<FontAwesomeIcon icon={faEnvelope} />
					</RotatingBorder>
				</div>
				<div className="hidden lg:flex items-center gap-6">
					<div className="text-md flex flex-col items-center">
						<p>Contact a travel researcher</p>
						<a href="tel:+918954766781" className="font-fancy">
							+918954766781
						</a>
					</div>
					<button className="px-4 py-4 border border-white bg-transparent text-white text-sm rounded-full baseline transition-color duration-200">
						{" "}
						Make an enquiry{" "}
					</button>
				</div>
			</div>
			<div className={`${floating ? "block" : "hidden"}`}>
				<FloatingButton />
			</div>
		</div>
	);
};
