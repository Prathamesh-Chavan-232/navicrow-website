// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

// npm packages
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Routes
import { Destinations } from "./pages/Destinations";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AnimatePresence } from "framer-motion";
import { TravelStyles } from "./pages/TravelStyles";
import { CharDham1 } from "./pages/CharDham1";
import { CharDham2 } from "./pages/CharDham2";
import { CharDham3 } from "./pages/CharDham3";
import { CharDham4 } from "./pages/CharDham4";
import { DoDham1 } from "./pages/DoDham1";
import { DoDham2 } from "./pages/DoDham2";
import { DoDham3 } from "./pages/DoDham3";
import { DoDham4 } from "./pages/DoDham4";

function App() {
	return (
		<div className="flex flex-col min-h-screen overflow-x-hidden">
			<BrowserRouter>
				<AnimatePresence mode={"wait"}>
					<Routes location={location} key={location.pathname}>
						<Route index element={<Home />} />
						<Route
							exact
							path="/package/chardham-via-haridwar"
							element={<CharDham1 />}
						/>
						<Route
							exact
							path="/package/chardham-via-delhi"
							element={<CharDham2 />}
						/>
						<Route
							exact
							path="/package/chardham-via-chopta"
							element={<CharDham3 />}
						/>
						<Route
							exact
							path="/package/chardham-via-helicopter"
							element={<CharDham4 />}
						/>
						<Route
							exact
							path="/package/dodham-via-hardiwar"
							element={<DoDham1 />}
						/>
						<Route
							exact
							path="/package/dodham-via-delhi"
							element={<DoDham2 />}
						/>
						<Route
							exact
							path="/package/dodham-via-chopta"
							element={<DoDham3 />}
						/>
						<Route
							exact
							path="/package/dodham-via-helicopter"
							element={<DoDham4 />}
						/>
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
library.add(fab, fas);

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
