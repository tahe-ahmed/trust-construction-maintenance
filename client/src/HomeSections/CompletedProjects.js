import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import Typography from "../components/Typography";
import img0 from "../assets/ProjectsImages/img0.jpeg";
import img1 from "../assets/ProjectsImages/img1.jpeg";
import img2 from "../assets/ProjectsImages/img2.jpeg";
import img3 from "../assets/ProjectsImages/img3.jpeg";
import img4 from "../assets/ProjectsImages/img4.jpeg";
import img5 from "../assets/ProjectsImages/img5.jpeg";
import img6 from "../assets/ProjectsImages/img6.jpeg";
import img7 from "../assets/ProjectsImages/img7.jpeg";
import img8 from "../assets/ProjectsImages/img8.jpeg";
import img9 from "../assets/ProjectsImages/img9.jpeg";
import img10 from "../assets/ProjectsImages/img10.jpeg";
import img11 from "../assets/ProjectsImages/img11.jpeg";
import img12 from "../assets/ProjectsImages/img12.jpeg";
import img13 from "../assets/ProjectsImages/img13.jpeg";
import img14 from "../assets/ProjectsImages/img14.jpeg";
import img15 from "../assets/ProjectsImages/img15.jpeg";
import img16 from "../assets/ProjectsImages/img16.jpeg";
import img17 from "../assets/ProjectsImages/img17.jpeg";
import img18 from "../assets/ProjectsImages/img18.jpeg";
import img19 from "../assets/ProjectsImages/img19.jpeg";
import img20 from "../assets/ProjectsImages/img20.jpeg";

const styles = (theme) => ({
  root: {
    // marginTop: theme.spacing(0),
    // marginBottom: theme.spacing(0),
    margin:"0rem",
    maxWidth: '100%',
    padding: '2rem 2rem 1rem 2rem',
    // margin-top: 0rem;
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.primary.light,
  },

  imageContainer: {
    margin: "1.75rem 0rem 1rem 0rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.primary.light,
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  title: {
    fontSize: "30px",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  "@media (max-width: 660px)": {
    title: {
      fontSize: "23px",
    },
  },
});

function CompletedProjects(props) {
  const { classes } = props;

  const tileData = [
    {
      img: img0,
      title: "Snorkeling",
    },
    {
      img: img1,
      title: "Snorkeling",
    },
    {
      img: img2,
      title: "Snorkeling",
    },
    {
      img: img3,
      title: "Snorkeling",
    },
    {
      img: img4,
      title: "Snorkeling",
    },
    {
      img: img5,
      title: "Snorkeling",
    },
    {
      img: img6,
      title: "Snorkeling",
    },
    {
      img: img7,
      title: "Snorkeling",
    },
    {
      img: img8,
      title: "Snorkeling",
    },
    {
      img: img9,
      title: "Snorkeling",
    },
    {
      img: img10,
      title: "Snorkeling",
    },
    {
      img: img11,
      title: "Snorkeling",
    },
    {
      img: img12,
      title: "Snorkeling",
    },
    {
      img: img13,
      title: "Snorkeling",
    },
    {
      img: img14,
      title: "Snorkeling",
    },
    {
      img: img15,
      title: "Snorkeling",
    },
    {
      img: img16,
      title: "Snorkeling",
    },
    {
      img: img17,
      title: "Snorkeling",
    },
    {
      img: img18,
      title: "Snorkeling",
    },
    {
      img: img19,
      title: "Snorkeling",
    },
    {
      img: img20,
      title: "Snorkeling",
    },
  ];

  let content = {
    English: {
      title: "Recently Completed Projects",
    },

    Dutch: {
      title: "Onlangs voltooide projecten",
    },
  };

  props.language === "Dutch"
    ? (content = content.Dutch)
    : (content = content.English);

  return (
    <Container className={classes.root} component="section">
      <Typography
        className={classes.title}
        variant="h4"
        marked="center"
        align="center"
        component="h3"
      >
        {content.title}
      </Typography>
      <div className={classes.imageContainer}>
        <GridList className={classes.gridList} cols={2.5} cellHeight={300}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Container>
  );
}

CompletedProjects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompletedProjects);
