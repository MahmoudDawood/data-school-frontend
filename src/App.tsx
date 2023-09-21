import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { AboutUs, Blog, Course, Courses, Home } from "./pages";
import theme from "./theme";

function App() {
	// TODO: Use a custom theme provider
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navbar />
			<Routes>
				{["/", "/home"].map(path => (
					<Route path={path} element={<Home />} />
				))}
				{/* TODO: Add react router scroll top */}
				<Route path="/courses" element={<Courses />} />
				<Route path="/course/:id" element={<Course />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/" element={<Home />} />
				{/* <Router exact path="*" element={} */}
				{/* TODO: Add a default landing page 404 */}
			</Routes>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
