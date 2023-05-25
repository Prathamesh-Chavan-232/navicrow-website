import { ContactForm } from "./ContactForm";
import { CallUs } from "./CallUs";
import { RotatingBorder } from "../utlis/RotatingBorder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export const Footer = () => {
	return (
		<div id="footer" className="z-0 mt-auto text-white">
			<footer>
				<ContactForm />

				{/* Contact a Travel Researcher */}
				<CallUs />
				{/* <div className="p-40 bg-olive-green"></div>
				<hr className="bg-gray-green" /> */}

				{/* Footer */}
				<div className="flex flex-col bg-olive-green">
					<div className="p-20 flex flex-col space-y-20 lg:flex-row lg:items-center lg:justify-center lg:gap-32 lg:space-y-0">
						{/* div 1 */}
						<div className="flex flex-col">
							<h3 className="py-6 text-md text-light-green font-semibold lg:py-2 lg:text-xs">
								DESTINATIONS
							</h3>
							<div className="font-fancy">
								<p className="font-fancy text-2xl hover:text-light-green">
									<a href="/destinations/char-dham">Char Dham</a>
								</p>
								<p className="font-fancy text-2xl hover:text-light-green">
									<a href="/destinations/char-dham">Do Dham</a>
								</p>
								<p className="font-fancy text-2xl hover:text-light-green">
									<a href="/destinations/char-dham">Kedarnath</a>
								</p>
								<p className="font-fancy text-2xl hover:text-light-green">
									<a href="/package">Packages</a>
								</p>
							</div>
						</div>
						{/* div 2 */}
						<div className="flex flex-col space-y-6">
							<div className="">
								<h3 className="py-6 text-md text-light-green  font-semibold lg:py-2 lg:text-xs">
									CALL US
								</h3>
								<div>
									<p className="font-fancy text-2xl hover:text-light-green">
										<a href="tel:+01353161082">+01 (353) 161 082</a>
									</p>
								</div>
							</div>
							<div className="">
								<h3 className="py-6 text-md  text-light-green  font-semibold lg:py-2 lg:text-xs">
									E-MAIL US
								</h3>
								<div>
									<p className="font-fancy text-2xl break-words hover:text-light-green">
										<a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=info@navicrowholidays.com">
											info@navicrowholidays.com
										</a>
									</p>
								</div>
							</div>
						</div>
						{/* div 3 */}
						<div className="flex flex-col space-y-12">
							<div className="h-12 w-24 bg-white"></div>
							<div className="flex gap-8">
								<a href="https://www.instagram.com/navicrowholidays_pvt_ltd/">
									<FontAwesomeIcon
										icon="fa-brands fa-instagram"
										size="xl"
										className="text-light-green hover:text-white"
									/>
								</a>
								<a href="https://www.facebook.com/Navicrowholidays/?_rdr">
									<FontAwesomeIcon
										icon="fa-brands fa-facebook-f"
										size="xl"
										className="text-light-green hover:text-white"
									/>
								</a>
								<a href="https://www.linkedin.com/in/navicrow-holidays-private-limited-505b16202/?originalSubdomain=in">
									<FontAwesomeIcon
										icon="fa-brands fa-linkedin"
										size="xl"
										className="text-light-green hover:text-white"
									/>
								</a>
								<a href="https://www.youtube.com/channel/UCieVKkXaNXaKK70QV9wN3Sg?app=desktop">
									<FontAwesomeIcon
										icon="fa-brands fa-youtube"
										size="xl"
										className="text-light-green hover:text-white"
									/>
								</a>
								<a href="https://wa.me/?/8954766781">
									<FontAwesomeIcon
										icon="fa-brands fa-whatsapp"
										size="xl"
										className="text-light-green hover:text-white"
									/>
									{/*  */}{" "}
								</a>
							</div>
						</div>
					</div>

					<div className="mt-auto p-20 flex flex-col gap-20 text-sm lg:flex-row lg:items-center lg:justify-center lg:gap-64 lg:py-3 lg:px-0">
						<h2 className="text-xs underline">
							<a href="/">Navicrow Travel </a>
						</h2>
						<h2 className="text-xs underline">A proud Travel Partner</h2>
					</div>
				</div>
			</footer>
		</div>
	);
};

// Niarra Travel

// A proud Travel Partner
