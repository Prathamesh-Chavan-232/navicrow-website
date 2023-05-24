import { motion, AnimatePresence } from "framer-motion";

export const NavMenu = ({ isOpen, children }) => {
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
			<div className="flex items-center justify-center overflow-hidden">
				{isOpen && (
					<motion.div
						className="absolute top-0 w-screen h-screen bg-white"
						variants={navItem}
						initial={{ height: 40, opacity: 1 }}
						animate={{ height: "100vh", opacity: 1 }}
						transition={{ duration: 0.5 }}
						exit="exit"
					>
						{children}
					</motion.div>
				)}
			</div>
		</AnimatePresence>
	);
};
