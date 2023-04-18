import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";

export default function App() {
  const [mode, setMode] = React.useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        mdp: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.secondary"}>
        <Navbar mode={mode} />
        <Stack direction="row" justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed mode={mode} />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
