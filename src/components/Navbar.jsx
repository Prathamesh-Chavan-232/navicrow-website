export const Navbar = () => {
	function handleEnquire() {}
	return (
		<nav className="mx-auto px-4 py-6 relative container">
			{/* Desktop Flex container */}
			<div className="flex items-center justify-between">
				<div className="logo">
					<img src="/vite.svg" alt="" />
				</div>
				{/* nav links */}
				<div className="hidden space-x-16 md:block">
					<a href="" className="text-sm">
						DESTINATIONS
					</a>
					<a href="" className="text-sm">
						TRAVEL STYLES
					</a>
					<a href="" className="text-sm">
						ABOUT US
					</a>
				</div>
				{/* Mobile Enquire */}
				<a href="" onClick={handleEnquire} className="md:hidden">
					Enquire
				</a>
				{/* Mobile Menu Hamburger */}

				{/* Desktop Enquire */}
				<button className="hidden px-8 py-3 bg-green-600 rounded-full baseline  md:block hover:bg-red-600">
					Enquire
				</button>
			</div>
		</nav>
	);
};
