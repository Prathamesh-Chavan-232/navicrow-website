import React from "react";
import hero from "../assets/landscapes/hero.jpg";
export const Main = ({ heading, title = "", price = "", img = hero }) => {
	const style = {
		background: `linear-gradient(
			rgba(0, 0, 0, 0.6),
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.6)
		),
		url(${img})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		objectFit: "cover",
	};
	return (
		<div
			className="w-screen h-screen flex flex-col justify-around"
			style={style}
		>
			<div className="px-4 mt-10 lg:mt-40 flex flex-col gap-8 text-white items-center justify-center">
				<div className="uppercase text-lg text-center">{heading}</div>
				<h1 className="text-4xl lg:text-6xl text-center font-fancy">
					{title === "" && (
						<>
							We offer specially curated <br />
							<span className="font-fancy italic font-thin">Chardham </span>
							Yatra packages.
						</>
					)}
					{title}
				</h1>
				<div className="flex flex-col text-2xl text-center font-fancy">
					<h1 className="font-fancy">{price}</h1>
				</div>
			</div>
			<div className="mx-8 lg:mx-56 text-white">
				<div>
					<span>India, Uttarakhand</span>
				</div>
			</div>
		</div>
	);
};
