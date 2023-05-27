
import Aos from "aos";
import { useEffect } from "react";

export const Dayplan = ({ reverse, anim, packageData }) => {
	useEffect(() => {
		Aos.init({ duration: 1200 });
	}, []);
	return (
		<div>
			<div className="bg-light-gray py-40">
				{/* Split  */}
				<div
					className={`px-8 flex flex-col gap-6 lg:gap-[20rem] items-center justify-center ${
						reverse ? "lg:flex-row-reverse" : "lg:flex-row"
					} `}
				>
					<div data-aos={anim} className="text-center space-y-4 lg:text-left max-w-[20rem]">
						<span>Days 1 - 4</span>
						<h1 className="font-fancy text-6xl font-medium italic w-96">{packageData.title}</h1>
					</div>
					<div className="flex flex-col gap-4 max-w-[30rem] text-xl">
						<p>
							On arrival driver will pick you up and proceed to Barkot via
							Dehradun. Start your journey towards the first dham – Yamunotri.
							On the way you can explore Mussoorie, and after reaching Barkot
							witness the mesmerizing beauty of Snow Capped Peaks and overnight
							stay at hotel in Barkot.
						</p>
						<p>
							After an early breakfast, you will start your journey towards
							Yamunotri. Start your 5 km Trek from Janki Chatti to Yamunotri,
							you can take a dip in Suryakund and worship the ancient
							Divyashila. After darshan return to Janki Chatti and drive back
							towards Barkot, after dinner overnight stay at hotel in Barkot.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
