// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import "aos/dist/aos.css";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// npm packages
import { Route, Routes, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Routes
import { Destinations } from "./pages/Destinations";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { TravelStyles } from "./pages/TravelStyles";
import { PackagePage } from "./pages/PackagePage";
import { Dev } from "./pages/Dev";
import { Footer } from "./components/footer/Footer";
import { Terms } from "./pages/Terms";
import { ComingSoon } from "./components/ComingSoon";
import { Header } from "./components/navbar/Header";

function App() {
	const id = useParams();

	const [floating, setFloating] = useState(true);
	const [clr, setClr] = useState("white");
	useEffect(() => {
		console.log(id);
	}, []);

	function toggleFloating() {
		setFloating(!floating);
	}

	function toggleClr(newClr) {
		setClr(newClr);
	}
	return (
		<div className="flex flex-col min-h-screen overflow-x-hidden">
			<Header
				clr={`${clr === "black" ? "black" : "white"}`}
				toggleFloating={toggleFloating}
				toggleClr={toggleClr}
			/>
			<div className="absolute w-screen h-full">
				<Routes location={location} key={location.pathname}>
					<Route index element={<Home />} />
					<Route exact path="/dev" element={<Dev />} />
					<Route exact path="/package/:id" element={<PackagePage />} />
					<Route exact path="/destinations/:id" element={<Destinations />} />
					<Route
						exact
						path="/travel-styles/pilgrimage-tour"
						element={<TravelStyles />}
					/>
					<Route exact path="/travel-styles/:id" element={<ComingSoon />} />
					<Route
						exact
						path="/about"
						element={<About toggleClr={toggleClr} />}
					/>
					<Route
						exact
						path="/terms"
						element={<Terms id={"terms"} toggleClr={toggleClr} />}
					/>
					<Route
						path="/policy"
						element={<Terms id="privacy" toggleClr={toggleClr} />}
					/>
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default App;
library.add(fab, fas, far);

// TODO (Navicrow):
// [ ]: Grid View - Destinations
// [ ]: Packages Info Carousel
// [ ]: Fullpage Carousel, Image Carousel
// [ ]: Dry out the code
// [ ]: Padding & sizes consistency
// [ ]: Animations, Smooth Scrolling & Other Fancy stuff
// [ ]: Image Loading, Lazy Loading
// [ ]: Optimization, code spiltting, etc
// [ ]: Switch to Next & pnpm
// [ ]: Travel Stories Blog

// TODO (Niarra):
// [ ] - Proper Layout
