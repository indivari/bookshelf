import React from "react";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Sidebar() {
  return (
    <div>
      <SearchBar />
      <Box sx={{ p: 1, flexGrow: 1, minWidth: 400 }}>
        <Grid container spacing={1}>
          <Grid item xs={2} md={4}>
            <BookCard />
          </Grid>
          <Grid item xs={2} md={4}>
            <Item>
              <BookCard />
            </Item>
          </Grid>
          <Grid item xs={2} md={4}>
            <Item>
              <BookCard />
            </Item>
          </Grid>
          <Grid item xs={2} md={4}>
            <Item>
              <BookCard />
            </Item>
          </Grid>
          <Grid item xs={2} md={4}>
            <Item>
              <BookCard />
            </Item>
          </Grid>
          <Grid item xs={2} md={4}>
            <Item>
              <BookCard />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Sidebar;
