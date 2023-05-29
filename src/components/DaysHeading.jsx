import Aos from "aos";
import { useEffect } from "react";

export const DaysHeading = ({ reverse, anim, days, title, packageData }) => {
	useEffect(() => {
		Aos.init({ duration: 1200 });
	}, []);
	return (
		<div>
			<div className="bg-light-gray py-40">
				{/* Split  */}
				<div
					className={`px-8 flex flex-col gap-6 items-center justify-center lg:gap-[20rem] ${
						reverse ? "lg:flex-row-reverse" : "lg:flex-row"
					} `}
				>
					<div
						data-aos={anim}
						className="text-center lg:text-left lg:max-w-[20rem]"
					>
						<span>DAYS {days}</span>
						<h1 className="px-20 font-fancy text-5xl font-medium italic lg:px-0 lg:w-96">
							{title}
						</h1>
					</div>

					<div className="flex flex-col gap-4 max-w-[30rem] text-xl">
						{packageData[days].map((para, i) => {
							return <li key={i}>{para}</li>;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
