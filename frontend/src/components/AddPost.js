import {
  AddPhotoAlternate,
  EmojiEmotions,
  EmojiEmotionsOutlined,
  LiveTv,
  LocationOn,
  PersonAdd,
  PhotoLibrary,
} from "@mui/icons-material";

import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Modal,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";

const StyledTextBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 12,
});

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 10,
});

const AddPostBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const AddPost = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ margin: { xs: 0, sm: 2 }, marginTop: { xs: 3, sm: 5 } }}>
      <Card sx={{ p: 1.5 }}>
        <StyledTextBox>
          <Avatar
            sx={{ cursor: "pointer" }}
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Button
            onClick={(e) => setOpen(true)}
            sx={{
              width: "90%",
              backgroundColor: props.mode === "dark" ? "#2C3333" : "#F0F2F5",
              borderRadius: 20,
              color: "#65676B",
              fontWeight: "400",
            }}
          >
            What's on Your mind?
          </Button>
        </StyledTextBox>

        <Divider sx={{ mt: 2, mb: 2 }} />

        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button sx={{ width: "33%" }} startIcon={<LiveTv color="error" />}>
            Live Video
          </Button>
          <Button
            sx={{ width: "33%" }}
            onClick={(e) => setOpen(true)}
            startIcon={<PhotoLibrary color="success" />}
          >
            Photo/Video
          </Button>
          <Button
            sx={{ width: "33%", display: { xs: "none", sm: "flex" } }}
            onClick={(e) => setOpen(true)}
            startIcon={<EmojiEmotionsOutlined color="secondary" />}
          >
            Feeling/activity
          </Button>
        </Box>
      </Card>

      <StyledModal open={open} onClose={(e) => setOpen(false)}>
        <Box
          width={500}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={2}
          border="none"
        >
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Create Post
          </Typography>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <UserBox>
            <Avatar
              alt="Travis Howard"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
            <Typography variant="span" sx={{ fontWeight: 500 }}>
              Travis Howard
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%", fontSize: "50px", mt: 2 }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on Your mind?"
            variant="standard"
          />
          <AddPostBox
            sx={{
              border: 1,
              borderColor: "grey.500",
              borderRadius: "10px",
              padding: 2,
              mt: 3,
              mb: 3,
            }}
          >
            <Typography>Add to your post</Typography>
            <Stack direction="row" gap={1}>
              <AddPhotoAlternate color="success" />
              <PersonAdd color="primary" />
              <EmojiEmotions color="secondary" />
              <LocationOn color="error" />
            </Stack>
          </AddPostBox>
          <Button variant="contained" fullWidth>
            Post
          </Button>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default AddPost;
