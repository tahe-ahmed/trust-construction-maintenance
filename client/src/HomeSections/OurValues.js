import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import handyman from "../assets/handyman.jpg";
import experience from "../assets/Experience.jpg";
import guaranteed from "../assets/Guaranteed.jpg";

const styles = (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.primary.light,
  },
  container: {
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: "flex",
    position: "relative",
  },
  cardWraper: {
    maxWidth: 345,
    margin: "0.75rem 1rem",
    "box-shadow":"4px 4px 4px #C9ADA7",
  },
  media: {
    height: 140,
  },
});

const OurValues = (props) => {
  const { classes } = props;

  let content = {
    English: [
      {
        title: "Service Technicians",
        description:
          "Mr.TRST service technicians arrive in Mr.Trust vans with a variety of tools and supplies for the job, wearing booties to protect your flooring and clean up when we’re finished.",
        img: handyman,
      },
      {
        title: "EXPERIENCED",
        description:
          "The employees and workers that serve our costumers are experienced and have an average of 10 years' experience in the housing maintenance and repairing.",
        img: experience,
      },
      {
        title: "GUARANTEED",
        description:
          "At Mr. TRUST we believe in exceptional service and quality workmanship which is why we back every job we do with our worry-free guarantee.",
        img: guaranteed,
      },
    ],
    Dutch: [
      {
        title: "Servicetechnici",
        description:
          "De servicemonteurs van de heer TRST arriveren in de meneer Trust-busjes met een verscheidenheid aan gereedschappen en benodigdheden voor de klus, terwijl ze slofjes dragen om uw vloer te beschermen en op te ruimen wanneer we klaar zijn.",
        img: handyman,
      },
      {
        title: "ERVAREN",
        description:
          "De medewerkers en arbeiders die onze klanten bedienen zijn ervaren en hebben gemiddeld 10 jaar ervaring in het onderhouden en herstellen van woningen.",

        img: experience,
      },
      {
        title: "GEGARANDEERD",
        description:
          "Bij Mr. TRUST geloven we in uitzonderlijke service en vakmanschap en daarom steunen we elke klus die we doen met onze zorgeloze garantie.",
        img: guaranteed,
      },
    ],
  };

  props.language === "Dutch"
    ? (content = content.Dutch)
    : (content = content.English);

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {content.map((item) => (
          <Card className={classes.cardWraper}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.img}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Container>
    </section>
  );
};

OurValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OurValues);
