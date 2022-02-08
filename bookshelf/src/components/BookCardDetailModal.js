import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import FormControl from "@mui/material/FormControl";
import CardMedia from "@mui/material/CardMedia";

import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 530,
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
      .then((res) => console.log(res.items[0]["volumeInfo"]));

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
                gridTemplateColumns: { sm: "1fr 1fr" },
                gap: 2,
                mt: 4,
              }}
            >
              <TextField
                id="outlined-read-only-input"
                label="Title"
                defaultValue="Title"
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
                label="Category"
                defaultValue="Fiction"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="Subtitle"
                defaultValue="A Modern Literary Classic"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="Average Rating"
                defaultValue="5"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="Published Date"
                defaultValue="2012-11-15"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Description"
                multiline
                maxRows={4}
                value="The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone's jokes - until an experiment in the enhan"
                // onChange={handleChange}
              />

              <TextField
                id="outlined-read-only-input"
                label="Maturity Rating"
                defaultValue="NOT_MATURE"
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
              <Button
                variant="contained"
                style={{ background: "#ffa722", color: "white" }}
              >
                Borrow
              </Button>
              {/* <Box>
                <CardMedia
                  component="img"
                  alt="Book Card"
                  sx={{ width: 150 }}
                  image="https://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                />
              </Box> */}
            </FormControl>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
