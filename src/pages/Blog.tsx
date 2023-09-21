import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Paper,
	Typography,
} from "@mui/material";
import { SearchAndFilter } from "../components";

const cards = [1, 2, 3, 4, 5, 6, 7];

export const Blog = () => {
	return (
		<Container maxWidth="lg">
			<main>
				<Paper
					sx={{
						position: "relative",
						// backgroundColor: "grey.800",
						color: "#fff",
						mb: 4,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundImage: `url(./blog/blog1.avif)`,
						// backgroundImage: `url(./blog/blog2.png)`,
						// backgroundImage: `url(./blog/blog3.avif)`,
						// backgroundImage: `url(./blog/blog4.jpg)`,
						// backgroundImage: `url(./blog/blog5.jpg)`,
					}}
				>
					{/* Increase the priority of the hero background image */}
					{/* {<img style={{ display: "none" }} src="./course-image.png" alt="Blog image" />} */}
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
									Data Analysis Article
								</Typography>
								<Typography variant="h5" color="inherit" paragraph>
									Get insights on the latest tools & methods that you can use to analyze
									your data more effectively. Our data analysis blog will help you develop
									your skills.
								</Typography>
								<SearchAndFilter />
							</Box>
						</Grid>
					</Grid>
				</Paper>

				<Container sx={{ py: 8 }} maxWidth="lg">
					{/* End hero unit */}
					<Grid container spacing={4}>
						{cards.map(card => {
							return (
								<Grid item xs={12} md={6}>
									<CardActionArea component="a" href="#">
										<Paper>
											<Card key={card} sx={{ display: "flex" }}>
												<CardContent sx={{ flex: 1 }}>
													<Typography component="h2" variant="h5">
														{/* title */}
														Post title
													</Typography>
													<Typography variant="subtitle1" color="text.secondary">
														{/* date */}
														18 Nov
													</Typography>
													<Typography variant="subtitle1" paragraph>
														{/* description */}
														This is a media card. You can use this section to describe the
														content.
													</Typography>
													<Typography variant="subtitle1" color="primary">
														Continue reading...
													</Typography>
												</CardContent>
												<CardMedia
													component="img"
													sx={{ width: 160, display: { xs: "none", sm: "block" } }}
													image="./course-image.png"
													alt="Article photo"
												/>
											</Card>
										</Paper>
									</CardActionArea>
								</Grid>
							);
						})}
					</Grid>
				</Container>
			</main>
		</Container>
	);
};
