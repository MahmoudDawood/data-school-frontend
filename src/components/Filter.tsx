import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Autocomplete, Checkbox, Stack, TextField } from "@mui/material";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const FilterLabel = () => {
	return (
		<Stack direction="row" spacing={1}>
			<FilterAltIcon />
			<p>Filter By Tag</p>
		</Stack>
	);
};

export const Filter = () => {
	return (
		<Autocomplete
			// sx={{ width: 200, minWidth: "md" }}
			multiple
			id="checkboxes-tags-demo"
			options={topics}
			disableCloseOnSelect
			getOptionLabel={option => option}
			renderOption={(props, option, { selected }) => (
				<li {...props}>
					<Checkbox
						icon={icon}
						checkedIcon={checkedIcon}
						style={{ marginRight: 8 }}
						checked={selected}
					/>
					{option}
				</li>
			)}
			// style={{ minWidth: "30vw" }}
			renderInput={params => (
				<TextField {...params} label={<FilterLabel />} placeholder="Topics" />
			)}
		/>
	);
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const topics = [
	"Data Analysis",
	"SQL",
	"Machine Learning",
	"Marketing",
	"Excel",
	"AI",
	"Beginner",
	"Intermediate",
	"Advanced",
];
