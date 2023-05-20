import React from "react";
import { styled } from "styled-components";
import { motion as m } from "framer-motion";

const Button = styled.button`
	z-index: 99;
	cursor: pointer;
`;

const Path = (props) => (
	<m.path fill="transparent" strokeLinecap="round" strokeWidth="3" {...props} />
);

export const MenuToggle = ({ toggle, isOpen }) => {
	return (
		<Button onClick={toggle}>
			<svg width="23" height="23" viewBox="0 0 23 23">
				<Path
					animate={isOpen ? "open" : "closed"}
					initial={false}
					variants={{
						closed: { d: "M 2 2.25 L 20 2.5", stroke: "hsl(0,0%,100%)" },
						open: { d: "M 3 16.5 L 17 2.5" },
					}}
					transition={{ duration: 0.3 }}
				/>
				<Path
					d="M 2 9.423 L 20 9.423"
					stroke="hsl(0,0%,100%)"
					animate={isOpen ? "open" : "closed"}
					initial={false}
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={{ duration: 0.3 }}
				/>
				<Path
					animate={isOpen ? "open" : "closed"}
					initial={false}
					variants={{
						closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(0,0%,100%)" },
						open: { d: "M 3 2.5 L 17 16.346" },
					}}
					transition={{ duration: 0.3 }}
				/>
			</svg>
		</Button>
	);
};
