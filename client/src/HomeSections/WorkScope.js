import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

import { ReactComponent as Garage } from "../assets/SVG/garage.svg";
import { ReactComponent as AirConditioner } from "../assets/SVG/air-conditioner.svg";
import { ReactComponent as Bathroom } from "../assets/SVG/bathroom.svg";
import { ReactComponent as Electric } from "../assets/SVG/electric.svg";
import { ReactComponent as Heating } from "../assets/SVG/heating.svg";
import { ReactComponent as Kitchen } from "../assets/SVG/kitchen.svg";
import { ReactComponent as Sofa } from "../assets/SVG/sofa.svg";
import { ReactComponent as WoodWorking } from "../assets/SVG/woodworking.svg";
import { ReactComponent as DoorHandle } from "../assets/SVG/door-handle.svg";
import { ReactComponent as Draw } from "../assets/SVG/draws.svg";
import { ReactComponent as Glass } from "../assets/SVG/glass.svg";
import { ReactComponent as Isoluation } from "../assets/SVG/Isolation.svg";
import { ReactComponent as Demolition } from "../assets/SVG/bricks-wall-and-demolition-ball.svg";
import { ReactComponent as Mop } from "../assets/SVG/mop.svg";
import { ReactComponent as Pipeline } from "../assets/SVG/pipeline.svg";
import { ReactComponent as Plastering } from "../assets/SVG/plastering.svg";
import { ReactComponent as Plumbing } from "../assets/SVG/plumbing.svg";
import { ReactComponent as Roof } from "../assets/SVG/roof.svg";
import { ReactComponent as Tile } from "../assets/SVG/tile.svg";
import { ReactComponent as Build } from "../assets/SVG/toBuild.svg";
import { ReactComponent as Wallpaper } from "../assets/SVG/wallpaper.svg";
import { ReactComponent as Window } from "../assets/SVG/window.svg";

const styles = (theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.primary.lightdark,
    overflow: "hidden",
  },
  container: {
    marginTop: theme.spacing(8),
    "margin-top": "3rem",
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.palette.primary.dark,
    "justify-content": "space-around",
  },
  item: {
    alignItems: "center",
    textAlign: "center",
    height: "auto",
    "background-color": theme.palette.primary.light,
    display: "flex",
    "flex-wrap": "wrap",
    "justify-content": "center",
    "flex-direction": "column",
    margin: "0.75rem",
    border: "1px solid black",
    "box-shadow": "0 4px 4px rgba(0,0,0,0.1)",
    "border-radius": ".6em",
    padding: "0.51rem 0.51rem",
    color: theme.palette.primary.dark,
    fill: "currentColor",
    cursor: "pointer",
    transition: " .5s ease 0s",
    "&:hover": {
      background: theme.palette.primary.silver,
      // fill: theme.palette.primary.silver,
    },
    "&:hover $title": {
      color: "black",
    },
  },

  itemsContainer: {
    display: "flex",
    "flex-wrap": "wrap",
    "justify-content": "center",
    "flex-direction": "raw",
    padding: "0",
  },
  icon: {
    width: "50px",
    height: "50px",
  },
  title: {
    width: "6rem",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0),
    position: "relative",
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightMedium,
    textTransform: "capitalize",
  },
  mainTitle: {
    fontSize: "30px",
  },
  "@media (max-width: 660px)": {
    mainTitle: {
      fontSize: "23px",
    },
  },
});

const WorkScope = (props) => {
  const { classes } = props;

  let content = {
    Dutch: {
      title: "Wat kunnen we voor je doen?",
      Items: [
        {
          title: "Aanbouw, Opbouw & Garage",
          svg: Garage,
        },
        {
          title: "Airco",
          svg: AirConditioner,
        },
        {
          title: "Badkamer & Toilet",
          svg: Bathroom,
        },
        {
          title: "Elektra",
          svg: Electric,
        },
        {
          title: "Verwarming",
          svg: Heating,
        },
        {
          title: "Keukens",
          svg: Kitchen,
        },
        {
          title: "Interieur & Styling",
          svg: Sofa,
        },
        {
          title: "Timmerwerken",
          svg: WoodWorking,
        },

        {
          title: "Hang & sluitwerk",
          svg: DoorHandle,
        },
        {
          title: "Vloeren",
          svg: Draw,
        },
        {
          title: "Glas zetten",
          svg: Glass,
        },
        {
          title: "Isolatie",
          svg: Isoluation,
        },
        {
          title: "Sloopwerk",
          svg: Demolition,
        },
        {
          title: "Stucwerk",
          svg: Plastering,
        },
        {
          title: "Schoonmaken",
          svg: Mop,
        },
        {
          title: "Leidingwerk",
          svg: Pipeline,
        },
        {
          title: "Plumbing",
          svg: Plumbing,
        },
        {
          title: "Plafonds",
          svg: Roof,
        },
        {
          title: "Tegels zetten",
          svg: Tile,
        },

        {
          title: "Bouwen",
          svg: Build,
        },

        {
          title: "Deuren, Ramen & Kozijnen",
          svg: Window,
        },
        {
          title: "Schilder- & behangwerk",
          svg: Wallpaper,
        },
      ],
    },
    English: {
      title: "What Can We Do For You?",
      Items: [
        {
          title: "Extension, Superstructure",
          svg: Garage,
        },
        {
          title: "Air conditioning",
          svg: AirConditioner,
        },
        {
          title: "Bathroom & Toilet",
          svg: Bathroom,
        },
        {
          title: "Electricity",
          svg: Electric,
        },
        {
          title: "Heating",
          svg: Heating,
        },
        {
          title: "Kitchens",
          svg: Kitchen,
        },
        {
          title: "Interior & Styling",
          svg: Sofa,
        },
        {
          title: "Carpentry",
          svg: WoodWorking,
        },

        {
          title: "Hinges & locks",
          svg: DoorHandle,
        },
        {
          title: "Floors",
          svg: Draw,
        },
        {
          title: "Put glass",
          svg: Glass,
        },
        {
          title: "Insulation",
          svg: Isoluation,
        },
        {
          title: "Demolition",
          svg: Demolition,
        },
        {
          title: "Stucco",
          svg: Plastering,
        },
        {
          title: "cleaning",
          svg: Mop,
        },
        {
          title: "Pipework",
          svg: Pipeline,
        },
        {
          title: "Plumbing",
          svg: Plumbing,
        },
        {
          title: "Ceilings",
          svg: Roof,
        },
        {
          title: "Putting tiles",
          svg: Tile,
        },

        {
          title: "build",
          svg: Build,
        },

        {
          title: "Doors, Windows & Frames",
          svg: Window,
        },
        {
          title: "Painting & wallpaper work",
          svg: Wallpaper,
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
          variant="h4"
          marked="center"
          align="center"
          component="h2"
          className={classes.mainTitle}
        >
          {content.title}
          <span class="Typography-markedH4Center-22"></span>
        </Typography>

        <ul className={classes.itemsContainer}>
          {content.Items.map((item) => (
            <li className={classes.item}>
              <item.svg className={classes.icon} />
              <Typography variant="body2" className={classes.title}>
                {item.title}
              </Typography>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default withStyles(styles)(WorkScope);
