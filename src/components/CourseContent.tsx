import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

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
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						sx={{ flexDirection: "row-reverse" }}
					>
						<Typography fontWeight="bold" paddingLeft={1}>
							Introduction
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
							malesuada lacus ex, sit amet blandit leo lobortis eget.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography fontWeight="bold">Introduction</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
							malesuada lacus ex, sit amet blandit leo lobortis eget.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel3a-content"
						id="panel3a-header"
					>
						<Typography fontWeight="bold">Disabled Accordion</Typography>
					</AccordionSummary>
				</Accordion>
			</Box>
		</Box>
	);
};
