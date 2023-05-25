import { Link } from "react-router-dom";
export const MainMenu = ({ listItems, listImgs }) => {
	return (
		<div className="flex flex-col gap-4">
			{listItems.map((item, index) => {
				return (
					<div key={index}>
						{/* <img src={ListImgs[index]} alt="" /> */}
						<Link className="hover:text-light-green">{item}</Link>
					</div>
				);
			})}
		</div>
	);
};
