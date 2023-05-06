export const Navbar = () => {
	return (
		<nav className="hidden mx-auto py-6 relative container lg:block">
			{/* Flex container */}
			<div className="flex items-center justify-between">
				<div className="logo">
					<img src="/vite.svg" alt="" />
				</div>
				{/* nav links */}
				<div className="space-x-16">
					<a href="" className="text-sm">
						DESTINATIONS
					</a>
					<a href="" className="text-sm">
						TRAVEL STYLES
					</a>
					<a href="" className="text-sm">
						ABOUT US
					</a>
					<a href="" className="text-sm">
						STORIES
					</a>
				</div>
				{/* Add A dropdown */}
				<div className="space-x-6">
					<span>$ USD</span>
					<button className="px-8 py-3 bg-green-600 rounded-full baseline hover:bg-red-600">
						Enquire
					</button>
				</div>
			</div>
		</nav>
	);
};
