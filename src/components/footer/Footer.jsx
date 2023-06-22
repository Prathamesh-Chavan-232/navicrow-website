import { ContactForm } from "./ContactForm";
import { CallUs } from "./CallUs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import certPdf from "../../assets/cert.pdf";

export const Footer = () => {
	const socials = [
		{
			link: "https://www.instagram.com/navicrowholidays_pvt_ltd/",
			icon: "fa-brands fa-instagram",
		},
		{
			link: "https://www.facebook.com/Navicrowholidays/?_rdr",
			icon: "fa-brands fa-facebook-f",
		},
		{
			link: "https://www.linkedin.com/in/navicrow-holidays-private-limited-505b16202/?originalSubdomain=in",
			icon: "fa fa-brands fa-linkedin",
		},
		{
			link: "https://www.youtube.com/channel/UCieVKkXaNXaKK70QV9wN3Sg?app=desktop",
			icon: "fa fa-brands fa-youtube",
		},
		{
			link: "https://wa.me/?/8954766781",
			icon: "fa-brands fa-whatsapp",
		},
	];
	const destinations = [
		{
			link: "/destinations/char-dham",
			title: "Char Dham",
		},
		{
			link: "/destinations/do-dham",
			title: "Do Dham",
		},
		{
			link: "/destinations/kedarnath",
			title: "Kedarnath",
		},
	];

	const contacts = [
		{
			heading: "ADDRESS1",
			icon: "fa fa-location-dot",
			contact:
				"Green valley complex, kothal gate, Mussoorie road, Dehradun- 248009",
			link: "",
		},
		{
			heading: "ADDRESS2",
			icon: "fa fa-location-dot",
			contact: "Haripur kalan, Street 8, Haridwar road, 249205",
			link: "",
		},

		{
			heading: "E-MAIL US",
			contact: "info@navicrowholidays.com",
			icon: "fa fa-envelope",
			link: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=info@navicrowholidays.com",
		},
	];

	const callUs = [
		{
			contact: "+91 80776 80788",
			link: "tel:+918077680788",
		},
		{
			contact: "+91 92582 38707",
			link: "tel:+919258238707",
		},
		{
			icon: "fa fa-phone",
			contact: "+91 81263 68535",
			link: "tel:+918126368535",
		},
	];

	return (
		<div
			id="footer"
			className="z-[2] mt-auto text-white w-screen"
			style={{
				overflowX: "hidden",
			}}
		>
			<footer
				style={{
					width: "100vw",
				}}
			>
				{/* Contact Form */}
				<ContactForm />

				{/* Contact a Travel Researcher */}
				<CallUs />

				{/* Footer */}
				<div className="flex flex-col bg-olive-green">
					<div className="px-4 py-20 grid grid-cols-1 justify-items-start gap-32 lg:px-12 xl:grid-cols-2 2xl:grid-cols-3">
						<div className="flex flex-col gap-6">
							{/* Description  */}
							<div className="space-y-4">
								<div className="font-fancy text-3xl lg:text-4xl hover:text-gray-green">
									NAVICROW
									<span className="text-light-green hover:text-gray-green">
										HOLIDAYS
									</span>
								</div>
								<p className="whitespace-nowrap">
									Our Agency is in a class of its own.
									<br /> A full service agency, with both liesure <br />
									and corporate travel,
									<br /> with many specialty areas.
								</p>
							</div>

							{/* Socials */}
							<div className="space-y-4">
								<h3 className="text-md text-light-green font-semibold lg:text-sm">
									FOLLOW US
								</h3>
								<div className="flex gap-8">
									{socials.map((item, i) => {
										return (
											<a key={i} href={item.link}>
												<FontAwesomeIcon
													icon={item.icon}
													size="xl"
													className="text-white hover:text-light-green"
												/>
											</a>
										);
									})}
								</div>
							</div>

							<a href={certPdf} className="">
								Recognised by Government of India
							</a>
						</div>

						{/* Destinations */}
						<div className="space-y-4">
							<h3 className="text-md text-light-green font-semibold lg:text-sm">
								DESTINATIONS
							</h3>
							<div className="font-fancy">
								{destinations.map((item, i) => {
									return (
										<p
											key={i}
											className="font-fancy text-xl hover:text-light-green"
										>
											<a href={item.link}>{item.title}</a>
										</p>
									);
								})}
							</div>
						</div>

						{/* Contacts */}
						<div className="space-y-6">
							<h3 className="text-light-green font-semibold text-sm">
								CONTACT US
							</h3>
							{contacts.map((item, i) => {
								return (
									<div key={i} className="space-y-4">
										<div>
											<p className="font-fancy text-xl hover:text-light-green">
												<FontAwesomeIcon
													icon={item.icon}
													size="sm"
													className="text-white hover:text-light-green"
												/>{" "}
												<a href={item.link}>{item.contact}</a>
											</p>
										</div>
									</div>
								);
							})}

							<div className="font-fancy text-xl space-x-4">
								<FontAwesomeIcon
									icon={"fa fa-phone"}
									size="sm"
									className="text-white hover:text-light-green"
								/>
								{callUs.map((item, i) => {
									return (
										<a
											key={i}
											href={item.link}
											className="hover:text-light-green"
										>
											{item.contact}
										</a>
									);
								})}
							</div>
						</div>
					</div>

					<hr className="bg-gray-green" />
					<div className="mt-auto px-4 py-6 flex flex-col items-center gap-4 lg:px-12 lg:flex-row lg:justify-between">
						<p className="text-sm">
							Copyright © <a href="#">Navicrow.</a> All Rights Reserved.
						</p>
						<div className="text-sm underline flex gap-20 items-center justify-between lg:justify-center">
							<a href="/policy">Privacy policy</a>
							<a href="/terms">Terms & conditions</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

// Niarra Travel

// A proud Travel Partner
