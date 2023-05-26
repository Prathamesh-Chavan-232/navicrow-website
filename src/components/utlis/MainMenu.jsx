export const MainMenu = ({ listItems }) => {
	return (
		<div className="flex flex-col gap-4">
			{listItems.map((item, index) => {
				return (
					<div
						key={index}
						className="flex justify-around items-center gap-[30rem]"
					>
						{/* {item.img} */}
						<a href={item.link} className="hover:text-light-green">
							{item.title}
						</a>
					</div>
				);
			})}
		</div>
	);
};
