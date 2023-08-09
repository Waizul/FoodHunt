import { ColorButton, StyledLink } from "@/styles";
import { ExpandMore } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";

type Props = {
	item: ItemType;
};

const Image = styled("img")({
	maxWidth: 250,
	objectFit: "contain",
	marginBottom: 5,
});
const ItemCard = ({ item }: Props) => {
	const theme = useTheme();

	const [expanded, setExpanded] = useState<boolean>(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	
	return (
		<Stack
			// alignItems={"center"}
			justifyContent={"center"}
			sx={{ height: "80vh", marginTop: "auto" }}
		>
			<Box>
				<Typography variant='h3' mb={2}>
					{item.title}
				</Typography>
				<Image src={item.imgUrl} alt={item.title} />
				<Stack
					direction={"row"}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<Typography
						color={theme.palette.primary[500]}
						variant='h4'
						fontSize={22}
					>
						200 BDT
					</Typography>
					<StyledLink to={`/${item.type}/${item._id}`}>
						<ColorButton>Order now</ColorButton>
					</StyledLink>
				</Stack>
				<Box
					sx={{
						height: expanded ? "max-content" : 1,
						position: "relative",
						transition: "all 1s ease",
					}}
				>
					<Typography
						sx={{
							position: "absolute",
							zIndex: "10",
							bgcolor: theme.palette.background.paper,
						}}
					>
						{item.desc.substring(0, 100)}

						{expanded && item.desc.substring(100, -1)}
						<ExpandMore
							sx={{
								mb: -1,
								cursor: "pointer",
								transform: expanded ? "rotate(180deg)" : "",
							}}
							onClick={handleExpandClick}
						/>
					</Typography>
				</Box>
			</Box>
		</Stack>
	);
};

export default ItemCard;
