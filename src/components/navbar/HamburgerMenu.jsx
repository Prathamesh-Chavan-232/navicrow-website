import { useState } from "react";
import { motion as m } from "framer-motion";
import { RotatingBorder } from "../utlis/RotatingBorder";

const MenuToggle = ({ toggle, isOpen }) => {
	return (
		<button
			onClick={toggle}
			className="pointer hidden px-8 py-3 bg-olive-green text-white text-sm rounded-full baseline lg:block hover:bg-brightRed"
		>
			Enquire
		</button>
	);
};

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
		<div className="flex">
			<MenuToggle toggle={toggleMenu} isOpen={isOpen}></MenuToggle>
			<m.div
				className="h-full w-full max-w-[50%] min-w-[300px] bg-olive-green shadow-xl z-50 fixed top-0 right-0 select-none"
				initial={false}
				animate={isOpen ? "open" : "closed"}
				variants={menuVariants}
				transition={menuTransition}
			>
				<div className="float-right">
					<button onClick={toggleMenu} className="px-16 py-8">
						<div className="flex items-center gap-4">
							<div>CLOSE</div>
							<RotatingBorder clr={"#eee"} size={"30px"}>
								X
							</RotatingBorder>
						</div>
					</button>
				</div>
			</m.div>
		</div>
	);
};
