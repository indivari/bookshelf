import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BookCard() {
  return (
    <Card sx={{ maxWidth: 280, minWidth: 150 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image="https://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Lizard
        </Typography>
        <Typography variant="body3" color="text.secondary">
          By Daniel Keyes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">detail</Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
