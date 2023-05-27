import { Header } from "../components/navbar/Header";
import { Main } from "../components/Main";
import { WhyUs } from "../components/WhyUs";
import { Footer } from "../components/footer/Footer";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { FloatingButton } from "../components/utlis/FloatingButton";
import { CharDhamPackages } from "../components/CharDhamPackages";
import { DoDhamPackages } from "../components/DoDhamPackages";
import { motion as m } from "framer-motion";
import { useState } from "react";
import { InfoComponent } from "./InfoComponent";

export const Destinations = ({title}) => {
	const [floating, setFloating] = useState(true);

	function toggleFloating() {
		setFloating(!floating);
	}
	return (
		<div>
			<m.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 1 }}
				transition={{ duration: 0.75, ease: "easeOut" }}
				className="lg:text-black"
			>
				{/* Section 1 - Navbar + Hero */}
				<div className="travel-destination">
					<Header clr="white" toggleFloating={toggleFloating} />
					<Main
						heading="LUXURY WILDLIFE SAFARIS AND WILDLIFE ADVENTURES"
						title="Char Dham"
					/>
				</div>
        <InfoComponent />
				<WhyUs />
        {title === "Chardham" ? <CharDhamPackages /> : <DoDhamPackages />}
				{/* Section 2 - About us (Why Navicrow?) */}

				{/* Section 3 - grid */}
				{/* Section 4 - Travel Styles */}
				<TravelStyleCards />
				<div className={`${floating ? "block" : "hidden"}`}>
					<FloatingButton />
				</div>
				<Footer />
			</m.main>
		</div>
	);
};
