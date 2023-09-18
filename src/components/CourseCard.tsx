import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";
import { CourseRating } from "./CourseRating";

export const CourseCard = () => {
	return (
		<Grid item xs={4}>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia sx={{ height: 140 }} image="/course-image.png" title="Course Image" />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Intermediate Data Analysis
					</Typography>
					<Typography variant="body2" color="text.secondary" gutterBottom>
						Yasser Alaa
					</Typography>
					<Typography variant="body2" color="text.secondary" gutterBottom>
						199.99 L.E
					</Typography>
					<CourseRating />
				</CardContent>
				<CardActions>
					<Button fullWidth variant="contained" size="large">
						View Course
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};
