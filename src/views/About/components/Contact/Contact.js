import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Container from "components/Container";
import { useState } from "react";

const mock = [
  {
    label: "Email",
    value: (
      <a
        href="mailto:murphy@wittmeyerassociates.com"
        style={{
          textDecoration: "none",
          textTransform: "none",
          color: "#677787",
        }}
      >
        murphy@wittmeyerassociates.com
      </a>
    ),
    icon: (
      <a
        href="mailto:murphy@wittmeyerassociates.com"
        style={{
          textDecoration: "none",
          textTransform: "none",
          color: "white",
        }}
      >
        <svg
          width={20}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      </a>
    ),
  },
  {
    label: "Address",
    value: "407 W. Jefferson Street, Boise, ID 83702",
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const Contact = (styles) => {
  const theme = useTheme();

  const [form, setForm] = useState({
    name: null,
    organization: null,
    email: null,
    phone: null,
    comments: null,
  });

  const handleInputChange = (e, field) => {
    const { name, value } = e.target;
    console.log(
      "🚀 ~ file: Contact.js ~ line 86 ~ handleInputChange ~ name",
      name
    );
    console.log(
      "🚀 ~ file: Contact.js ~ line 86 ~ handleInputChange ~ value",
      value
    );
    setForm({
      ...form,
      [name]: value,
    });
  };

  // const sendEmail = () => {
  //   emailjs
  //     .sendForm(
  //       "YOUR_SERVICE_ID",
  //       "YOUR_TEMPLATE_ID",
  //       form.current,
  //       "YOUR_PUBLIC_KEY"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: "hidden",
      }}
    >
      <Container paddingX={0} paddingY={0} style={{ width: "100%" }}>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          position={"relative"}
        >
          <Box width={1} order={{ xs: 2, md: 1 }}>
            <Container maxWidth="sm">
              <Box>
                {/* <Box marginBottom={2}>
                  <Typography
                    variant={"h4"}
                    sx={{ fontWeight: 700, marginBottom: "20px" }}
                    gutterBottom
                  >
                    Get in Touch
                  </Typography>
                  <Grid spacing={3} container>
                    <Grid item xs={6}>
                      {" "}
                      <TextField
                        id="name"
                        label="Name"
                        style={{ width: "100%", backgroundColor: "white" }}
                        size="small"
                        onChange={handleInputChange}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={6}>
                      {" "}
                      <TextField
                        id="organization"
                        label="Organization"
                        style={{ width: "100%", backgroundColor: "white" }}
                        size="small"
                        onChange={handleInputChange}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={6}>
                      {" "}
                      <TextField
                        id="email"
                        label="Email"
                        style={{ width: "100%", backgroundColor: "white" }}
                        size="small"
                        onChange={handleInputChange}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={6}>
                      {" "}
                      <TextField
                        id="phone"
                        label="Phone Number"
                        style={{ width: "100%", backgroundColor: "white" }}
                        size="small"
                        onChange={handleInputChange}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {" "}
                      <TextField
                        id="comments"
                        label="Message"
                        style={{ width: "100%", backgroundColor: "white" }}
                        size="small"
                        onChange={handleInputChange}
                        InputProps={{ height: "200px" }}
                        multiline={true}
                        rows={6}
                        disabled
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"flex-end"}
                  style={{ width: "100%", marginBottom: "10px" }}
                >
                  <Button
                    style={{
                      backgroundColor: "#3C5979",
                      color: "white",
                      width: "100%",
                    }}
                    disabled
                    // onClick={sendEmail}
                  >
                    Send Message
                  </Button>
                </Box> */}
                <Grid
                  container
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  spacing={10}
                >
                  <Grid item>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"space-between"}
                    >
                      <Box
                        key={"title"}
                        component={ListItem}
                        disableGutters
                        width={"auto"}
                        padding={4}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: "100%",
                          paddingTop: 0,
                        }}
                      >
                        {" "}
                        <Grid
                          item
                          xs={12}
                          lg={8}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          {" "}
                          <img src="logoBlack.png" style={{ width: "320px" }} />
                        </Grid>{" "}
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"space-between"}
                        style={{ marginBottom: "20px" }}
                      >
                        <Typography
                          component={"p"}
                          style={{ textAlign: "left" }}
                          color={"text.secondary"}
                        >
                          Wittmeyer and Associates has proven results in media,
                          public relations and government affairs and helps its
                          clients navigate the often-complex structure of state
                          and local government.
                        </Typography>
                      </Box>

                      {mock.map((item, i) => (
                        <Box
                          key={i}
                          component={ListItem}
                          disableGutters
                          width={"auto"}
                          padding={0}
                        >
                          <Box
                            component={ListItemAvatar}
                            minWidth={"auto !important"}
                            marginRight={2}
                          >
                            <Box
                              component={Avatar}
                              bgcolor={"#3C5979"}
                              width={40}
                              height={40}
                            >
                              {item.icon}
                            </Box>
                          </Box>
                          <ListItemText
                            primary={item.label}
                            secondary={item.value}
                          />
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 0 100%", md: "0 0 50%" },
              position: "relative",
              maxWidth: { xs: "100%", md: "50%" },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: "50vw" },
                height: "100%",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                    left: "0%",
                    width: 1,
                    height: 1,
                    position: { xs: "relative", md: "absolute" },
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="map"
                    marginHeight={0}
                    marginWidth={0}
                    scrolling="no"
                    src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=407+W+Jefferson+St,+Boise,+ID+83702&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                    style={{
                      minHeight: 300,
                      filter:
                        theme.palette.mode === "dark"
                          ? "grayscale(0.5) opacity(0.7)"
                          : "none",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
