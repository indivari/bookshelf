import React from "react";

import BookCard from "./BookCard";
import SearchBar from "./SearchBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Sidebar() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios
      .get("./books/list")
      .then((res) => {
        // console.log(res.data);

        setBookData(res.data);
        // console.log(bookData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const books = bookData.map((data, id) => {
    return <BookCard key={id} bookData={data.volumeInfo} />;
  });

  return (
    <div>
      <SearchBar />
      <Box sx={{ flexGrow: 1, minWidth: 450 }}>
        <Grid container spacing={1} sx={{ flexGrow: 1 }}>
          {books}
        </Grid>
      </Box>
    </div>
  );
}

export default Sidebar;
