import { useState } from "react";
import { Link } from "react-router-dom";

export const NavMenu = () => {
	const [open, setOpen] = useState(false);

	function toggle() {
		setOpen(!open);
	}

	return (
		<div className="bg-black">
			{!open && (
				<header className="px-12 py-8 text-white">
					<button onClick={toggle}>Menu</button>
				</header>
			)}
			{open && (
				<div className="h-screen w-screen bg-white flex items-center justify-center z-50">
					<div className="flex flex-col gap-8 text-4xl font-fancy text-center">
						<Link href="/destinations">
							Destinations <i className="arrow down"></i>
						</Link>
						<Link href="/">Travel Styles</Link>
						<a href="/about">About Us</a>
					</div>
				</div>
			)}
		</div>
	);
};
