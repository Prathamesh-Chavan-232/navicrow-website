import Aos from "aos";
import { useEffect } from "react";

export const DaysHeading = ({ reverse, anim, days, title, desc, id }) => {
	useEffect(() => {
		Aos.init({ duration: 1200 });
	}, []);
	return (
		<div className="bg-light-gray py-40">
			<div
				className={`px-8 flex flex-col gap-6 items-center justify-center lg:gap-[20rem] ${
					reverse ? "lg:flex-row-reverse" : "lg:flex-row"
				} `}
			>
				<div className="absolute" data-aos={anim}>
					<svg
						width="358"
						height="357"
						viewBox="0 0 358 357"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M355.901 1C355.101 106.6 256.235 149 206.901 157C163.901 159 69.1013 174.2 33.9013 219C-1.29869 263.8 1.57356e-05 337.667 3.00002 356"
							stroke="#F96222"
							strokeWidth="3"
						/>
					</svg>
				</div>
				<div
					data-aos={anim}
					className="text-center lg:text-left lg:max-w-[20rem]"
				>
					<span>
						{id.endsWith("helicopter") ||
						id === "kedarnath" ||
						id.endsWith("tempo")
							? "DAY "
							: "DAYS "}
						{days}
					</span>
					<h1 className="px-20 font-fancy text-5xl font-medium italic lg:px-0 lg:w-96">
						{title}
					</h1>
				</div>

				<div className="flex flex-col gap-4 max-w-[30rem] text-xl whitespace-pre-line">
					{desc}
				</div>
			</div>
		</div>
	);
};
