// Modules & Hooks
import { motion as m } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import useScrollDirection from "/src/hooks/scrollDirection";

// Components
import { Card } from "../utlis/Card";
import { RotatingBorder } from "../utlis/RotatingBorder";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavMenu } from "./NavMenu";
import { destinations, travelStyles, about } from "/src/data.js";

// Customn styles
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
	const [active, setActive] = useState(-1);

	const [open, setOpen] = useState(false);
	const [openMobileMenu, setOpenMobileMenu] = useState();

	const handleMenuActions = (index) => {
		if (!open) {
			setOpen(true);
			setActive(index);
		} else if (active !== index) {
			setActive(index);
		} else {
			setOpen(false);
			setActive(-1);
		}
	};

	const toggleMobileMenu = () => {
		setOpenMobileMenu(!openMobileMenu);
	};

	return (
		<nav
			className={` ${
				clr === "black" || open || openMobileMenu ? "text-black" : "text-white"
			} 
				`}
		>
			{/* Z index 50 - to Display on Navmenu */}
			<div className="z-50 mx-auto px-8 py-6 relative container">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<a href="/">
						<img src="/src/assets/NH.png" alt="" className="h-14 w-14" />
					</a>
					{/* nav links */}
					<div className="hidden space-x-16 lg:flex font-medium text-sm">
						<div
							onClick={() => {
								handleMenuActions(0);
							}}
							className="flex gap-2 items-center"
						>
							DESTINATIONS
							<div
								className={`arrow ${
									clr === "black" || open ? "" : "border-white"
								}`}
							></div>
						</div>
						<div
							onClick={() => {
								handleMenuActions(1);
							}}
							className="flex gap-2 items-center "
						>
							TRAVEL STYLES{" "}
							<div
								className={`arrow ${
									clr === "black" || open ? "border-black" : "border-white"
								}`}
							></div>
						</div>

						{/* Link for About Us */}
						<Link to="/about" className="flex gap-2 items-center">
							ABOUT US
							<div
								className={`arrow ${
									clr === "black" || open ? "border-black" : "border-white"
								}`}
							></div>
						</Link>
					</div>
					<div className="flex gap-8 items-center justify-center">
						{/* Sliding Menu & Sliding Menu Buttons */}
						<HamburgerMenu />

						{/* Nav-menu Button For mobile  */}
						<div className="lg:hidden">
							<RotatingBorder
								clr={
									open || openMobileMenu || clr === "black" ? "#000" : "#eee"
								}
								size={"36px"}
								border={"1px"}
							>
								<button
									id="hamburger-menu"
									onClick={toggleMobileMenu}
									className="block hamburger"
								>
									<span
										className={`hamburger-top ${
											open || openMobileMenu || clr === "black"
												? "bg-black"
												: "bg-white"
										}`}
									></span>
									<span
										className={`hamburger-middle ${
											open || openMobileMenu || clr === "black"
												? "bg-black"
												: "bg-white"
										}`}
									></span>
									<span
										className={`hamburger-bottom ${
											open || openMobileMenu || clr === "black"
												? "bg-black"
												: "bg-white"
										}`}
									></span>
								</button>
							</RotatingBorder>
						</div>
					</div>
				</div>
			</div>
			<NavMenu isOpen={open}>
				<div className="relative flex flex-col gap-6 h-full w-full items-center justify-center text-5xl font-fancy text-black">
					{active === 0 && <Card listItems={destinations.items} />}
					{active === 1 && <Card listItems={travelStyles.items} />}
				</div>
			</NavMenu>

			{/* Mobile Nav Menu */}
			<NavMenu isOpen={openMobileMenu}>
				<div className="relative flex flex-col gap-6 h-full w-full items-center justify-center text-5xl font-fancy text-black">
					<Link className="hover:text-light-green">Destinations</Link>
					<Link className="hover:text-light-green">Travel Styles</Link>
					<Link className="hover:text-light-green">About us</Link>
					<Link className="hover:text-light-green">Contact us</Link>
				</div>
			</NavMenu>
		</nav>
	);
};
