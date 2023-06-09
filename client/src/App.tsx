import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { themeSettings } from "./styles/theme";
import { Home, SingleCategory, SingleItem } from "./pages";
import { Navbar } from "./sections";
import { Footer } from "./sections";

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
						<Navbar />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/:categoryName' element={<SingleCategory />} />
							<Route path='/:categoryName/:itemId' element={<SingleItem />} />
						</Routes>
						<Footer />
					</BrowserRouter>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</div>
	);
}

export default App;
