import React from "react";
import { RotatingBorder } from "./utlis/RotatingBorder";
export const Dayplan = ({ days, reverse = true, itinerary, id }) => {
	return (
		<div className="bg-light-gray px-4 py-[10%] md:py-40 flex flex-col items-center gap-32">
			{itinerary.map((item, i) => {
				return (
					<div
						key={i}
						className={`flex flex-col gap-6 items-center justify-center lg:gap-[30rem] ${
							i % 2 ? "lg:flex-row" : "lg:flex-row-reverse"
						} `}
					>
						<div className="flex flex-col items-center gap-4 ">
							<h1 className="font-bold">DAY</h1>
							<RotatingBorder clr="black" border="2px" size="150px">
								<h1 className="text-4xl">{i == 0 ? days : days + 1} </h1>
							</RotatingBorder>
						</div>

						<div className="flex flex-col gap-4 max-w-[30rem] text-xl text-center lg:text-left whitespace-pre-line">
							{item}
						</div>
					</div>
				);
			})}
		</div>
	);
};
