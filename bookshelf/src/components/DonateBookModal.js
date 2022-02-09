import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal(props) {
  const [apiKey, setApiKey] = useState(
    "AIzaSyCqi37mzRrzkBrDZDb0BX9_IarX5iMOT88"
  );

  const [open, setOpen] = React.useState(false);
  const [donateTitle, setDonateTitle] = useState("");
  const handleOpen = () => {
    // https://www.googleapis.com/books/v1/volumes?q=intitle:flowers+inauthor:keyes&key=AIzaSyDmkfSjnnPP6Zl7m0MkrTDQZEjOP0g8y4A&maxResults=1

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${props.bookTitle}+inauthor:${props.bookAuthor}&key=${apiKey}&maxResults=1`
      )
      .then((data) => {
        console.log(data.data.items[0]?.volumeInfo.title);
        setDonateTitle(data.data.items[0]?.volumeInfo.title);
        // setResult(data.data.items);
      });
    // console.log(props.bookTitle);
    // console.log(props.bookAuthor);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleOpen}
        endIcon={<BookmarkAddIcon />}
        style={{
          background: "#ffa722",
          color: "white",
          marginTop: 5,
          fontSize: 13,
          width: 120,
          height: 50,
          marginLeft: 380,
        }}
      >
        LookUp
      </Button>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 500, height: 650 }}>
          <h2 id="child-modal-title">Your Book Details</h2>
          <p id="child-modal-description">
            If this is correctly showing your book details then click Donate,
            thank you!
          </p>

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
              defaultValue={donateTitle}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-read-only-input"
              label="Author"
              defaultValue=""
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              id="outlined-read-only-input"
              label="Category"
              defaultValue=""
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-read-only-input"
              label="Subtitle"
              defaultValue=""
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-read-only-input"
              label="Average Rating"
              defaultValue=""
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-read-only-input"
              label="Published Date"
              defaultValue=""
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              id="outlined-read-only-input"
              label="Maturity Rating"
              defaultValue=""
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

            <Box position="absolute" top="105%" left="60%">
              <Container>
                <CardMedia
                  component="img"
                  alt="Book Card"
                  sx={{ width: 150 }}
                  image="https://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                />
              </Container>
            </Box>
          </FormControl>

          <Button
            // onClick={handleDonate}
            variant="contained"
            endIcon={<BookmarkAddIcon />}
            style={{ background: "#ffa722", color: "white", marginTop: 25 }}
          >
            Donate
          </Button>

          <Button
            onClick={handleClose}
            endIcon={<BookmarkAddIcon />}
            style={{
              background: "#ffa722",
              color: "white",
              marginTop: 25,
              marginLeft: 10,
              // fontSize: 13,
              // width: 200,
              // height: 50,
            }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function DonateBookModal() {
  const [open, setOpen] = React.useState(false);
  const [bookTitle, setBookTitle] = React.useState("");
  const [bookAuthor, setBookAuthor] = React.useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        endIcon={<BookmarkAddIcon />}
        style={{
          background: "#ffa722",
          color: "white",
          margin: 8,
          fontSize: 9,
        }}
      >
        Donate
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            ...style,
            width: 500,
            height: 500,
            display: "grid",
            gridTemplateColumns: { sm: "1fr" },
            gap: 1,
            mt: 1,
          }}
        >
          <h2 id="parent-modal-title">Donate a Book</h2>
          <p id="parent-modal-description">
            We help with looking up your books details from Google Books
            database. Simply type in the title and author below and click
            Lookup!
          </p>

          <TextField
            onChange={(e) => setBookTitle(e.target.value)}
            id="outlined-read-only-input"
            label="Title"
            defaultValue=""
          />
          <TextField
            onChange={(e) => setBookAuthor(e.target.value)}
            id="outlined-read-only-input"
            label="Author"
            defaultValue=""
          />

          <ChildModal bookTitle={bookTitle} bookAuthor={bookAuthor} />
        </Box>
      </Modal>
    </div>
  );
}
