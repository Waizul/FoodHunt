import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import { ColorButton } from "@/styles";
import { foodItems } from "@/data.js";
import { Add, ArrowLeft, ArrowRight, Remove } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

type Props = {};
type SliderProps = {
	index: number;
};

const Slider = styled("div")<SliderProps>(({ theme, index }) => ({
	width: "100px",
	display: "flex",
	transform: `translateX(${-100 * index}px)`,
	transition: 'transform 1s ease'
}));

const SingleItem = (props: Props) => {
	const [index, setIndex] = useState(0);
	const [item, setItem] = useState<Item>();
	const [categoryItems, setCategoryItems] = useState<Item[]>([]);

	const { categoryName, itemId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const items = foodItems.filter((item) => item.category === categoryName);
		setCategoryItems(items);
	}, [categoryName]);

	useEffect(() => {
		const item = foodItems.find((item) => item.id == itemId);
		setItem(item);
	}, [itemId]);
	const handleClick = (dir) => {
		if (dir === "l") {
			index > 0 ? setIndex(index - 1) : setIndex(0);
		} else {
			index < categoryItems.length ? setIndex(index + 1) : setIndex(0);
		}
	};

	return (
		<section className='section'>
			<Grid2 container>
				<Grid2 mobile={6}>
					<Typography variant='h1' mb={1}>
						{item?.title}
					</Typography>

					{item?.desc}
					{item?.ingredients.map((ing) => (
						<p>{ing}</p>
					))}
					<Box>
						<Stack
							direction={"row"}
							alignItems={"center"}
							spacing={2}
							my={2}
							ml={1}
						>
							<Typography fontWeight={700} fontSize={25}>
								$55
							</Typography>
							<Stack
								direction={"row"}
								spacing={1}
								sx={{ border: "1px solid gray", borderRadius: 20, p: 0.3 }}
							>
								<Remove sx={{ cursor: "pointer" }} />
								<Typography fontWeight={700}>1</Typography>
								<Add sx={{ color: "red", cursor: "pointer" }} />
							</Stack>
						</Stack>
					</Box>

					<ColorButton>Add</ColorButton>

					<Box
						sx={{ marginTop: 7, width: "max-content", position: "relative" }}
					>
						<IconButton
							onClick={() => handleClick("l")}
							sx={{
								cursor: "pointer",
								position: "absolute",
								top: 0,
								left:-25,
								bottom: 0,
								zIndex: 10,
							}}
						>
							{index === 0 ? "" : <ArrowLeft sx={{ fontSize: 30 }} />}
						</IconButton>
						<Box sx={{ width: "200px", marginLeft: 1, overflow: "hidden" }}>
							<Slider index={index}>
								{categoryItems.map((item) => (
									<>
										<img
											src={item.image}
											width={"100px"}
											height={"100px"}
											alt={item.title}
											onClick={() => navigate(`/${categoryName}/${item.id}}`)}
										/>
									</>
								))}
							</Slider>
						</Box>
						<IconButton
							onClick={() => handleClick("r")}
							sx={{
								cursor: "pointer",
								position: "absolute",
								top: 0,
								right: -30,
								bottom: 0,
								zIndex: 10,
							}}
						>
							<ArrowRight fontSize='large' sx={{ fontSize: 30 }} />
						</IconButton>
					</Box>
				</Grid2>
				<Grid2 mobile={6}>
					<img
						src={item?.image}
						alt={item?.title}
						width={"100%"}
						height={"100%"}
						style={{objectFit:'contain'}}
					/>
				</Grid2>
			</Grid2>
		</section>
	);
};

export default SingleItem;
