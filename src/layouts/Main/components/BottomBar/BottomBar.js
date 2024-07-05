import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import { backgroundColor, politician, ticker } from "vars";

export default function Topbar({ windowWidth }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        zIndex: 100,
        backgroundColor: backgroundColor,
      }}
    >
      <AppBar position="static" style={{ backgroundColor: "#13121F" }}>
        <Container
          maxWidth="sm"
          style={{ textAlign: "center", color: "#89898F" }}
        >
          <Toolbar style={{ padding: "20px", margin: "20px" }}>
            {ticker} has no association with {politician} or the doland tremp
            cryptocurrency. This token is simply a meme coin with no intrinsic
            value or expectation of financial return. <br />
            <br />
            fuk u bodehn
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
