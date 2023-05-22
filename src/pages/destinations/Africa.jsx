import React from "react";
import { Header } from "../../components/navbar/Header";
import { motion as m } from "framer-motion";
import { Main } from "../../components/utlis/Main";
import { Footer } from "../../components/footer/Footer";
import { WhyUs } from "../../components/utlis/WhyUs";
export const Africa = () => {
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
					<Header />
					<Main
						heading="LUXURY WILDLIFE SAFARIS AND WILDLIFE ADVENTURES"
						title="Africa"
					/>
				</div>
				{/* Section 2 - About us (Why Niarra?) */}
				<WhyUs />
				{/* Section 3 - Carousel */}
				{/* <Carousel /> */}
				{/* Section 4 - Travel Styles */}
				{/* <TravelStyle /> */}
				<Footer />
			</m.main>
		</div>
	);
};
