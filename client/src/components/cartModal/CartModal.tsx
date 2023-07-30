import { useAppDispatch } from "@/store";
import { clearCart } from "@/store/slices/cartSlice";
import { Add, Remove, KeyboardBackspace } from "@mui/icons-material";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

type CartModalType = {
  items: CartItemType[];
  cartTotalQty: number;
  total: number;
  setOpenCart: React.Dispatch<React.SetStateAction<Boolean>>;
};

const ModalContainer = styled("div")(({ theme }) => ({
  width: 400,
  backgroundColor: "whitesmoke",
  overflow: "hidden",
  position: "fixed",
  top: "50px",
  right: "1rem",
  height: "calc(100vh - 100px)",
  zIndex: 20,
  // boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.7)",
  // backgroundColor: theme.palette.grey[100],
  padding: theme.spacing(1),
}));

export default function CartModal({
  items,
  cartTotalQty,
  total,
  setOpenCart,
}: CartModalType) {
  const theme = useTheme();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  return (
    <ModalContainer>
      <Stack
        sx={{ mb: 2 }}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          variant="h2"
          sx={{ cursor: "pointer", color: "orange", fontWeight: 600 }}
          onClick={() => {
            setOpenCart(false);
            navigate("/checkout");
          }}
        >
          Checkout
        </Typography>
        <Typography
          variant="h4"
          sx={{ cursor: "pointer", color: theme.palette.primary.main }}
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </Typography>
      </Stack>

      <Grid
        sx={{
          overflowY: items.length > 4 ? "scroll" : "hidden",
          height: "calc(100vh - 240px)",
        }}
      >
        {items.map((item) => (
          <CartItem {...item} key={item.id} />
        ))}
      </Grid>
      <Box sx={{ position: "absolute", bottom: 10, width: "100%" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={1}
          color={theme.palette.grey[600]}
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setOpenCart(false);
            navigate("/");
          }}
        >
          <KeyboardBackspace />
          <Typography variant="body2">Continue shopping</Typography>
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          p={theme.spacing(1)}
          pr={"1.5rem"}
          gap={1}
        >
          <Typography
            variant="h2"
            textAlign={"center"}
            fontWeight={600}
            sx={{ textAlign: "center" }}
          >
            Total:
          </Typography>

          <Typography
            variant="h2"
            fontWeight={600}
            textAlign={"center"}
            color={theme.palette.primary.main}
          >
            ${total.toFixed(2)}
          </Typography>
        </Stack>
      </Box>
    </ModalContainer>
  );
}
