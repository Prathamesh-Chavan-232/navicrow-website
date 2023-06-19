import React from "react";
import { TextField } from "../utlis/TextField";
import "/src/styles/footer.css";

export const ContactForm = () => {
	return (
		<div className="flex flex-col items-stretch lg:items-center justify-between bg-light-gray text-black">
			<div className="my-20 flex flex-col lg:items-center">
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
				<div className="px-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:py-8">
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
						placeholder={"Enter your First Name"}
					/>
					<TextField label={"Phone no."} placeholder={"Enter your Phone no."} />

					{/* Checkbox with text */}
					<div className="flex items-center gap-3">
						<input type="checkbox" id="contact" className="" />
						<label htmlFor="contact">
							I'm happy to receive emails from Navicrow Travels *
						</label>
					</div>
				</div>
				{/* Button */}
				<div className="p-8 flex items-center justify-center">
					<button className="px-8 py-3 border border-olive-green bg-transparent text-olive-green rounded-full baseline transition-color duration-200 hover:text-white hover:bg-olive-green">
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};
