import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { StyledLink } from "@/styles";

const Footer = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				paddingInline: theme.breakpoints.down("laptop") && 2,
				mt: 5,
				py: 3,
				backgroundColor: theme.palette.grey[200],
			}}
		>
			<footer className='footer'>
				<Box sx={{ flexGrow: 1, overflow: "hidden" }}>
					<Stack direction={"row"} justifyContent={"space-between"}>
						<Typography variant='h3'>
							<StyledLink to={"/"}>FoodHunt</StyledLink>
						</Typography>

						<Stack>
							<StyledLink to='/breakfast'>Breakfast</StyledLink>
							<StyledLink to='/lunch'>Lunch</StyledLink>
							<StyledLink to='/dinner'>Dinner</StyledLink>
						</Stack>

						<Stack>
							<StyledLink to='/terms&conditions'>Terms & conditions</StyledLink>
							<StyledLink to='/terms&conditions'>Privacy policy</StyledLink>
						</Stack>
					</Stack>
				</Box>

				<Typography
					variant='body2'
					sx={{
						textAlign: "center",
						color: theme.palette.grey[700],
						mt: 3,
					}}
				>
					All rights reserved&copy;FoodHunt 2023
				</Typography>
			</footer>
		</Box>
	);
};

export default Footer;
