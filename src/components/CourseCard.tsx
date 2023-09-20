import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CourseRating } from "./CourseRating";

export const CourseCard = () => {
	return (
		<Grid item key={"Unique key"} xs={12} sm={6} md={4}>
			<Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
				<CardMedia
					component="div"
					sx={{
						// 16:9
						pt: "56.25%",
					}}
					image="/course-image.png"
					title="Course Image"
				/>
				<CardContent sx={{ flexGrow: 1 }}>
					<Typography gutterBottom variant="h5" component="h2">
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
						<Link to={"/course/1"} style={{ textDecoration: "none", color: "white" }}>
							View Course
						</Link>
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};
