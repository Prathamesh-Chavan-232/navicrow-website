import React from "react";

export const RoundedTransparent = ({ clr = "transparent", text }) => {
	return (
		<button
			className={`border px-8 py-3 rounded-full baseline transition-color duration-200 ${
				clr == "transparent"
					? "hover:text-black hover:bg-white border-white bg-transparent text-white "
					: "bg-olive-green border-none text-white hover:bg-brightRed"
			} `}
		>
			{text}
		</button>
	);
};
