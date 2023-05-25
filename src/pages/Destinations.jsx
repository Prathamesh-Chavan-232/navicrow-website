import { motion as m } from "framer-motion";
import { Header } from "../components/navbar/Header";
import { Main } from "../components/Main";
import { WhyUs } from "../components/WhyUs";
import { Footer } from "../components/footer/Footer";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { FloatingButton } from "../components/FloatingButton";

export const Destinations = () => {
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
						title="Char Dham"
					/>
				</div>
				{/* Section 2 - About us (Why Navicrow?) */}
				<WhyUs />

				{/* Section 3 - grid */}
				{/* Section 4 - Travel Styles */}
				<TravelStyleCards />
				<FloatingButton />
				<Footer />
			</m.main>
		</div>
	);
};
