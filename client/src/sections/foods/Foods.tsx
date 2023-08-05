import { Box } from "@mui/material";
import { useState } from "react";

import { Item, Category } from "@/components";
import { useGetItemsQuery } from "@/store/slices/apiSlice";

type Props = {};

const Foods = (props: Props) => {
  const [category, setCategory] = useState("breakfast");

  const {
    isLoading,
    data = [],
    isError,
    isSuccess,
  } = useGetItemsQuery("/items");
  

  const filteredItems = data.filter((item: ItemType) => item.type === category);

  return (
    <section className="section">
      <Box
        sx={{
          py: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          listStyleType: "none",
        }}
      >
        <Category category={category} setCategory={setCategory} />
      </Box>

      <Box
        sx={{
          paddingInline: 2,
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {filteredItems.map((item: ItemType) => (
              <Item item={item} key={item._id} />
            ))}
          </>
        )}
      </Box>
    </section>
  );
};

export default Foods;
