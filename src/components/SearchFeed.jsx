import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Videos } from "./";
import { FetchFromAPi } from "./utils/FetchFromApi";

const SearchFeed = () => {
  const { searchterm } = useParams();
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    //a life cycle hook when component loads
    FetchFromAPi(`search?part=snippet&q=${searchterm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchterm]);
  return (
    <Box p={2} sx={{ oveflowY: "auto", height: "auto", flex: 3 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for :{" "}
        <span style={{ color: "#f31503" }}>{searchterm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
