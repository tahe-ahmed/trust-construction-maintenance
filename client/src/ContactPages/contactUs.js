import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Typography from "../components/Typography";
import { ReactComponent as GmailIcon } from "../assets/contactSVG/gmail.svg";
import { ReactComponent as LocationIcon } from "../assets/contactSVG/placeholder.svg";
import { ReactComponent as WhatsappIcon } from "../assets/contactSVG/whatsapp.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    // marginTop: theme.spacing(8),
    "margin": "0rem",
    // marginBottom: theme.spacing(8),
    padding: "4rem 0rem 3rem 0rem",
    maxWidth: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.palette.primary.light,
    "justify-content": "space-around",
    background:theme.palette.primary.light,
  },
  item: {
    alignItems: "center",
    textAlign: "center",
    "background-color": theme.palette.primary.white,
    display: "flex",
    "flex-wrap": "wrap",
    "justify-content": "start",
    width: "18rem",
    "flex-direction": "row",
    margin: "0.75rem",
    "box-shadow": "0 4px 4px rgba(0,0,0,0.1)",
    "border-radius": ".6em",
    padding: "0.51rem 0.51rem",
    color: "black",
    cursor: "pointer",
    transition: " .5s ease 0s",
    textDecoration: "none",
    "&:hover": {
      background: theme.palette.primary.silver,
      fill: "black",
    },
    "&:hover $title": {
      color: "black",
    },
  },
  wraper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    margin: "1.5rem 1rem 1rem 1rem",
  },

  itemsContainer: {
    display: "flex",
    "flex-wrap": "wrap",
    "justify-content": "center",
    "flex-direction": "column",
    flexDirection: "column",
    margin: "1rem 1rem 1rem 1rem",
  },
  icon: {
    width: "50px",
    height: "50px",
  },
  title: {
    width: "10rem",
    margin: "1rem 1rem 1rem 1rem",
    marginBottom: theme.spacing(0),
    position: "relative",
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: "17px",
    textTransform: "capitalize",
  },
  map: {
    width: "25rem",
    height: "25rem",
    "box-shadow": "0 4px 4px rgba(0,0,0,0.1)",
    "border-radius": ".6em",
  },
  "@media (max-width: 660px)": {
    map: {
      width: "20rem",
      height: "20rem",
    },
    mainTitle: {
      fontSize: "25px",
    },
  },
}));

function ContactUs(props) {
  const classes = useStyles();

  let content = {
    Dutch: {
      title: "Neem contact op met ons",
      Items: [
        {
          title: "Trustbouw@gmail.com",
          svg: GmailIcon,
          url: "mailto:Trustbouw@gmail.com",
        },
        {
          title: "+31 6 84994450",
          svg: WhatsappIcon,
          url: "https://wa.me/31684994450",
        },
        {
          title: "Sportlaan 294. 1185TL amstelveen",
          svg: LocationIcon,
          url: "https://goo.gl/maps/jQqTnZ7teLMqsD7g6",
        },
      ],
    },

    English: {
      title: "Get In Touch With Us",
      Items: [
        {
          title: "Trustbouw@gmail.com",
          svg: GmailIcon,
          url: "mailto:Trustbouw@gmail.com",
        },
        {
          title: "+31 6 84994450",
          svg: WhatsappIcon,
          url: "https://wa.me/31684994450",
        },
        {
          title: "Sportlaan 294. 1185TL amstelveen",
          svg: LocationIcon,
          url: "https://goo.gl/maps/jQqTnZ7teLMqsD7g6",
        },
      ],
    },
  };

  props.language === "Dutch"
    ? (content = content.Dutch)
    : (content = content.English);

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography
          className={classes.mainTitle}
          variant="h4"
          marked="center"
          align="center"
          component="h2"
        >
          {content.title}
          <span class="Typography-markedH4Center-22"></span>
        </Typography>
        <div className={classes.wraper}>
          <ul className={classes.itemsContainer}>
            {content.Items.map((item) => (
              <li>
                <a
                  className={classes.item}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <item.svg className={classes.icon} />
                  <Typography variant="body2" className={classes.title}>
                    {item.title}
                  </Typography>
                </a>
              </li>
            ))}
          </ul>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.3772937836266!2d4.854728715507628!3d52.291006160927225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60a9d09c99c8f%3A0x5b86e8d97e70428f!2sSportlaan%20294%2C%201185%20TL%20Amstelveen!5e0!3m2!1sen!2snl!4v1613228938967!5m2!1sen!2snl"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            title="location"
            className={classes.map}
          ></iframe>
        </div>
      </Container>
    </section>
  );
}

export default ContactUs;
