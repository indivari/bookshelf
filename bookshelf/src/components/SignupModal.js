import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RegIcon from "@mui/icons-material/HowToReg";
import FormControl from "@mui/material/FormControl";
// import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SignupModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        endIcon={<RegIcon />}
        style={{ background: "#ffa722", color: "white", margin: 8 }}
        onClick={handleOpen}
      >
        Sign up
      </Button>
      <Modal open={open} onClose={handleClose} width="400px">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please Fill in the Form
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <FormControl
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: { sm: "1fr" },
                gap: 2,
              }}
            >
              <TextField
                id="outlined-input-name"
                label="Name"
                defaultValue=""
                InputProps={{}}
              />
              <TextField
                id="outlined-input-email"
                label="Email"
                defaultValue=""
                InputProps={{}}
              />
              <TextField
                id="outlined-input-password"
                label="Password"
                defaultValue=""
                InputProps={{}}
                type="password"
              />

              <Button
                variant="contained"
                style={{ background: "#ffa722", color: "white" }}
              >
                SignUp
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
