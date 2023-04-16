import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

import { Item, Category } from "@/components";
import { foodItems } from "@/data.js";

type Props = {};

const Foods = (props: Props) => {
	const [category, setCategory] = useState("breakfast");
	const [items, setItems] = useState<Item[]>([]);

	useEffect(() => {
		const filteredItems = foodItems.filter(
			(item) => item.category === category
		);
		setItems(filteredItems);
	}, [category]);
	return (
		<section className='section'>
			<Box
				sx={{
					py: 4,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: 2,
					listStyleType: "none",
				}}
			>
				<Category category={category} setCategory={setCategory} />
			</Box>

			<Box
				sx={{
					display: "flex",
					gap: 2,
					flexWrap: "wrap",
				}}
			>
				{items.map((item) => (
					<Item item={item} key={item.id} />
				))}
			</Box>
		</section>
	);
};

export default Foods;
