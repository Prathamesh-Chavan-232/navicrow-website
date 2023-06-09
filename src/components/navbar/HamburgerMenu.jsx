import { useState } from "react";
import { motion as m } from "framer-motion";
import { RotatingBorder } from "../utlis/RotatingBorder";
import { TextField } from "../utlis/TextField";
import useScrollLock from "../../hooks/scrollLock";

const MenuToggle = ({ clr, toggle, isOpen }) => {
	return (
		<div>
			<button onClick={toggle} className="font-semibold lg:hidden text-white">
				Enquire
			</button>
			<button
				onClick={toggle}
				className={`${
					clr === "white" ? "text-white" : "text-black"
				} hidden pointer px-8 py-3 bg-olive-green text-sm rounded-full baseline lg:block hover:bg-brightRed`}
			>
				Enquire
			</button>
		</div>
	);
};

const menuVariants = {
	open: {
		transform: "translateX(3%)",
	},
	closed: {
		transform: "translateX(103%)",
	},
};

const menuTransition = {
	type: "spring",
	duration: 0.5,
	stiffness: 33,
	delay: 0.1,
};

export const HamburgerMenu = ({ clr, toggleFloating }) => {
	const [subject, setSubject] = useState("Enquiry about Navicrow Holidays");
	const [body, setBody] = useState("I wish to Enquire About navicrow");
	const [isOpen, setIsOpen] = useState(false);
	const { lockScroll, unlockScroll } = useScrollLock();
	const toggleMenu = () => {
		if (!isOpen) {
			toggleFloating();
			lockScroll();
		} else {
			toggleFloating();
			unlockScroll();
		}
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<MenuToggle toggle={toggleMenu} isOpen={isOpen} clr={clr}></MenuToggle>
			<m.div
				className="z-[999] !overflow-y-scroll pb-8 h-screen w-full max-w-[95%] min-w-[350px] fixed top-0 right-0 md:max-w-[50%] bg-olive-green shadow-2xl select-none text-white"
				initial={false}
				animate={isOpen ? "open" : "closed"}
				variants={menuVariants}
				transition={menuTransition}
			>
				<div className="py-5 lg:px-24 lg:py-10 flex items-center justify-center gap-4 text-sm lg:absolute lg:right-10">
					<button onClick={toggleMenu} className="flex gap-4 items-center">
						<div className="hidden font-semibold lg:block">CLOSE</div>
						<RotatingBorder clr={"#eee"} size={"30px"} border={"1px"}>
							<div>x</div>
						</RotatingBorder>
					</button>
				</div>
				<div className="mx-20 my-20 flex flex-col gap-10 text-center items-center justify-center">
					{/* Column 1 */}
					<div className="flex flex-col items-center justify-center gap-12">
						<h2 className="px-10 text-2xl text-center font-fancy lg:px-0 lg:text-4xl">
							Contact a Travel Researcher
						</h2>
						<div className="flex flex-col lg:flex-row gap-6 font-fancy">
							<RotatingBorder clr={"#fff"} border="2px" size="180px">
								<div className="flex flex-col text-lg text-center">
									<span>Call us</span>
									<a href="tel:+80776 80788">+91 80776 80788</a>
								</div>
							</RotatingBorder>
							<RotatingBorder clr={"#fff"} border="2px" size="180px">
								<div className="flex flex-col text-lg text-center">
									<span>Call us</span>
									<a href="tel:+92582 38707">+91 92582 38707</a>
								</div>
							</RotatingBorder>
							<RotatingBorder clr={"#fff"} border="2px" size="180px">
								<div className="flex flex-col text-lg text-center">
									<span>Call us</span>
									<a href="tel:+81263 68535">+91 81263 68535</a>
								</div>
							</RotatingBorder>
						</div>
						<a
							href="https://mail.google.com/mail/?view=cm&fs=1&to=info@navicrowholidays.com"
							className="text-2xl font-fancy hover:text-light-green"
						>
							info@navicrowholidays.com
						</a>
					</div>
					{/* Column 2 */}
					<div className="flex flex-col gap-4">
						<div className="text-center">
							<h2 className="text-2xl font-fancy lg:text-left lg:text-4xl">
								Contact us by sending a
							</h2>
							<h2 className="text-2xl font-fancy lg:text-left lg:text-4xl">
								message
							</h2>
						</div>
						<div className="flex flex-col gap-16">
							<div className="flex flex-col gap-8">
								{/* Row */}
								<div className="flex flex-col gap-6 lg:flex-row">
									<TextField
										label={"First Name (required)"}
										placeholder={"Enter your First Name"}
									/>
									<TextField
										label={"Last Name (required)"}
										placeholder={"Enter your Last Name"}
									/>
								</div>
								{/* Row */}
								<div className="flex flex-col gap-6 lg:flex-row">
									<TextField label={"Email"} placeholder={"Enter your Email"} />
									<TextField
										label={"Phone no (required)"}
										placeholder={"Enter your Phone Number"}
									/>
								</div>

								{/* Row */}
								<TextField
									label={"Number of Travelers"}
									placeholder={"Enter the number of travelers"}
								/>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							{/* Checkbox with text */}
							<div className="flex items-center gap-3">
								<input type="checkbox" id="contact" className="" />
								<label htmlFor="contact">
									Can we contact you & Use your Info to plan the trip? *
								</label>
							</div>
							<a
								href={`https://mail.google.com/mail/?view=cm&fs=1&to=info@navicrowholidays.com&&su=${subject}&body=${body}`}
								className="px-10 py-4 border border-white bg-transparent text-xl text-white rounded-full baseline transition-color duration-200 hover:text-olive-green hover:bg-white"
							>
								Send message
							</a>
						</div>
					</div>
				</div>
			</m.div>
		</div>
	);
};
