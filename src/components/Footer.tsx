import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: theme =>
					theme.palette.mode === "light"
						? theme.palette.grey[200]
						: theme.palette.grey[800],
				p: 6,
				// position: "sticky",
				width: "100%",
				// position: "fixed",
				bottom: 0,
			}}
		>
			<Container maxWidth="lg" sx={{}}>
				<Grid container spacing={5}>
					<Grid item xs={12} sm={4}>
						<Typography variant="h6" color="text.primary" gutterBottom>
							About Us
						</Typography>
						<Typography variant="body2" color="text.secondary">
							We are Data School, dedicated to providing the best learning experience to
							our customers.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography variant="h6" color="text.primary" gutterBottom>
							Contact Us
						</Typography>
						<Typography variant="body2" color="text.secondary">
							15 Abbas, Madint Nasr, Cario, Egypt
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Email: info@dataschool.com
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Phone: +20 123 456 7890
						</Typography>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography variant="h6" color="text.primary" gutterBottom>
							Follow Us
						</Typography>
						<Link href="https://www.facebook.com/" color="inherit">
							<Facebook />
						</Link>
						<Link href="https://www.instagram.com/" color="inherit" sx={{ pl: 1, pr: 1 }}>
							<Instagram />
						</Link>
						<Link href="https://www.twitter.com/" color="inherit">
							<Twitter />
						</Link>
					</Grid>
				</Grid>
				<Box mt={5}>
					<Typography variant="body2" color="text.secondary" align="center">
						{"Copyright © "}
						<Link color="inherit" href="#">
							Your Website
						</Link>{" "}
						{new Date().getFullYear()}
						{"."}
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};
