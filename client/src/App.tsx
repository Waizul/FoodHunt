import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { themeSettings } from "./styles/theme";
import { Checkout, Home, SingleCategory, SingleItem } from "./pages";
import { Navbar } from "./sections";
import { Footer } from "./sections";
import Login from "./pages/login/Login";
import useAuth from "./hooks/useAuth";



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
  
  const {user} = useAuth()
  console.log(user)
  return (
    <div className="app">
      <ColorModeContext.Provider value={colorMode}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            {/* <div> */}
              <Navbar />

              <Routes>
                
                  <Route path="/" element={<Home />} />
                  <Route path="/:categoryName" element={<SingleCategory />} />
                  <Route
                    path="/:categoryName/:itemId"
                    element={<SingleItem />}
                  />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/payment" element={<div>Payment</div>} />
                
                <Route path="/login" element={<Login />} />
                
              </Routes>
              <Footer />
            {/* </div> */}
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
