import { useAppDispatch } from "@/store";
import { clearCart, descrease, increase } from "@/store/slices/cartSlice";
import { Add, Remove, KeyboardBackspace, ArrowBack } from "@mui/icons-material";
import { Box, Dialog, Grid, Input, Stack, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

type CartModalType = {
  items: CartItemType[];
  cartTotalQty: number;
  total: number;
};

const ModalContainer = styled("div")(({ theme }) => ({
  width: 400,
  backgroundColor: 'whitesmoke',
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
export default function CartModal({
  items,
  cartTotalQty,
  total,
}: CartModalType) {
  const theme = useTheme();

  const dispatch = useAppDispatch();

  return (
    <ModalContainer>
      <Stack
        sx={{ mb: 2 }}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h2">Your Cart</Typography>
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
          overflowY: items.length > 4 ? "scroll" : 'hidden',
          height: "calc(100vh - 240px)",
        }}
      >
        {items.map((item) => (
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
        ))}
      </Grid>
      <Box sx={{ position: "absolute", bottom: 10, width: "100%" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={1}
          color={theme.palette.grey[600]}
          sx={{ cursor: "pointer" }}
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
