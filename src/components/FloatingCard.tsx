import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const FloatingCard = () => {
	return (
		<Card
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				// position: "relative",
			}}
		>
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography variant="h4" gutterBottom>
					Intermediate Data Analysis
				</Typography>
				<Typography variant="h5" color="inherit" fontWeight="bold">
					199.99 L.E
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					style={{ textTransform: "none" }}
					fullWidth
					variant="contained"
					size="large"
					component={Link}
					to="/course/1"
				>
					Buy now
				</Button>
			</CardActions>
			<CardContent>
				<Typography variant="body2" fontWeight="bold" gutterBottom>
					This course includes:
				</Typography>

				<Grid container direction="column" paddingTop={1} spacing={1}>
					<Grid item xs={4}>
						<Stack direction="row" spacing={1}>
							<OndemandVideoIcon fontSize="small" />
							<Typography variant="caption">21.5 hours on-demand video</Typography>
						</Stack>
					</Grid>
					<Grid item xs={4}>
						<Stack direction="row" spacing={1}>
							<PhoneIphoneOutlinedIcon fontSize="small" />
							<Typography variant="caption">Access on mobile and TV</Typography>
						</Stack>
					</Grid>
					<Grid item xs={4}>
						<Stack direction="row" spacing={1}>
							<AllInclusiveIcon fontSize="small" />
							<Typography variant="caption">Full lifetime access</Typography>
						</Stack>
					</Grid>
					<Grid item xs={4}>
						<Stack direction="row" spacing={1}>
							<EmojiEventsIcon fontSize="small" />
							<Typography variant="caption">Certificate of completion</Typography>
						</Stack>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};
