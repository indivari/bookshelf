import React from "react";

import BookCard from "./BookCard";
import SearchBar from "./SearchBar";
// import { styled } from "@mui/material/styles";
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

  const [counter, setCounter] = useState(0);

  const [userBooks, setUserBooks] = useState([]);


  useEffect(() => {
    axios
      .get("./books/list")
      .then((res) => {
        setBookData(res.data);

        console.log(bookData.length);
        setCounter((counter += 1));
        // console.log(bookData);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredBooks = bookData
    .filter((data) =>
      data?.volumeInfo.title
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase())
    )
    .map((data, id) => {
      return <BookCard key={id} bookData={data} />;
    });
  // console.log(filteredBooks);

  const books = bookData.map((data, id) => {
    // console.log(data);
    return <BookCard key={id} bookData={data} />;
  });

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            background: "#f1f5ff",
            height: 60,
            color: "black",
            paddingBottom: 5,
            marginBottom: 5,
          }}
        >
          <Toolbar>
            <Typography
              variant="h7"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Search library
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={handleSearchInput}
                placeholder="Book title…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <DonateBookModal />
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
          </Toolbar>
        </AppBar>
      </Box>

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
          {searchInput === "" ? books : filteredBooks}
        </Grid>
      </Box>
    </div>
  );
}

export default Sidebar;
