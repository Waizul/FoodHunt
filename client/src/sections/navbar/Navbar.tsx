import {
	Logout,
	MenuOutlined,
	ShoppingCartOutlined,
	ArrowRightAlt,
} from "@mui/icons-material";
import {
	Avatar,
	Box,
	Divider,
	IconButton,
	Menu,
	MenuItem,
	Stack,
	Tooltip,
	useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";

const Nav = styled("nav")(({ theme }) => ({
	width: "100%",
	maxWidth: "1024px",
	height: "60px",
	margin: "auto",
	[theme.breakpoints.down("laptop")]: {
		paddingInline: 20,
	},
}));

const NavItem = styled(MenuItem)(({ theme }) => ({
	fontWeight: 500,
	padding: 0,
	marginLeft: "10px",
	"&:hover": {
		color: theme.palette.primary[800],
		boxShadow: "none",
	},
}));

const Navbar = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("tablet"));

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Nav>
			<Stack
				direction={"row"}
				alignItems={"center"}
				justifyContent={"space-between"}
				height={"100%"}
			>
				<Box sx={{ cursor: "pointer", fontWeight: 700 }}>FoodHunt</Box>
				<Stack direction={"row"} alignItems={"center"} spacing={4}>
					{matches && (
						<>
							<NavItem>Breakfast</NavItem>
							<NavItem>Lunch</NavItem>
							<NavItem>Dinner</NavItem>
						</>
					)}

					<Box
						sx={{
							position: "relative",
							top: 4,
						}}
					>
						<ShoppingCartOutlined />
						<Box
							sx={{
								position: "absolute",
								top: -14,
								right: -5,
								color: theme.palette.primary[500],
								fontSize: "12px",
								fontWeight: "700",
								backgroundColor: theme.palette.grey[200],
								borderRadius: "50%",
								padding: "3px",
							}}
						>
							10
						</Box>
					</Box>

					{matches && (
						<>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									textAlign: "center",
								}}
							>
								<Tooltip title='Account'>
									<IconButton
										onClick={handleClick}
										size='small'
										aria-controls={open ? "account-menu" : undefined}
										aria-haspopup='true'
										aria-expanded={open ? "true" : undefined}
									>
										<Avatar sx={{ width: 30, height: 30, p: 0 }}></Avatar>
									</IconButton>
								</Tooltip>
							</Box>
							<Menu
								anchorEl={anchorEl}
								id='nav-menu'
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
									<Avatar /> My Orders
								</NavItem>
								<NavItem onClick={handleClose}>
									<Avatar /> My account
								</NavItem>

								<NavItem onClick={handleClose}>
									<Logout fontSize='small' sx={{ mr: 2 }} />
									Logout
								</NavItem>
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
								<Tooltip title='Menu'>
									<IconButton
										onClick={handleClick}
										size='small'
										sx={{ ml: 2 }}
										aria-controls={open ? "account-menu" : undefined}
										aria-haspopup='true'
										aria-expanded={open ? "true" : undefined}
									>
										<MenuOutlined />
									</IconButton>
								</Tooltip>
							</Box>
							<Menu
								anchorEl={anchorEl}
								id='nav-menu'
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
									<ArrowRightAlt fontSize='small' sx={{ mr: 1 }} />
									Breakfast
								</NavItem>
								<NavItem onClick={handleClose}>
									<ArrowRightAlt fontSize='small' sx={{ mr: 1 }} />
									Lunch
								</NavItem>
								<NavItem onClick={handleClose}>
									<ArrowRightAlt fontSize='small' sx={{ mr: 1 }} />
									Dinner
								</NavItem>

								<Divider />
								<NavItem onClick={handleClose}>
									<Avatar /> My Orders
								</NavItem>
								<NavItem onClick={handleClose}>
									<Avatar sx={{ width: 20, height: 20 }} /> My account
								</NavItem>

								<NavItem onClick={handleClose}>
									<Logout fontSize='small' sx={{ mr: 1 }} />
									Logout
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
