import React from "react";
import "./App.css";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import GoogleMapsComponent from "./GoogleMapsComponent";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  margin: theme.spacing(1),
  marginTop: theme.spacing(1),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} pl={2} pr={1}>
            <Item>
              <NavBar />
            </Item>
          </Grid>
          <Grid item xs={4} pl={1} pt={0} mt={0}>
            <Item>
              <SideBar />
            </Item>
          </Grid>
          <Grid item xs={8} pr={1}>
            <Item>
              <GoogleMapsComponent />
            </Item>
          </Grid>
          <Grid item xs={12} pr={1}>
            <Item> Footer xs=12</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
