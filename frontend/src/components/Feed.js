import { Box, Paper } from "@mui/material";
import React from "react";
import Post from "./Post";
import AddPost from "./AddPost";

const Feed = (props) => {
  return (
    <Box flex={4} mt={6} sx={{ overflow: "scroll" }}>
      <AddPost mode={props.mode} />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
