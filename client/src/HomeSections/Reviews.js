import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Container from "@material-ui/core/Container";
import Rating from "@material-ui/lab/Rating";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Grid } from "@material-ui/core";
import {amber} from "@material-ui/core/colors"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "sdfas fsadf sd fsd fsd fsd fsd fsd fsd fsd",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "qwerq wrwer weqr gre tery eryeryewr yery rtyery rtytr ywryeryeryeryewr",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States NeO",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States ",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 700,
//     flexGrow: 1
//   },
//   header: {
//     display: "flex",
//     alignItems: "center",
//     height: 50,
//     paddingLeft: theme.spacing(4),
//     backgroundColor: theme.palette.background.default
//   },
//   img: {
//     height: 255,
//     display: "block",
//     maxWidth: 400,
//     overflow: "hidden",
//     width: "100%"
//   }
// }));
const styles = (theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.dark,
    overflow: "hidden",
  },
  container: {
    // marginTop: theme.spacing(10),
    // marginBottom: theme.spacing(15),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.palette.common.white,
    "justify-content": "space-around",
  },
  img: {
    fontSize: 20,
    fontWeight: theme.typography.fontWeightLight,
    // height: 255,
    // display: "block",
    // maxWidth: 400,
    // overflow: "hidden",
    // width: "100%",
  },
  title: {
    // fontSize: 20,
    fontWeight: theme.typography.fontWeightLight,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    position: "relative",
    color: theme.palette.common.white,
    textTransform: "unset",
  },
  ratingContainer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(7),
    "text-align": "center",
    // color: theme.palette.common.white,
  },
  ratingStars: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(0),
  },
  rating: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    color: theme.palette.common.white,
    // fontSize: 20,
    textTransform: "unset",
  },
  ratingStepper:{
    // marginTop: theme.spacing(3),
    marginBottom: theme.spacing(10),
    // color: theme.palette.common.white,
    // textTransform: "unset",
  },
  ratingNumb:{
    color: theme.palette.common.white,
    position: "relative",
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    height: "100%",
    width: "100%",
    // top: -180,
  },
});

const Reviews = (props) => {
  const { classes } = props;
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <section>
      <div className={classes.container}>
        <img
          src="https://cdn.pixabay.com/photo/2014/02/19/16/35/background-269933_960_720.jpg"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography
          variant="h3"
          marked="center"
          className={classes.title}
          component="h2"
        >
          Customer Reviews
        </Typography>

        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Container className={classes.ratingContainer} maxWidth="sm">
                  <Rating
                    className={classes.ratingStars}
                    name="size-large"
                    defaultValue={5}
                    size="large"
                  />

                  <Typography
                    variant="h5"
                    marked="center"
                    className={classes.title}
                    component="h2"
                  >
                    " {tutorialSteps[activeStep].label} "
                    <br></br>
                    - Bruce Jones
                  </Typography>
                </Container>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <div className={classes.ratingStepper}>
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <ArrowBackIosIcon style={{ color: amber[600] }} fontSize="large" />
          </Button>

          <span class={classes.ratingNumb}>
            {activeStep + 1} / {maxSteps }
          </span>

          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <ArrowForwardIosIcon style={{ color: amber[600] }} fontSize="large" />
          </Button>
        </div>
      </div>
    </section>
  );
};

// Reviews.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default withStyles(styles)(Reviews);
