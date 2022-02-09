import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import axios from "axios";

export default function LoginForm() {
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [userInfo, setUserInfo] = React.useState("");

  const handleLoginClick = () => {
    axios
      .get("./users/details", { params: { userEmail, userPassword } })
      .then((res) => {
        setIsUserLoggedIn(true);
        console.log(res.data.user);
        setUserInfo(res.data?.user?.fullname);
      })
      .catch(setIsUserLoggedIn(false));
  };

  const handleLogoutClick = () => {
    setIsUserLoggedIn(false);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "20ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        {isUserLoggedIn ? (
          <>Welcome {userInfo}</>
        ) : (
          <>
            <TextField
              required
              id="outlined-required"
              onChange={(e) => setUserEmail(e.target.value)}
              label="Email"
              size="small"
            />

            <TextField
              onChange={(e) => setUserPassword(e.target.value)}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              size="small"
            />
          </>
        )}

        {isUserLoggedIn ? (
          <Button
            onClick={handleLogoutClick}
            endIcon={<Logout />}
            style={{ background: "#ffa722", color: "white", marginRight: 30 }}
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={handleLoginClick}
            endIcon={<Login />}
            style={{ background: "#ffa722", color: "white", marginRight: 20 }}
          >
            Login
          </Button>
        )}
      </div>
    </Box>
  );
}
