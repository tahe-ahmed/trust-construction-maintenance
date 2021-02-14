import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import backgroundImg from "../assets/background.png";

// const backgroundImage =
//   "https://thegardengranny.com/wp-content/uploads/2020/05/f-black-background.jpg";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundColor: theme.palette.primary.light, // Average color of the background image.
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
    blackground: theme.palette.primary.light,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
    fontSize: "25px",
  },
  more: {
    marginTop: theme.spacing(2),
  },
  "@media (max-width: 760px)": {
    title: {
      fontSize: "30px",
    },
  },
});

const Introduction = (props) => {
  const { classes } = props;

  let content = {
    English: {
      title: "TRUST For Construction and Maintenance",
      description:
        "TRUST offers Reliable, Trusted, and Professional Handyman Services. What can our home improvement professionals do for you ?",
      btn: "Contact Us",
    },

    Dutch: {
      title: "TRUST For Bouw en Onderhoud",
      description:
        "TRUST biedt betrouwbare, vertrouwde en professionele klusjesmannen. Wat kunnen onze bouwprofessionals voor u doen?",
      btn: "Contact Ons",
    },
  };

  props.language === "Dutch"
    ? (content = content.Dutch)
    : (content = content.English);

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImg}
        alt="increase priority"
      />
      <Typography
        className={classes.title}
        color="inherit"
        align="center"
        variant="h3"
        marked="center"
      >
        {content.title}
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        {content.description}
      </Typography>
      <Button
        // color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/contactUs"
      >
        {content.btn}
      </Button>
    </ProductHeroLayout>
  );
};

Introduction.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Introduction);
