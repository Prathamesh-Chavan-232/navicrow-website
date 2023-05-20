import "/src/styles/spin-anim.css";

export const RotatingBorder = ({ clr, size, children }) => {
	return (
		<div>
			<div className={`circle-wrapper`} style={{ width: size, height: size }}>
				<div className="circle" style={{ border: `1.5px dashed ${clr}` }}></div>
				<div className={`btn-text`}>{children}</div>
			</div>
		</div>
	);
};
