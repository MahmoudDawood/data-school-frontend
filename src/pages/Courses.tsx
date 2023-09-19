import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Filter, Search } from "../components";
import { CourseCard } from "../components/CourseCard";

export const Courses = () => {
	return (
		<main>
			<Container>
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
						<Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
							<Search />
							<Filter />
						</Stack>
					</Container>
				</Box>
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
