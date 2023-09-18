import { Container, Grid } from "@mui/material";
import { CourseCard } from "../components/CourseCard";

export const Courses = () => {
	return (
		<>
			<Container>
				<Grid container spacing={4}>
					{/* TODO: Add responsiveness to screen sizes */}
					<CourseCard />
					<CourseCard />
					<CourseCard />
					<CourseCard />
					<CourseCard />
				</Grid>
			</Container>
		</>
	);
};
