import {
  Avatar,
  Box,
  Container,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  backgroundColor,
  contractAddress,
  dexscreenerLink,
  telegramLink,
} from "vars";

function DefaultHomePage({ windowWidth }) {
  console.log("🚀 ~ DefaultHomePage ~fffff  windowWidth:", windowWidth);
  // const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   function fadeInText() {
  //     setChecked(true);
  //   }
  //   setTimeout(() => {
  //     console.log("Delayed for 1 second.");
  //     fadeInText();
  //   }, 1000);
  // }, []);

  // const handleChange = () => {
  //   setChecked((prev) => !prev);
  // };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: backgroundColor,
        }}
      >
        <Grid container direction="row" justifyContent="center">
          <Grid item style={{ textAlign: "center" }} xs={12}>
            <Container maxWidth="md">
              {" "}
              {windowWidth >= 700 ? (
                <img style={{ width: "100%" }} src="logo.png"></img>
              ) : (
                <img style={{ width: "100%" }} src="logo.png"></img>
              )}
            </Container>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
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
                          bgcolor={"#3C5979"}
                          width={40}
                          height={40}
                        ></Box>
                      </Box>
                      <ListItemText
                        style={{ color: "white" }}
                        primary={
                          <Typography color="white" variant="h6">
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
                  <a href={dexscreenerLink} style={{ textDecoration: "none" }}>
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
                          bgcolor={"#3C5979"}
                          width={40}
                          height={40}
                        ></Box>
                      </Box>
                      <ListItemText
                        style={{ color: "white" }}
                        primary={
                          <Typography color="white" variant="h6">
                            chart
                          </Typography>
                        }
                      />
                    </Box>
                  </a>
                </Grid>
                {windowWidth >= 700 ? (
                  <Grid item xs={12}>
                    {" "}
                    <Typography
                      margin={1}
                      marginBottom={windowWidth >= 400 ? "100px" : "50px"}
                      fontFamily="Roboto"
                      variant="h5"
                      color="white"
                      style={{ textAlign: "center", marginBottom: "20px" }}
                    >
                      they jayled tremp... we wehl free hem
                    </Typography>
                    <Typography
                      marginBottom={windowWidth >= 700 ? "100px" : "50px"}
                      fontFamily="Roboto"
                      variant="h6"
                      color="white"
                      style={{ width: "100%" }}
                    >
                      {contractAddress}
                    </Typography>
                  </Grid>
                ) : (
                  <Grid item xs={12}>
                    {" "}
                    <Typography
                      margin={1}
                      marginBottom={windowWidth >= 700 ? "100px" : "50px"}
                      fontFamily="Roboto"
                      variant="h5"
                      color="white"
                      style={{ textAlign: "center", marginBottom: "20px" }}
                    >
                      they jayled tremp...
                    </Typography>
                    <Typography
                      marginBottom={windowWidth >= 700 ? "100px" : "50px"}
                      fontFamily="Roboto"
                      variant="h5"
                      color="white"
                      style={{ textAlign: "center", marginBottom: "20px" }}
                    >
                      we wehl free hem
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default DefaultHomePage;
