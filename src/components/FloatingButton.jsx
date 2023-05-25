import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FloatingButton = () => {
	return (
		<div>
			<a
				href="#"
				className="float flex items-center justify-center bg-olive-green"
			>
				<FontAwesomeIcon
					icon="fa-brands fa-whatsapp"
					size="xl"
					className=""
				></FontAwesomeIcon>
			</a>
		</div>
	);
};
