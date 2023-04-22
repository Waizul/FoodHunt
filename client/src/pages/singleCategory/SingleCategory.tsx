import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { foodItems } from "@/data.js";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ItemCard } from "@/components";

const SingleCategory = () => {
	const [items, setItems] = useState<Item[]>([]);

	const { categoryName } = useParams();

	useEffect(() => {
		const filteredData = foodItems.filter((c) => c.category === categoryName);
		setItems(filteredData);
	}, [categoryName]);

	return (
		<section className='section'>
			<Box
				flexGrow={1}
				sx={(theme) => ({
					paddingInline: theme.breakpoints.down("laptop") && 2,
				})}
			>
				<Typography variant='h3'>
					<Typography
						variant='h3'
						textTransform={"capitalize"}
						mr={0.7}
						sx={{ display: "inline" }}
					>
						{categoryName}
					</Typography>
					items we offer
				</Typography>
				<Grid2
					container
					spacing={{ tablet: 2, laptop: 3 }}
					columns={{ mobile: 4, tablet: 8, laptop: 12 }}
				>
					{items.length &&
						items.map((item) => (
							<Grid2 mobile={4} tablet={4} laptop={4} key={item.id} mb={10}>
								<ItemCard item={item} categoryName={categoryName} />
							</Grid2>
						))}
				</Grid2>
			</Box>
		</section>
	);
};

export default SingleCategory;
