import { useEffect, useState } from "react";

import { Header } from "../components/navbar/Header";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { WhyUs } from "../components/WhyUs";
import { FloatingButton } from "../components/utlis/FloatingButton";
import { Main } from "../components/Main";
import { AboutPackage } from "../components/AboutPackage";
import { DaysHeading } from "../components/DaysHeading";

import charDhamTemple from "../assets/landscapes/char-dham-1.jpg";
import temple from "../assets/landscapes/temple-1.jpg";
import { Dayplan } from "../components/Dayplan";
import { useParams } from "react-router-dom";
import { packages } from "../data";

const ImgRight = () => {
	return (
		<div className="hidden main-img-2 h-screen lg:block">
			<img src={temple} alt="" className="absolute right-[10%] w-[600px]" />
		</div>
	);
};
const ImgLeft = () => {
	return (
		<div className="hidden main-img-2 h-screen lg:block">
			<img
				src={charDhamTemple}
				alt=""
				className="absolute left-[10%] w-[600px]"
			/>
		</div>
	);
};
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
			console.log(id);
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
			<AboutPackage packageData={packages[id]} />
			<img src={charDhamTemple} alt="" className="lg:hidden" />

			{id.startsWith("kedarnath") && <div>
        
      </div>}
        {(id === "dodham-via-helicopter") && (
         <div>
           
				<div>
					<DaysHeading
						anim="zoom-out-left"
						days={"1"}
						title={packages[id].titles[0]}
						packageData={packages[id]}
						reverse={false}
					/>
					<ImgRight />
					<DaysHeading
						days={"2"}
						title={packages[id].titles[1]}
						anim="zoom-in-right"
						packageData={packages[id]}
						reverse={true}
					/>
					<ImgLeft />
					<DaysHeading
						days={"3"}
						anim="zoom-in-right"
						title={packages[id].titles[2]}
						packageData={packages[id]}
						reverse={false}
					/>
					<ImgRight />
				</div>
         </div> 
        )}
			{(id === "chardham-via-helicopter"  || (id.startsWith("dodham") && id !== "dodham-via-helicopter")) && (
				<div>
					<DaysHeading
						anim="zoom-out-left"
						days={"1 - 2"}
						title={packages[id].titles[0]}
						packageData={packages[id]}
						reverse={false}
					/>
					<ImgRight />
					<DaysHeading
						days={"3 - 4"}
						title={packages[id].titles[1]}
						anim="zoom-in-right"
						packageData={packages[id]}
						reverse={true}
					/>
					<ImgLeft />
					<DaysHeading
						days={"5 - 6"}
						anim="zoom-in-right"
						title={packages[id].titles[2]}
						packageData={packages[id]}
						reverse={false}
					/>
					<ImgRight />
				</div>
			)}
			{id.startsWith("chardham") && id != "chardham-via-helicopter" && (
				<div className="">
					{/* <Dayplan packageData={packageData} days="1 - 4" /> */}
					<DaysHeading
						anim="zoom-out-left"
						days={"1 - 4"}
						title={packages[id].titles[0]}
						packageData={packages[id]}
						reverse={false}
					/>
					<ImgRight />
					{/* <Dayplan packageData={packageData} days="5 - 6" /> */}
					<DaysHeading
						days={"5 - 6"}
						title={packages[id].titles[1]}
						anim="zoom-in-right"
						packageData={packages[id]}
						reverse={true}
					/>
					<ImgLeft />
					{/* <Dayplan packageData={packageData} days="6 - 8" /> */}
					<DaysHeading
						days={"6 - 8"}
						anim="zoom-in-right"
						title={packages[id].titles[2]}
						packageData={packages[id]}
						reverse={false}
					/>
					<ImgRight />
					<DaysHeading
						days={"8 - 11"}
						anim="zoom-in-right"
						title={packages[id].titles[3]}
						packageData={packages[id]}
						reverse={true}
					/>
					<ImgLeft />
				</div>
			)}
			<TravelStyleCards />
			<WhyUs />
			<div className={`${floating ? "block" : "hidden"}`}>
				<FloatingButton />
			</div>
		</div>
	);
};
