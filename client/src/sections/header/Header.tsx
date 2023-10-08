import { Box, Typography } from "@mui/material";
import bg from "@/assets/bannerbackground.png";
import { Item, Search } from "@/components";
import { useState } from "react";
import { useGetItemsByNameQuery } from "@/store/slices/apiSlice";

type Props = {};

const Header = (props: Props) => {
  const [searchText, setSearchText] = useState<String>("");
  const [isSearched, setIsSearched] = useState<Boolean>(false);

  const { isLoading,isError, data, error } = useGetItemsByNameQuery(searchText);
console.log(isError, error)
  return (
    <section>
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "40vh",
          }}
        >
          <img
            src={bg}
            alt="background"
            style={{
              width: "100%",
              margin: "auto",
              objectFit: "cover",
              height: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
          }}
        >
          <Search searchText={searchText} setSearchText={setSearchText} setIsSearched={setIsSearched} />
        </Box>
      </Box>

      {isSearched ? (
        <Box>
          {isLoading ? (
            "Loading..."
          ) : (
            <>
			<Typography>Search results: {data.length === 0 && 'Nothing found.'}</Typography>
              {data.map((item: ItemType) => {
                return <Item item={item} key={item._id} />;
              })}
            </>
          )}
        </Box>
      ) : null}
	  {isError ? (<p>Nothing found</p>): null}
    </section>
  );
};

export default Header;
