import { TextField } from "./utlis/TextField";

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
					{/* Parallax Heading */}
					<h5 className="text-center font-semibold text-sm">
						THE WORLD IS AT YOUR FEET
					</h5>
					<div className="m-10">
						<h5 className="text-center text-5xl font-fancy">
							Recieve <span className="italic font-thin">Inspiration </span>in
						</h5>
						<h5 className="text-center text-5xl font-fancy">Your Inbox</h5>
					</div>

					{/* Form */}
					<div className="px-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:py-8">
						<TextField
							label={"First Name (required)"}
							placeholder={"Enter your First Name"}
						/>
						<TextField
							label={"Last Name (required)"}
							placeholder={"Enter your Last Name"}
						/>
						<TextField
							label={"Email (required)"}
							placeholder={"Enter your Email"}
						/>
						{/* Checkbox with text */}
						<div className="flex space-x-3">
							<input type="checkbox" />
							<span>I'm happy to receive emails from Niarra Travel *</span>
						</div>
					</div>
					{/* Button */}
					<div className="p-8 flex items-center justify-center">
						<button className="hidden px-8 py-3 bg-olive-green rounded-full baseline text-white md:block hover:bg-red-600">
							Enquire
						</button>
					</div>
				</div>
			</div>
			<footer>
				<div className="bg-gray-green text-olive-green p-40">
					{/* Contact a Travel Researcher  */}
					<h2 className="text-4xl font-fancy">Contact a Travel</h2>
					<h2 className="text-4xl font-fancy">Researcher</h2>
					<h3 className="text-lg font-thin">
						We always aim to respond within 24 hours
					</h3>

					{/* div 1 */}
					{/* Destinations */}
					{/* div 2 */}
					{/* div 3 */}
				</div>
				<div className="p-64 bg-olive-green"></div>
			</footer>
		</div>
	);
};
