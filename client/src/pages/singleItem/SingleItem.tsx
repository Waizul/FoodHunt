import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Add, ArrowLeft, ArrowRight, Remove } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { ColorButton } from "@/styles";
import { useAppDispatch, useAppSelector } from "@/store";
import { addToCart } from "@/store/slices/cartSlice";
import {
  useGetItemByIDQuery,
  useGetItemsByCategoryQuery,
} from "@/store/slices/apiSlice";
import { closeModal } from "@/store/slices/modalSlice";

type Props = {};
type SliderProps = {
  index: number;
};

const Slider = styled("div")<SliderProps>(({ theme, index }) => ({
  width: "22rem",
  display: "flex",
  cursor: "pointer",
  transform: `translateX(${-10 * index}rem)`,
  transition: "transform .5s ease",
}));

const Image = styled("img")(() => ({
  maxWidth: "40rem",
  height: "100%",
  objectFit: "contain",
}));

const MoreImage = styled("img")(() => ({
  width: "10em",
  height: "100%",
  objectFit: "contain",
}));

const SingleItem = (props: Props) => {
  const [index, setIndex] = useState(0);

  const [qty, setQty] = useState<number>(1);

  const theme = useTheme();

  const { categoryName, itemId } = useParams();
  const navigate = useNavigate();
  const { data: item = {} } = useGetItemByIDQuery(itemId);
  // console.log(itemId, item)
  const { isLoading, data: moreItems } =
    useGetItemsByCategoryQuery(categoryName);
  // console.log(item, moreItems, categoryName, itemId, isLoading);

  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state) => state.modal.isOpen);
  // console.log("cart", cart);

  const handleQty = (sign: string) => {
    if (sign === "+") {
      setQty((prev) => prev + 1);
    } else {
      qty > 1 && setQty((prev) => prev - 1);
    }
  };

  const handleDispatch = (item: ItemType) => {
    console.log(item, "item");
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
      index < moreItems.length - 2 ? setIndex(index + 1) : setIndex(0);
    }
  };

  return (
    <section
      className="section"
      onClick={() => isOpen && dispatch(closeModal())}
    >
      <Box
        sx={{
          // paddingInline: theme.breakpoints.down("tablet") ? 2 : "0",
          [theme.breakpoints.down("laptop")]: {
            paddingInline: 2,
          },
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2
            laptop={6}
            order={{ mobile: 2, tablet: 2, laptop: 1 }}
            sx={{
              [theme.breakpoints.up("tablet")]: {
                height: "90vh",
              },
            }}
          >
            <Stack height={"100%"} justifyContent={"space-between"}>
              <div>
                <Typography variant="h2" mb={1}>
                  {item?.title}
                </Typography>

                <Typography>{item?.desc}</Typography>

                <Box>
                  <Typography variant="h4" mt={1} sx={{ display: "inline" }}>
                    Key ingrients:
                  </Typography>
                  {item?.ingredients?.map((ing: string) => (
                    <Typography
                      key={ing}
                      sx={{
                        display: "inline",
                        textTransform: "capitalize",
                        ml: 1,
                      }}
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
                      ${item.price}
                    </Typography>
                    <Stack
                      direction={"row"}
                      spacing={1}
                      sx={{
                        border: "1px solid gray",
                        borderRadius: 20,
                        p: 0.3,
                      }}
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

                <ColorButton onClick={() => handleDispatch(item)}>
                  Add
                </ColorButton>
              </div>
              <div>
                <Box
                  sx={{
                    marginTop: 7,
                    width: "max-content",
                    position: "relative",
                  }}
                >
                  <Typography variant="h3" mb={3}>
                    More items:
                  </Typography>
                  <IconButton
                    onClick={() => handleClick("l")}
                    sx={{
                      cursor: "pointer",
                      position: "absolute",
                      top: 40,
                      left: -25,
                      bottom: 0,
                      zIndex: 10,
                    }}
                  >
                    {index === 0 ? "" : <ArrowLeft sx={{ fontSize: 30 }} />}
                  </IconButton>
                  <Box
                    sx={{ width: "20rem", marginLeft: 1, overflow: "hidden" }}
                  >
                    <Slider index={index}>
                      {moreItems?.map((item: ItemType, i: number) => (
                        <div key={item._id + i}>
                          <MoreImage
                            src={item.imgUrl}
                            alt={item.title}
                            onClick={() => {
                              navigate(`/${categoryName}/${item._id}`);
                            }}
                          />
                        </div>
                      ))}
                    </Slider>
                  </Box>
                  <IconButton
                    onClick={() => handleClick("r")}
                    sx={{
                      cursor: "pointer",
                      position: "absolute",
                      top: 40,
                      right: -30,
                      bottom: 0,
                      zIndex: 10,
                    }}
                  >
                    <ArrowRight fontSize="large" sx={{ fontSize: 30 }} />
                  </IconButton>
                </Box>
              </div>
            </Stack>
          </Grid2>

          <Grid2 laptop={6} order={{ mobile: 1, tablet: 1, laptop: 2 }}>
            <Image src={item?.imgUrl} alt={item?.title} />
          </Grid2>
        </Grid2>
      </Box>
    </section>
  );
};

export default SingleItem;
