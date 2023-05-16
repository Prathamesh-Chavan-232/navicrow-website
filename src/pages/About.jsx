import React from "react";
import { Main } from "../components/about/Main";
import { Header } from "../components/navbar/Header";
import { Footer } from "../components/footer/Footer";
import { motion as m } from "framer-motion";

export const About = () => {
	return (
		<m.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: "easeOut" }}
			className="text-gray-900"
		>
			{/* Section 1 - Navbar + Hero */}
			<Header />
			<Main />
			<section className="p-8 flex flex-col items-center justify-center gap-6">
				<p className=" lg:w-[40rem] text-xl">
					In 2014, Niarra founder Byron Thomas tagged annual leave onto a work
					trip to visit Africa's oldest national park, Virunga, in the DRC.
				</p>
				<p className=" lg:w-[40rem]">
					It was there, trekking into the forest with armed guards and rangers
					like Innocent Mburanumwe, that Byron first appreciated the phenomenal
					investment that goes into critical, large-scale conservation projects.
					Virunga and its gorillas couldn't exist without tourism revenue. They
					also wouldn't exist without the brave people risking their lives to
					protect it, as seen in the Virunga documentary released at a similar
					time.
				</p>
				<p className=" lg:w-[40rem]">
					On that trip, it soon became evident that community buy-in and shared
					value is vital for the long-term protection of the natural world. The
					trip planted a seed that positive impact travel treads an incredibly
					complex and fine line but one that is essential for communities,
					nature, and our planet's health. 
				</p>

				<p className=" lg:w-[40rem]">
					It was there, trekking into the forest with armed guards and rangers
					like Innocent Mburanumwe, that Byron first appreciated the phenomenal
					investment that goes into critical, large-scale conservation projects.
					Virunga and its gorillas couldn't exist without tourism revenue. They
					also wouldn't exist without the brave people risking their lives to
					protect it, as seen in the Virunga documentary released at a similar
					time.
				</p>
				<p className=" lg:w-[40rem]">
					It was there, trekking into the forest with armed guards and rangers
					like Innocent Mburanumwe, that Byron first appreciated the phenomenal
					investment that goes into critical, large-scale conservation projects.
					Virunga and its gorillas couldn't exist without tourism revenue. They
					also wouldn't exist without the brave people risking their lives to
					protect it, as seen in the Virunga documentary released at a similar
					time.
				</p>
			</section>
			<section></section>
			<Footer />
		</m.main>
	);
};
