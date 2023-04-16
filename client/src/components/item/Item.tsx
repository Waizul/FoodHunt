import { Box } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

type Props = {
	item: Item;
};

const Item = ({ item }: Props) => {
	return (
		<Box sx={{ flex: "25%" }}>
			{item.title}
			<img
				src={item.image}
				alt={item.title}
				width={300}
				height={200}
				style={{
					objectFit: "contain",
				}}
			/>
		</Box>
	);
};

export default Item;
