import {
  Logout,
  MenuOutlined,
  ShoppingCartOutlined,
  ArrowRightAlt,
  Login,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  Stack,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

import { StyledLink } from "@/styles";
import { useAppDispatch, useAppSelector } from "@/store";
import { calculateTotals } from "@/store/slices/cartSlice";
import CartModal from "@/components/cartModal/CartModal";
import { openModal, openOrCloseModal } from "@/store/slices/modalSlice";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Nav = styled("nav")(({ theme }) => ({
  width: "100%",
  maxWidth: "1024px",
  height: "60px",
  margin: "auto",
  [theme.breakpoints.down("laptop")]: {
    paddingInline: 20,
  },
}));

const NavItem = styled("li")(({ theme }) => ({
  fontWeight: 500,
  padding: 0,
  marginLeft: "10px",
  cursor: "pointer",
  listStyleType: "none",
  display: "flex",
  alignItems: "center",
  paddingBottom: theme.breakpoints.down("tablet") ? 5 : 0,
}));

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("tablet"));
  10;
  const { user, logOut } = useAuth();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  console.log(user);
  const { cartQty, itemsQty, totalAmount, items } = useAppSelector(
    (state) => state.cart
  );

  const isOpen = useAppSelector((state) => state.modal.isOpen);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [items]);

  // const cartItemsQty = useAppSelector(cartItemsQuantity);
  // console.log(cart.length, cartItemsQty);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <Nav>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        height={"100%"}
      >
        <Box sx={{ cursor: "pointer", fontWeight: 700 }}>
          <StyledLink to={"/"}>FoodHunt</StyledLink>
        </Box>
        <Stack direction={"row"} alignItems={"center"} spacing={4}>
          {matches && (
            <>
              <NavItem>
                <StyledLink to={"/breakfast"}>Breakfast</StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to={"/lunch"}>Lunch</StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to={"/dinner"}>Dinner</StyledLink>
              </NavItem>
            </>
          )}

          <Box
            sx={{
              position: "relative",
              top: 4,
              cursor: "pointer",
            }}
            onClick={() => dispatch(openOrCloseModal())}
          >
            <ShoppingCartOutlined />
            <Box
              sx={{
                position: "absolute",
                top: -20,
                right: -5,
                color: "white",
                fontSize: "14px",
                fontWeight: "600",
                backgroundColor: theme.palette.primary[800],
                borderRadius: "50%",
                padding: "2px",
                minWidth: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {cartQty}
            </Box>
          </Box>
          {isOpen && <CartModal />}

          {matches && (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      sx={{ width: 30, height: 30, p: 0 }}
                      src={user?.photoUrl}
                    ></Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="nav-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                sx={{}}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    width: 200,
                    margin: "auto",
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 30,
                      height: 30,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,

                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                {user.isAdmin ? (
                  <NavItem onClick={handleClose}>
                    <StyledLink to="/dashboard/admin">
                      <Avatar /> Dashboard
                    </StyledLink>
                  </NavItem>
                ) : (
                  <div>
                    <NavItem onClick={handleClose}>
                      <StyledLink to="/dashboard/user">
                        <Avatar /> My Orders
                      </StyledLink>
                    </NavItem>
                    <NavItem onClick={handleClose}>
                      <StyledLink to="/dashboard/user">
                        <Avatar /> My account
                      </StyledLink>
                    </NavItem>

                    <NavItem onClick={handleClose}>
                      {user?.email ? (
                        <Stack direction={"row"} onClick={handleLogout}>
                          <Logout fontSize="small" sx={{ mr: 2 }} />
                          Logout
                        </Stack>
                      ) : (
                        <StyledLink to="/login">
                          <Login fontSize="small" sx={{ mr: 2 }} />
                          Login
                        </StyledLink>
                      )}
                    </NavItem>
                  </div>
                )}
              </Menu>
            </>
          )}

          {!matches && (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Menu">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <MenuOutlined />
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="nav-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                sx={{}}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    width: 200,
                    margin: "auto",
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 30,
                      height: 30,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,

                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <NavItem onClick={handleClose}>
                  <StyledLink to={"/breakfast"}>
                    <ArrowRightAlt fontSize="small" sx={{ mr: 1 }} />
                    Breakfast
                  </StyledLink>
                </NavItem>
                <NavItem onClick={handleClose}>
                  <StyledLink to={"/lunch"}>
                    <ArrowRightAlt fontSize="small" sx={{ mr: 1 }} />
                    Lunch
                  </StyledLink>
                </NavItem>
                <NavItem onClick={handleClose}>
                  <StyledLink to={"/dinner"}>
                    <ArrowRightAlt fontSize="small" sx={{ mr: 1 }} />
                    Dinner
                  </StyledLink>
                </NavItem>

                <Divider sx={{ mb: 1 }} />
                <NavItem onClick={handleClose}>
                  <StyledLink to="/dashboard/user">
                    <Avatar /> My Orders
                  </StyledLink>
                </NavItem>
                <NavItem onClick={handleClose}>
                  <StyledLink to="/dashboard/user">
                    <Avatar sx={{ width: 20, height: 20 }} /> My account
                  </StyledLink>
                </NavItem>

                <NavItem onClick={handleClose}>
                  {user?.email ? (
                    <Stack direction={"row"} onClick={handleLogout}>
                      <Logout fontSize="small" sx={{ mr: 1 }} />
                      Logout
                    </Stack>
                  ) : (
                    <StyledLink to="/login">
                      <Login fontSize="small" sx={{ mr: 1 }} />
                      Login
                    </StyledLink>
                  )}
                </NavItem>
              </Menu>
            </>
          )}
        </Stack>
      </Stack>
    </Nav>
  );
};

export default Navbar;
