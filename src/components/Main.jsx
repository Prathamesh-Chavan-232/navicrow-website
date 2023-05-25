import React from "react";

export const Main = ({ heading, title }) => {
	return (
		<div>
			<div className="w-screen h-screen flex flex-col justify-around">
				<div className="px-8 mt-10 lg:mt-40 flex flex-col gap-8 text-white items-center justify-center">
					<div className="text-xl text-center">{heading}</div>
					<h1 className="text-5xl lg:text-8xl text-center font-fancy">
						{title}
					</h1>
				</div>
				<div className="mx-8 lg:mx-56 text-white">
					<div>
						<span>Borona, Kenya</span>
					</div>
				</div>
			</div>
		</div>
	);
};