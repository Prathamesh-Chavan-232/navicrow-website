import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FloatingButton = () => {
	return (
		<a
			href="https://wa.me/+918954766781"
			className="z-[99] float flex items-center justify-center bg-olive-green"
		>
			<FontAwesomeIcon
				icon="fa-brands fa-whatsapp"
				size="xl"
				className="text-white"
			></FontAwesomeIcon>
		</a>
	);
};
