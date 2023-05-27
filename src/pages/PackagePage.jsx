import { useEffect, useState } from "react";

import { Header } from "../components/navbar/Header";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { WhyUs } from "../components/WhyUs";
import { FloatingButton } from "../components/utlis/FloatingButton";
import { Footer } from "../components/footer/Footer";
import { Main } from "../components/Main";
import { AboutPackage } from "../components/AboutPackage";
import { DaysHeading } from "../components/DaysHeading";

import charDhamTemple from "../assets/landscapes/char-dham-1.jpg";
import temple from "../assets/landscapes/temple-1.jpg";
import { Dayplan } from "../components/Dayplan";
import { useParams } from "react-router-dom";
import { packages } from "../data";

export const PackagePage = () => {
	const { id } = useParams();
	const [floating, setFloating] = useState(true);

	const [packageData, setPackageData] = useState({});

	function toggleFloating() {
		setFloating(!floating);
	}
	async function fetchPackageData() {
		const temp = packages[id];
		setPackageData(temp);
	}

	useEffect(() => {
		fetchPackageData();
		return () => {
			console.log();
		};
	}, []);

	return (
		<div className="">
			{/* Section 1 - Navbar + Hero */}
			<div className="travel-package">
				<Header clr="white" toggleFloating={toggleFloating} />
				<Main
					heading={`${packageData.duration} DAY-TRIP`}
					title={packageData.title}
					price={`₹ ${packageData.price} /-`}
				/>
			</div>
			<AboutPackage packageData={packages[id]} />
			<img src={charDhamTemple} alt="" className="lg:hidden" />
			<div className="hidden main-img h-screen lg:block">
				<img
					src={charDhamTemple}
					alt=""
					className="absolute right-[70%] w-[600px]"
				/>
			</div>
			<Dayplan packageData={packageData} days="1 - 4" />
			<DaysHeading
				anim="zoom-out-left"
				days={"5 - 6"}
				packageData={packageData}
				reverse={true}
			/>
			<div className="hidden main-img-2 h-screen lg:block">
				<img src={temple} alt="" className="absolute left-[70%] w-[600px]" />
			</div>
			<Dayplan packageData={packageData} days="5 - 6" />
			<DaysHeading
				days={"6 - 8"}
				anim="zoom-in-right"
				packageData={packageData}
				reverse={false}
			/>
			<div className="hidden main-img h-screen lg:block">
				<img
					src={charDhamTemple}
					alt=""
					className="absolute right-[70%] w-[600px]"
				/>
			</div>
			<Dayplan packageData={packageData} days="6 - 8" />
			<DaysHeading
				days={"8 - 11"}
				anim="zoom-in-right"
				packageData={packageData}
				reverse={true}
			/>
			<div className="hidden main-img-2 h-screen lg:block">
				<img src={temple} alt="" className="absolute left-[70%] w-[600px]" />
			</div>
			<TravelStyleCards />
			<WhyUs />
			<div className={`${floating ? "block" : "hidden"}`}>
				<FloatingButton />
			</div>
			<Footer />
		</div>
	);
};
