// Modules & Hooks
import { motion as m } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import useScrollDirection from "/src/hooks/scrollDirection";
import useScrollLock from "../../hooks/scrollLock";

// Components
import { MainMenu } from "../utlis/MainMenu";
import { RotatingBorder } from "../utlis/RotatingBorder";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavMenu } from "./NavMenu";
import { destinations, travelStyles, about } from "/src/data.js";

// Customn styles
import logo from "../../assets/NH-logo.png";
import "/src/styles/nav.css";

export function Header({ clr, toggleFloating }) {
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
			className={`z-[80] sticky nav ${
				scrollDirection === "down" ? "" : "top-0"
			} h-24 transition-all duration-200`}
		>
			<m.div
				initial="initial"
				animate="animate"
				variants={content}
				className="space-y-12"
			>
				<m.div variants={nav}>
					<Navbar clr={clr} toggleFloating={toggleFloating} />
				</m.div>
			</m.div>
		</div>
	);
}
const Navbar = ({ clr, toggleFloating }) => {
	const [active, setActive] = useState(-1);

	const [open, setOpen] = useState(false);
	const [openMobileMenu, setOpenMobileMenu] = useState();

	const { lockScroll, unlockScroll } = useScrollLock();

	const handleMenuActions = (index) => {
		if (!open) {
			setOpen(true);
			lockScroll();
			setActive(index);
		} else if (active !== index) {
			setActive(index);
		} else {
			setOpen(false);
			unlockScroll();
			setActive(-1);
		}
	};

	const toggleMobileMenu = () => {
		if (!openMobileMenu) {
			setOpenMobileMenu(true);
			lockScroll();
		} else {
			setOpenMobileMenu(false);
			unlockScroll();
		}
	};

	return (
		<nav className={`${clr === "black" ? "text-black" : "text-white"} `}>
			{/* Z index 50 - to Display on Navmenu */}
			<div className="z-[999] mx-auto px-8 py-6 relative container">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<a href="/">
						<img src={logo} alt="" className="h-28 w-28" />
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
						<div
							className="flex gap-2 items-center"
							onClick={() => {
								setOpen(false);
								unlockScroll();
							}}
						>
							<Link to="/about">ABOUT US</Link>
							<div
								className={`arrow ${
									clr === "black" || open ? "border-black" : "border-white"
								}`}
							></div>
						</div>
					</div>
					<div className="flex gap-8 items-center justify-center">
						{/* Sliding Menu & Sliding Menu Buttons */}
						<HamburgerMenu toggleFloating={toggleFloating} />

						{/* Nav-menu Button For mobile  */}
						<div className="lg:hidden">
							<RotatingBorder clr={"#000"} size={"36px"} border={"1px"}>
								<button
									id="hamburger-menu"
									onClick={toggleMobileMenu}
									className="block hamburger"
								>
									<span className={`hamburger-top bg-black`}></span>
									<span className={`hamburger-middle bg-black`}></span>
									<span className={`hamburger-bottom bg-black `}></span>
								</button>
							</RotatingBorder>
						</div>
					</div>
				</div>
			</div>
			<NavMenu isOpen={open}>
				<div className="relative flex flex-col gap-6 h-full w-full items-center justify-center text-5xl font-fancy text-black">
					{active === 0 && <MainMenu listItems={destinations} />}
					{active === 1 && <MainMenu listItems={travelStyles} />}
				</div>
			</NavMenu>

			{/* Mobile Nav Menu */}
			<NavMenu isOpen={openMobileMenu}>
				<div className="relative flex flex-col gap-6 h-full w-full items-center justify-center text-5xl font-fancy text-black">
					<a href="/destinations/char-dham" className="hover:text-light-green">
						Destinations
					</a>
					<a
						href="/travel-styles/pilgrimage-tour"
						className="hover:text-light-green"
					>
						Travel Styles
					</a>
					<a href="/about" className="hover:text-light-green">
						About us
					</a>
					<a
						href="/package/chardham-via-haridwar"
						className="hover:text-light-green"
					>
						Packages
					</a>
				</div>
			</NavMenu>
		</nav>
	);
};
