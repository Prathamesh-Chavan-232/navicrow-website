import { Main } from "../components/Main";
import { WhyUs } from "../components/WhyUs";
import { TravelStyleCards } from "../components/TravelStyleCards";
import { FloatingButton } from "../components/utlis/FloatingButton";
import { PackageCards } from "../components/PackageCards";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { InfoComponent } from "../components/InfoComponent";
import { useParams } from "react-router-dom";
import chardham from "../assets/landscapes/chardham.png";
import dodham from "../assets/landscapes/dodham.png";
import kedarnath from "../assets/landscapes/kedarnath.png";

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
				<Main
					img={
						id === "char-dham"
							? chardham
							: id === "do-dham"
							? dodham
							: kedarnath
					}
					heading="Journey of Divine Bliss: Embark on a Spiritual Pilgrimage"
					title={title}
				/>
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
