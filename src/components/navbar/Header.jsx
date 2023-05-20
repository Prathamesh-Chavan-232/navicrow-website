// header component
import useScrollDirection from "/src/hooks/scrollDirection";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";

export function Header() {
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
				scrollDirection === "down" ? "-top-24" : "top-0"
			} h-24 transition-all duration-200`}
		>
			<m.div
				initial="initial"
				animate="animate"
				variants={content}
				className="space-y-12"
			>
				<m.div variants={nav}>
					<Navbar />
				</m.div>
			</m.div>
		</div>
	);
}
const Navbar = () => {
	function handleEnquire() {}
	return (
		<nav className={`mx-auto px-8 py-6 text-white relative container`}>
			{/* Desktop Flex container */}
			<div className="flex items-center justify-between">
				<div className="logo">
					<a href="/">
						<img src="/assets/NH.png" alt="" className="h-10 w-10" />
					</a>
				</div>
				{/* nav links */}
				<div className="hidden space-x-16 lg:block font-normal">
					<Link to="/destinations/africa" className="text-xs">
						DESTINATIONS <i className="down arrow"></i>
					</Link>
					<Link to="/travel-styles/family-travel" className="text-xs">
						TRAVEL STYLES <i className="down arrow"></i>
					</Link>
					<Link to="/about" className="text-xs">
						ABOUT US <i className="down arrow"></i>
					</Link>
				</div>
				{/* Mobile Enquire */}
				<HamburgerMenu />
			</div>
		</nav>
	);
};
