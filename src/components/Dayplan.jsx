import React from "react";
import { RotatingBorder } from "./utlis/RotatingBorder";
export const Dayplan = ({ days, reverse = true, itinerary, id }) => {
	return (
		<div>
			<div>
				<div className="bg-light-gray">
					<div className="flex flex-col items-center">
						{itinerary.map((item, i) => {
							console.log(itinerary);
							return (
								<div
									key={i}
									className={`px-8 flex flex-col gap-6 items-center justify-center lg:gap-[30rem] ${
										i % 2 ? "lg:flex-row" : "lg:flex-row-reverse"
									} `}
								>
									<div className="flex flex-col items-center gap-4 ">
										<h1 className="font-bold">DAY</h1>
										<RotatingBorder clr="black" border="2px" size="150px">
											<h1 className="text-4xl">{i == 0 ? days : days + 1} </h1>
										</RotatingBorder>
									</div>

									<div className="flex flex-col gap-4 max-w-[30rem] text-xl whitespace-pre-line">
										{item}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
