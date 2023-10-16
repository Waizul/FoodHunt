import { GridColDef } from "@mui/x-data-grid";
import { useGetItemsQuery } from "@/store/slices/apiSlice";
import { styled } from "@mui/material/styles";

import DataTable from "@/components/dataTable/DataTable";

const ProductsContainer = styled("div")(() => ({}));

const columns: GridColDef[] = [
  { field: "_id", headerName: "ID", width: 200 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.imgUrl || "/icons/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "type",
    type: "string",
    headerName: "Category",
    width: 120,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 100,
  },
  {
    field: "desc",
    headerName: "Description",
    type: "string",
    width: 200,
  },
  // {
  //   field: "createdAt",
  //   headerName: "Created At",
  //   width: 200,
  //   type: "string",
  // },
  // {
  //   field: "inStock",
  //   headerName: "In Stock",
  //   width: 150,
  //   type: "boolean",
  // },
];

const Products = () => {
  const { isLoading, data } = useGetItemsQuery('');

  return (
    <ProductsContainer className="products">
      {isLoading ? (
        <>"Loading..."</>
      ) : (
        <DataTable slug="items" columns={columns} rows={data} />
      )}
    </ProductsContainer>
  );
};

export default Products;
