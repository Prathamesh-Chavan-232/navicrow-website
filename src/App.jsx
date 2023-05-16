// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// import { Footer } from "./components/footer";
import { Destinations } from "./pages/destinations/Destinations";
import { Home } from "./pages/homepage/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Footer } from "./components/Footer";
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
