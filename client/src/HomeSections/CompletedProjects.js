import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
// import { makeStyles } from '@material-ui/core/styles';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import tileData from "./tileData";

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
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },

  imageContainer: {
    margin: "1.75rem 0rem 1rem 0rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: "#ff3366",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
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

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Recently Completed Projects
      </Typography>
      <div className={classes.imageContainer}>
        <GridList className={classes.gridList} cols={2.5} cellHeight={260}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${tile.title}`}>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      {/* <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div> */}
    </Container>
  );
}

CompletedProjects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompletedProjects);

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     overflow: "hidden",
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     flexWrap: "nowrap",
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: "translateZ(0)",
//   },
//   title: {
//     color: theme.palette.primary.light,
//   },
//   titleBar: {
//     background:
//       "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
//   },
// }));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
// export default function SingleLineGridList() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <GridList className={classes.gridList} cols={2.5}>
//         {tileData.map((tile) => (
//           <GridListTile key={tile.img}>
//             <img src={tile.img} alt={tile.title} />
//             <GridListTileBar
//               title={tile.title}
//               classes={{
//                 root: classes.titleBar,
//                 title: classes.title,
//               }}
//               actionIcon={
//                 <IconButton aria-label={`star ${tile.title}`}>
//                   <StarBorderIcon className={classes.title} />
//                 </IconButton>
//               }
//             />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }

// images: {
//   marginTop: theme.spacing(8),
//   display: "flex",
//   flexWrap: "wrap",
// },
// imageWrapper: {
//   position: "relative",
//   display: "block",
//   padding: 0,
//   borderRadius: 0,
//   height: "40vh",
//   [theme.breakpoints.down("sm")]: {
//     width: "100% !important",
//     height: 100,
//   },
//   "&:hover": {
//     zIndex: 1,
//   },
//   "&:hover $imageBackdrop": {
//     opacity: 0.15,
//   },
//   "&:hover $imageMarked": {
//     opacity: 0,
//   },
//   "&:hover $imageTitle": {
//     border: "4px solid currentColor",
//   },
// },
// imageButton: {
//   position: "absolute",
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: theme.palette.common.white,
// },
// imageSrc: {
//   position: "absolute",
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundSize: "cover",
//   backgroundPosition: "center 40%",
// },
// imageBackdrop: {
//   position: "absolute",
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   background: theme.palette.common.black,
//   opacity: 0.5,
//   transition: theme.transitions.create("opacity"),
// },
// imageTitle: {
//   position: "relative",
//   padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
// },
// imageMarked: {
//   height: 3,
//   width: 18,
//   background: theme.palette.common.white,
//   position: "absolute",
//   bottom: -2,
//   left: "calc(50% - 9px)",
//   transition: theme.transitions.create("opacity"),
// },
