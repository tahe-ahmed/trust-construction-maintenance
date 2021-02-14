import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import trustLogo from "../assets/logo/trustLogo.jpg";

const styles = (theme) => ({
  logo: {
    width: "6rem",
    height: "6rem",
    border: "2px solid black",
    borderRadius: "1rem",
    margin: "3.3rem 0rem 1rem 0rem",
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.primary.light,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 13,
    color: theme.palette.primary.light,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.primary.light,
  },
  "@media (max-width: 760px)": {
    logo: {
      width: "5rem",
      height: "5rem",
    },
  },
});

const NavBar = (props) => {
  const { classes } = props;

  let content = {
    English: {
      btn: "Contact Us",
    },

    Dutch: {
      btn: "Contact Ons",
    },
  };

  props.language === "Dutch"
    ? (content = content.Dutch)
    : (content = content.English);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link href="/">
            <img className={classes.logo} src={trustLogo} alt="Trust Logo" />
          </Link>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/contactUs"
            >
              {content.btn}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
