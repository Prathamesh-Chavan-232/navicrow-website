import React from "react";
import { motion as m } from "framer-motion";

const whiteBox = {
	initial: {
		"background-color": "black",
		height: "100vh",
		bottom: 0,
	},
	animate: {
		height: 0,
		transition: {
			duration: 1.5,
			ease: [0.87, 0, 0.13, 1],
		},
	},
};
export const PageTransition = () => {
	return (
		<div className="inset-0 flex items-center justify-center">
			<m.div
				className="relative z-50 w-full bg-white"
				initial="initial"
				animate="animate"
				variants={whiteBox}
			/>
		</div>
	);
};
