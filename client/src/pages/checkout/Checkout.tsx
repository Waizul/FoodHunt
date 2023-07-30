import {
  Box,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import CartModal from "@/components/cartModal/CartModal";
import { useAppDispatch, useAppSelector } from "@/store";
import { Add, Remove } from "@mui/icons-material";
import { descrease, increase } from "@/store/slices/cartSlice";
import CartItem from "@/components/cartModal/CartItem";
import { ColorButton } from "@/styles";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const theme = useTheme();

  const { items, cartTotalQty, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  return (
    <section className="section">
      <Box
        flexGrow={1}
        sx={{
          [theme.breakpoints.down("laptop")]: {
            paddingInline: 2,
          },
          width: "100%",
          marginTop: "3rem",
        }}
      >
        <Grid container spacing={4}>
          <Grid mobile={12} tablet={6} order={{ mobile: 2, tablet: 1 }} item>
            <Typography variant="h2" mb={1}>
              Edit Delivery Details
              <Divider />
              <Box component={"form"} mt={2}>
                <Stack gap={1}>
                  <TextField
                    id="standard-basic"
                    label="Name"
                    variant="filled"
                    fullWidth
                  />
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="filled"
                    fullWidth
                  />
                  <TextField
                    id="standard-basic"
                    label="Phone"
                    variant="filled"
                    fullWidth
                  />
                  <TextField
                    id="standard-basic"
                    label="House No."
                    variant="filled"
                    fullWidth
                  />
                  <TextField
                    id="standard-basic"
                    label="Street"
                    variant="filled"
                    fullWidth
                  />
                  <TextField
                    id="standard-basic"
                    label="District"
                    variant="filled"
                    fullWidth
                  />
                  <TextField
                    id="standard-basic"
                    label="Add Delivery Instructions"
                    variant="filled"
                    fullWidth
                  />
                </Stack>
                <ColorButton sx={{ mt: 2 }} fullWidth>
                  Save and Continue
                </ColorButton>
              </Box>
            </Typography>
          </Grid>

          <Grid
            sx={{
              overflowY: items.length > 4 ? "scroll" : "hidden",
              height: "calc(100vh - 240px)",
            }}
            mobile={12}
            tablet={6}
            item
            order={{ mobile: 1, tablet: 2 }}
          >
            {items.map((item) => (
              <CartItem {...item} key={item.id} />
            ))}
            <Stack gap={1} sx={{ marginTop: 4, p: "0.5rem" }}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="h4">Sub total</Typography>
                <Typography variant="h4">{cartTotalQty} items</Typography>
                <Typography variant="h4">$ {total.toFixed(2)}</Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="h4">Tax</Typography>

                <Typography variant="h4">
                  $ {(total * 0.1).toFixed(2)}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="h4">Delivery fee</Typography>

                <Typography variant="h4">
                  $ {(total * 0.01).toFixed(2)}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography
                  variant="h4"
                  color={theme.palette.primary.main}
                  fontWeight={800}
                >
                  Total
                </Typography>

                <Typography
                  variant="h4"
                  color={theme.palette.primary.main}
                  fontWeight={800}
                >
                  $ {(total + total * 0.1 + total * 0.01).toFixed(2)}
                </Typography>
              </Stack>
              <ColorButton onClick={() => navigate("/payment")}>
                {" "}
                Proceed to Payment
              </ColorButton>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Checkout;
