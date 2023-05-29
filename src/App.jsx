// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import "aos/dist/aos.css";
// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { lazy } from "react";

// npm packages
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Routes
import { Destinations } from "./pages/Destinations";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { TravelStyles } from "./pages/TravelStyles";
import { PackagePage } from "./pages/PackagePage";
import { Dev } from "./pages/Dev";

function App() {
	return (
		<div className="flex flex-col min-h-screen overflow-x-hidden">
			<BrowserRouter>
				<AnimatePresence mode={"wait"}>
					<Routes location={location} key={location.pathname}>
						<Route index element={<Home />} />
						<Route exact path="/dev" element={<Dev />} />
						<Route exact path="/package/:id" element={<PackagePage />} />
						<Route exact path="/destinations/:id" element={<Destinations />} />
						<Route exact path="/travel-styles/:id" element={<TravelStyles />} />
						<Route exact path="/about" element={<About />} />
					</Routes>
				</AnimatePresence>
			</BrowserRouter>
		</div>
	);
}

export default App;
library.add(fab, fas, far);

// TODO NOW:
// [ ]: Grid View - Destinations
// [ ]: Packages Info Carousel
// [ ]: Fullpage Carousel, Image Carousel
// [ ]: Dry out the code
// [ ]: Padding & sizes consistency
// [ ] - Animations, Smooth Scrolling & Other Fancy stuff
// [ ] - Image Loading, Lazy Loading
// [ ] - Optimization, code spiltting, etc
// [ ] - Switch to Next & pnpm
// [ ]: Travel Stories Blog

// TODO:
// [ x ]: Navbar Page Transition
// [ x ]: Travel Styles Section
// [ x ]: Enquire Form Hamburger
// [ x ]: Destinations & Travel Style Menus
// [ x ]: Destinations - Char Dhaam
// [ x ]: Travel Style - Pilgrimage
// [ x ]: Package Page
// [ x ]: Scrolling Animations
// [ x ] - Proper Layout
// [ x ] - Drop downs, Carousels
