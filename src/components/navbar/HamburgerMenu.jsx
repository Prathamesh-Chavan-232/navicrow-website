import { styled } from "styled-components";
import { MenuToggle } from "./MenuToggle";
import { useState } from "react";
import { motion as m } from "framer-motion";

const Menu = styled.div`
	display: flex;
`;

const MenuIcon = styled.div`
	color: ${({ reverseClr }) => (reverseClr ? "#000" : "#fff")};
	cursor: pointer;
	z-index: 99;
	transition: all 250ms ease-in-out;
`;

const MenuContainer = styled(m.div)`
	height: 100%;
	min-width: 300px;
	width: 100%;
	max-width: 50%;
	background: red;
	box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
	z-index: 90;
	position: fixed;
	top: 0;
	right: 0;
	user-select: none;
	padding: 1em 2.5em;
`;

const menuVariants = {
	open: {
		transform: "translateX(3%)",
	},
	closed: {
		transform: "translateX(103%)",
	},
};

const menuTransition = {
	type: "spring",
	duration: 0.5,
	stiffness: 33,
	delay: 0.1,
};

export const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="p-8 flex flex-row-reverse lg:hidden">
			<MenuIcon>
				<MenuToggle toggle={toggleMenu} isOpen={isOpen} />
			</MenuIcon>
			<MenuContainer
				initial={false}
				animate={isOpen ? "open" : "closed"}
				variants={menuVariants}
				transition={menuTransition}
			>
				<Menu>Menu</Menu>
			</MenuContainer>
		</div>
	);
};
