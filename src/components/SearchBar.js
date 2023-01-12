import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
const SearchBar = () => {
  const [searchterm, setSearchTerm] = useState("");
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchterm) {
      nav(`/search/${searchterm}`);
      setSearchTerm("");
    }
  };
  console.log(searchterm);
  return (
    <Paper
      component="form"
      onSubmit={(e) => handleSubmit(e)}
      sx={{
        borderRadius: "20px",
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        value={searchterm}
        placeholder="search..."
        className="search-bar"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        style={{ border: "none" }}
      />
      <IconButton sx={{ p: "10px", color: "red" }} type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
