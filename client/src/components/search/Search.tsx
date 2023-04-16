import { ColorButton } from "@/styles";
import { Box, useTheme, Paper, InputBase } from "@mui/material";

type Props = {};

const Search = (props: Props) => {
	const theme = useTheme();
	return (
		<Paper
			component='form'
			elevation={0}
			variant='outlined'
			sx={{
				p: "2px 4px",
				display: "flex",
				alignItems: "center",
				width: 400,
				padding: "0",
				border: "none",
				borderRadius: "30px",
			}}
		>
			<InputBase
				sx={{ ml: 2, flex: 1 }}
				placeholder='Search  your favourite food'
				inputProps={{ "aria-label": "Search  your favourite food" }}
			/>
			<ColorButton>Search</ColorButton>
		</Paper>
	);
};

export default Search;
