import AutorenewIcon from "@mui/icons-material/Autorenew";
import LanguageIcon from "@mui/icons-material/Language";
import { Box, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import { CourseRating, Outcomes } from "../components";

export const Course = () => {
	return (
		<>
			<Paper
				sx={{
					position: "relative",
					backgroundColor: "grey.800",
					color: "#fff",
					mb: 4,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundImage: "/course-image.png",
				}}
			>
				{/* Increase the priority of the hero background image */}
				{<img style={{ display: "none" }} src="/course-image.png" alt="Course image" />}
				<Box
					sx={{
						position: "absolute",
						top: 0,
						bottom: 0,
						right: 0,
						left: 0,
						backgroundColor: "rgba(0,0,0,.3)",
					}}
				/>
				<Grid container>
					<Grid item md={6}>
						<Box
							sx={{
								position: "relative",
								p: { xs: 3, md: 6 },
								pr: { md: 0 },
							}}
						>
							<Typography component="h1" variant="h3" color="inherit" gutterBottom>
								Intermediate Data Analysis Course
							</Typography>
							<Typography variant="h5" color="inherit" paragraph>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
								laudantium debitis iusto asperiores ratione ea incidunt ipsa molestiae
								dolore optio nemo modi nam illo voluptas praesentium earum deserunt, animi
								sapiente!
							</Typography>
							<CourseRating />
							<Typography paddingTop={1} variant="body1" gutterBottom>
								Created by <Link>Yasser Alaa</Link>
							</Typography>
							<Grid paddingTop={1} container spacing={2}>
								<Grid item xs={3}>
									<Stack direction="row" spacing={1}>
										<AutorenewIcon />
										<Typography variant="body2">Last updated</Typography>
									</Stack>
								</Grid>
								<Grid item xs={3}>
									<Stack direction="row" spacing={1}>
										<LanguageIcon />
										<Typography variant="body2">Arabic</Typography>
									</Stack>
								</Grid>
							</Grid>
						</Box>
					</Grid>
				</Grid>
			</Paper>

			<Box m={5}>
				<Outcomes />
			</Box>
		</>
	);
};
