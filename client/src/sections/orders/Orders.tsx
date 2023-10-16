import { GridColDef } from "@mui/x-data-grid";
import { useGetOrdersQuery } from "@/store/slices/apiSlice";

import DataTable from "@/components/dataTable/DataTable";

const columns: GridColDef[] = [
  { field: "_id", headerName: "OrderID", width: 200 },
  { field: "user_id", headerName: "UserID", width: 200 },
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
    width: 200,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 100,
  },
  {
    field: "qty",
    headerName: "Quantity",
    type: "number",
    width: 80,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
];

const Orders = () => {
  const { isLoading, data } = useGetOrdersQuery('orders');

  return (
    <div>
      {isLoading ? (
        <>"Loading..."</>
      ) : (
        <DataTable slug="orders" columns={columns} rows={data} />
      )}
    </div>
  );
};

export default Orders;

