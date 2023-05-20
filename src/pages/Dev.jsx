import { Footer } from "../components/footer/Footer";
import { HamburgerMenu } from "../components/navbar/HamburgerMenu";

export const Dev = () => {
	return (
		<div>
			<div className="h-screen w-screen bg-black">
				<HamburgerMenu />
			</div>
			<Footer />
		</div>
	);
};
