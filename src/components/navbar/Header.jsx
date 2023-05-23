// header component
import { useState } from "react";
import useScrollDirection from "/src/hooks/scrollDirection";
import { motion as m } from "framer-motion";
import { RotatingBorder } from "../utlis/RotatingBorder";
import { Link } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavMenu } from "./NavMenu";
import "/src/styles/nav.css";

export function Header({ clr }) {
	const scrollDirection = useScrollDirection();

	const content = {
		animate: {
			transition: { staggerChildren: 10, delayChildren: 1.2 },
		},
	};

	const nav = {
		initial: { y: -20, opacity: 0 },
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};

	return (
		<div
			className={`sticky nav ${
				scrollDirection === "down" ? "-top-10" : "top-0"
			} h-24 transition-all duration-200`}
		>
			<m.div
				initial="initial"
				animate="animate"
				variants={content}
				className="space-y-12"
			>
				<m.div variants={nav}>
					<Navbar clr={clr} />
				</m.div>
			</m.div>
		</div>
	);
}
const Navbar = ({ clr }) => {
	const [open, setOpen] = useState(false);

	const openMenu = () => {
		setOpen(true);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	const toggleMenu = () => {
		setOpen(!open);
	};

	return (
		<nav
			className={` ${clr === "black" ? "text-black" : "text-white"} 
				`}
		>
			{/* Flex container */}
			<div className="mx-auto px-8 py-6 relative container">
				<div className="flex items-center justify-between">
					<div className="logo">
						<a href="/">
							<img src="/assets/NH.png" alt="" className="h-10 w-10" />
						</a>
					</div>
					{/* nav links */}
					<div className="hidden space-x-16 lg:flex font-normal">
						<div onClick={toggleMenu} className="text-xs">
							DESTINATIONS <i className="down arrow"></i>
						</div>
						<div onClick={toggleMenu} className="text-xs">
							TRAVEL STYLES <i className="down arrow"></i>
						</div>
						<div onClick={toggleMenu} className="text-xs">
							ABOUT US <i className="down arrow"></i>
						</div>
					</div>
					<div className="flex gap-8 items-center justify-center">
						<HamburgerMenu />
						<div className="lg:hidden">
							<RotatingBorder clr={"#eee"} size={"36px"} border={"1px"}>
								<button
									id="hamburger-menu"
									onClick={toggleMenu}
									className="block hamburger"
								>
									<span className="hamburger-top"></span>
									<span className="hamburger-middle"></span>
									<span className="hamburger-bottom"></span>
								</button>
							</RotatingBorder>
						</div>
					</div>
				</div>
			</div>
			<NavMenu isOpen={open} openMenu={toggleMenu} />
		</nav>
	);
};
