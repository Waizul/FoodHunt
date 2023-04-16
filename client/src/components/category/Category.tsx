import { Divider, Stack } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

type Props = {
	category: string;
	setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const CategoryItem = styled("li")(({ theme }) => ({
	width: "max-content",
	paddingBottom: "0",
	fontWeight: 600,
	cursor: "pointer",
}));

const BorderBottom = styled(Divider)(({ theme }) => ({
	backgroundColor: theme.palette.primary[800],
	width: "70%",
	height: "2px",
}));

const Category = ({ category, setCategory }: Props) => {
	const theme = useTheme();
	return (
		<Stack direction={"row"} spacing={2}>
			<Stack alignItems={"center"}>
				<CategoryItem
					sx={{
						color: category === "breakfast" ? theme.palette.primary[800] : "",
					}}
					onClick={() => setCategory("breakfast")}
				>
					Breakfast
				</CategoryItem>
				{category === "breakfast" && <BorderBottom role='presentation' />}
			</Stack>
			<Stack alignItems={"center"}>
				<CategoryItem
					sx={{
						color: category === "lunch" ? theme.palette.primary[800] : "",
					}}
					onClick={() => setCategory("lunch")}
				>
					Lunch
				</CategoryItem>
				{category === "lunch" && <BorderBottom role='presentation' />}
			</Stack>
			<Stack alignItems={"center"}>
				<CategoryItem
					sx={{
						color: category === "dinner" ? theme.palette.primary[800] : "",
					}}
					onClick={() => setCategory("dinner")}
				>
					Dinner
				</CategoryItem>
				{category === "dinner" && <BorderBottom role='presentation' />}
			</Stack>
		</Stack>
	);
};

export default Category;
