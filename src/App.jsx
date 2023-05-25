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
import { TravelStyles } from "./pages/TravelStyles";
import { Africa } from "./pages/destinations/Africa";
import { Dev } from "./pages/Dev";

function App() {
	return (
		<div className="flex flex-col min-h-screen overflow-x-hidden">
			<BrowserRouter>
				<AnimatePresence mode={"wait"}>
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<Home />} />
						<Route path="/dev" element={<Dev />} />
						{/* <Route path="/destinations/:id" element={<Destinations />} /> */}
						<Route path="/destinations/char-dham" element={<Africa />} />
						<Route
							path="/travel-styles/family-travel"
							element={<TravelStyles />}
						/>
						<Route
							path="/travel-styles/pilgrimage"
							element={<TravelStyles />}
						/>
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
// [ x ]: Navbar Page Transition
// [ x ]: Travel Styles Section
// [ x ]: Enquire Form Hamburger
// [ x ]: Destinations & Travel Style Menus
// [ ]: Grid View - Destinations
// [ ]: Destinations - Char Dhaam
// [ ]: Travel Style - Pilgrimage
// [ ]: Package Page
// [ ]: Packages Info Carousel
// [ ]: Fullpage Carousel, Image Carousel
// [ ]: Scrolling Animations

// TODO:
// [ x ] - Proper Layout
// [ x ] - Drop downs, Carousels
// [ ] - Check all Padding & Layouts
// [ ] - Check all Fonts, Sizes, Heading tags, html tags.
// [ ] - Animations, Smooth Scrolling & Other Fancy stuff
// [ ] - Image Loading, Lazy Loading
// [ ] - Optimization, code spiltting, etc
// [ ] - (Optional if Loading is good) - Switch to Next & pnpm

// [ ]: Travel Stories Blog
