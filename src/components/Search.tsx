import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, Stack, TextField } from "@mui/material";

const options = ["SQL in Excel", "Intermediate Data Analysis"];

const SearchLabel = () => {
	return (
		<Stack direction="row" spacing={1}>
			<SearchIcon />
			<p>Search</p>
		</Stack>
	);
};

export const Search = () => {
	return (
		<Autocomplete
			// sx={{ width: 300 }}
			id="free-solo-demo"
			freeSolo
			options={options}
			renderInput={params => <TextField {...params} label={<SearchLabel />} />}
		/>
	);
};
