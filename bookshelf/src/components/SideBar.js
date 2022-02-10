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
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import DonateBookModal from "./DonateBookModal";
import UserBooksInfo from "../UserBooksInfo";
import { UserContext } from "./../UserContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Sidebar() {
  const [bookData, setBookData] = useState([]);
  const [userBooks, setUserBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get("./books/list")
      .then((res) => {
        setBookData(res.data);
        // console.log(bookData.length);
        // setCounter((counter += 1));
        // console.log(bookData);
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

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

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
          {searchInput === "" ? books : filteredBooks}
        </Grid>
      </Box>
    </div>
  );
}

export default Sidebar;
