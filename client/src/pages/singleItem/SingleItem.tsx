import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Add, ArrowLeft, ArrowRight, Remove } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { ColorButton } from "@/styles";
import { useAppDispatch, useAppSelector } from "@/store";
import { addToCart } from "@/store/slices/cartSlice";

type Props = {};
type SliderProps = {
  index: number;
};

const Slider = styled("div")<SliderProps>(({ theme, index }) => ({
  width: "100px",
  display: "flex",
  cursor: "pointer",
  transform: `translateX(${-100 * index}px)`,
  transition: "transform 1s ease",
}));

const Image = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
}));
const SingleItem = (props: Props) => {
  const [index, setIndex] = useState(0);
  const [item, setItem] = useState<ItemType>();
  const [categoryItems, setCategoryItems] = useState<ItemType[]>([]);
  const [qty, setQty] = useState<number>(1);

  const theme = useTheme();

  const { categoryName, itemId } = useParams();
  const navigate = useNavigate();

  const cart = useAppSelector((state) => state.cart);
  console.log("cart", cart);
  const dispatch = useAppDispatch();

  const handleQty = (sign: string) => {
    if (sign === "+") {
      setQty((prev) => prev + 1);
    } else {
      qty > 1 && setQty((prev) => prev - 1);
    }
  };

  const handleDispatch = (item: ItemType) => {
    dispatch(addToCart({ item, qty }));
  };

  // useEffect(() => {
  //   const items = foodItems.filter(
  //     (item: ItemType) => item.category === categoryName
  //   );
  //   setCategoryItems(items);
  // }, [categoryName]);

  // useEffect(() => {
  //   const item = foodItems.find((item) => item.id == itemId);
  //   setItem(item);
  // }, [itemId]);

  const handleClick = (dir: string) => {
    if (dir === "l") {
      index > 0 ? setIndex(index - 1) : setIndex(0);
    } else {
      index < categoryItems.length ? setIndex(index + 1) : setIndex(0);
    }
  };

  return (
    <section className="section">
      <Box
        sx={{
          // paddingInline: theme.breakpoints.down("tablet") ? 2 : "0",
          [theme.breakpoints.down("laptop")]: {
            paddingInline: 2,
          },
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 laptop={6} order={{ mobile: 2, tablet: 2, laptop: 1 }}>
            <Typography variant="h2" mb={1}>
              {item?.title}
            </Typography>

            <Typography>{item?.desc}</Typography>

            <Box>
              <Typography variant="h4" mt={1} sx={{ display: "inline" }}>
                Key ingrients:
              </Typography>
              {item?.ingredients.map((ing) => (
                <Typography
                  key={ing}
                  sx={{ display: "inline", textTransform: "capitalize", ml: 1 }}
                >
                  {ing}
                </Typography>
              ))}
            </Box>

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
                  <Remove
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleQty("-")}
                  />
                  <Typography fontWeight={700}>{qty}</Typography>
                  <Add
                    sx={{ color: "red", cursor: "pointer" }}
                    onClick={() => handleQty("+")}
                  />
                </Stack>
              </Stack>
            </Box>

            <ColorButton onClick={() => handleDispatch(item)}>Add</ColorButton>

            <Box
              sx={{ marginTop: 7, width: "max-content", position: "relative" }}
            >
              <IconButton
                onClick={() => handleClick("l")}
                sx={{
                  cursor: "pointer",
                  position: "absolute",
                  top: 0,
                  left: -25,
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
                        key={item.id + index}
                        src={item.image}
                        width={"100px"}
                        height={"100px"}
                        alt={item.title}
                        onClick={() => {
                          navigate(`/${categoryName}/${item.id}`);
                        }}
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
                <ArrowRight fontSize="large" sx={{ fontSize: 30 }} />
              </IconButton>
            </Box>
          </Grid2>

          <Grid2 laptop={6} order={{ mobile: 1, tablet: 1, laptop: 2 }}>
            <Image src={item?.image} alt={item?.title} />
          </Grid2>
        </Grid2>
      </Box>
    </section>
  );
};

export default SingleItem;
