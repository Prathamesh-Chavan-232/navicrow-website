// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import { Destinations } from "./pages/Destinations";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { About } from "./pages/About";
import { AnimatePresence } from "framer-motion";
import { TravelStyle } from "./pages/TravelStyle";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<Home />} />
						<Route path="/destinations" element={<Destinations />} />
						<Route path="/travel-styles" element={<TravelStyle />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</AnimatePresence>
			</BrowserRouter>
		</div>
	);
}

export default App;
library.add(fab, fas, far);

// TODO NOW:
// [ x ]: Basic Carousel
// [ x ]: Footer
// [ x ]: About Us Page
// [ x ]: Navbar Page Transition
// [ ]: Destination Page
// [ ]: Travel Style Page
// [ ]: Travel Styles
// [ ]: Why Us Section
// [ ]: Enquire Form Page Transition

// TODO:
// [ ] - Basic Layout
// [ ] - Proper Layout
// [ ] - Drop downs, Carousels
// [ ] - Check all Fonts, Sizes, Heading tags, html tags.
// [ ] - Animations & Other Fancy stuff
// [ ] - Optimization, Better Separation of components, code spiltting, etc
// [ ] - (Optional if Loading is good) - Switch to Next & pnpm
