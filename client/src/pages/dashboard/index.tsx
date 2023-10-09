import DashboardNav from "@/components/dashboardNav/DashboardNav";
import Sidebar from "@/components/sidebar/Sidebar";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

const DashboardLayout = styled("div")(() => ({
  fontFamily: "Inter, sans-serif",
  backgroundColor: "#2a3447",
  color: "#fff",
}));
const Container = styled("div")(() => ({
  display: "flex",
  // gap: "2rem",
}));

const SideBarContainer = styled("div")(({ theme }) => ({
  width: "250px",
  padding: "5px 20px",
  borderRight: "2px solid #384256",
  minHeight: "100vh",
}));
const ContentContainer = styled("div")(() => ({
  padding:'5px 20px',
  width:'100%'
}));
const Logo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.tertiary[500],
  paddingInline: "2rem",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.5rem",
}));

// main-bg: #2a3447;
// soft-bg: #384256;
// dark-bg: #222b3c;
// //TEXT
// main-color: white;
// soft-color: #ddd;
// dark-color: #2a3447;

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardNav />
      <Container>
        <SideBarContainer></SideBarContainer>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </Container>
    </DashboardLayout>
  );
};

export default Dashboard;
