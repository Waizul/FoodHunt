import { styled } from "@mui/material";
import DataTable from "@/components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { useGetOrdersByUserIDQuery } from "@/store/slices/apiSlice";
import useAuth from "@/hooks/useAuth";

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
    gridTemplateColumns: theme.breakpoints.up("tablet")
      ? "repeat(2, 1fr)"
      : "repeat(1, 1fr)",
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
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.imgURL || "/icons/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 140,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 70,
  },
  {
    field: "qty",
    headerName: "Quantity",
    type: "number",
    width: 80,
  },
  {
    field: "createdAt",
    headerName: "Ordered At",
    width: 140,
    type: "string",
  },
];

const UserDashboardHome = () => {
  //@ts-ignore
  const { user } = useAuth();

  const { isLoading, data } = useGetOrdersByUserIDQuery(user._id);
  console.log(user._id, data);
  return (
    <DashboardBox className="dashboard">
      {/* <div className="box box1">
        <TopClients />
      </div> */}

      <div className="box box2">
        {isLoading ? (
          "Loading..."
        ) : (
          <DataTable slug={"orders"} columns={columns} rows={data} />
        )}
      </div>
    </DashboardBox>
  );
};

export default UserDashboardHome;
