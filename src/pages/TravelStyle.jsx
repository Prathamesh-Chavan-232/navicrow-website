import React from "react";
import { Header } from "../components/navbar/Header";
import { Footer } from "../components/footer/Footer";
export const TravelStyle = () => {
	return (
		<div>
			<div className="h-screen w-screen text-black">
				<Header />
			</div>
			<Footer />
		</div>
	);
};
