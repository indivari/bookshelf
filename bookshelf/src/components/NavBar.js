import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Login from "@mui/icons-material/Login";
import Logout from "@mui/icons-material/Logout";
import RegIcon from "@mui/icons-material/HowToReg";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LoginForm from "./LoginForm";
import SignupModal from "./SignupModal";

export default function ButtonAppBar() {
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);

  const handleLoginClick = () => {
    setIsUserLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsUserLoggedIn(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#f1f5ff" }}>
        <Toolbar>
          <Typography pt={1} variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <img src="./logo.svg" alt="" />
            <img src="./title.svg" alt="" />
          </Typography>

          <LoginForm />

          {isUserLoggedIn ? (
            <Button
              onClick={handleLogoutClick}
              endIcon={<Logout />}
              style={{ background: "#ffa722", color: "white", margin: 8 }}
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={handleLoginClick}
              endIcon={<Login />}
              style={{ background: "#ffa722", color: "white", margin: 8 }}
            >
              Login
            </Button>
          )}

          <SignupModal />

          <Button
            endIcon={<LocalLibraryIcon />}
            style={{ background: "#ffa722", color: "white", margin: 8 }}
          >
            Account
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
