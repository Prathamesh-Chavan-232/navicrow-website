export const Footer = () => {
	return (
		<div id="footer" className="footer">
			<div className="flex flex-col items-center justify-between bg-light-gray text-black">
				<div className="my-40 px-24 flex justify-center space-x-20">
					{/*Row1  */}
					<div>
						<span className="text-3xl">Excellent</span>
						<p className="text-lg">
							Based on{" "}
							<a href="#" className="underline decoration-1 hover:decoration-2">
								43 Reviews
							</a>
						</p>
					</div>
					{/* Row 2 */}
					<div className="hidden lg:block">
						<span className="text-3xl">Excellent</span>
						<p className="text-lg">
							Based on{" "}
							<a href="#" className="underline decoration-1 hover:decoration-2">
								43 Reviews
							</a>
						</p>
					</div>
					{/* Row 3 */}
					<div className="hidden lg:block">
						<span className="text-3xl">Excellent</span>
						<p className="text-lg">
							Based on{" "}
							<a href="#" className="underline decoration-1 hover:decoration-2">
								43 Reviews
							</a>
						</p>
					</div>
					{/* Row 4 */}
					<div className="hidden lg:block">
						<span className="text-3xl">Excellent</span>
						<p className="text-lg">
							Based on{" "}
							<a href="#" className="underline decoration-1 hover:decoration-2">
								43 Reviews
							</a>
						</p>
					</div>
				</div>

				<div className="mb-12 flex flex-col items-center">
					<h5>THE WORLD IS AT YOUR FEET</h5>
					<h5 className="text-4xl">
						Recieve <span className="italic font-thin">Inspiration</span>
					</h5>
					<h5 className="text-4xl">in Your Inbox</h5>
					<div className="w-full bg-red-600 flex flex-col items-stretch">
						<input
							type="text"
							placeholder="First name (required)"
							className=""
						/>
						<input
							type="text"
							placeholder="Last name (required)"
							className=""
						/>
						<input type="text" placeholder="Email (required)" className="" />

						{/* Checkbox with text */}
						<div className="flex space-x-3">
							<input type="checkbox" />
							<span>I'm happy to receive emails from Niarra Travel *</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
