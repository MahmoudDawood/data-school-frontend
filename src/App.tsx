import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { AboutUs, Blog, Course, Courses, Home } from "./pages";

function App() {
	// TODO: Use a custom theme provider
	return (
		<>
			<CssBaseline />
			<Navbar />
			<Routes>
				<Route path="/courses" element={<Courses />} />
				<Route path="/course/:id" element={<Course />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/" element={<Home />} />
				{/* TODO: Add a default landing page 404 */}
			</Routes>
			<Footer />
		</>
	);
}

export default App;
