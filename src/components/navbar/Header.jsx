// header component
import { motion as m } from "framer-motion";
import useScrollDirection from "/src/hooks/scrollDirection";
import { Link } from "react-router-dom";
export function Header(clr = "transparent") {
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
const Navbar = (clr = "transparent") => {
	function handleEnquire() {}
	return (
		<nav className={`mx-auto px-8 py-6 relative container`}>
			{/* Desktop Flex container */}
			<div className="flex items-center justify-between">
				<div className="logo">
					<a href="/">
						<img src="/vite.svg" alt="" />
					</a>
				</div>
				{/* nav links */}
				<div className="hidden space-x-16 md:block font-normal">
					<Link to="/destinations" className="text-xs">
						DESTINATIONS <i className="down arrow"></i>
					</Link>
					<Link to="/travel-styles" className="text-xs">
						TRAVEL STYLES <i className="down arrow"></i>
					</Link>
					<Link to="/about" className="text-xs">
						ABOUT US <i className="down arrow"></i>
					</Link>
				</div>
				{/* Mobile Enquire */}
				<a href="" onClick={handleEnquire} className="md:hidden font-semibold">
					Enquire
				</a>
				{/* Mobile Menu Hamburger */}

				{/* Desktop Enquire */}
				<button className="hidden px-8 py-3 bg-olive-green text-white text-sm rounded-full baseline  md:block hover:bg-brightRed">
					Enquire
				</button>
			</div>
		</nav>
	);
};
