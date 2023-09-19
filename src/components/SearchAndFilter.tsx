import { Stack } from "@mui/material";
import { Filter, Search } from ".";

export const SearchAndFilter = () => {
	return (
		<Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
			<Search />
			<Filter />
		</Stack>
	);
};
