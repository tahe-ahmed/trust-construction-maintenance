import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
// import Typography from '@material-ui/core/Typography';

import img2 from "../assets/ProjectsImages/img2.jpeg";

const styles = (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(10),
    display: "flex",
    position: "relative",
  },
  // item: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   padding: theme.spacing(0, 5),
  // },
  // image: {
  //   height: "17rem",
  //   width: "15rem",
  // },
  // title: {
  //   marginTop: theme.spacing(5),
  //   marginBottom: theme.spacing(5),
  // },
  // content: {
  //   width: "20rem",
  // },
  // curvyLines: {
  //   pointerEvents: "none",
  //   position: "absolute",
  //   top: -180,
  // },
  cardWraper: {
    maxWidth: 345,
    margin:"0.75rem 1rem"
  },
  media: {
    height: 140,
  },
});

const OurValues = (props) => {
  const { classes } = props;

  const data = [
    {
      title: "TRUSTWORTHY",
      description:
        "Our handymen are fully insured. Home repairs never come around when you expect them to. You’ll typically find that your appliances work well one ",
      img: img2,
    },
    {
      title: "GUARANTEED",
      description:
        "At Trust we believe in exceptional service and quality workmanship which is why we back every job we do with our worry-free guarantee. ",
      img: img2,
    },
    {
      title: "EXPERIENCED",
      description:
        "By registering, you will access specially negotiated rates  ",
      img: img2,
    },
  ];

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {/* <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        /> */}
        {data.map((item) => (
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
            {/* <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions> */}
          </Card>
        ))}

        {/* <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojsFvAYgIlU3fHUuaLd35-bXkg8sc7WLU0Q&usqp=CAU&ec=45761791"
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                TRUSTWORTHY
              </Typography>
              <Typography variant="h5" className={classes.content}>
                {"Our handymen are fully insured"}
                {
                  ", Home repairs never come around when you expect them to. You’ll typically find that your appliances work well one day and are suddenly out of service the next. You don’t want to wait long when you’re stuck without a major convenience like a dishwasher or washer and dryer. Other"
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://st2.depositphotos.com/1011643/8710/i/950/depositphotos_87101042-stock-photo-builder-holding-paint-roller-and.jpg"
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                GUARANTEED
              </Typography>
              <Typography variant="h5">
                {
                  "At Trust we believe in exceptional service and quality workmanship which is why we back every job we do with our worry-free guarantee. "
                }
                {"your Sundays will not be alike."}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://www.myhandyman.com/assets/content/local-content-a-img.jpg"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                EXPERIENCED
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </div>
          </Grid>
        </Grid> */}
      </Container>
    </section>
  );
};

OurValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OurValues);

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// export default function MediaCard() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
