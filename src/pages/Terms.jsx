import React, { useEffect, useState } from "react";
import { Header } from "../components/navbar/Header";
import { terms, policy } from "../data";

export const Terms = ({ id }) => {
	const [title, setTitle] = useState("");
	useEffect(() => {
		if (id === "terms") {
			setTitle("Terms and Conditions");
		} else {
			setTitle("Privacy policy");
			console.log(policy);
		}
		console.log(id);
	}, []);

	return (
		<div>
			<Header clr="black" toggleFloating={() => {}} />
			<div className="flex text-black flex-col px-4 py-36 gap-8 items-center text-center lg:px-12">
				<h1 className="text-7xl lg:text-8xl font-fancy">{title}</h1>
			</div>
			<div>
				{id === "privacy" &&
					policy.map((item, i) => {
						return (
							<div
								key={i}
								className="px-4 py-10 lg:px-60 xl:px-96 space-y-6 whitespace-pre-line"
							>
								<h2 className="font-bold text-3xl">{item.title}</h2>
								<p>{item.content}</p>
							</div>
						);
					})}
				{id === "terms" &&
					terms.map((item, i) => {
						return (
							<div
								key={i}
								className="px-4 py-10 lg:px-60 xl:px-96 space-y-6 whitespace-pre-line"
							>
								<h2 className="font-bold text-3xl">{item.title}</h2>
								<p>{item.content}</p>
							</div>
						);
					})}
			</div>
		</div>
	);
};
