import { Link } from "react-router-dom";
export const Card = ({
	img,
	title,
	subtitle,
	link,
	isCenter = false,
	heading = "",
	subheading = "",
	val = 3.2,
}) => {
	return (
		<div className="w-96 flex flex-col gap-4 items-center">
			{isCenter && (
				<div className="p-4 bg-light-gray flex flex-col gap-8 text-center">
					<span className="text-sm">TRAVEL IN STYLE</span>
					<span className="font-fancy text-6xl">
						Find Travel Inspiration by <span className="italic">style</span>
					</span>
				</div>
			)}
			<div className={`relative`}>
				<span
					className={`text-white font-fancy text-3xl text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
				>
					{title}
				</span>
				<img src={img} alt="" />
			</div>
			<span className="text-center text-lg font-thin">{subtitle}</span>
			<button className="px-10 py-4 border border-olive-green bg-transparent text-2xl text-olive-green rounded-full baseline transition-color duration-200 lg:text-lg lg:px-8 lg:py-3 hover:text-white hover:bg-olive-green">
				<Link to={`/travel-styles/${link}`}>Discover more</Link>
			</button>
		</div>
	);
};
