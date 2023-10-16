import DashboardNav from "@/components/dashboardNav/DashboardNav";
import Sidebar from "@/components/sidebar/Sidebar";
import { userMenu } from "@/dashboardData";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

const LayoutBox = styled("div")(({ theme }) => ({
  "&.main": {
    color: "white",
    backgroundColor: "#2a3447",
    minHeight: "100vh",
  },
  ".container": {
    display: "flex",
  },
  ".sidebarContainer": {
    minWidth: "250px",
    padding: "5px 20px",
    borderRight: "2px solid #384256",
  },
  ".contentContainer": {
    padding: "10px 20px",
    width: "100%",
  },
}));

const UserDashboard = () => {
  return (
    <LayoutBox className="main">
      <DashboardNav />
      <div className="container">
        <div className="sidebarContainer">
          <Sidebar menu={userMenu} />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
    </LayoutBox>
  );
};

export default UserDashboard;
