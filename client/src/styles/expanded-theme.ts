import { PaletteColorOptions } from "@mui/material/styles";
// added numeric color palettes and a palete option, custom breakpoints name and value

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

	interface BreakpointOverrides {
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
		xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}

// declare module '@mui/system' {
//   interface BreakpointOverrides {
//     // Your custom breakpoints
//     laptop: true;
//     tablet: true;
//     mobile: true;
//     desktop: true;
//     // Remove default breakpoints
//     xs: false;
//     sm: false;
//     md: false;
//     lg: false;
//     xl: false;
//   }
// }
