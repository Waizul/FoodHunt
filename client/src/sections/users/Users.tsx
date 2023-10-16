import { GridColDef } from "@mui/x-data-grid";

import DataTable from "@/components/dataTable/DataTable";
import { useGetUsersQuery } from "@/store/slices/apiSlice";

const columns: GridColDef[] = [
  { field: "_id", headerName: "UserID", width: 200 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.photoURL || "/icons/noavatar.png"} alt="" />;
    },
  },
  {
    field: "username",
    type: "string",
    headerName: "Username",
    width: 200,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
];


const Users = () => {
const {isLoading, data} = useGetUsersQuery('')
  return <div>
  {isLoading ? (
    <>"Loading..."</>
  ) : (
    <DataTable slug="users" columns={columns} rows={data} />
  )}
</div>
};

export default Users;
