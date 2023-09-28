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
import {
	CourseContent,
	CourseRating,
	FloatingCard,
	Outcomes,
	Reviews,
} from "../components";
import VideoPlayer from "../components/VideoPlayer";

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
	// TODO: Create a sticky footer after scrolling past course meta info
	// Name (rating details, enrollment), Price, Buy now button
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
				<Grid container>
					<Grid item xs={12} lg={6} paddingY="2">
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
							<Typography paddingTop={1} variant="body1" color="white" gutterBottom>
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

					<Grid item xs={12} lg={6}>
						<VideoPlayer />
					</Grid>
				</Grid>
			</Paper>

			<Grid container direction="row-reverse" padding={{ md: 5, xs: 2 }}>
				<Grid item xs={12} lg={4}>
					<Box m={{ md: 5, xs: 1 }}>
						<FloatingCard />
					</Box>
				</Grid>
				<Grid item md={12} lg={8}>
					<Box m={{ md: 5, xs: 1 }}>
						<Outcomes />
					</Box>

					<Box m={{ md: 5, xs: 1 }}>
						<CourseContent />
					</Box>

					<Box m={{ md: 5, xs: 1 }}>
						<Description />
						<Divider />
					</Box>

					<Box m={{ md: 5, xs: 1 }}>
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
							algorithms, SQL, Tableau, Planning, and Leadership. has a B.Sc. Degree
							focused in Computer Engineering from Ain Shams University.
						</Typography>
					</Box>

					<Box m={{ md: 5, xs: 1 }}>
						<Reviews />
					</Box>
					<Box paddingBottom={2}>
						<Button
							style={{ textTransform: "none" }}
							variant="contained"
							size="large"
							fullWidth
							sx={{ fontWeight: "bold", letterSpacing: ".2rem" }}
						>
							Buy now
						</Button>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};
