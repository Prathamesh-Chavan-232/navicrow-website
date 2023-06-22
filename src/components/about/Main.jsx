import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import abouImg from "../../assets/people/trekker.jpg";
export const Main = () => {
	return (
		<div>
			<div className="py-20 flex flex-col gap-8 items-center justify-center">
				<p>HOW NAVICROW CAME TO BE</p>
				<h1 className="text-6xl lg:text-8xl font-fancy">Our Story</h1>
					<LazyLoadImage
						key={"Image-about-us-trekker"}
						src={abouImg}
						className={"p-2 max-w-xs md:max-w-2xl lg:max-w-6xl"}
						effect="black-white"
					/>
			</div>
		</div>
	);
};
