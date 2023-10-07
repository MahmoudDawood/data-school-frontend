import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { VideoPlayer } from "../components/VideoPlayer";

const drawerWidth = 375;

const Main = styled("main", { shouldForwardProp: prop => prop !== "open" })<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create("margin", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: `-${drawerWidth}px`,
	...(open && {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	}),
}));

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

const Lesson = () => {
	// TODO: Highlight currently playing lesson
	// TODO: Scroll until selected lesson is on the top
	return (
		<List>
			{["Lesson 1", "Lesson 2 Lesson 2 Lesson 2 lesson"].map(text => (
				<Box
					sx={
						{
							// backgroundColor: "ButtonShadow", // TODO: Apply to current lesson
						}
					}
				>
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Checkbox checked />
							</ListItemIcon>
							<ListItemText primary={text} />
							<Typography variant="caption">4min</Typography>
						</ListItemButton>
					</ListItem>
				</Box>
			))}
		</List>
	);
};

export const Watch = () => {
	const [open, setOpen] = React.useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<AppBar position="fixed" open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: "none" }) }}
					>
						<MenuIcon />
					</IconButton>
					{/* {} */}
					<IconButton
						onClick={handleDrawerClose}
						color="inherit"
						sx={{ mr: 2, ...(!open && { display: "none" }) }}
					>
						<ChevronLeftIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						{"Course name"}
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<Divider />
				<List>
					{["Section 1", "Section 2", "Section 3", "Section 4"].map(text => (
						<ListItem key={text} disablePadding>
							<Stack direction="column" spacing="0">
								<ListItemButton>
									<ListItemText>
										<Typography variant="h6" fontWeight="bold">
											{text}
										</Typography>
										<Typography variant="caption">18min</Typography>
									</ListItemText>
								</ListItemButton>
								<Lesson />
							</Stack>
						</ListItem>
					))}
				</List>
				<Divider />
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				<VideoPlayer />
			</Main>
		</Box>
	);
};
