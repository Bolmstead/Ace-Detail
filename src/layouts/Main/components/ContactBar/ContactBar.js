import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";

import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import { companyName, dexscreenerLink, telegramLink } from "vars";

export default function ContactBar({ windowWidth }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        zIndex: 100,
        backgroundColor: "#F7FAFE",
      }}
    >
      {" "}
      <AppBar position="static" style={{ backgroundColor: "#F7FAFE" }}>
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
                    width: "80px",
                    margin: "0px 20px 0px 20px",
                    border: `solid ${"black"} 5px`,
                  }}
                />
                <Typography variant="h4" color="black">
                  {companyName}
                </Typography>
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
                <Container maxWidth="sm" style={{ justifyContent: "center" }}>
                  <Grid container direction="row" justifyContent="center">
                    <Grid
                      item
                      style={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      xs={12}
                      sm={4}
                    >
                      <a href={telegramLink} style={{ textDecoration: "none" }}>
                        <Box
                          component={ListItem}
                          disableGutters
                          width={"auto"}
                          padding={0}
                          margin={windowWidth >= 700 ? 3 : 1}
                        >
                          {" "}
                          <Box
                            component={ListItemAvatar}
                            minWidth={"auto !important"}
                            marginRight={1}
                          >
                            <Box
                              component={Avatar}
                              src={"/telegram-logo.png"}
                              bgcolor={"black"}
                              width={40}
                              height={40}
                            ></Box>
                          </Box>
                          <ListItemText
                            style={{ color: "white" }}
                            primary={
                              <Typography color="black" variant="h6">
                                telegram
                              </Typography>
                            }
                          />
                        </Box>
                      </a>
                    </Grid>
                    <Grid
                      item
                      style={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      xs={12}
                      sm={4}
                    >
                      {" "}
                      <a
                        href={dexscreenerLink}
                        style={{ textDecoration: "none" }}
                      >
                        <Box
                          component={ListItem}
                          disableGutters
                          width={"auto"}
                          padding={0}
                          margin={windowWidth >= 700 ? 3 : 1}
                        >
                          <Box
                            component={ListItemAvatar}
                            minWidth={"auto !important"}
                            marginRight={1}
                          >
                            <Box
                              component={Avatar}
                              src={"/dexscreener-logo.png"}
                              bgcolor={"black"}
                              width={40}
                              height={40}
                            ></Box>
                          </Box>
                          <ListItemText
                            style={{ color: "white" }}
                            primary={
                              <Typography color="black" variant="h6">
                                chart
                              </Typography>
                            }
                          />
                        </Box>
                      </a>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
