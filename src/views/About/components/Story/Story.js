/* eslint-disable react/no-unescaped-entities */
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { backgroundColor } from "vars";

const Story = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={1} justify="center" style={{ padding: "0px" }}>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        xs={12}
        md={6}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Box
          component={"img"}
          src={"/supplies.jpeg"}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            maxHeight: "550px",
            marginTop: "40px",
            marginBottom: "40px",
            maxWidth: "100%",
            border: `solid ${"black"} 10px`,
          }}
          sx={{
            filter: theme.palette.mode === "dark" ? "brightness(0.8)" : "none",
          }}
        />
        {/* <h2
          style={{
            color: "#1E2022",
            paddingBottom: "0px",
            marginBottom: "0px",
          }}
        >
          Murphy Olmstead
        </h2>{" "}
        <span style={{ color: "#677787" }}>Owner / Lobbyist</span> */}
      </Grid>
      <Grid item container alignItems={"center"} xs={12} md={6}>
        <Box
          width={1}
          boxShadow={0}
          style={{ backgroundColor: "rgb(247,250,255)", marginBottom: "30px" }}
          variant={"outlined"}
        >
          <CardContent sx={{ padding: 5 }}>
            <Typography
              variant={"h2"}
              gutterBottom
              sx={{
                fontWeight: 700,
                textAlign: "center",
                color: backgroundColor,
                width: "100%",
              }}
            >
              About Us
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

            <Typography
              component={"p"}
              style={{ textAlign: "center" }}
              color={"text.secondary"}
              variant="h6"
            >
              At Apex Mobile Detailing, we are dedicated to making your car look
              its best. Our expert team uses top-quality products and the latest
              techniques to provide exceptional car detailing services. From
              exterior washes and waxing to interior cleaning and paint
              protection, we tailor our services to meet your car's unique
              needs. We aim to deliver a seamless experience and ensure your
              vehicle looks and feels like new. We look forward to serving you!{" "}
              <br />
              <br />
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Story;
