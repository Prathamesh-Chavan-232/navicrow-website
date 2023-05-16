// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import { Destinations } from "./pages/Destinations";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { About } from "./pages/About";
import { AnimatePresence } from "framer-motion";
import { TravelStyle } from "./pages/TravelStyle";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/destinations",
			element: <Destinations />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/travel-styles",
			element: <TravelStyle />,
			errorElement: <ErrorPage />,
		},
		,
		{
			path: "/about",
			element: <About />,
			errorElement: <ErrorPage />,
		},
	]);
	return (
		<div className="app">
			<RouterProvider router={router} />
			<Footer />
		</div>
	);
}

export default App;
library.add(fab, fas, far);
