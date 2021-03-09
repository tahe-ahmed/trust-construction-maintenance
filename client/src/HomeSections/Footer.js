import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import Typography from "../components/Typography";
import TextField from "../components/TextField";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="/">
        TRUST
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
    color: theme.palette.primary.light,
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: "flex",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
    margin: "0rem 0.751rem 0rem 0rem",
  },
  iconFacebook: {
    color: "#3b5998",
  },
  iconTwitter: {
    color: "#00acee",
  },
  iconInsta: {
    color: "#8a3ab9",
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

const LANGUAGES = [
  {
    code: "Du-NL",
    name: "Dutch",
  },
  {
    code: "en-US",
    name: "English",
  },
];

const Footer = (props) => {
  const classes = useStyles();

  let content = {
    Dutch: {
      lang: "Taal",
      designNote: "Ontworpen door Tahe Ahmed",
    },
    English: {
      lang: "Language",
      designNote: "Designed By Tahe Ahmed",
    },
  };

  props.language === "Dutch"
    ? (content = content.Dutch)
    : (content = content.English);

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <Link
                  href="https://m.facebook.com/trust.bouw"
                  target="_blank"
                  className={classes.icon}
                >
                  <FacebookIcon
                    fontSize="large"
                    className={classes.iconFacebook}
                  />
                </Link>
                <Link
                  href="https://mobile.twitter.com/bouwtrust"
                  target="_blank"
                  className={classes.icon}
                >
                  <TwitterIcon
                    fontSize="large"
                    className={classes.iconTwitter}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/trustbouwonderhoud3/"
                  target="_blank"
                  className={classes.icon}
                >
                  <InstagramIcon
                    fontSize="large"
                    className={classes.iconInsta}
                  />
                </Link>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} sm={8} md={4}>
            <Typography color="inherit" variant="h6" marked="left" gutterBottom>
              {content.lang}
            </Typography>
            <TextField
              select
              SelectProps={{
                native: true,
              }}
              className={classes.language}
              value={props.language}
              onChange={(e) => props.handleSetLanguage(e.target.value)}
            >
              {LANGUAGES.map((language) => (
                <option value={language.name} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6} sm={8} md={6}>
            <Typography variant="caption">{content.designNote}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
};

export default Footer;
