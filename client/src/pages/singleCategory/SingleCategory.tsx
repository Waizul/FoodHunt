import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { ItemCard } from "@/components";
import { useAppDispatch, useAppSelector } from "@/store";
import { closeModal } from "@/store/slices/modalSlice";
import { useGetItemsByCategoryQuery } from "@/store/slices/apiSlice";

const SingleCategory = () => {
  const theme = useTheme();
  const { categoryName } = useParams();

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isOpen);

  const { isLoading, data } = useGetItemsByCategoryQuery(categoryName);

  return (
    <section
      className="section"
      onClick={() => isOpen && dispatch(closeModal())}
    >
      <Box
        flexGrow={1}
        sx={{
          [theme.breakpoints.down("laptop")]: {
            paddingInline: 2,
          },
          width: "100%",
        }}
      >
        <Typography variant="h3">
          <Typography
            textTransform={"capitalize"}
            mr={0.7}
            sx={{ display: "inline" }}
          >
            {categoryName}
          </Typography>
          items we offer
        </Typography>
        <Grid2
          container
          spacing={{ tablet: 2, laptop: 4 }}
          columns={{ mobile: 4, tablet: 8, laptop: 12 }}
        >
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {data.map((item: ItemType) => (
                <Grid2 mobile={4} tablet={4} laptop={4} key={item._id} mb={10}>
                  <ItemCard item={item} />
                </Grid2>
              ))}
            </>
          )}
        </Grid2>
      </Box>
    </section>
  );
};

export default SingleCategory;
