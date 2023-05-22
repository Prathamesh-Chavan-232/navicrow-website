import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "/src/styles/nav.scss";
export const Menu = () => {
	const [open, setOpen] = useState(false);

	const isOpen = () => {
		setOpen(true);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	//lets start animation
	const item = {
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
		<div className="container">
			<header>
				<div className="menu" onClick={isOpen}>
					Menu
				</div>
			</header>
			<AnimatePresence>
				{open && (
					<motion.div
						className="menu_container"
						variants={item}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "100vh", opacity: 1 }}
						transition={{ duration: 0.5 }}
						exit="exit"
					>
						<div className="btn_close" onClick={closeMenu}>
							X
						</div>
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
			</AnimatePresence>
			<div className="content_wrapper">
				<p>Animated Navigation</p>
			</div>
		</div>
	);
};
