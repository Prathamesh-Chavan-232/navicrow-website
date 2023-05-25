import { useState } from "react";
import { motion as m } from "framer-motion";
import { RotatingBorder } from "../utlis/RotatingBorder";
import { TextField } from "../utlis/TextField";
import useScrollLock from "../../hooks/scrollLock";

const MenuToggle = ({ toggle, isOpen }) => {
	return (
		<div>
			<button onClick={toggle} className="font-semibold lg:hidden">
				Enquire
			</button>
			<button
				onClick={toggle}
				className="hidden pointer px-8 py-3 bg-olive-green text-white text-sm rounded-full baseline lg:block hover:bg-brightRed"
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

export const HamburgerMenu = ({ toggleFloating }) => {
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
			<MenuToggle toggle={toggleMenu} isOpen={isOpen}></MenuToggle>
			<m.div
				className="!overflow-y-scroll pb-8 h-full w-full max-w-[95%] min-w-[350px] z-50 fixed top-0 right-0 md:max-w-[50%] bg-olive-green shadow-2xl select-none text-white"
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
				<div className="mx-20 lg:mt-40 flex flex-col gap-10 text-center items-center justify-center lg:flex-row">
					<div className="flex flex-col items-center justify-center gap-6">
						<h2 className="px-10 text-2xl text-center font-fancy lg:px-0 lg:text-4xl">
							Contact a Travel Researcher
						</h2>
						<div className="flex flex-col font-fancy lg:flex-row">
							<RotatingBorder clr={"#fff"} border="2px" size="180px">
								<div className="flex flex-col text-lg text-center">
									<span>Call us</span>
									<a href="tel:+0135 3161082">+01 (353) 161 082</a>
								</div>
							</RotatingBorder>
						</div>
					</div>
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
									<TextField
										label={"Email (required)"}
										placeholder={"Enter your Email"}
									/>
									<TextField
										label={"Phone no"}
										placeholder={"Enter your Phone Number"}
									/>
								</div>

								{/* Row */}
								<TextField
									label={"Number of Travelers (required)"}
									placeholder={"Enter the number of travelers"}
								/>
							</div>
							{/* Form separation */}
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
									<TextField
										label={"Email (required)"}
										placeholder={"Enter your Email"}
									/>
									<TextField
										label={"Phone no"}
										placeholder={"Enter your Phone Number"}
									/>
								</div>

								{/* Row */}
								<TextField
									label={"Number of Travelers (required)"}
									placeholder={"Enter the number of travelers"}
								/>
							</div>
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
						<button className="px-10 py-4 border border-white bg-transparent text-xl text-white rounded-full baseline transition-color duration-200 hover:text-olive-green hover:bg-white">
							<a href="/travel-styles/pilgrimage-tour">Send message</a>
						</button>
					</div>
				</div>
			</m.div>
		</div>
	);
};
