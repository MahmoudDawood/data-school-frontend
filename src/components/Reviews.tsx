import GradeIcon from "@mui/icons-material/Grade";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
	Avatar,
	Box,
	Divider,
	Grid,
	IconButton,
	Menu,
	MenuItem,
	Rating,
	Stack,
	Typography,
} from "@mui/material";
import { useState } from "react";

const Review = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ paddingY: 2 }}>
			<Divider light />
			{/* TODO: Add a divider */}
			<Stack direction="row" paddingBottom={3} paddingTop={2}>
				<Avatar alt="User" src="/user.png" />
				<Stack direction="column" paddingLeft={2}>
					<Typography variant="body1" fontWeight="bold" gutterBottom>
						Mahmoud Dawood
					</Typography>
					<Stack direction="row">
						<Rating value={4.7} precision={0.1} size="small" />
						<Typography variant="caption" paddingLeft={1}>
							2 weeks ago
						</Typography>
					</Stack>
				</Stack>

				<Box marginLeft="auto">
					<IconButton
						aria-controls="comment-menu"
						aria-haspopup="true"
						onClick={handleClick}
					>
						<MoreVertIcon />
					</IconButton>
					<Menu
						id="comment-menu"
						anchorEl={anchorEl}
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem>Edit</MenuItem>
						<MenuItem>Delete</MenuItem>
					</Menu>
				</Box>
			</Stack>
			<Typography variant="body1" gutterBottom>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ipsam obcaecati
				nihil enim rerum, hic assumenda quae saepe aut perspiciatis similique adipisci,
				cumque cupiditate! Qui quam et consequatur molestias dolore.
			</Typography>
		</Box>
	);
};

export const Reviews = () => {
	return (
		<Box>
			<Typography fontWeight="bold" variant="h5" gutterBottom>
				Reviews
			</Typography>
			<Grid container direction="row" spacing={1} paddingBottom={3}>
				<Grid item>
					<GradeIcon sx={{ color: "#FFD700", padding: 0 }} />
				</Grid>
				<Grid item>
					<Typography fontWeight="bold" variant="h6" margin="auto" gutterBottom>
						4.7 course rating • 18 ratings
					</Typography>
				</Grid>
			</Grid>
			<Review />
			<Review />
			<Review />
			{/* TODO: Add show all reviews Modal */}
		</Box>
	);
};
