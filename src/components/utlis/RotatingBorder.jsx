import "/src/styles/spin-anim.css";

export const RotatingBorder = ({ clr, size, border, children }) => {
	return (
		<div>
			<div className={`circle-wrapper`} style={{ width: size, height: size }}>
				<div
					className="circle"
					style={{ border: `${border} dashed ${clr}` }}
				></div>
				<div className={`btn-text`}>{children}</div>
			</div>
		</div>
	);
};
