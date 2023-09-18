import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { Blog, Courses, Home, Instructors } from "./pages";

function App() {
	return (
		<>
			<CssBaseline enableColorScheme>
				<Navbar />
				<h1>Data School</h1>

				<Routes>
					<Route path="/courses" element={<Courses />} />
					<Route path="/instructors" element={<Instructors />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/" element={<Home />} />
				</Routes>
				<Footer />
			</CssBaseline>
		</>
	);
}

export default App;
