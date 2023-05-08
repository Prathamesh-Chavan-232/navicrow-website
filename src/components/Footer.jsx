export const Footer = () => {
	return (
		<div id="footer" className="footer">
			<div className="flex flex-col items-stretch lg:items-center justify-between bg-light-gray text-black">
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
					<div className="hidden md:block">
						<span className="text-3xl">Excellent</span>
						<p className="text-lg">
							Based on{" "}
							<a href="#" className="underline decoration-1 hover:decoration-2">
								43 Reviews
							</a>
						</p>
					</div>
				</div>

				<div className="mb-12 flex flex-col lg:items-center">
					<h5 className="text-center">THE WORLD IS AT YOUR FEET</h5>
					<h5 className="text-center text-4xl">
						Recieve <span className="italic font-thin">Inspiration</span>
					</h5>
					<h5 className="text-center text-4xl">in Your Inbox</h5>
					<div className="px-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:py-8">
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
			<footer className="bg-veryDarkBlue">
				<div class="py-10 mx-auto space-y-8 container flex flex-col-reverse justify-between lg:flex-row lg:space-y-0">
					<div class="space-y-12 flex flex-col-reverse items-center justify-between lg:space-y-0 lg:flex-col lg:items-start">
						<div class="mx-auto my-6 text-center text-white lg:hidden">
							Copyright &copy; 2023, All rights reserved
						</div>
						<div>
							<img src="assets/logo.svg" alt="logo" class="h-8" />
						</div>
						<div class="flex justify-center space-x-4">
							<a href="#">
								<img src="assets/icon-facebook.svg" alt="" class="h-8" />
							</a>
							<a href="#">
								<img src="assets/icon-youtube.svg" alt="" class="h-8" />
							</a>
							<a href="#">
								<img src="assets/icon-twitter.svg" alt="" class="h-8" />
							</a>
							<a href="#">
								<img src="assets/icon-pinterest.svg" alt="" class="h-8" />
							</a>
							<a href="#">
								<img src="assets/icon-instagram.svg" alt="" class="h-8" />
							</a>
						</div>
					</div>
					<div class="flex justify-around space-x-32">
						<div class="flex flex-col space-y-3 text-white">
							<a href="#" class="hover:text-brightRed">
								Home
							</a>
							<a href="#" class="hover:text-brightRed">
								Pricing
							</a>
							<a href="#" class="hover:text-brightRed">
								Products
							</a>
							<a href="#" class="hover:text-brightRed">
								About
							</a>
						</div>
						<div class="flex flex-col space-y-3 text-white">
							<a href="#" class="hover:text-brightRed">
								Careers
							</a>
							<a href="#" class="hover:text-brightRed">
								Community
							</a>
							<a href="#" class="hover:text-brightRed">
								Privacy Policy
							</a>
						</div>
					</div>

					<div class="flex flex-col justify-between">
						<form action="">
							<div class="flex space-x-3">
								<input
									type="text"
									placeholder="Updated in your inbox"
									class="flex-1 px-4 rounded-full focus:outline-none"
								/>
								<button class="px-6 py-2 text-white rounded-full bg-brightRedLight focus:outline-none">
									Go
								</button>
							</div>
						</form>
						<div class="hidden text-white lg:flex">
							Copyright &copy; 2023, All rights reserved.
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};
