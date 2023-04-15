import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";

export const FlexBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: "white",
  fontWeight:500,
	backgroundColor: theme.palette.primary[800],
  paddingInline: '16px',
	borderRadius: "30px",
	"&:hover": {
		color: theme.palette.primary[800],
		backgroundColor: "transparent",
	},
}));
