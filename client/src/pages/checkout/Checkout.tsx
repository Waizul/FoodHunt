import {
  Box,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useAppDispatch, useAppSelector } from "@/store";
import CartItem from "@/components/cartModal/CartItem";
import { ColorButton } from "@/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { closeModal } from "@/store/slices/modalSlice";
import useAuth from "@/hooks/useAuth";

const Checkout = () => {
  const { user } = useAuth();
  const initialInputValue = {
    name: user.displayName || user.username,
    email: user.email,
    phoneNumber: user.phoneNumber,
    houseNo: "",
    street: "",
    district: "",
    extraInfo: "",
  };
  const [inputValue, setInputValue] = useState<Object>(initialInputValue);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  console.log(isChecked);
  const theme = useTheme();

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const { items, itemsQty, totalAmount } = cart;
  const isOpen = useAppSelector((state) => state.modal.isOpen);

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

  const handleSaveAddress = (e) => {
    e.preventDefault();
    const { name, email, houseNo, street, district } = inputValue;
    console.log(name)

    if (name && email && houseNo && street && district) {
      setIsChecked(true);
    }
  };

  const handleProceedToPayment = () => {
    navigate("/payment");
  };

  return (
    <section
      className="section"
      onClick={() => isOpen && dispatch(closeModal())}
    >
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
                    value={user.displayName || user.username || ""}
                    label="Name"
                    variant="filled"
                    fullWidth
                    onChange={(e) => handleFormInput(e)}
                    required
                  />
                  <TextField
                    id="standard-basic"
                    name="email"
                    type="email"
                    value={user.email}
                    label="Email"
                    variant="filled"
                    fullWidth
                    required
                    onChange={(e) => handleFormInput(e)}
                  />
                  <TextField
                    id="standard-basic"
                    name="phoneNumber"
                    value={user.phoneNumber}
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
                    required
                    onChange={(e) => handleFormInput(e)}
                  />
                  <TextField
                    id="standard-basic"
                    name="street"
                    label="Street"
                    variant="filled"
                    fullWidth
                    required
                    onChange={(e) => handleFormInput(e)}
                  />
                  <TextField
                    id="standard-basic"
                    name="district"
                    label="District"
                    variant="filled"
                    fullWidth
                    required
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
                <ColorButton
                  sx={{ mt: 2 }}
                  fullWidth
                  onClick={handleSaveAddress}
                  type="submit"
                >
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
                <Typography variant="h4">{itemsQty} items</Typography>
                <Typography variant="h4">$ {totalAmount.toFixed(2)}</Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="h4">Tax</Typography>

                <Typography variant="h4">
                  $ {(totalAmount * 0.1).toFixed(2)}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="h4">Delivery fee</Typography>

                <Typography variant="h4">
                  $ {(totalAmount * 0.01).toFixed(2)}
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
                  ${" "}
                  {(
                    totalAmount +
                    totalAmount * 0.1 +
                    totalAmount * 0.01
                  ).toFixed(2)}
                </Typography>
              </Stack>
              <ColorButton
                onClick={handleProceedToPayment}
                sx={{ mt: 1 }}
                disabled={!isChecked}
              >
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
