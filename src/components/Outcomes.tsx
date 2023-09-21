import CheckIcon from "@mui/icons-material/Check";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

// const outcomes = [1, 2, 3, 4, 5]

export const Outcomes = () => {
	return (
		<Paper>
			<Box padding={4}>
				<Typography variant="h5" component="h2" gutterBottom>
					What you'll learn
				</Typography>

				<Grid
					container
					direction={{ xs: "column", md: "row" }}
					spacing={2}
					paddingTop={2}
				>
					<Grid item xs={6}>
						<Stack direction="row" spacing={1}>
							<CheckIcon />
							<Typography variant="caption">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={6}>
						<Stack direction="row" spacing={1}>
							<CheckIcon />
							<Typography variant="caption">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, asdf asdf
								asdf asdf
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={6}>
						<Stack direction="row" spacing={1}>
							<CheckIcon />
							<Typography variant="caption">
								Lorem ipsum dolor sit amet consectetur
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={6}>
						<Stack direction="row" spacing={1}>
							<CheckIcon />
							<Typography variant="caption">
								Lorem ipsum dolor sit amet consec asdf asdf asdf asd fasd fa
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={6}>
						<Stack direction="row" spacing={1}>
							<CheckIcon />
							<Typography variant="caption">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</Box>
		</Paper>
	);
};
