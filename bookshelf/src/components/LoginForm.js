import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function LoginForm() {
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [userName, setUserName] = React.useState("");

  const userContext = React.useContext(UserContext);

  React.useEffect(() => {
    setIsUserLoggedIn(!!userContext.userInfo);
    if (userContext.userInfo) setUserName(userContext.userInfo.fullname);
  }, [userContext]);

  const handleLoginClick = () => {
    axios
      .get("./users/details", { params: { userEmail, userPassword } })
      .then((res) => {
        const info = res.data?.user;
        userContext.setUserInfo(info);
      });
  };

  const handleLogoutClick = () => {
    setIsUserLoggedIn(false);
    userContext.setUserInfo("");
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
          <div
            style={{
              color: "black",
              display: "inline-block",
              margin: "0 20px",
              fontWeight: "bold",
              fontSize: "1.2em",
            }}
          >
            Welcome {userName}
          </div>
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
            style={{ background: "#ffa722", color: "white", margin: 10 }}
          >
            Login
          </Button>
        )}
      </div>
    </Box>
  );
}
