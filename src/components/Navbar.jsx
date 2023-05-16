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
				<div className="hidden space-x-16 md:block font-semibold">
					<a href="" className="text-sm">
						DESTINATIONS <i className="down arrow mx-1"></i>
					</a>
					<a href="" className="text-sm">
						TRAVEL STYLES <i className="down arrow mx-1"></i>
					</a>
					<a href="" className="text-sm">
						ABOUT US <i className="down arrow mx-1"></i>
					</a>
				</div>
				{/* Mobile Enquire */}
				<a href="" onClick={handleEnquire} className="md:hidden">
					Enquire
				</a>
				{/* Mobile Menu Hamburger */}

				{/* Desktop Enquire */}
				<button className="hidden px-8 py-3 bg-olive-green text-white rounded-full baseline  md:block hover:bg-brightRed">
					Enquire
				</button>
			</div>
		</nav>
	);
};
