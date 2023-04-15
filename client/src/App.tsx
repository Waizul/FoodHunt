import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { themeSettings } from "./styles/theme";
import { Home } from "./pages";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
	const [mode, setMode] = useState<"light" | "dark">("light");

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	return (
		<div className='app'>
			<ColorModeContext.Provider value={colorMode}>
				<CssBaseline />
				<ThemeProvider theme={theme}>
					<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} /> 
					</Routes>
					</BrowserRouter>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</div>
	);
}

export default App;
