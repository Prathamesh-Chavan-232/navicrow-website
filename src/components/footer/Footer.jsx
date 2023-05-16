import { ContactForm } from "./ContactForm";
import { CallUs } from "./CallUs";
import { RotatingBorder } from "../utlis/RotatingBorder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Footer = () => {
	return (
		<div id="footer" className="footer text-white">
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
							<h3 className="py-6 text-md text-light-green font-semibold lg:py-2 lg:text-sm">
								DESTINATIONS
							</h3>
							<div>
								<p className="font-fancy text-2xl hover:text-light-green">
									Africa
								</p>
								<p className="font-fancy text-2xl hover:text-light-green">
									Asia
								</p>
								<p className="font-fancy text-2xl hover:text-light-green">
									Australasia
								</p>
								<p className="font-fancy text-2xl hover:text-light-green">
									Europe
								</p>
								<p className="font-fancy text-2xl hover:text-light-green">
									Latin America
								</p>
							</div>
						</div>
						{/* div 2 */}
						<div className="flex flex-col space-y-6">
							<div className="">
								<h3 className="py-6 text-md text-light-green  font-semibold lg:py-2 lg:text-sm">
									CALL US
								</h3>
								<div>
									<p className="font-fancy text-2xl hover:text-light-green">
										+1 (332) 334 0501
									</p>
								</div>
							</div>
							<div className="">
								<h3 className="py-6 text-md  text-light-green  font-semibold lg:py-2 lg:text-sm">
									EMAIL-US
								</h3>
								<div>
									<p className="font-fancy text-2xl hover:text-light-green">
										explore@niarratravel.com
									</p>
								</div>
							</div>
						</div>
						{/* div 3 */}
						<div className="flex flex-col space-y-12">
							<div className="h-12 w-24 bg-white"></div>
							<div className="flex gap-8">
								<FontAwesomeIcon
									icon="fa-brands fa-instagram"
									size="xl"
									className="text-light-green hover:text-white"
								/>
								<FontAwesomeIcon
									icon="fa-brands fa-facebook-f"
									size="xl"
									className="text-light-green hover:text-white"
								/>
								<FontAwesomeIcon
									icon="fa-brands fa-whatsapp"
									size="xl"
									className="text-light-green hover:text-white"
								/>
							</div>
						</div>
					</div>

					<div className="mt-auto p-20 flex flex-col gap-20 lg:flex-row lg:items-center lg:justify-center lg:gap-64 lg:py-3 lg:px-0">
						<h2>Navicrow Travel </h2>
						<h2>A proud Travel Partner</h2>
					</div>
				</div>
			</footer>
		</div>
	);
};

// Niarra Travel

// A proud Travel Partner
