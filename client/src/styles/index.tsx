import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { Link } from "react-router-dom";

export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: "white",
	fontWeight: 500,
	backgroundColor: theme.palette.primary[800],
	paddingInline: "16px",
	borderRadius: "30px",
	"&:hover": {
		color: theme.palette.primary[800],
		backgroundColor: "transparent",
	},
}));

export const StyledLink = styled(Link)(({ theme }) => ({
	display:'flex',
	alignItems:'center',
	'&:hover':{
		color: theme.palette.primary[800]
	},
}));
