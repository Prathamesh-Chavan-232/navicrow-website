import React from "react";
import { RotatingBorder } from "../../utlis/buttons/RotatingBorder";
export const CallUs = () => {
	return (
		<div className="py-40 bg-gray-green text-olive-green flex flex-col space-y-16 items-center justify-center lg:flex-row lg:space-y-0 lg:space-x-16">
			<div>
				<h2 className="text-6xl text-center font-fancy lg:text-left lg:text-4xl">
					Contact a Travel
				</h2>
				<h2 className="text-6xl text-center font-fancy lg:text-left lg:text-4xl">
					Researcher
				</h2>
				<h3 className="text-xl text-center font-thin lg:text-left lg:text-lg">
					We always aim to respond within 24 hours
				</h3>
			</div>
			<div className="flex flex-col lg:flex-row">
				<RotatingBorder />
				<RotatingBorder />
			</div>
		</div>
	);
};
