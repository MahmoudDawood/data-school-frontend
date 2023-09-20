import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import { SearchAndFilter } from "../components";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Blog = () => {
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
						Data Analysis Articles
					</Typography>
					<Typography variant="h5" align="center" color="text.secondary" paragraph>
						Get insights on the latest tools & methods that you can use to analyze your
						data more effectively. Our data analysis blog will help you develop your
						skills.
					</Typography>
					<SearchAndFilter />
				</Container>
			</Box>
			<Container sx={{ py: 8 }} maxWidth="lg">
				{/* End hero unit */}
				<Grid container spacing={4}>
					{cards.map(card => (
						<Grid item key={card} xs={12} sm={6} md={4}>
							<Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
								<CardMedia
									component="div"
									sx={{
										// 16:9
										pt: "56.25%",
									}}
									image="https://source.unsplash.com/random?wallpapers"
									title="Blog post image"
								/>
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography gutterBottom variant="h5" component="h2">
										Artical Title
									</Typography>
									<Typography>
										This is a media card. You can use this section to describe the
										content.
									</Typography>
								</CardContent>
								<CardActions>
									<Button fullWidth variant="contained" size="large">
										Read Article
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</main>
	);
};
