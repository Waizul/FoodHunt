import { useGetItemsByNameQuery } from "@/store/slices/apiSlice";
import { ColorButton } from "@/styles";
import { Box, useTheme, Paper, InputBase } from "@mui/material";
import { useState } from "react";

type Props = {
  searchText: String;
  setSearchText: React.Dispatch<React.SetStateAction<String>>;
  setIsSearched: React.Dispatch<React.SetStateAction<Boolean>>;
};

const Search = ({ searchText, setSearchText, setIsSearched }: Props) => {
  const theme = useTheme();

  //   const { isLoading, data } = useGetItemsByNameQuery(searchText);

  const handleSearch = () => {
    searchText.length && setIsSearched(true);
  };

  return (
    <Paper
      component="form"
      elevation={0}
      variant="outlined"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        padding: "0",
        border: "none",
        borderRadius: "30px",
      }}
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search  your favourite food"
        inputProps={{ "aria-label": "Search  your favourite food" }}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ColorButton onClick={handleSearch}>Search</ColorButton>
    </Paper>
  );
};

export default Search;
