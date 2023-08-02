import {
  Box,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import { useAppDispatch, useAppSelector } from "@/store";
import CartItem from "@/components/cartModal/CartItem";
import { ColorButton } from "@/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const [inputValue, setInputValue] = useState<Object>({});

  const theme = useTheme();

  const { items, cartTotalQty, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleFormInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();

    setInputValue((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });

    console.log(inputValue);
  };

  return (
    <section className="section">
      <Box
        flexGrow={1}
        sx={{
          [theme.breakpoints.down("laptop")]: {
            paddingInline: 2,
          },
          width: "100%",
          marginTop: "2rem",
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
                    name="name"
                    label="Name"
                    variant="filled"
                    fullWidth
                    onChange={(e) => handleFormInput(e)}
                  />
                  <TextField
                    id="standard-basic"
                    name="email"
                    type="email"
                    label="Email"
                    variant="filled"
                    fullWidth
                    onChange={(e) => handleFormInput(e)}
                  />
                  <TextField
                    id="standard-basic"
                    name="phone"
                    label="Phone"
                    variant="filled"
                    fullWidth
                    onChange={(e) => handleFormInput(e)}
                  />
                  <TextField
                    id="standard-basic"
                    name="houseNo"
                    label="House No."
                    variant="filled"
                    fullWidth
                    onChange={(e) => handleFormInput(e)}
                  />
                  <TextField
                    id="standard-basic"
                    name="street"
                    label="Street"
                    variant="filled"
                    fullWidth
                    onChange={(e) => handleFormInput(e)}
                  />
                  <TextField
                    id="standard-basic"
                    name="district"
                    label="District"
                    variant="filled"
                    fullWidth
                    onChange={(e) => handleFormInput(e)}
                  />
                  <TextField
                    id="standard-basic"
                    name="extraInfo"
                    label="Add Delivery Instructions"
                    variant="filled"
                    fullWidth
                    onChange={(e) => handleFormInput(e)}
                  />
                </Stack>
                <ColorButton sx={{ mt: 2 }} fullWidth>
                  Save and Continue
                </ColorButton>
              </Box>
            </Typography>
          </Grid>

          <Grid mobile={12} tablet={6} item order={{ mobile: 1, tablet: 2 }}>
            <Box
              sx={{
                overflowY: items.length > 4 ? "scroll" : "hidden",
                height: "calc(100vh - 260px)",
              }}
            >
              {items.map((item) => (
                <CartItem {...item} key={item.id} />
              ))}
            </Box>
            <Stack gap={0.5} sx={{ marginTop: 1, p: "0.5rem" }}>
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
              <ColorButton onClick={() => navigate("/payment")} sx={{ mt: 1 }}>
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
