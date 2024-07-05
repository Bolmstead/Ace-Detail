import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const mock = [
  {
    name: "Law Enforcement",
    avatar: "/specializations/law.jpg",
  },
  {
    name: "Agriculture",
    avatar: "/specializations/agriculture.jpg",
  },
  {
    name: "Education",
    avatar: "/specializations/education.jpg",
  },
  {
    name: "Forestry",
    avatar: "/specializations/forestry.jpg",
  },
  {
    name: "Tax Policy",
    avatar: "/specializations/tax.jpg",
  },
  {
    name: "Transportation",
    avatar: "/specializations/transportation.jpg",
  },
];

const Team = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={"center"}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          The Expertise
        </Typography>
        <Typography variant="h6" align={"center"} color={"text.secondary"}>
          While we offer a broad range of expertise for our clients, <br />
          Wittmeyer & Associates, LLC has decades of experience in the following
          industries.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              width={1}
              height={1}
              component={Card}
              boxShadow={0}
              variant={"outlined"}
              bgcolor={"alternate.main"}
              style={{ background: `url(${item.avatar}) no-repeat center` }}
            >
              <CardContent
                sx={{
                  padding: 3,
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ListItem
                  component="div"
                  disableGutters
                  sx={{ padding: 0, display: "flex", justifyContent: "center" }}
                >
                  {/* <ListItemAvatar sx={{ marginRight: 3 }}>
                    <Avatar
                      src={item.avatar}
                      variant={'rounded'}
                      sx={{ width: 100, height: 100, borderRadius: 2 }}
                    />
                  </ListItemAvatar> */}
                  <ListItemText
                    sx={{ margin: 0 }}
                    primary={item.name}
                    primaryTypographyProps={{ variant: "h6", fontWeight: 700 }}
                    secondaryTypographyProps={{ variant: "subtitle1" }}
                    style={{ color: "white", textAlign: "center" }}
                  />
                </ListItem>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
