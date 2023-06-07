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
import { packages } from "../data";

const Img = ({ align, img = temple2 }) => {
	return (
		<div>
			<img src={img} alt="" className={`px-4 lg:hidden w-[600px]`} />
			<div className="hidden main-img-2 h-screen lg:block">
				<img
					src={img}
					alt=""
					className={`absolute w-[600px] ${
						align === "left" ? "left-[10%]" : "right-[10%]"
					}`}
				/>
			</div>
		</div>
	);
};

export const PackagePage = () => {
	const { id } = useParams();
	const [floating, setFloating] = useState(true);

	// const [packageData, setPackageData] = useState({});
	// const [itinerary, setItinerary] = useState([]);

	function toggleFloating() {
		setFloating(!floating);
	}

	useEffect(() => {
		return () => {
			console.log(id);
			console.log(packages[id]);
		};
	}, []);

	return (
		<div>
			{/* Section 1 - Navbar + Hero */}
			<div className="travel-package">
				<Header clr="white" toggleFloating={toggleFloating} />
				<Main
					heading={`${packages[id].duration} DAY-TRIP`}
					title={packages[id].title}
					price={`₹ ${packages[id].price} /-`}
				/>
			</div>
			<AboutPackage packageData={packages[id]} />
			{packages[id].itinerary.map((item, i) => {
				return (
					<div key={i}>
						<DaysHeading
							anim="zoom-out-left"
							days={packages[id].days[i]}
							title={packages[id].titles[i]}
							desc={packages[id].desc[i]}
							reverse={i % 2}
						/>
						<Img
							align={i % 2 ? "left" : "right"}
							img={i % 2 ? temple1 : temple2}
						/>
						<Dayplan
							packageData={packages[id]}
							days={packages[id].days[i]}
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
