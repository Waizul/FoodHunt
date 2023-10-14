import TopClients from "@/components/topClients/TopClients";
import {
  products,
} from "@/dashboardData";
import { styled } from "@mui/material";
import DataTable from "@/components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";

// $main-bg: #2a3447;
// $soft-bg: #384256;
// $dark-bg: #222b3c;
// //TEXT
// $main-color: white;
// $soft-color: #ddd;
// $dark-color: #2a3447;

const DashboardBox = styled("div")(({ theme }) => ({
  "&.dashboard": {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: theme.breakpoints.up('tablet') ? "repeat(2, 1fr)" : 'repeat(1, 1fr)',
    gridAutoRows: "minmax(180px, auto)",
    gridAutoFlow: "dense",
  },
  ".box": {
    padding: "20px",
    borderRadius: "10px",
    border: `2px solid #384256`,
  },

  ".box1": {
    gridColumn: "span 1",
    gridRow: "span 2",
  },

  ".box2": {
    gridColumn: "span 1",
    gridRow: "span 2",
  },
}));

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 250,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 200,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
  ];

const USerDashboardHome = () => {
  return (
    <DashboardBox className="dashboard">
      <div className="box box1">
        <TopClients />
      </div>

      <div className="box box2">
        <DataTable slug={'orders'} columns={columns} rows={products} />
      </div>
    </DashboardBox>
  );
};

export default USerDashboardHome;
