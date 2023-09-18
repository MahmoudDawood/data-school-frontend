import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { CourseCard } from "./components/CourseCard";

function App() {
	return (
		<>
			<CssBaseline enableColorScheme>
				<h1>Data School</h1>
			</CssBaseline>
			<CourseCard />
		</>
	);
}

export default App;
