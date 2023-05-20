import { useState } from "react";
import { motion as m } from "framer-motion";
import { RotatingBorder } from "../utlis/RotatingBorder";

const MenuToggle = ({ toggle, isOpen }) => {
	return (
		<button
			onClick={toggle}
			className="pointer px-8 py-3 bg-olive-green text-white text-sm rounded-full baseline hover:bg-brightRed"
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
				className="h-full w-full max-w-[95%] min-w-[350px] bg-olive-green shadow-xl z-50 fixed top-0 right-0 select-none md:max-w-[55%]"
				initial={false}
				animate={isOpen ? "open" : "closed"}
				variants={menuVariants}
				transition={menuTransition}
			>
				<div className="m-6 flex flex-col gap-10 text-center items-center justify-center">
					<button onClick={toggleMenu} className="">
						<div className="flex items-center gap-4 text-sm">
							<div className="hidden font-semibold lg:block">CLOSE</div>
							<RotatingBorder clr={"#eee"} size={"30px"} border={"1px"}>
								<div>x</div>
							</RotatingBorder>
						</div>
					</button>
					<div className="flex flex-col items-center justify-center gap-3">
						<h2 className="px-10 text-2xl text-center font-fancy lg:text-left lg:text-4xl">
							Contact a Travel Researcher
						</h2>
						<div className="flex flex-col font-fancy lg:flex-row">
							<RotatingBorder clr={"#fff"} border="2px" size="180px">
								<div className="flex flex-col text-lg text-center">
									<span>Call us</span>
									<span>+1 (332) 334 0501</span>
								</div>
							</RotatingBorder>
						</div>
					</div>

					<div className="text-center">
						<h2 className="text-2xl font-fancy lg:text-left lg:text-4xl">
							Contact us by sending a
						</h2>
						<h2 className="text-2xl font-fancy lg:text-left lg:text-4xl">
							message
						</h2>
					</div>
				</div>
			</m.div>
		</div>
	);
};
