import { Hidden } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function DefaultHomePage() {
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

  const bodyText =
    "At Apex Mobile Detailing, we are dedicated to making your car look its best. Our expert team uses top-quality products and the latest techniques to provide exceptional car detailing services.";

  const bodyTitle = "METICULOUS CARE";
  return (
    <div style={{ position: "relative", height: "94vh", width: "100%" }}>
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          display: "flex",
        }}
      >
        <Hidden mdDown={true}>
          <div
            style={{
              marginTop: "25vh",
              backgroundColor: "rgb(0,0,0, 0.6)",
              width: "75vw",
              position: "absolute",
              paddingBottom: "20px",
            }}
          >
            <Container style={{ zIndex: 500, textAlign: "left" }} maxWidth="md">
              <div style={{ maxWidth: "800px" }}>
                <Typography
                  variant={"h2"}
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    textAlign: "left",
                    color: "white",
                    marginTop: "20px",
                  }}
                >
                  {bodyTitle}
                </Typography>
              </div>

              <div style={{ maxWidth: "800px" }}>
                <span style={{ color: "white" }}>{bodyText}</span>
              </div>
            </Container>
          </div>
        </Hidden>

        <Hidden mdUp={true}>
          <div
            style={{
              marginTop: "25vh",
              backgroundColor: "rgb(0,0,0, 0.6)",
              width: "100%",
              position: "absolute",
              paddingBottom: "20px",
            }}
          >
            <Container style={{ zIndex: 500 }} maxWidth="md">
              <div style={{ maxWidth: "800px" }}>
                <Typography
                  variant={"h2"}
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    textAlign: "left",
                    color: "white",
                    marginTop: "20px",
                  }}
                >
                  {bodyTitle}
                </Typography>
              </div>{" "}
              <div style={{ maxWidth: "800px" }}>
                <span style={{ color: "white" }}>{bodyText}</span>
              </div>
            </Container>
          </div>
        </Hidden>
      </div>

      <img
        style={{
          height: "94vh",
          display: "block",
          overflow: "hidden",
          objectFit: "cover",
          width: "100%",
          flexGrow: 1,
        }}
        src="/carwash.jpeg"
      ></img>
    </div>
  );
}

export default DefaultHomePage;
