import { PaletteMode } from "@mui/material";

export const tokens = {
	grey: {
		100: "#f0f0f3",
		200: "#e1e2e7",
		300: "#d1d3da",
		400: "#c2c5ce",
		500: "#b3b6c2",
		600: "#8f929b",
		700: "#6b6d74",
		800: "#48494e",
		900: "#242427",
	},
	primary: {
		100: "#ffcccc",
		200: "#ff9999",
		300: "#ff6666",
		400: "#ff3333",
		500: "#ff0000",
		600: "#cc0000",
		700: "#990000",
		800: "#660000",
		900: "#330000",
	},
	// primary: {
	// 	// light green
	// 	100: "#d0fcf4",
	// 	200: "#a0f9e9",
	// 	300: "#71f5de",
	// 	400: "#41f2d3",
	// 	500: "#12efc8",
	// 	600: "#0ebfa0",
	// 	700: "#0b8f78",
	// 	800: "#076050",
	// 	900: "#043028",
	// },
	secondary: {
		// yellow
		100: "#fcf0dd",
		200: "#fae1bb",
		300: "#f7d299",
		400: "#f5c377",
		500: "#f2b455",
		600: "#c29044",
		700: "#916c33",
		800: "#614822",
		900: "#302411",
	},
	tertiary: {
		// purple
		500: "#8884d8",
	},
	background: {
		light: "#f0f0f3",
		white: "#fff",
		main: "#1f2026",
	},
	breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
};

// mui theme settings
export const themeSettings = (mode: PaletteMode) => ({
	palette: {
		mode,
		primary: {
			...tokens.primary,
			main: tokens.primary[400],
			// light: tokens.primary[400],
			...(mode === "dark" && {
				main: tokens.primary[500],
			}),
		},
		secondary: {
			...tokens.secondary,
			main: tokens.secondary[500],
		},
		tertiary: {
			...tokens.tertiary,
		},
		grey: {
			...tokens.grey,
			main: tokens.grey[500],
		},
		text: {
			...(mode === "light"
				? {
						primary: tokens.grey[900],
						secondary: tokens.grey[700],
				  }
				: {
						primary: tokens.grey[100],
						secondary: tokens.grey[300],
				  }),
		},
		background: {
			default: tokens.background.light,
			...(mode === "dark" && {
				default: tokens.background.main,
			}),
		},
	},

	typography: {
		fontFamily: ["Inter", "sans-serif"].join(","),
		fontSize: 14,
		h1: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontWeight: 500,
			fontSize: 32,
		},
		h2: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 24,
		},
		h3: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 20,
			fontWeight: 500,
			color: tokens.grey[900],
		},
		h4: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 16,
			fontWeight: 600,
			color: tokens.grey[700],
		},
		h5: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 12,
			fontWeight: 400,
			color: tokens.grey[500],
		},
		h6: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 10,
			color: tokens.grey[700],
		},
	},
	breakpoints: {
		...tokens.breakpoints
	}
});
