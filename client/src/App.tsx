import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { themeSettings } from "./styles/theme";
import { Checkout, Home, SingleCategory, SingleItem } from "./pages";
import Login from "./pages/login/Login";
import useAuth from "./hooks/useAuth";
import UserRoute from "./pages/login/UserRoute";
import Payment from "./pages/payment/Payment";
import PaymentSuccess from "./pages/paymentSuccess/PaymentSuccess";
import AdminDashboard from "./pages/dashboard/adminDashboard/AdminDashboard";
import UserDashboard from "./pages/dashboard/userDashboard/UserDashboard";
import { Footer, Navbar } from "./sections";
import Products from "./sections/products/Products";
import AdminDashboardHome from "./sections/adminDashboardHome/DashboardHome";
import AdminRoute from "./pages/login/AdminRoute";
import UserDashboardHome from "./sections/userDashboardHome/UserDashboardHome";
import Orders from "./sections/orders/Orders";
import Users from "./sections/users/Users";
import Product from "./sections/product/Product";

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

  const user = {
    isAdmin: true,
  };

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const AdminLayout = () => {
    return <></>;
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
                    <UserRoute>
                      <Checkout />
                    </UserRoute>
                  }
                />
                <Route
                  path="/payment"
                  element={
                    <UserRoute>
                      <Payment />
                    </UserRoute>
                  }
                />

                <Route path="/success" element={<PaymentSuccess />} />
              </Route>
              <Route path="/login" element={<Login />} />

              <Route
                path="/dashboard/user"
                element={
                  <UserRoute>
                    <UserDashboard />
                  </UserRoute>
                }
              >
                <Route path="/dashboard/user" element={<UserDashboardHome />} />
                <Route path="/dashboard/user/orders" element={<UserDashboardHome />} />
                <Route path="/dashboard/user/profile" element={<>profile</>} />
              </Route>
              <Route
                path="/dashboard/admin"
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              >
                <Route
                  path="/dashboard/admin"
                  element={<AdminDashboardHome />}
                />
                <Route path="/dashboard/admin/users" element={<Users />} />
                <Route
                  path="/dashboard/admin/items"
                  element={<Products />}
                />
                <Route path="/dashboard/admin/items/:id" element={<Product />} />
                <Route path="/dashboard/admin/orders" element={<Orders />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
