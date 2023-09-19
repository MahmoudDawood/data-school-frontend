import { Box, Container, Grid, Typography } from "@mui/material";
import { SearchAndFilter } from "../components";
import { CourseCard } from "../components/CourseCard";

export const Courses = () => {
	return (
		<main>
			<Box
				sx={{
					bgcolor: "background.paper",
					pt: 8,
					pb: 6,
				}}
			>
				<Container maxWidth="sm">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="text.primary"
						gutterBottom
					>
						Courses
					</Typography>
					<Typography variant="h5" align="center" color="text.secondary" paragraph>
						Explore our courses.
					</Typography>
					<SearchAndFilter />
				</Container>
			</Box>

			<Container sx={{ py: 8 }} maxWidth="lg">
				<Grid container spacing={4}>
					{/* TODO: Add responsiveness to screen sizes */}
					<CourseCard />
					<CourseCard />
					<CourseCard />
					<CourseCard />
					<CourseCard />
				</Grid>
			</Container>
		</main>
	);
};
