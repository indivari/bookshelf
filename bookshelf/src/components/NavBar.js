import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Login from "@mui/icons-material/Login";
import Logout from "@mui/icons-material/Logout";
import RegIcon from "@mui/icons-material/HowToReg";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#f1f5ff" }}>
        <Toolbar>
          <Typography pt={1} variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <img src="./logo.svg" alt="" />
            <img src="./title.svg" alt="" />
          </Typography>
          <Button
            endIcon={<Login />}
            style={{ background: "#ffa722", color: "white", margin: 8 }}
          >
            Login
          </Button>

          <Button
            endIcon={<Logout />}
            style={{ background: "#ffa722", color: "white", margin: 8 }}
          >
            Logout
          </Button>

          <Button
            endIcon={<RegIcon />}
            style={{ background: "#ffa722", color: "white", margin: 8 }}
          >
            Sign up
          </Button>
          <Typography
            variant="h6"
            component="p"
            sx={{ flexGrow: 0, color: "black", marginLeft: 5 }}
          >
            Welcome User1
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
