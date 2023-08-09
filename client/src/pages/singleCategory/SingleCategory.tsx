import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {useTheme} from '@mui/material/styles'
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ItemCard } from "@/components";
import { foodItems } from "@/data.js";
import { useAppDispatch, useAppSelector } from "@/store";
import { closeModal } from "@/store/slices/modalSlice";

const SingleCategory = () => {
	const [items, setItems] = useState<ItemType[]>([]);
  
	const theme = useTheme();
	const { categoryName } = useParams();

	const dispatch = useAppDispatch()
	const isOpen = useAppSelector(state => state.modal.isOpen)

	useEffect(() => {
		const filteredData = foodItems.filter((c) => c.category === categoryName);
		setItems(filteredData);
	}, [categoryName]);

	return (
		<section className='section' onClick={() => isOpen && dispatch(closeModal())}>
			<Box
				flexGrow={1}
				sx={{
					[theme.breakpoints.down("laptop")]: {
						paddingInline: 2,
					},
					width: '100%'
				}}
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
					spacing={{ tablet: 2, laptop: 4 }}
					columns={{ mobile: 4, tablet: 8, laptop: 12 }}
				>
					{items.length &&
						items.map((item) => (
							<Grid2 mobile={4} tablet={4} laptop={4} key={item.id} mb={10}>
								<ItemCard item={item} />
							</Grid2>
						))}
				</Grid2>
			</Box>
		</section>
	);
};

export default SingleCategory;
