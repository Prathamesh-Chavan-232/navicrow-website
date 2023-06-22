import { useState } from "react";
import dest1 from "../assets/landscapes/destinations-1.jpg";
import dest2 from "../assets/landscapes/dodham.png";
import dest3 from "../assets/landscapes/mountains-5.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import { AnimatePresence, motion } from "framer-motion";
import "../styles/carousel.css";

const carousel = [
	{
		title: "Char Dham",
		img: dest1,
		link: "/destinations/char-dham",
	},
	{
		title: "Do Dham",
		img: dest2,
		link: "/destinations/do-dham",
	},
	{
		title: "Kedarnath",
		img: dest3,
		link: "/destinations/kedarnath",
	},
];

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

export const Carousel = () => {
	const [index, setIndex] = useState(0);
	const [[page, direction], setSlide] = useState([0,0]);

	const paginate = (newDirection) => {
		setSlide([page + newDirection, newDirection]);
	  };
	

	const slideLeft = () => {
		if (index !== 0){ 
			setIndex(index - 1);
			paginate(1)
		}
	};

	const slideRight = () => {
		if (index !== carousel.length - 1) 
		{setIndex(index + 1);
		paginate(-1);
	}
	};

	const variants = {
		enter: (direction) => {
			console.log(direction);
		  return {
			// x: direction > 0 ? 1000 : -1000,
			clipPath: direction > 0 ? "circle(10% at 0% 50%)" : "circle(10% at 100% 50%)",
			opacity: 0.3
		  };
		},
		center: {
		  zIndex: 3,
		//   x: 0,
			clipPath: direction > 0 ? "circle(150% at 0% 50%)" : "circle(150% at 100% 50%)",
		  opacity: 1
		},
		exit: (direction) => {
		  return {
			zIndex: 0,
			// x: direction < 0 ? 1000 : -1000,
			clipPath: direction > 0 ? "circle(10% at 100% 50%)" : "circle(10% at 0% 50%)",
			opacity: 0.3
		  };
		}
	  };

	return (
		<div className="relative h-[400px] lg:h-screen bg-light-gray group">
			<Arrow onClick={slideLeft} className={"z-[50] left-2 lg:left-10"}>
				<BsChevronCompactLeft />
			</Arrow>

				<div className="primary-header">
					<AnimatePresence initial={false} custom={direction} >
							<motion.div
								// initial={{clipPath:"circle(0% at 0% 50%)", zIndex:3}}
								// animate={{clipPath:"circle(150% at 0% 50%)", zIndex:3}}
								// exit={{clipPath:"circle(0% at 100% 50%)",zIndex:3}}

								custom={direction}
								variants={variants}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{
									opacity: { duration: 0.2 }
								}}
								key={"Carousel-item-holder-"+index}

								className="customId_obj w-screen h-[400px] lg:h-screen object-cover duration-500 bg-center bg-cover bg-no-repeat "
								style={{ backgroundImage: `url(${carousel[index].img})` }}>
								<div className="flex flex-col items-center justify-center gap-4 text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
									<motion.h1
									initial={{opacity:0}}
									animate={{opacity:1}}
									exit={{opacity:0}}
									transition={{duration:0.6}} 
									key={"Carousel-item-header-text-holder-"+index}
									className="text-4xl lg:text-6xl font-fancy">
										{carousel[index].title}
									</motion.h1>
									<a
										key={"Carousel-item-linked-text-holder-"+index}
										href={carousel[index].link}
										className="px-10 py-4 border border-white bg-transparent text-md lg:text-2xl text-white rounded-full baseline transition-color duration-200 hover:text-olive-green hover:bg-white"
									>
										Discover more
									</a>
								</div>
							</motion.div>
						
						{/* {index === 1 && (
							<motion.div
								initial={{clipPath:"circle(0% at 0% 50%)", zIndex:3}}
								animate={{clipPath:"circle(150% at 0% 50%)", zIndex:3}}
								exit={{clipPath:"circle(0% at 100% 50%)",zIndex:3}}

							key={"Carousel-item-holder-"+index}
								className="customId_obj w-screen h-[400px] lg:h-screen object-cover duration-500 bg-center bg-cover bg-no-repeat "
								style={{ backgroundImage: `url(${carousel[1].img})` }}>
								<div className="flex flex-col items-center justify-center gap-4 text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
									<motion.h1
									initial={{opacity:0}}
									animate={{opacity:1}}
									exit={{opacity:0}}
									transition={{duration:0.6}}  
									className="text-4xl lg:text-6xl font-fancy"
									key={"Carousel-item-header-text-holder-"+index}
									>
										{carousel[1].title}
									</motion.h1>
									<a
										key={"Carousel-item-linked-text-holder-"+index}
										href={carousel[1].link}
										className="px-10 py-4 border border-white bg-transparent text-md lg:text-2xl text-white rounded-full baseline transition-color duration-200 hover:text-olive-green hover:bg-white"
									>
										Discover more
									</a>
								</div>
							</motion.div>
						)}
						{index === 2 && (
							<motion.div
								initial={{clipPath:"circle(0% at 0% 50%)", zIndex:3}}
								animate={{clipPath:"circle(150% at 0% 50%)", zIndex:3}}
								exit={{clipPath:"circle(0% at 100% 50%)",zIndex:3}}

							key={"Carousel-item-holder-"+index}
								className="customId_obj w-screen h-[400px] lg:h-screen object-cover duration-500 bg-center bg-cover bg-no-repeat "
								style={{ backgroundImage: `url(${carousel[2].img})` }}>
								<div className="flex flex-col items-center justify-center gap-4 text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
									<motion.h1
									initial={{opacity:0}}
									animate={{opacity:1}}
									exit={{opacity:0}}
									transition={{duration:0.6}}  
									className="text-4xl lg:text-6xl font-fancy"
									key={"Carousel-item-header-text-holder-"+index}>
										{carousel[2].title}
									</motion.h1>
									<a
										key={"Carousel-item-linked-text-holder-"+index}
										href={carousel[2].link}
										className="px-10 py-4 border border-white bg-transparent text-md lg:text-2xl text-white rounded-full baseline transition-color duration-200 hover:text-olive-green hover:bg-white"
									>
										Discover more
									</a>
								</div>
							</motion.div>
						)} */}
					</AnimatePresence>
				</div>
				

			<Arrow onClick={slideRight} className={"z-[50] right-2 lg:right-10"}>
				<BsChevronCompactRight />
			</Arrow>
		</div>
	);
};
