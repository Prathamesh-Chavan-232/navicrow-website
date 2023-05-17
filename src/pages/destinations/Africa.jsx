import React from "react";
import { Header } from "../../components/navbar/Header";
import { WhyUs } from "../../components/homepage/WhyUs";
import { Footer } from "../../components/footer/Footer";
import { motion as m } from "framer-motion";

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
					<div className="w-screen h-screen flex flex-col justify-between">
						<div className="px-8 flex flex-col gap-8 text-white items-center justify-center">
							<div className="text-xl text-center">
								LUXURY SAFARIS AND PRIVATE ADVENTURES
							</div>
							<h1 className="text-5xl lg:text-8xl text-center font-fancy">
								Africa
							</h1>
						</div>
						<div className="mx-8 my-40 lg:mx-56 text-white">
							<div>
								<span>Borona, Kenya</span>
							</div>
						</div>
					</div>
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
