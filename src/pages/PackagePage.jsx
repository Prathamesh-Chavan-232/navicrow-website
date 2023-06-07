import { useEffect, useState } from "react";

import { Header } from "../components/navbar/Header";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { WhyUs } from "../components/WhyUs";
import { FloatingButton } from "../components/utlis/FloatingButton";
import { Main } from "../components/Main";
import { AboutPackage } from "../components/AboutPackage";
import { DaysHeading } from "../components/DaysHeading";
import temple1 from "../assets/landscapes/char-dham-1.jpg";
import temple2 from "../assets/landscapes/temple-1.jpg";
import { Dayplan } from "../components/Dayplan";
import { useParams } from "react-router-dom";
import { chardhamHaridwar } from "../data";

const Img = ({ align, img = temple2 }) => {
	return (
		<div className="hidden main-img-2 h-screen lg:block">
			<img
				src={img}
				alt=""
				className={`absolute w-[600px] ${
					align === "left" ? "left-[10%]" : "right-[10%]"
				}`}
			/>
		</div>
	);
};

export const PackagePage = () => {
	const { id } = useParams();
	const [floating, setFloating] = useState(true);

	const [packageData, setPackageData] = useState({});
	const [itinerary, setItinerary] = useState([]);

	function toggleFloating() {
		setFloating(!floating);
	}

	useEffect(() => {
		setPackageData(chardhamHaridwar);
		setItinerary(chardhamHaridwar.itinerary);
		return () => {
			console.log(id);
			console.log(itinerary.length);
		};
	}, []);

	return (
		<div>
			{/* Section 1 - Navbar + Hero */}
			<div className="travel-package">
				<Header clr="white" toggleFloating={toggleFloating} />
				<Main
					heading={`${packageData.duration} DAY-TRIP`}
					title={packageData.title}
					price={`₹ ${packageData.price} /-`}
				/>
			</div>
			<AboutPackage packageData={chardhamHaridwar} />
			{chardhamHaridwar.itinerary.map((item, i) => {
				return (
					<div key={i}>
						<DaysHeading
							anim="zoom-out-left"
							days={chardhamHaridwar.days[i]}
							title={chardhamHaridwar.titles[i]}
							desc={chardhamHaridwar.desc[i]}
							reverse={i % 2}
						/>
						<Img
							align={i % 2 ? "left" : "right"}
							img={i % 2 ? temple1 : temple2}
						/>
						<Dayplan
							packageData={chardhamHaridwar}
							days={chardhamHaridwar.days[i]}
							itinerary={item}
						/>
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
