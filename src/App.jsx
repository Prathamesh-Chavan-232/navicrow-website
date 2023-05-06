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
