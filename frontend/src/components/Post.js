import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const Post = () => {
  return (
    <Card sx={{ margin: { xs: 0, sm: 2 }, marginTop:{xs: 3}}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="photo">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="House of the Dragon"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="2%"
        image="/images/hodImg.webp"
        alt="HoD"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          An internal succession war within House Targaryen at the height of its
          power, 172 years before the birth of Daenerys Targaryen.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: "red" }} />}
        />
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
