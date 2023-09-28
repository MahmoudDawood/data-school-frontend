import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Box, Grid, Stack } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

const LessonTab = () => {
	// TODO: Default expand only first section
	return (
		<Box paddingBottom={1}>
			<Grid container direction="row" justifyContent="space-between">
				<Grid item>
					<Stack direction="row">
						<PlayCircleIcon fontSize="small" />
						<Typography paddingLeft={1} variant="caption">
							Curriculum Walkthrough
						</Typography>
					</Stack>
				</Grid>
				<Grid item>
					<Typography variant="caption">2:52</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

const SectionTab = () => {
	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				sx={{ flexDirection: "row-reverse" }}
			>
				<Grid container direction="row" justifyContent="space-between">
					<Grid item>
						<Typography fontWeight="bold" paddingLeft={1}>
							Introduction
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption">4 lessons • 13min</Typography>
					</Grid>
				</Grid>
			</AccordionSummary>
			<AccordionDetails>
				<LessonTab />
				<LessonTab />
				<LessonTab />
			</AccordionDetails>
		</Accordion>
	);
};

export const CourseContent = () => {
	return (
		<Box>
			<Typography fontWeight="bold" variant="h5" gutterBottom>
				Course content
			</Typography>
			<Typography variant="body2" gutterBottom>
				8 sections • 43 Lesson • 4h 52m total length
			</Typography>

			<Box sx={{ color: "grey" }}>
				<SectionTab />
				<SectionTab />
				<SectionTab />
			</Box>
		</Box>
	);
};
