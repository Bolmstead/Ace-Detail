/* eslint-disable react/no-unescaped-entities */
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { backgroundColor } from "vars";

const HowToBuy = () => {
  const theme = useTheme();

  return (
    <Container maxWidth={"md"}>
      <Grid
        container
        spacing={1}
        justify="center"
        alignContent={"center"}
        style={{
          padding: "0px",
          fontFamily: "Roboto",
          backgroundColor: backgroundColor,
        }}
      >
        <Grid item container alignItems={"center"} xs={12} md={12}>
          <Box
            width={1}
            boxShadow={0}
            style={{
              marginBottom: "30px",
            }}
            variant={"outlined"}
          >
            <CardContent sx={{ padding: 5 }}>
              <Typography
                variant={"h2"}
                gutterBottom
                sx={{
                  fontWeight: 700,
                  textAlign: "center",
                  color: "white",
                }}
              >
                Our Services
              </Typography>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Divider style={{ marginBottom: "15px", width: "300px" }} />
              </Box>
              <Typography color={"white"} variant="h4">
                Basic Interior $60
              </Typography>
              <Typography color={"white"} variant="h6">
                Vacuum and trash cleanup. Carpets, seats, cargo area thoroughly
                vacuumed and per hair removed. Plastics, wheel, and dash
                cleaning Disinfect steering wheel and handles, steam cleaned
                plastics. <br />
                <br />
                <Typography color={"white"} variant="h4">
                  Full Clean Interior $120
                </Typography>{" "}
                Includes all of Basic Interior Service. Spot stain removal,
                Small stains extracted from seats and floors, Windshield
                cleaning​​, Windshield wiped with tint safe cleaner leaving a
                streak-free finish, Door Jamb and Mats​​, Door jambs pressure
                washed, and floor matts deep cleaned with proper procedure.
                <br />
                <br />
                <Typography color={"white"} variant="h4">
                  Exterior - Touchless Wash $12
                </Typography>{" "}
                Exterior power washed, soaped, rinsed, then dried to leave
                spotless finish.
                <br />
                <br />
                <Typography color={"white"} variant="h4">
                  Exterior - Touch Wash - $20
                </Typography>
                Exterior power washed, soaped, then scrubbed throughly with a
                microfiber mit, rinsed, then dried to leave spotless finish.
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        {/* <Grid
          item
          justifyContent="center"
          alignItems="center"
          xs={12}
          style={{}}
          md={5}
        >
          <Container
            maxWidth="lg"
            style={{
              display: "flex",
              alignContent: "center",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img style={{ width: "50%" }} src="random.jpeg"></img>
          </Container>
          {/* <Button
                style={{
                  color: "#ffffff",
                  fontWeight: 500,
                  fontSize: 22,
                  margin: 10,
                  padding: "10px 30px 10px 30px",
                  backgroundColor: usaRed,
                  fontFamily: "Roboto",
                }}
              >
                plez pik meh trehmp . . plez
              </Button>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default HowToBuy;
