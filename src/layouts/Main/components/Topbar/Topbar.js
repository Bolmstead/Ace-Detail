import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import { backgroundColor, usaRed } from "vars";

export default function Topbar({ windowWidth }) {
  console.log("🚀 ~ Topbar ~ windowWidth:", windowWidth);
  return (
    <Box
      sx={{
        flexGrow: 1,
        zIndex: 100,
        backgroundColor: backgroundColor,
      }}
    >
      <AppBar position="static" style={{ backgroundColor: backgroundColor }}>
        <Container maxWidth="xl">
          <Toolbar style={{ padding: "20px 0px 20px 0px" }}>
            <Grid container>
              <Grid
                item
                xs={12}
                lg={8}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: windowWidth > 1159 ? "flex-start" : "center",
                }}
              >
                {" "}
                <img
                  src="profile.png"
                  style={{
                    width: "300px",
                    margin: "0px 10px 0px 10px",
                    border: `solid ${"black"} 3px`,
                  }}
                />
                {/* <Typography fontFamily="Roboto" variant="h2">
                  {companyName}
                </Typography> */}
              </Grid>
              <Grid
                item
                xs={12}
                lg={4}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: windowWidth > 1159 ? "0px" : "15px",
                }}
              >
                {" "}
                {windowWidth >= 700 ? (
                  <a
                    style={{ textDecoration: "none", textTransform: "none" }}
                    href="#about"
                  >
                    <Button
                      style={{
                        color: "#ffffff",
                        fontWeight: 500,
                        fontSize: 22,
                        width: windowWidth > 678 ? "160px" : "160px",
                      }}
                    >
                      About Us
                    </Button>
                  </a>
                ) : null}
                {windowWidth >= 700 ? (
                  <a
                    style={{
                      textDecoration: "none",
                      textTransform: "none",
                      marginRight: windowWidth > 678 ? "40px" : "40px",
                    }}
                    href="#how-to-buy"
                  >
                    <Button
                      style={{
                        color: "#ffffff",
                        fontWeight: 500,
                        fontSize: 22,
                        width: windowWidth > 678 ? "160px" : "160px",
                        fontFamily: "Roboto",
                      }}
                    >
                      Our Services
                    </Button>
                  </a>
                ) : null}
                <a
                  style={{ textDecoration: "none", textTransform: "none" }}
                  href="tel:208-982-8478"
                >
                  <Button
                    style={{
                      color: "#ffffff",
                      fontWeight: 500,
                      fontSize: 22,
                      width: windowWidth > 678 ? "230px" : "230px",
                      backgroundColor: usaRed,
                      fontFamily: "Roboto",
                    }}
                  >
                    Call or Text <br />
                    &nbsp;&nbsp;(208) 982-8478
                  </Button>
                </a>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
