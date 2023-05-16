export const Hero = () => {
	return (
		<div className="flex flex-col items-center justify-between">
			<div className="px-12 py-60 flex flex-col items-center justify-center">
				<div className="pb-8 text-xl text-center">
					Connecting your journey with purpose
				</div>
				<h1 className="text-6xl lg:text-8xl text-center font-fancy">
					Unforgettable travel
				</h1>
				<h1 className="text-6xl lg:text-8xl text-center font-fancy">
					experiences with
				</h1>
				<h1 className="text-6xl lg:text-8xl text-center font-fancy">
					a <span className="italic font-thin">positive</span> impact
				</h1>
			</div>
			<div className="hidden p-32">
				<a>Open Video</a>
			</div>
		</div>
	);
};
