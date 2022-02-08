import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import BookCardDetailModal from "./BookCardDetailModal";

export default function BookCard() {
  return (
    <Card sx={{ maxWidth: 400, minWidth: 150 }}>
      <CardMedia
        component="img"
        alt="Book Card"
        height="200"
        image="https://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      />
      <CardContent sx={{ maxHeight: 30, pt: 1 }}>
        <Typography gutterBottom variant="h7" component="div">
          Lizard
        </Typography>
        <Typography variant="body3" color="text.secondary">
          By Daniel Keyes
        </Typography>
      </CardContent>
      <CardActions>
        <BookCardDetailModal />

        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
