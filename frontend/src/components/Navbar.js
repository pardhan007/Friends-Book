import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  ButtonGroup,
  Button,
} from "@mui/material";

import {
  Facebook,
  GroupOutlined,
  HomeOutlined,
  Mail,
  MenuOutlined,
  Notifications,
  SearchOutlined,
  StorefrontOutlined,
} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const StyledLogo = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  gap: 20,
});

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 5,
  alignItems: "center",
  padding: "5px 15px",
  // borderRadius: theme.shape.borderRadius,
  borderRadius: "50px",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <StyledLogo>
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", sm: "block", alignSelf: "center" },
              cursor: "pointer",
            }}
          >
            Friend's Book
          </Typography>
          <Facebook
            sx={{
              display: { xs: "block", sm: "none" },
              width: 32,
              height: 32,
              alignSelf: "center",
            }}
          />
          <Search
            sx={{
              backgroundColor: props.mode === "dark" ? "#2C3333" : "white",
            }}
          >
            <SearchOutlined color="disabled" />
            <InputBase fullWidth placeholder="Search..." />
          </Search>
        </StyledLogo>
        {/* <ButtonGroup */}
        {/* variant=""
          sx={{ mr: 30, display: { xs: "none", lg: "inline-block" } }}
        > */}
        {/* <div>
          <Button sx={{ pl: 5, pr: 5, pt: 1, pb: 1 }}>
            <HomeOutlined sx={{ width: 32, height: 32 }} />
          </Button>
          <Button sx={{ pl: 5, pr: 5, pt: 1, pb: 1 }}>
            <GroupOutlined sx={{ width: 32, height: 32 }} />
          </Button>
          <Button sx={{ pl: 5, pr: 5, pt: 1, pb: 1 }}>
            <StorefrontOutlined sx={{ width: 32, height: 32 }} />
          </Button>
        </div> */}

        {/* </ButtonGroup> */}

        <Icons>
          <Badge
            sx={{
              display: { xs: "inline-block", lg: "none" },
              cursor: "pointer",
            }}
          >
            <MenuOutlined fontSize="medium" />
          </Badge>
          <Badge badgeContent={4} color="error" sx={{ cursor: "pointer" }}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error" sx={{ cursor: "pointer" }}>
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{ width: 32, height: 32, cursor: "pointer" }}
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 32, height: 32 }}
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Typography>Harsh</Typography>
        </UserBox>
        <Menu
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
