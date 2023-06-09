import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import { AnimatePresence, motion } from "framer-motion";
import "../styles/carousel.css";

const Arrow = ({ onClick, className, children }) => {
	return (
		<button
			className={
				"p-2 absolute top-[50%] -translate-x-0 translate-y-[-50%] rounded-full text-xl lg:text-4xl bg-black/40 " +
				(className || "")
			}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export const Carousel = ({ carousel }) => {
	const [index, setIndex] = useState(0);
	const [[page, direction], setSlide] = useState([0, 0]);

	const paginate = (newDirection) => {
		setSlide([page + newDirection, newDirection]);
	};

	const slideLeft = () => {
		if (index !== 0) {
			setIndex(index - 1);
			paginate(1);
		}
	};

	const slideRight = () => {
		if (index !== carousel.length - 1) {
			setIndex(index + 1);
			paginate(-1);
		}
	};

	const variants = {
		enter: (direction) => {
			console.log(direction);
			return {
				// x: direction > 0 ? 1000 : -1000,
				clipPath:
					direction > 0 ? "circle(10% at 0% 50%)" : "circle(10% at 100% 50%)",
				opacity: 0.3,
			};
		},
		center: {
			zIndex: 3,
			//   x: 0,
			clipPath:
				direction > 0 ? "circle(150% at 0% 50%)" : "circle(150% at 100% 50%)",
			opacity: 1,
		},
		exit: (direction) => {
			return {
				zIndex: 0,
				// x: direction < 0 ? 1000 : -1000,
				clipPath:
					direction > 0 ? "circle(10% at 100% 50%)" : "circle(10% at 0% 50%)",
				opacity: 0.3,
			};
		},
	};

	const style = {
		background: `linear-gradient(
			rgba(0, 0, 0, 0.6),
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.6)
		),
		url(${carousel[index].img})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		objectFit: "cover",
	};

	return (
		<div className="relative bg-light-gray group">
			<Arrow onClick={slideLeft} className={"z-[50] left-2 lg:left-10"}>
				<BsChevronCompactLeft />
			</Arrow>

			<div className="primary-header">
				<AnimatePresence initial={false} custom={direction}>
					<motion.div
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							opacity: { duration: 0.2 },
						}}
						key={"Carousel-item-holder-" + index}
						className="w-screen h-[600px] md:h-screen"
						style={style}
					>
						<div className="flex flex-col items-center justify-center gap-4 text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<motion.h1
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.6 }}
								key={"Carousel-item-header-text-holder-" + index}
								className="text-4xl lg:text-6xl font-fancy"
							>
								{carousel[index].title}
							</motion.h1>
							<a
								key={"Carousel-item-linked-text-holder-" + index}
								href={carousel[index].link}
								className="px-10 py-4 border border-white bg-transparent text-md lg:text-2xl text-white rounded-full baseline transition-color duration-200 hover:text-olive-green hover:bg-white"
							>
								Discover more
							</a>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>

			<Arrow onClick={slideRight} className={"z-[50] right-2 lg:right-10"}>
				<BsChevronCompactRight />
			</Arrow>
		</div>
	);
};
