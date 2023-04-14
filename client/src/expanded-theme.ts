import { PaletteColorOptions } from "@mui/material/styles";
// added numeric color palettes and a palete option

declare module "@mui/material/styles" {
	interface PaletteColor {
		[key: number]: string;
	}

	interface Palette {
		tertiary: PaletteColor;
	}

	interface PaletteOptions {
		tertiary?: PaletteColorOptions
	}
}
