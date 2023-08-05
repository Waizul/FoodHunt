import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
	item: ItemType;
};

const Card = styled("div")(({ theme }) => ({
	minWidth: 280,
	paddingBottom: 2,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	transition: 'all .3s',
	img: {
		width: "200px",
		height: "200px",
		objectFit: "contain",
	},
	'&:hover': {
		transform: "scale(1.03)",
	}
}));

const Item = ({ item }: Props) => {
	const navigate = useNavigate();
	
	return (
		<Box
			sx={{
				flex: "25%",
				cursor: "pointer",
				transition: 'all 0.3s',
				"&:hover": {
					boxShadow: 19,
					transform: "scale(1.05)"
				},
			}}
			onClick={() => navigate(`/${item.type}/${item._id}`)}
		>
			<Card sx={{padding: 1}}>
				<img src={item.imgUrl} alt={item.title} />
				<Typography>{item.title}</Typography>
				<Typography>200 BDT</Typography>
			</Card>
		</Box>
	);
};

export default Item;
