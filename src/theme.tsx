import { createTheme } from "@mui/material";

const theme = createTheme({
	components: {
		MuiPaper: {
			defaultProps: {
				elevation: 4,
			},
		},
	},
});

export default theme;
