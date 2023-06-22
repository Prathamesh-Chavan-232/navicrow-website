import { Main } from "../components/about/Main";
import { Header } from "../components/navbar/Header";
import { Footer } from "../components/footer/Footer";
import cert from "../assets/logos/certificate.jpg";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { FloatingButton } from "../components/utlis/FloatingButton";

export const About = ({ toggleClr }) => {
	const [floating, setFloating] = useState(true);

	function toggleFloating() {
		setFloating(!floating);
	}
	useEffect(() => toggleClr("black"));

	return (
		<m.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: "easeOut" }}
			className="pt-24 w-screen"
		>
			<Main />
			<section className="p-8 flex flex-col items-center justify-center gap-6">
				<p className=" lg:w-[40rem] text-xl">
					Welcome to Navicrow Travels, your ultimate destination for an
					unforgettable journey to the divine Chardham Yatra. We take pride in
					offering exceptional holiday packages that combine spirituality,
					adventure, and tranquility, all at remarkably affordable prices.
				</p>
				<p className=" lg:w-[40rem]">
					At Navicrow Travels, we understand the importance of this sacred
					pilgrimage for devotees seeking a soul-stirring experience. Our team
					of travel experts is dedicated to curating seamless and customized
					Chardham Yatra packages, ensuring that every aspect of your journey is
					meticulously planned and executed to perfection.
				</p>
				<p className=" lg:w-[40rem]">
					We believe that embarking on the Chardham Yatra should be a
					transformative and accessible experience for all. That's why we have
					crafted our packages with a focus on affordability without
					compromising on quality. We strive to provide you with the best value
					for your investment, making your dream pilgrimage a reality.  
				</p>

				<p className=" lg:w-[40rem]">
					With Navicrow Travels, you can rest assured that your comfort, safety,
					and spiritual well-being are our utmost priorities. We collaborate
					with trusted local partners and handpick accommodations,
					transportation, and amenities that cater to your needs and
					preferences. Our experienced guides accompany you throughout the
					journey, sharing profound insights, local legends, and historical
					significance, enriching your spiritual quest.
				</p>
				<p className=" lg:w-[40rem]">
					We believe in fostering connections and creating lasting memories. Our
					itineraries are thoughtfully designed to include not only the revered
					temples of Gangotri, Yamunotri, Kedarnath, and Badrinath but also
					captivating nearby attractions. From the breathtaking vistas of the
					Himalayas to serene rivers and picturesque landscapes, we ensure that
					your Chardham Yatra is an immersive experience that goes beyond the
					pilgrimage itself.
				</p>
				<p className="lg:w-[40rem]">
					At Navicrow Travels, we understand that every traveler is unique.
					Whether you prefer a group tour, a private expedition, or a customized
					itinerary, we are here to cater to your specific needs. Our dedicated
					team is committed to providing exceptional customer service, ensuring
					a seamless and hassle-free experience from the moment you inquire
					about our packages until the completion of your pilgrimage. Embark on
					a transformative journey of faith, tranquility, and self-discovery
					with Navicrow Travels. Let us be your trusted partner in exploring the
					sacred Chardham Yatra at prices that won't burden your pocket. Book
					your package today and unlock a truly divine experience that will
					leave an indelible mark on your soul.
				</p>
			</section>
			<section className="px-8 py-40 flex flex-col items-center justify-center gap-8 bg-olive-green text-white">
				<h1 className="text-3xl lg:text-5xl font-fancy text-center">
					Recognised By Government of India
				</h1>
				<img
					src={cert}
					alt=""
					className="lg:w-[800px] lg:h-[500px] object-fit"
				/>
			</section>
			<div className={`${floating ? "block" : "hidden"}`}>
				<FloatingButton />
			</div>
		</m.main>
	);
};
