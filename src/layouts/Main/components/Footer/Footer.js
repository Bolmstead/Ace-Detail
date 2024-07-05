import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          align={"center"}
          variant={"subtitle2"}
          color="text.secondary"
          gutterBottom
        >
          <Typography
            align={"center"}
            variant={"subtitle2"}
            color="text.secondary"
            gutterBottom
          >
            All rights reserved.{" "}
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
