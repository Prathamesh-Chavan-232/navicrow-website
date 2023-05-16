import { Header } from "../components/navbar/Header";
import { PageTransition } from "./PageTransition";
import { motion as m } from "framer-motion";

export const Destinations = () => {
	return (
		<m.div exit={{ opacity: 0 }}>
			<PageTransition />
			<Header />
		</m.div>
	);
};
