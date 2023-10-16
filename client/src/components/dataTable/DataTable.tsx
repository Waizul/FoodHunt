import { styled } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";

import { Link } from "react-router-dom";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
const DataGridContainer = styled("div")(() => ({
  ".dataGrid": {
    backgroundColor: "white",
  },
  "MuiDataGrid-toolbarContainer": {
    flexDirection: "row-reverse",
  },
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  ".action": {
    display: "flex",
    gap: "1rem",

    img: {
      width: "20px",
      height: "20px",
      cursor: "pointer",
    },
  }
}));

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  // TEST THE API

  // const queryClient = useQueryClient();
  // // const mutation = useMutation({
  // //   mutationFn: (id: number) => {
  // //     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
  // //       method: "delete",
  // //     });
  // //   },
  // //   onSuccess: ()=>{
  // //     queryClient.invalidateQueries([`all${props.slug}`]);
  // //   }
  // // });

  function getRowId(row) {
    return row._id;
  }

  // const handleUpdate = async (item) => {
  //   const res = await axios.put(`http://localhost:5000/api/${props.slug}/${item._id}`)
  //   console.log(res.status)
  // }

  const handleDelete = async(id: number) => {
    //delete the item
    // mutation.mutate(id)

    const res = await axios.delete(`http://localhost:5000/api/${props.slug}/${id}`)
    console.log(res.status)
  };
 
  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/dashboard/admin/${props.slug}/${params.row._id}`}>
            <img src="/icons/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row._id)}>
            <img src="/icons/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <DataGridContainer className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        getRowId={getRowId}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </DataGridContainer>
  );
};

export default DataTable;
