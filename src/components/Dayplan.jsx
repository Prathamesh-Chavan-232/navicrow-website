import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RotatingBorder } from "./utlis/RotatingBorder";

export const Dayplan = ({ days, reverse = true, itinerary }) => {
	return (
		<div>
			<div>
				<div className="bg-light-gray py-40">
					<div className="flex flex-col items-center">
						<RotatingBorder clr="black" border="2px" size="100px">
							<FontAwesomeIcon icon="fa-solid fa-mountain-sun" size="2xl" />
						</RotatingBorder>
						{itinerary.map((item, i) => {
							return (
								<div
									key={i}
									className={`px-8 py-10 flex flex-col gap-6 items-center justify-center lg:gap-[20rem] ${
										i % 2 ? "lg:flex-row" : "lg:flex-row-reverse"
									} `}
								>
									<div className="flex flex-col items-center gap-4 ">
										<h1 className="font-bold">DAYS</h1>
										<RotatingBorder clr="black" border="2px" size="150px">
											<h1 className="text-4xl">{days}</h1>
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
