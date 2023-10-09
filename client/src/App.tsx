import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { themeSettings } from "./styles/theme";
import { Checkout, Home, SingleCategory, SingleItem } from "./pages";
import Login from "./pages/login/Login";
import useAuth from "./hooks/useAuth";
import PrivateRoute from "./pages/login/PrivteRoute";
import Payment from "./pages/payment/Payment";
import PaymentSuccess from "./pages/paymentSuccess/PaymentSuccess";
import AdminDashboard from "./pages/dashboard/adminDashboard/AdminDashboard";
import UserDashboard from "./pages/dashboard/userDashboard/UserDashboard";
import Dashboard from "./pages/dashboard";
import { Footer, Navbar } from "./sections";

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

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  return (
    <div className="app">
      <ColorModeContext.Provider value={colorMode}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/:categoryName" element={<SingleCategory />} />
                <Route path="/:categoryName/:itemId" element={<SingleItem />} />

                <Route
                  path="/checkout"
                  element={
                    <PrivateRoute>
                      <Checkout />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/payment"
                  element={
                    <PrivateRoute>
                      <Payment />
                    </PrivateRoute>
                  }
                />

                <Route path="/success" element={<PaymentSuccess />} />
              </Route>
              <Route path="/login" element={<Login />} />

              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              >
                <Route path="/dashboard/admin" element={<AdminDashboard />} />
                <Route path="/dashboard/user" element={<UserDashboard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
