import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import FormControl from "@mui/material/FormControl";

import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// booke title with author: https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDmkfSjnnPP6Zl7m0MkrTDQZEjOP0g8y4A
//book title only search : https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyDmkfSjnnPP6Zl7m0MkrTDQZEjOP0g8y4A

export default function SignupModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDmkfSjnnPP6Zl7m0MkrTDQZEjOP0g8y4A"
    )
      .then((res) => res.json())
      .then((res) => console.log(res.items[0]));

    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button size="small" onClick={handleOpen}>
        Detail
      </Button>
      <Modal open={open} onClose={handleClose} width="400px">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Book Details
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
                id="outlined-read-only-input"
                label="Book Title"
                defaultValue="Book title"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="Author"
                defaultValue="James"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="availability"
                defaultValue="in stock"
                InputProps={{
                  readOnly: true,
                }}
              />

              {/* <OutlinedInput placeholder="Email" />
              <OutlinedInput placeholder="Password" /> */}

              <Button
                variant="contained"
                style={{ background: "#ffa722", color: "white" }}
              >
                {" "}
                Borrow{" "}
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
