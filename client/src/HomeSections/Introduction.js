import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";

const backgroundImage =
  "https://thegardengranny.com/wp-content/uploads/2020/05/f-black-background.jpg";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    // backgroundColor: "#7fc7d9",
    backgroundColor: "#966F33", // Average color of the background image.
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
    blackground: "#966F33"
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

const Introduction = (props) => {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Sundays
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography>
      <Button
        // color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/premium-themes/onepirate/sign-up/"
      >
        Contact Us
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}

Introduction.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Introduction);
