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
import UserBooksInfo from "../UserBooksInfo";
import { UserContext } from "./../UserContext";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Sidebar() {
  const [bookData, setBookData] = useState([]);
  const [userBooks, setUserBooks] = useState([]);

  useEffect(() => {
    axios
      .get("./books/list")
      .then((res) => {
        setBookData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userContext = React.useContext(UserContext);

  useEffect(() => {
    if (!!userContext.userInfo) {
      axios
        .get("/users/userBooks", {
          params: { userId: userContext.userInfo?._id },
        })
        .then((res) => setUserBooks(res.data))
        .catch((err) => console.log(err));
    }
  }, [userContext]);

  const books = bookData
    .map((data) => {
      data["isInBorrow"] =
        userBooks &&
        userBooks.find((ub) => ub.book_id === data._id) !== undefined;
      return data;
    })
    .sort((b1, b2) => b2.isInBorrow - b1.isInBorrow)
    .map((data, id) => {
      return (
        <BookCard key={id} bookData={data} isBorrowedByUser={data.isInBorrow} />
      );
    });

  return (
    <div>
      <SearchBar />
      <UserBooksInfo />
      <Box
        sx={{ flexGrow: 1, minWidth: 450, maxHeight: "80vh", overflow: "auto" }}
      >
        <Grid container spacing={1} sx={{ flexGrow: 1 }}>
          {books}
        </Grid>
      </Box>
    </div>
  );
}

export default Sidebar;
