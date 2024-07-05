import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
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
        href="mailto:alexSalazar@gmail.com"
        style={{
          textDecoration: "none",
          textTransform: "none",
          color: "#677787",
        }}
      >
        alexSalazar@gmail.com
      </a>
    ),
    icon: (
      <a
        href="mailto:alexSalazar@gmail.com"
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
    label: "Call or Text",
    value: "(208) 982-8478",
    icon: LocalPhoneIcon,
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
                          <img src="profile.png" style={{ width: "320px" }} />
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
                          Ace Mobile Detaling is owned by Alex Salazar. We will
                          come to whereever you are. We are dedicated to giving
                          you a personalized and luxury detailing experience.
                          Striving for betterment of product and community.
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
                              src={item.icon}
                              bgcolor={"black"}
                              width={40}
                              height={40}
                            ></Box>
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
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
