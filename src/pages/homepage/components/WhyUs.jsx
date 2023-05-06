import React from "react";

export const WhyUs = () => {
	return (
		<div className="w-screen h-screen flex justify-center bg-olive-green">
			<div className="mt-20 space-y-8 text-center">
				<h2 className="text-lg">WHAT MAKES US DIFFERENT</h2>
				<h2 className="text-6xl font-fancy">Why Niarra</h2>
				<div className="flex space-x-6">
					<img
						src="/assets/animals/elephant-portrait.avif"
						alt=""
						className="w-64 h-96"
					/>
					<img src="/assets/animals/elephant.jpg" alt="" className="hidden" />
				</div>
			</div>
		</div>
	);
};
