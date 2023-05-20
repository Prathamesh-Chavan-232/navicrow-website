import React from "react";

export const TextField = ({ label, placeholder }) => {
	return (
		<div className="z-0 field field_v2">
			<label htmlFor="last-name" className="ha-screen-reader">
				{label}
			</label>
			<input
				id="last-name"
				className="field__input"
				placeholder={placeholder}
			/>
			<span className="field__label-wrap" aria-hidden="true">
				<span className="field__label">{label}</span>
			</span>
		</div>
	);
};
