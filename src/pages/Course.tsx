import AutorenewIcon from "@mui/icons-material/Autorenew";
import LanguageIcon from "@mui/icons-material/Language";
import {
	Avatar,
	Box,
	Button,
	Divider,
	Grid,
	Link,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import { CourseContent, CourseRating, Outcomes, Reviews } from "../components";

const htmlContent = `
<div class="course-container"><h2>Course Overview</h2><p>Our Data Analysis Course is designed to equip you with the knowledge and tools needed to analyze data effectively. Whether you're a beginner or an experienced data enthusiast, this course will help you develop valuable skills in data analysis and visualization.				</p>		<h2>Course Highlights</h2>		<ul>		<li>Introduction to data analysis concepts</li>				<li>Data cleaning and preprocessing techniques</li>				<li>Statistical analysis and hypothesis testing</li>				<li>Data visualization with industry-standard tools</li>				<li>Real-world case studies and projects</li>		</ul>		<h2>Who Should Attend</h2>		<p>				This course is suitable for:		</p>		<ul>				<li>Students and graduates seeking data analysis skills</li>				<li>Professionals looking to enhance their data analysis capabilities</li>				<li>Anyone interested in leveraging data for informed decision-making</li>		</ul>		<h2>Course Schedule</h2>		<p>				Duration: 12 weeks<br>				Start Date: [Insert Start Date]<br>				End Date: [Insert End Date]<br>				Class Times: [Insert Class Times]		</p>		<h2>Registration</h2>		<p>				To register for the Data Analysis Course, please fill out the registration form on our website or contact our admissions team.		</p></div>`;

const Description = () => {
	return (
		<Typography variant="body1" component="div">
			<div dangerouslySetInnerHTML={{ __html: htmlContent }} />
		</Typography>
	);
};

export const Course = () => {
	return (
		<>
			<Paper
				sx={{
					position: "relative",
					backgroundColor: "grey.800",
					color: "#fff",
					mb: 4,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundImage: "/course-image.png",
				}}
			>
				{/* Increase the priority of the hero background image */}
				{<img style={{ display: "none" }} src="/course-image.png" alt="Course image" />}
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
								Intermediate Data Analysis Course
							</Typography>
							<Typography variant="h6" color="inherit" paragraph>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
								laudantium debitis iusto asperiores ratione ea incidunt ipsa molestiae
								dolore optio nemo modi nam illo voluptas praesentium earum deserunt, animi
								sapiente!
							</Typography>
							<CourseRating />
							<Typography paddingTop={1} variant="body1" gutterBottom>
								Created by <Link>Yasser Alaa</Link>
							</Typography>
							<Grid paddingTop={1} container spacing={2}>
								<Grid item xs={4}>
									<Stack direction="row" spacing={1}>
										<AutorenewIcon />
										<Typography variant="caption">Last updated 8/2023</Typography>
									</Stack>
								</Grid>
								<Grid item xs={4}>
									<Stack direction="row" spacing={1}>
										<LanguageIcon />
										<Typography variant="caption">Arabic</Typography>
									</Stack>
								</Grid>
							</Grid>
						</Box>
					</Grid>
				</Grid>
			</Paper>

			<Box paddingLeft={5} maxWidth="md">
				<Box m={5}>
					<Outcomes />
				</Box>

				<Box m={5}>
					<CourseContent />
				</Box>

				<Box m={5}>
					<Description />
					<Divider />
				</Box>

				<Box m={5}>
					<Typography fontWeight="bold" variant="h5" gutterBottom>
						Instructor
					</Typography>
					<Typography variant="h6" gutterBottom>
						<Link>Yasser Alaa</Link>
					</Typography>
					<Avatar
						alt="Yasser Alaa"
						src="/instructor/yasser.jpeg"
						sx={{ width: 100, height: 100, marginY: 2 }}
					/>
					<Typography variant="body1">
						Experienced Data Scientist/Analyst with a demonstrated history of working in
						the telecommunication and mobility people industry. Skilled in Python, ML
						algorithms, SQL, Tableau, Planning, and Leadership. has a B.Sc. Degree focused
						in Computer Engineering from Ain Shams University.
					</Typography>
				</Box>

				<Box m={5}>
					<Reviews />
				</Box>
				<Box paddingBottom={2}>
					<Button variant="contained" size="large" fullWidth>
						Buy now
					</Button>
				</Box>
			</Box>
		</>
	);
};
