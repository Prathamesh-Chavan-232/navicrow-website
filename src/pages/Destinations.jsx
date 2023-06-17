import { Header } from "../components/navbar/Header";
import { Main } from "../components/Main";
import { WhyUs } from "../components/WhyUs";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { FloatingButton } from "../components/utlis/FloatingButton";
import { PackageCards } from "../components/PackageCards";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { InfoComponent } from "../components/InfoComponent";
import { useParams } from "react-router-dom";

export const Destinations = () => {
	const { id } = useParams();
	const [floating, setFloating] = useState(true);
	const [title, setTitle] = useState("Yatra");
	function toggleFloating() {
		setFloating(!floating);
	}

	useEffect(() => {
		if (id === "char-dham") {
			setTitle("Char Dham");
		} else if (id === "do-dham") {
			setTitle("Do Dham");
		} else if (id === "kedarnath") {
			setTitle("Kedarnath");
		}
	}, []);
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
				<div
					className={
						id === "char-dham"
							? "chardham"
							: id === "do-dham"
							? "dodham"
							: "kedarnath"
					}
					// style={{
					// 	background: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${img.img})`,
					// }}
				>
					<Header clr="white" toggleFloating={toggleFloating} />
					<Main
						heading="Journey of Divine Bliss: Embark on a Spiritual Pilgrimage"
						title={title}
					/>
				</div>
				<InfoComponent />
				<PackageCards id={id} />
				<TravelStyleCards />
				<WhyUs />
				<div className={`${floating ? "block" : "hidden"}`}>
					<FloatingButton />
				</div>
			</m.main>
		</div>
	);
};
