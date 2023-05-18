// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// npm packages
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Routes
import { Destinations } from "./pages/Destinations";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AnimatePresence } from "framer-motion";
import { TravelStyle } from "./pages/TravelStyle";
import { Africa } from "./pages/destinations/Africa";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<AnimatePresence mode={"wait"}>
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<Home />} />
						<Route path="/destinations" element={<Africa />} />
						<Route path="/travel-styles" element={<TravelStyle />} />
						<Route path="/about" element={<About />} />
						<Route path="/africa" element={<Africa />} />
					</Routes>
				</AnimatePresence>
			</BrowserRouter>
		</div>
	);
}

export default App;
library.add(fab, fas, far);

// TODO NOW:
// [ x ]: Navbar Page Transition
// [ ]: Travel Styles Section
// [ ]: Travel Stories Section
// [ ]: Destinations & Travel Style Menus
// [ ]: Enquire Form Hamburger
// [ ]: Transition Menu Fix
// [ ]: Scrolling Animations
// [ ]: Adding Proper Content & Images

// TODO:
// [ ] - Proper Layout
// [ ] - Drop downs, Carousels
// [ ] - Check all Fonts, Sizes, Heading tags, html tags.
// [ ] - Animations & Other Fancy stuff
// [ ] - Optimization, Better Separation of components, code spiltting, etc
// [ ] - (Optional if Loading is good) - Switch to Next & pnpm
