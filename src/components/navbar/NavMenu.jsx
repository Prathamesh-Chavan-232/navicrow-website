import { motion, AnimatePresence } from "framer-motion";
export const NavMenu = ({ isOpen }) => {
	const navItem = {
		exit: {
			opacity: 0,
			height: 0,
			transition: {
				ease: "easeInOut",
				duration: 0.3,
				delay: 1.2,
			},
		},
	};

	return (
		<AnimatePresence>
			<div className="">
				{isOpen && (
					<motion.div
						className="absolute top-0 left-0 flex flex-col w-full h-screen bg-white z-50 text-black font-fancy"
						variants={navItem}
						initial={{ height: 40, opacity: 1 }}
						animate={{ height: "100vh", opacity: 1 }}
						transition={{ duration: 0.5 }}
						exit="exit"
					>
						<motion.a
							href=""
							initial={{ y: 80, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.8 }}
							exit={{
								opacity: 0,
								y: 90,
								transition: {
									ease: "easeInOut",
									delay: 1,
								},
							}}
						>
							Destinations
						</motion.a>
						<motion.a
							href=""
							initial={{ y: 80, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.7 }}
							exit={{
								opacity: 0,
								y: 90,
								transition: {
									ease: "easeInOut",
									delay: 0.8,
								},
							}}
						>
							Travel Styles
						</motion.a>
						<motion.a
							href=""
							initial={{ y: 80, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.6 }}
							exit={{
								opacity: 0,
								y: 90,
								transition: {
									ease: "easeInOut",
									delay: 0.6,
								},
							}}
						>
							About us
						</motion.a>
					</motion.div>
				)}
			</div>
		</AnimatePresence>
	);
};
