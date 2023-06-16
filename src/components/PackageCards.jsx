import React, { useEffect, useState } from "react";
import { Card } from "./utlis/Card";
import {
	chardhamPackages,
	dodhamPackages,
	kedarnathPackages,
} from "../data.js";
import Aos from "aos";

export const PackageCards = ({ id }) => {
	const [packages, setPackages] = useState([]);
	useEffect(() => {
		if (id === "char-dham") setPackages(chardhamPackages);
		else if (id === "do-dham") setPackages(dodhamPackages);
		else if (id === "kedarnath") setPackages(kedarnathPackages);
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className="py-10 px-6 bg-light-gray text-black">
			<div className="flex flex-col gap-12 items-center justify-center">
				{/*  Desktop Travel Style Cards */}
				<div>
					<h1 data-aos="zoom-in-down" className="text-4xl font-fancy">
						Browse Our Best Packages
					</h1>
				</div>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
					{packages.map((item, i) => {
						return (
							<Card
								key={i}
								img={item.img}
								title={item.title}
								subtitle={item.subtitle}
								link={item.link}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
