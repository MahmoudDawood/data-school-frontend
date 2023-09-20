import { Stack } from "@mui/material";
import { Filter, Search } from ".";

export const SearchAndFilter = () => {
	return (
		<Stack sx={{ pt: 4 }} direction="column" spacing={2} justifyContent="center">
			{/* <Box minWidth="sm"> */}
			<Search />
			{/* </Box> */}
			{/* <Box minWidth="sm"> */}
			<Filter />
			{/* </Box> */}
		</Stack>
	);
};
