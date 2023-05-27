
import Aos from "aos";
import { useEffect } from "react";
import charDhamTemple from "../assets/landscapes/char-dham-1.jpg";

export const AboutPackage = ({ packageData }) => {
	useEffect(() => {
		Aos.init({ duration: 1200 });
	}, []);

	return (
		<div className="bg-olive-green space-y-20 py-20 overflow-x-hidden">
			<div className="px-20 space-y-20 text-white">
				<div className="flex flex-col text-center">
					<span className="font-medium">OVERVIEW</span>
					<h1 data-aos="zoom-in" className="font-fancy text-6xl">
						{packageData.title}
					</h1>
				</div>
				<div className="flex flex-col gap-12 items-center justify-center xl:gap-64 xl:flex-row">
					<div className="max-w-[400px]">
						<img src={charDhamTemple} alt="" />
					</div>
					<div className="flex flex-col gap-4  xl:max-w-sm  text-white text-md">
						<p className="text-xl">
							We invite you to embark on a transformative and opulent journey to
							Char Dham.
						</p>
						<p>
							From exquisite accommodations and personalized services to gourmet
							dining and exclusive helicopter transfers, we provide a seamless
							and lavish expedition that allows you to immerse yourself in the
							divine while being enveloped in utmost comfort. Join us on this
							divine odyssey to Char Dham and discover a truly unparalleled
							journey of the soul.
						</p>
						<p>
							Nestled amidst the awe-inspiring Himalayas, Char Dham comprises
							the revered pilgrimage sites of Yamunotri, Gangotri, Kedarnath,
							and Badrinath. Our luxurious trip to Char Dham offers an
							extraordinary blend of spirituality and indulgence, ensuring an
							unforgettable experience.
						</p>
					</div>
				</div>
				<div>
					<div className="flex flex-col gap:20 xl:gap-32 xl:flex-row xl:justify-center xl:items-center">
						<div
							data-aos="fade-right"
							className="flex flex-col gap-6 xl:max-w-md"
						>
							<span className="text-xs font-medium">HIGHLIGHTS</span>
							<h1 className="text-4xl font-fancy">Trip Highlights</h1>
							<ul className="space-y-4">
								{packageData.tripHighlights.map((item, i) => {
									return (
										<li key={i} className="">
											{item}
										</li>
									);
								})}
							</ul>
						</div>
						<div data-aos="fade-up" className="flex flex-col gap-6 xl:max-w-md">
							<span className="text-xs font-medium">HIGHLIGHTS</span>
							<h1 className="text-4xl font-fancy">What's Included</h1>
							<ul className="space-y-4">
								{packageData.included.map((item, i) => {
									return <li key={i}>{item}</li>;
								})}
							</ul>
						</div>
						<div
							data-aos="fade-left"
							className="flex flex-col gap-6 xl:max-w-md"
						>
							<span className="text-xs font-medium">HIGHLIGHTS</span>
							<h1 className="text-4xl font-fancy">What's Excluded</h1>
							<ul className="space-y-4">
								{packageData.excluded.map((item, i) => {
									return <li key={i}>{item}</li>;
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
