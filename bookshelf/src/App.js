import React, { useState } from "react";
import "./App.css";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import GoogleMapsComponent from "./GoogleMapsComponent";
import { UserContext } from "./UserContext";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  margin: theme.spacing(0),
  marginTop: theme.spacing(1),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function App() {
  const [userInfo, setUserInfo] = useState(); // creating a state for storing info what we're gonna use in our context

  return (
    <div className="App">
      {/* Provider , providing all context values to any component that will need them. */}
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <Box
          sx={{
            flexGrow: 1,
            width: "99%",

            margin: "5px",

            marginTop: "0",
          }}
        >
          <Grid container spacing={0} rowSpacing={0} columnSpacing={1}>
            <Grid item xs={12}>
              <Item>
                <NavBar />
              </Item>
            </Grid>
            <Grid item xs={4} pl={0} pt={0} ml={0}>
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
      </UserContext.Provider>
    </div>
  );
}
