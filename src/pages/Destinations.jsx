import { Main } from "../components/utlis/Main";
import { Header } from "../components/navbar/Header";
import { motion as m } from "framer-motion";

export const Destinations = () => {
	return (
		<m.div
			initial={{ y: "100vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1.2, ease: "easeOut" }}
			exit={{ opacity: 1 }}
			className="absolute top-0 left-0 h-full w-full bg-gray-green text-white"
		>
			{/* <PageTransition /> */}
			<Header />
			<Main />
		</m.div>
	);
};
