import { Link } from "react-router-dom";
export const MainMenu = ({ listItems }) => {
	return (
		<div className="flex flex-col gap-4">
			{listItems.map((item, index) => {
				return (
					<div key={index}>
						{/* <img src={item.img} alt="" /> */}
						<a href={item.link} className="hover:text-light-green">
							{item.title}
						</a>
					</div>
				);
			})}
		</div>
	);
};
