import { Box } from "@mui/material";
// import YouTube from "react-youtube";

function VideoPlayer() {
	return (
		<Box padding={{ xs: 4, lg: 3 }}>
			<Box
				sx={{
					position: "relative",
					width: "100%",
					paddingBottom: "56.25%",
					height: 0,
				}}
			>
				<iframe
					className="iframe"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/yZvFH7B6gKI?si=7SOmFMTkTRbURZsh"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</Box>
		</Box>
	);
}

export default VideoPlayer;
