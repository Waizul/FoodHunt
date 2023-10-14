import TopClients from "@/components/topClients/TopClients";
import Chart from "@/components/chart/Chart";
import PieChartData from "@/components/pieChart/PieChart";
import BigChart from "@/components/bigChart/BigChart";
import Barchart from "@/components/barChart/Barchart";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxOrders,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "@/dashboardData";
import { styled } from "@mui/material";

const DashboardBox = styled("div")(({ theme }) => ({
  "&.dashboard": {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridAutoRows: "minmax(180px, auto)",
    gridAutoFlow: "dense",
  },
  ".box": {
    padding: "20px",
    borderRadius: "10px",
    border: `2px solid #ddd`,
  },

  ".box1": {
    gridColumn: "span 1",
    gridRow: "span 3",
  },

  ".box4": {
    gridColumn: "span 1",
    gridRow: "span 3",
  },
  ".box7": {
    gridColumn: "span 2",
    gridRow: "span 2",

    // @include md {
    //   display: none;
    // }
  },
}));
const AdminDashboardHome = () => {
  return (
    <DashboardBox className="dashboard">
      <div className="box box1">
        <TopClients />
      </div>
      <div className="box box2">
        <Chart {...chartBoxUser} />
      </div>
      <div className="box box3">
        <Chart {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartData />
      </div>
      <div className="box box5">
        <Chart {...chartBoxOrders} />
      </div>
      <div className="box box6">
        <Chart {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <BigChart />
      </div>
      <div className="box box8">
        <Barchart {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <Barchart {...barChartBoxRevenue} />
      </div>
    </DashboardBox>
  );
};

export default AdminDashboardHome;
