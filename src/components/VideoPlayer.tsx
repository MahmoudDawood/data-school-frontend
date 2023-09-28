import { Box } from "@mui/material";
import ReactPlayer from "react-player";

function VideoPlayer() {
	return (
		<Box padding={{ xs: 2, lg: 4 }}>
			<Box
				sx={{
					position: "relative",
					width: "100%",
					paddingBottom: "56.25%",
					height: 0,
				}}
			>
				<ReactPlayer
					className="iframe"
					width="100%"
					height="100%"
					url="https://www.youtube.com/embed/yZvFH7B6gKI?si=7SOmFMTkTRbURZsh"
					config={{
						youtube: {
							playerVars: { showinfo: 1 },
						},
						facebook: {
							appId: "12345",
						},
					}}
				/>
			</Box>
		</Box>
	);
}

export default VideoPlayer;
