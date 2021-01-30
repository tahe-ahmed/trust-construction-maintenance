import React from "react";
import { withStyles } from "@material-ui/core/styles";
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
// import { ReactComponent as Tools } from "../assets/SVG/tools.svg";
import { ReactComponent as Wallpaper } from "../assets/SVG/wallpaper.svg";
import { ReactComponent as Window } from "../assets/SVG/window.svg";
// import { ReactComponent as WoodBoard } from "../assets/SVG/wood-board.svg";

import { Container, Typography } from "@material-ui/core";

const styles = (theme) => ({
  //   root: {
  //     marginTop: theme.spacing(10),
  //     marginBottom: theme.spacing(8),
  //     // marginBottom
  //   },
  root: {
    display: "flex",
    // backgroundColor: theme.palette.secondary.light,
    backgroundColor:"#6F4E37",
    overflow: "hidden",
  },
  container: {
    marginTop: theme.spacing(8),
    "margin-top": "3rem",
    marginBottom: theme.spacing(8),
    // "background-color": "#EFF1F3",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.palette.common.white,
    "justify-content": "space-around",
  },
  item: {
    alignItems: "center",
    textAlign: "center",
    height: "auto",
    "background-color": "#ffffff",
    display: "flex",
    "flex-wrap": "wrap",
    "justify-content": "center",
    // width: "1rem",
    "flex-direction": "column",
    margin: "0.75rem",
    border: "1px solid black",
    "box-shadow": "0 4px 4px rgba(0,0,0,0.1)",
    "border-radius": ".6em",
    padding: "0.51rem 0.51rem",
    // color: "#ff3366",
    color:"black",
    fill: "currentColor",
    cursor: "pointer",
    transition: " .5s ease 0s",
    "&:hover": {
    //   background: "#ff3366",
    background:"#808080",
      fill: "black",
    },
    "&:hover $title": {
      color: "black",
    },
  },

  itemsContainer: {
    display: "flex",
    "flex-wrap": "wrap",
    "justify-content": "center",
    // width: "1rem",
    "flex-direction": "raw",
  },
  icon: {
    width: "50px",
    height: "50px",
  },
  title: {
    // "margin-top": "1.2rem",
    // fontWeight: theme.typography.fontWeightLight,
    width: "6rem",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0),
    position: "relative",
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightMedium,
    textTransform: "capitalize",
  },
});

let content = {
  English: [
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
    //   {
    //     title: "Tegels zetten",
    //     svg: Tools,
    //   },
    {
      title: "Deuren, Ramen & Kozijnen",
      svg: Window,
    },
    {
      title: "Schilder- & behangwerk",
      svg: Wallpaper,
    },
    //   {
    //     title: "Vloeren",
    //     svg: WoodBoard,
    //   },
  ],
};

const Work = (props) => {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h4" marked="center" align="center" component="h2">
          What Can We Do For You?
          <span class="Typography-markedH4Center-22"></span>
        </Typography>
        <div style={{ width: "100%" }}>
          <ul className={classes.itemsContainer}>
            {content.English.map((item) => (
              <li className={classes.item}>
                <item.svg className={classes.icon} />
                <Typography variant="body2" className={classes.title}>
                  {item.title}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default withStyles(styles)(Work);
