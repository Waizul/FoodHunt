import { Add, Remove } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import { descrease, increase } from "@/store/slices/cartSlice";
import { useAppDispatch } from "@/store";

const ModalCard = styled("div")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.grey[200],
  padding: "0.2rem 0.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  marginBottom: "1rem",
  borderRadius: "10px",
  overflow: "hidden",
}));

const CustomInput = styled("span")(({ theme }) => ({
  backgroundColor: "white",
  border: "none",
  outline: "none",
  padding: "0.5rem 1rem",
  borderRadius: "10px",
  minWidth: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const CartItem = (item: CartItemType) => {
  const theme = useTheme();

  const dispatch = useAppDispatch();

  return (
    <ModalCard key={item.id}>
      <Box>
        <img src={item.image} alt={item.title} width={100} height={100} />
      </Box>
      <Stack gap={"0.3rem"} sx={{ minWidth: 0 }}>
        <div>
          <Typography variant="h4" color={theme.palette.grey[800]}>
            {item.title.slice(0, 20)}
          </Typography>
        </div>
        <div>
          <Typography variant="h3" color={theme.palette.primary.main}>
            ${(item.price * item.qty).toFixed(2)}
          </Typography>
        </div>
        <div>
          {/* <Typography variant="h4" color={theme.palette.primary.main}>{item.qty}</Typography> */}
          <Typography variant="h5" color={theme.palette.grey[800]}>
            Delivery fee
          </Typography>
        </div>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} gap={"0.5rem"}>
        <Remove
          sx={{ cursor: "pointer" }}
          onClick={() => dispatch(descrease(item))}
        />
        <CustomInput>{item.qty}</CustomInput>
        <Add
          sx={{ cursor: "pointer" }}
          onClick={() => dispatch(increase(item))}
        />
      </Stack>
    </ModalCard>
  );
};

export default CartItem;