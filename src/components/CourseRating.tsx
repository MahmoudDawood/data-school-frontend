import { Box, Rating, Typography } from "@mui/material";

export const CourseRating = () => {
	// TODO: Include number of ratings, pass it as a prop with overall rating
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Rating name="read-only" precision={0.1} value={4.6} readOnly size="small" />
			<Typography variant="body2" component="legend">
				{4.2}
			</Typography>
			<Typography ml={1} variant="caption" component="legend">
				({139} reviews)
			</Typography>
		</Box>
	);
};
