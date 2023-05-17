import React from "react";
import { Header } from "../../components/navbar/Header";
import { WhyUs } from "../../components/homepage/WhyUs";
import { Footer } from "../../components/footer/Footer";
import { motion as m } from "framer-motion";
import { Main } from "../../components/Main";

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
					<Main />
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
